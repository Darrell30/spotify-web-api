const express = require('express');
const router  = express.Router();

const artistController = require('./artist-Controller');


router.get('/', artistController.getAllArtists);
router.get('/:id', artistController.getArtistById);
router.post('/', artistController.createArtist);
router.delete('/:id',artistController.deleteArtist);
router.put('/:id', artistController.updateArtist);

module.exports = router;
