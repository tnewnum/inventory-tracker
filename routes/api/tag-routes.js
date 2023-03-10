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
        const tagData = await Tag.findByPk(req.params.id, {
         include: Product
        })
        res.status(200).json(tagData)
    }

    catch (err) {
        res.status(500).json
    }
    
});

// create a new tag
router.post('/', async (req, res) => {
    try {
        const tagData = await Tag.create(req.body);
        res.status(200).json(tagData)
    } 
    
    catch (err) {
        res.status(400).json(err);
    }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
    try {
        const tagData = await Tag.update(req.body, {
          where: {
            id:req.params.id,    
          },
        })
        
        if(!tagData) {
          res.status(400).json(`Tag id ${req.params.id} could not be found to be updated`)
        }
    
        res.status(200).json(`Tag id ${req.params.id} has been updated`)
        
      } catch (err) {
          res.status(400).json(err)
      }
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
    try {
        const tagData = await Tag.destroy({
          where: {
           id:req.params.id,
          },
        })
        
        if(!tagData) {
          res.status(400).json(`Tag id ${req.params.id} could not be found to be deleted`)
        }
    
        res.status(200).json(`Tag id ${req.params.id} has been deleted`)
        
      } catch (err) {
          res.status(400).json(err)
      }

});

module.exports = router;
