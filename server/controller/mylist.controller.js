import MyListModel from "../models/mylist.model.js";

export const addToMyListController = async(request, response) => {
    try{
        const userId = request.userId
        const {
            productId,
            productTitle, 
            image, 
            rating, 
            price, 
            oldPrice, 
            brand, 
            discount
        } = request.body

        const item = await MyListModel.findOne({
            userId: userId,
            productId: productId
        })

        if(item){
            return response.status(400).json({
                message: "item already in the list",
            })
        }

        const myList = new MyListModel({
            productId,
            userId,
            productTitle, 
            image, 
            rating, 
            price, 
            oldPrice, 
            brand, 
            discount
        })

        const save = await myList.save()

        return response.status(200).json({
            error:false,
            success: true,
            message: "Product is saved in my list"
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


export const deleteToMyListController = async(request, response) => {
    try{
        

        const myListItem = await MyListModel.findById(request.params.id);

        if(!myListItem){
            return response.status(404).json({
                message: "The product with the given id is not available",
                error: true,
                success: false
            })
        }

        const deletedItem = await MyListModel.findByIdAndDelete(request.params.id);

        if(!deletedItem){
            return response.status(404).json({
                message: "The product is not deleted",
                error: true,
                success: false
            })
        }

        
        return response.status(200).json({
            error:false,
            success: true,
            message: "The item is deleted"
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


export const getMyListController = async(request, response) => {
    try{
        
        const userId = request.userId

        const myListItem = await MyListModel.find({
            userId: userId
        })
        
        return response.status(200).json({
            error:false,
            success: true,
            data: myListItem
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