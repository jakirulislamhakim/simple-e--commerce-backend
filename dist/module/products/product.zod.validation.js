"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodProductValidationSchema = void 0;
const zod_1 = require("zod");
const VariantSchema = zod_1.z.object({
    type: zod_1.z.string().min(1, 'Type is required'),
    value: zod_1.z.string().min(1, 'Value is required')
});
// Define the Zod schema for the Inventory type
const InventorySchema = zod_1.z.object({
    quantity: zod_1.z
        .number()
        .int()
        .nonnegative('Quantity must be a non-negative integer'),
    inStock: zod_1.z.boolean()
});
// Define the Zod schema for the Product type
exports.zodProductValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required'),
    description: zod_1.z.string().min(1, 'Description is required'),
    price: zod_1.z.number().positive('Price must be a positive number'),
    category: zod_1.z.string().min(1, 'Category is required'),
    tags: zod_1.z
        .array(zod_1.z.string().min(1, 'Tags cannot be empty'))
        .min(1, 'At least one tag is required'),
    variants: zod_1.z.array(VariantSchema).min(1, 'At least one variant is required'),
    inventory: InventorySchema
});
