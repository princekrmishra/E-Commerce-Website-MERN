import ProductModel from "../models/product.models.js";
import { v2 as cloudinary } from 'cloudinary';
import { error } from "console";
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
//create product
export async function createProduct(request, response) {
    try{
        let product = new ProductModel({
            name: request.body.name,
            description: request.body.description,
            images: imagesArr,
            brand: request.body.brand,
            price: request.body.price,
            oldPrice: request.body.oldPrice,
            catName: request.body.catName,
            catId: request.body.catId,
            subCatId: request.body.subCatId,
            subCat: request.body.subCat,
            thirdSubCat: request.body.thirdSubCat,
            thirdSubCatId: request.body.thirdSubCatId,
            countInStock: request.body.countInStock,
            rating: request.body.rating,
            isFeatured: request.body.isFeatured,
            discount: request.body.discount,
            productRam: request.body.productRam,
            size: request.body.size,
            productWeight: request.body.productWeight,
            dateCreated: request.body.dateCreated,
        })


        product = await product.save();

        if(!product){
            response.status(500).json({
            message: "product not created",
            error: true,
            success: false
            })
        }

        imagesArr = [];
        
        response.status(200).json({
            message: "Product created successfully",
            error: false,
            success: true,
            product: product
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

//get all product
export async function getAllProduct(request, response) {
    try{

        const page = parseInt(request.query.page) || 1;
        const perPage = parseInt(request.query.perPage);
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts / perPage);

        if(page > totalPages){
            return response.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            });
        }
        const products = await ProductModel.find().populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();


        if(!products){
            response.status(500).json({
                error: true,
                success: false
            });
        }

        response.status(200).json({
            error: false,
            success: true,
            products: products,
            totalPages: totalPages,
            page: page,
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

//get all product by catId
export async function getAllProductByCatId(request, response) {
    try{

        const page = parseInt(request.query.page) || 1;
        const perPage = parseInt(request.query.perPage) || 10000;
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts / perPage);

        if(page > totalPages){
            return response.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            });
        }
        const products = await ProductModel.find({
            catId: request.params.id
        }).populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();


        if(!products){
            response.status(500).json({
                error: true,
                success: false
            });
        }

        response.status(200).json({
            error: false,
            success: true,
            products: products,
            totalPages: totalPages,
            page: page,
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

//get all product by catName
export async function getAllProductByCatName(request, response) {
    try{

        const page = parseInt(request.query.page) || 1;
        const perPage = parseInt(request.query.perPage) || 10000;
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts / perPage);

        if(page > totalPages){
            return response.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            });
        }
        const products = await ProductModel.find({
            catName: request.query.catName
        }).populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();


        if(!products){
            response.status(500).json({
                error: true,
                success: false
            });
        }

        response.status(200).json({
            error: false,
            success: true,
            products: products,
            totalPages: totalPages,
            page: page,
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

//get all product by sub catId
export async function getAllProductBySubCatId(request, response) {
    try{

        const page = parseInt(request.query.page) || 1;
        const perPage = parseInt(request.query.perPage) || 10000;
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts / perPage);

        if(page > totalPages){
            return response.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            });
        }
        const products = await ProductModel.find({
            subCatId: request.params.id
        }).populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();


        if(!products){
            response.status(500).json({
                error: true,
                success: false
            });
        }

        response.status(200).json({
            error: false,
            success: true,
            products: products,
            totalPages: totalPages,
            page: page,
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

//get all product by sub catName
export async function getAllProductBySubCatName(request, response) {
    try{

        const page = parseInt(request.query.page) || 1;
        const perPage = parseInt(request.query.perPage) || 10000;
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts / perPage);

        if(page > totalPages){
            return response.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            });
        }
        const products = await ProductModel.find({
            subCat: request.query.subCat
        }).populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();


        if(!products){
            response.status(500).json({
                error: true,
                success: false
            });
        }

        response.status(200).json({
            error: false,
            success: true,
            products: products,
            totalPages: totalPages,
            page: page,
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

//get all product by third catId
export async function getAllProductByThirdLevelCatId(request, response) {
    try{

        const page = parseInt(request.query.page) || 1;
        const perPage = parseInt(request.query.perPage) || 10000;
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts / perPage);

        if(page > totalPages){
            return response.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            });
        }
        const products = await ProductModel.find({
            thirdSubCatId: request.params.id
        }).populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();


        if(!products){
            response.status(500).json({
                error: true,
                success: false
            });
        }

        response.status(200).json({
            error: false,
            success: true,
            products: products,
            totalPages: totalPages,
            page: page,
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

//get all product by third catName
export async function getAllProductByThirdLevelCatName(request, response) {
    try{

        const page = parseInt(request.query.page) || 1;
        const perPage = parseInt(request.query.perPage) || 10000;
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts / perPage);

        if(page > totalPages){
            return response.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            });
        }
        const products = await ProductModel.find({
            thirdSubCat: request.query.thirdSubCat
        }).populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();


        if(!products){
            response.status(500).json({
                error: true,
                success: false
            });
        }

        response.status(200).json({
            error: false,
            success: true,
            products: products,
            totalPages: totalPages,
            page: page,
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

//get all product by price
export async function getAllProductByPrice(request, response) {
    try{
        let productList = [];

        if(request.query.catId !== "" && request.query.catId !== undefined){
            const productListArr = await ProductModel.find({
                catId: request.query.catId,
            }).populate("category");

            productList = productListArr;
        }

        if(request.query.subCatId !== "" && request.query.subCatId !== undefined){
            const productListArr = await ProductModel.find({
                subCatId: request.query.subCatId,
            }).populate("category");

            productList = productListArr;
        }

        if(request.query.thirdSubCatId !== "" && request.query.thirdSubCatId !== undefined){
            const productListArr = await ProductModel.find({
                thirdSubCatId: request.query.thirdSubCatId,
            }).populate("category");

            productList = productListArr;
        }

        const filteredProducts = productList.filter((product) => {
            if(request.query.minPrice && product.price < parseInt(+request.query.minPrice)){
                return false;
            }
            if(request.query.maxPrice && product.price > parseInt(+request.query.maxPrice)){
                return false;
            }
            return true;
        })

        return response.status(200).json({
            error: false,
            success: true,
            product: filteredProducts,
            totalPage: 0,
            page: 0,
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

//get all product by rating
export async function getAllProductByRating(request, response) {
    try{

        const page = parseInt(request.query.page) || 1;
        const perPage = parseInt(request.query.perPage) || 10000;
        const totalPosts = await ProductModel.countDocuments();
        const totalPages = Math.ceil(totalPosts / perPage);

        if(page > totalPages){
            return response.status(404).json({
                message: "Page not found",
                error: true,
                success: false
            });
        }

        let products = [];

        if(request.query.catId !== undefined){
            products = await ProductModel.find({
            rating: request.query.rating,
            catId: request.query.catId,
            }).populate("category")
            .skip((page - 1) * perPage)
            .limit(perPage)
            .exec();
        }

        if(request.query.subCatId !== undefined){
            products = await ProductModel.find({
            rating: request.query.rating,
            subCatId: request.query.subCatId,
            }).populate("category")
            .skip((page - 1) * perPage)
            .limit(perPage)
            .exec();
        }

        if(request.query.thirdSubCatId !== undefined){
            products = await ProductModel.find({
            rating: request.query.rating,
            thirdSubCatId: request.query.thirdSubCatId
            }).populate("category")
            .skip((page - 1) * perPage)
            .limit(perPage)
            .exec();
        }
        


        if(!products){
            response.status(500).json({
                error: true,
                success: false
            });
        }

        response.status(200).json({
            error: false,
            success: true,
            products: products,
            totalPages: totalPages,
            page: page,
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

//get products count
export async function getAllProductCount(request, response) {
    try{
        const productCount = await ProductModel.countDocuments();

        if(!productCount){
            response.status(500).json({
                error: true,
                success: false,
            })
        }
        return response.status(200).json({
            error: false,
            success: true,
            productCount: productCount
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

//get all featured products
export async function getAllFeturedProduct(request, response) {
    try{

        
        const products = await ProductModel.find({
            isFeatured: true
        }).populate("category")

        if(!products){
            response.status(500).json({
                error: true,
                success: false
            });
        }

        response.status(200).json({
            error: false,
            success: true,
            products: products
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

//delete products
export async function DeleteProduct(request, response){
        const product = await ProductModel.findById(request.params.id).populate("category");

        if(!product){
            return response.status(404).json({
                message: "Product Not Found",
                error: true,
                success: false
            })
        }
            const images = product.images;
        let img="";
            for(img of images){
                const imgUrl = img;
                const urlArr = imgUrl.split("/");
                const image = urlArr[urlArr.length - 1];

                const imageName = image.split(".")[0];

                if(imageName){
                    cloudinary.uploader.destroy(imageName, (error, result) => {})
                }
            }
        
        const deletedProduct = await ProductModel.findByIdAndDelete(request.params.id);

        if(!deletedProduct) {
            response.status(404).json({
                message: "Product Not Deleted!",
                error: true,
                success: false,
            })
        }

        return response.status(200).json({
            message: "Product Deleted!",
            error: false,
            success: true,
        })

    
}

//get single product
export async function getProduct(request, response){
    try{
        const product = await ProductModel.findById(request.params.id).populate("category");

        if(!product){
            response.status(404).json({
                message: "The product is not found",
                error: true,
                success: false
            });
        }

        response.status(200).json({
            error: false,
            success: true,
            product: product
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

//remove images
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

//update product
export async function updateProduct(request, response) {
    try{
        const product = await ProductModel.findByIdAndUpdate(
        request.params.id,
        {
            name: request.body.name,
            description: request.body.description,
            images: request.body.images,
            brand: request.body.brand,
            price: request.body.price,
            oldPrice: request.body.oldPrice,
            catName: request.body.catName,
            catId: request.body.catId,
            subCatId: request.body.subCatId,
            subCat: request.body.subCat,
            thirdSubCat: request.body.thirdSubCat,
            thirdSubCatId: request.body.thirdSubCatId,
            category: request.body.category,
            countInStock: request.body.countInStock,
            rating: request.body.rating,
            isFeatured: request.body.isFeatured,
            discount: request.body.discount,
            productRam: request.body.productRam,
            size: request.body.size,
            productWeight: request.body.productWeight,
        },
        {new: true}
    );

    if(!product){
        return response.status(404).json({
            message: "product cannot be updated",
            error: true,
            success: false
        });
    }

    imagesArr = [];

    return response.status(200).json({
        error: false,
        success: true,
        product: product
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
