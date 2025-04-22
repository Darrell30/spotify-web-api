const express      = require("express");

const artistRoutes = require("./components/artist/artist-route");
const categoryRoutes = require('./components/category/category-route');
const AudiobooksRoute = require("./components/AudioBooks/Audiobooks-route");
const ChaptersRoute = require("./components/Chapters/Chapters-route");
const albumsRoute = require("./components/albums/albums-route")
const episodesRoute = require("./components/episodes/episodes-route")
const genresRoute = require("./components/genres/genres-route")
const trackRoute = require("./components/tracks/tracks-route")
const userRoute = require("./components/user/user-route")
const playlistRoute = require ("./components/playlist/playlist-route")

module.exports = () => {
    const app = express.Router();

    artistRoutes(app);
    AudiobooksRoute(app);
    categoryRoutes(app);
    ChaptersRoute(app);
    albumsRoute(app);
    episodesRoute(app);
    genresRoute(app);
    trackRoute(app);
    userRoute(app);
    playlistRoute(app);


    return app;
}