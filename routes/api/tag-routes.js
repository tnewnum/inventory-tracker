const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// // Using the `/api/tags` endpoint

// find all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: Product
    });
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err)
  }
});

// find a single tag by its `id`
router.get('/:id', async (req, res) => {    
    try{
        const productData = await Tag.findByPk(req.params.id, {
         include: Product
        })
        res.status(200).json(productData)
    }

    catch (err) {
        res.status(500).json
    }
    
});

// router.post('/', (req, res) => {
//   // create a new tag
// });

// router.put('/:id', (req, res) => {
//   // update a tag's name by its `id` value
// });

// router.delete('/:id', (req, res) => {
//   // delete on tag by its `id` value
// });

module.exports = router;
