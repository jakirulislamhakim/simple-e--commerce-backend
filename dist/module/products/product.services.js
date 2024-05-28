"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("./product.model");
const product_zod_validation_1 = require("./product.zod.validation");
// create product
const createProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const validateData = product_zod_validation_1.zodProductValidationSchema.parse(product);
    const result = yield product_model_1.Product.create(validateData);
    return result;
});
// get all products
const getProductsFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (searchTerm) {
        result = yield product_model_1.Product.find({
            $or: [
                { description: { $regex: searchTerm, $options: 'i' } },
                { name: { $regex: searchTerm, $options: 'i' } },
                { tags: { $in: [searchTerm] } }
            ]
        });
    }
    else {
        result = yield product_model_1.Product.find();
    }
    return result;
});
// get specific  product by id
const getSpecificProductByIdFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById({ _id });
    return result;
});
// update a specific product
const updateSpecificProductByIdFromDB = (_id, updatedProduct) => __awaiter(void 0, void 0, void 0, function* () {
    const validateData = product_zod_validation_1.zodProductValidationSchema.parse(updatedProduct);
    const result = yield product_model_1.Product.findByIdAndUpdate(_id, validateData, {
        new: true,
        runValidators: true
    });
    return result;
});
// update a specific product
const deleteSpecificProductByIdFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndDelete(_id, { new: true });
    return result;
});
exports.default = {
    createProductIntoDB,
    getProductsFromDB,
    getSpecificProductByIdFromDB,
    updateSpecificProductByIdFromDB,
    deleteSpecificProductByIdFromDB
};
