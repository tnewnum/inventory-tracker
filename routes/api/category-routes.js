const router = require('express').Router();
const { Category, Product } = require('../../models');

// Using `/api/categories` endpoint

// find all categories
router.get('/', async (req, res) => { 
  try {
    const categoryData = await Category.findAll({
      include: Product
    });
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
});

// find one category by its `id` value. be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try{
  const categoryData = await Category.findByPk(req.params.id, {
    include: Product
  })
  res.status(200).json(categoryData)
  }
  catch (err) {
    res.status(500).json
  }

});


// create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData)
  } 
  catch (err) {
    res.status(400).json(err);
  }

});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id:req.params.id,    
      },
    })
    
    if(!categoryData) {
      res.status(400).json(`Category id ${req.params.id} could not be found to be updated`)
    }

    res.status(200).json(`Category id ${req.params.id} has been updated`)
    
  } catch (err) {
      res.status(400).json(err)
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id:req.params.id,
      },
    })
    
    if(!categoryData) {
      res.status(400).json(`Category id ${req.params.id} could not be found to be deleted`)
    }

    res.status(200).json(`Category id ${req.params.id} has been deleted`)
    
  } catch (err) {
      res.status(400).json(err)
  }
});

module.exports = router;
