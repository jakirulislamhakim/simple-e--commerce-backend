"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = __importDefault(require("./module/products/product.route"));
const orders_route_1 = __importDefault(require("./module/orderManege/orders.route"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// routers
app.use('/api/products', product_route_1.default);
app.use('/api/orders', orders_route_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});
exports.default = app;
