import { z } from 'zod';

const VariantSchema = z.object({
  type: z.string().min(1, 'Type is required'),
  value: z.string().min(1, 'Value is required')
});

// Define the Zod schema for the Inventory type
const InventorySchema = z.object({
  quantity: z
    .number()
    .int()
    .nonnegative('Quantity must be a non-negative integer'),
  inStock: z.boolean()
});

// Define the Zod schema for the Product type
export const zodProductValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().positive('Price must be a positive number'),
  category: z.string().min(1, 'Category is required'),
  tags: z
    .array(z.string().min(1, 'Tags cannot be empty'))
    .min(1, 'At least one tag is required'),
  variants: z.array(VariantSchema).min(1, 'At least one variant is required'),
  inventory: InventorySchema
});


