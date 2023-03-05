const router = require('express').Router();
// const { json } = require('sequelize/types');
const { Category, Product, ProductTag, Tag } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => { 
  // find all categories
  try {
    const categoryData = await Category.findAll({
      // be sure to include its associated Products
      include: Product,
    });
    res.status(200),json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// router.post('/', (req, res) => {
//   // create a new category
// });

// router.put('/:id', (req, res) => {
//   // update a category by its `id` value
// });

// router.delete('/:id', (req, res) => {
//   // delete a category by its `id` value
// });

module.exports = router;
