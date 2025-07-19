import CategoryModel from '../models/category.model.js';

import { v2 as cloudinary } from 'cloudinary';
import { error } from 'console';
import fs, { access } from 'fs';

cloudinary.config({ 
    cloud_name: process.env.cloudinary_Config_Cloud_Name, 
    api_key: process.env.cloudinary_Config_api_key, 
    api_secret: process.env.cloudinary_Config_api_secret,
    secure: true
});

//image upload
var imagesArr = [];
export async function uploadImages(request, response) {
    try{
        imagesArr = [];
        
        const image = request.files;

        const options = {
                use_filename: true,
                unique_filename: false,
                overwrite: false,
            };
        
        for(let i = 0; i < image?.length; i++){

            const img = await cloudinary.uploader.upload(
                image[i].path,
                options,
                function (error, result) {
                    imagesArr.push(result.secure_url);
                    fs.unlinkSync(`uploads/${request.files[i].filename }`);
                }
            );
        }
       
        return response.status(200).json({
            images: imagesArr
        });
    }
    catch(error){
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

//create category
export async function createCategory (request, response) {
    try{
        let category = new CategoryModel({
            name: request.body.name,
            images: imagesArr,
            parentId: request.body.parentId,
            parentCatName: request.body.parentCatName,
        });

        if(!category) {
            return response.status(500).json({
                message: "Category not created",
                error: true,
                success: false
            })
        }

        category = await category.save()

        imagesArr = []

        return response.status(200).json({
            message: "Category created",
            error: false,
            success: true,
            category: category
        })

    }
    catch(error){
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

//get all category
export async function getCategories (request, response) {
    try{
        const categories = await CategoryModel.find();
        const categoryMap = {};

        categories.forEach(cat => {
            categoryMap[cat._id] = { ...cat._doc, children: []};
        });

        const rootCategories = [];

        categories.forEach(cat => {
            if(cat.parentId){
                categoryMap[cat.parentId].children.push(categoryMap[cat._id]);
            }
            else{
                rootCategories.push(categoryMap[cat._id]);
            }
        });

        return response.status(200).json({
            error: false,
            success: true,
            data: rootCategories
        })
    }
    catch(error){
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export async function getCategoryCount (request, response) {
    try{
        const categoryCount = await CategoryModel.countDocuments({parentId: undefined});

        if(!categoryCount){
            response.status.json({
                error: true,
                success: false,
                
            })
        }
        else{
            response.send({
                categoryCount: categoryCount
            })
        }
    }
    catch(error){
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export async function getSubCategoryCount (request, response) {
    try{
        const categories = await CategoryModel.find();

        if(!categories){
            response.status.json({
                error: true,
                success: false,
                
            })
        }
        else{
            const subCatList = [];

            for(let cat of categories){
                if(cat.parentId !== undefined){
                    subCatList.push(cat);
                }
            }

             response.send({
            SubCategoryCount: subCatList.length,
        })
        }  
    }
    catch(error){
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export async function getCategory (request, response) {
    try{
        const category = await CategoryModel.findById(request.params.id);

        if(!category){
            response.status(500).json({
            message:"The category with given ID was not found",
            error: true,
            success: false
        });
        }

        return response.status(200).json({
            error: false,
            success: true,
            category: category
        })
    }
    catch(error){
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

//remove upload
export async function removeImageFromCloudinary(request, response) {
    const imgUrl = request.query.img;

    const urlArr = imgUrl.split("/");
    const image = urlArr[urlArr.length - 1];

    const imageName = image.split(".")[0];
    if(imageName){
        const res = await cloudinary.uploader.destroy(
            imageName,
            (error, result) => {}
        )
        if(res){
            response.status(200).send(res);
        }
    }
}

export async function deleteCategory(request, response) {
    const category = await CategoryModel.findById(request.params.id);
    const images = category.images;
    let img = "";
    for(img of images){
        const imgUrl = img;
        const urlArr = imgUrl.split("/");
        const image = urlArr[urlArr.length - 1];

        const imageName = image.split(".")[0];

        if(imageName){
            cloudinary.uploader.destroy(imageName, (error, result) => {})
        }
    }

    const subCategory = await CategoryModel.find({
        parentId: request.params.id
    });

    for(let i = 0; i < subCategory.length; i++){
        const thirdSubCategory = await CategoryModel.find({parentId: request.params.id});
        for(let i = 0; i < thirdSubCategory.length; i++){
            const deleteThirdSubCat = await CategoryModel.findByIdAndDelete(thirdSubCategory[i]._id);
    }
    const deleteSubCategory = await CategoryModel.findByIdAndDelete(subCategory[i]._id);
    }
    const deleteCategory = await CategoryModel.findByIdAndDelete(request.params.id);

    response.status(200).json({
        message: "Category Deleted!",
        error: false,
        success: true
    })

    if(!deleteCategory){
        response.status(404).json({
            message: "Category not found",
            success: false,
            error: true
        })
    }
}

export async function updatedCategory(request, response) {
    const category = await CategoryModel.findByIdAndUpdate(
        request.params.id,
        {
           
            name: request.body.name,
            images: imagesArr.length > 0 ? imagesArr[0] : request.body.images,
            parentId: request.body.parentId,
            parentCatName: request.body.parentCatName,
        },
        {new: true}
    );

    if(!category){
        return response.status(500).json({
            message: "Category cannot be updated",
            error: true,
            success: false
        });
    }

    imagesArr = [];

    response.status(200).json({
        error: false,
        success: true,
        category: category
    });
}

