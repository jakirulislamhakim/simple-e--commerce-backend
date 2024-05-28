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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_services_1 = __importDefault(require("./product.services"));
// create a product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const data = yield product_services_1.default.createProductIntoDB(product);
        res.status(201).json({
            success: true,
            message: 'Products created successfully',
            data
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: error.message || 'something went wrong'
        });
    }
});
// get all products
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const data = yield product_services_1.default.getProductsFromDB(searchTerm);
        if (!data.length) {
            return res.status(404).json({
                success: false,
                message: 'Products not found into db!',
                data: null
            });
        }
        return res.status(200).json({
            success: true,
            message: searchTerm
                ? `Products matching search term '${searchTerm}' fetched successfully!`
                : 'Products fetched successfully!',
            data
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: error.message || 'something went wrong'
        });
    }
});
// get specific products
const getSpecificProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const data = yield product_services_1.default.getSpecificProductByIdFromDB(productId);
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: error.message || 'something went wrong'
        });
    }
});
// get specific products
const updateSpecificProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updatedProduct = req.body;
        const data = yield product_services_1.default.updateSpecificProductByIdFromDB(productId, updatedProduct);
        res.status(200).json({
            success: true,
            message: 'Product updated successfully!',
            data
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: error.message || 'something went wrong'
        });
    }
});
// delete specific products
const deleteSpecificProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const data = yield product_services_1.default.deleteSpecificProductByIdFromDB(productId);
        if (data) {
            res.status(200).json({
                success: true,
                message: 'Product deleted successfully!',
                data: null
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "This products is not available .So you can't delete this"
            });
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: error.message || 'something went wrong'
        });
    }
});
exports.default = {
    createProduct,
    getProducts,
    getSpecificProductById,
    updateSpecificProductById,
    deleteSpecificProductById
};
