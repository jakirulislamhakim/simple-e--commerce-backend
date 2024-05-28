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
const order_model_1 = require("./order.model");
const order_zod_validation_1 = require("./order.zod.validation");
// create product into db
const createOrderIntoDB = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const validateData = order_zod_validation_1.zodOrderValidationSchema.parse(orderData);
    const result = yield order_model_1.Order.create(validateData);
    return result;
});
// get product from db
const getOrdersFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (email) {
        result = yield order_model_1.Order.find({ email });
    }
    else {
        result = yield order_model_1.Order.find();
    }
    return result;
});
exports.default = {
    createOrderIntoDB,
    getOrdersFromDB
};
