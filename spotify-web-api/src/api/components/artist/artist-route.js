// src/api/components/artist/artist-route.js
const express = require('express');
const router  = express.Router();

// Path ke controller: pastikan huruf dan tanda hubung sama persis
const artistController = require('./artist-controller');

// **Tidak** pakai router.get('/artists', ...) di sini—base path di-mount di routes.js
router.get('/', artistController.getAllArtists);
router.get('/:id', artistController.getArtistById);

module.exports = router;
