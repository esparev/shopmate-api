const express = require('express');

const ProductService = require('../services/product.service');
const {
	getProductSchema,
	createProductSchema,
	updateProductSchema,
} = require('../schemas/product.schema');

const router = express.Router();
const service = new ProductService();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

/**
 * Get all products from the database using the product service
 */
const getProducts = async (req, res, next) => {
	try {
		const products = await service.find();
		res.status(200).json(products);
	} catch (error) {
		next(error);
	}
};

/**
 * Get a product from the database using the product service
 */
const getProduct = async (req, res, next) => {
	try {
		const { id } = req.params;
		const product = await service.findOne(id);
		res.status(200).json(product);
	} catch (error) {
		next(error);
	}
};

/**
 * Add a product to the database using the product service
 */
const createProduct = async (req, res, next) => {
	try {
		const { body: product } = req;
		const newProduct = await service.create(product);
		res
			.status(201)
			.json({ newProduct, message: 'Product created successfully' });
	} catch (error) {
		next(error);
	}
};

/**
 * Update a product in the database using the product service
 */
const updateProduct = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { body: product } = req;
		const updatedProduct = await service.update(id, product);
		res.status(200).json({
			updatedProduct,
			message: 'Product updated successfully',
		});
	} catch (error) {
		next(error);
	}
};

/**
 * Delete a product from the database using the product service
 */
const deleteProduct = async (req, res, next) => {
	try {
		const { id } = req.params;
		const deletedProduct = await service.delete(id);
		res.status(200).json({
			deletedProduct,
			message: 'Product deleted successfully',
		});
	} catch (error) {
		next(error);
	}
};

module.exports = router;
