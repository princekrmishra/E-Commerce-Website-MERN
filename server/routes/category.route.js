import { Router } from 'express';
import auth from '../middlewares/auth.js';
import upload from '../middlewares/multer.js';
import { createCategory, deleteCategory, getCategories, getCategory, getCategoryCount, getSubCategoryCount, updatedCategory, uploadImages } from '../controller/category.controller.js';
import { removeImageFromCloudinary } from '../controller/user.controller.js';


const categoryRouter = Router();

categoryRouter.post("/uploadImages", auth, upload.array('images'), uploadImages)
categoryRouter.post("/create", auth, createCategory)
categoryRouter.get("/",  getCategories)
categoryRouter.get("/get/count",  getCategoryCount);
categoryRouter.get("/get/count/subCat",  getSubCategoryCount);
categoryRouter.get("/:id", getCategory);
categoryRouter.delete('/deleteImage', auth, removeImageFromCloudinary);
categoryRouter.delete('/:id', auth, deleteCategory);
categoryRouter.put('/:id', auth, updatedCategory);


export default categoryRouter;
