const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');
const cardController = require ('./controllers/cardController');
const deckController = require ('./controllers/deckController');

router.get('/', mainController.homePage);
router.get('/search', searchController.searchPage);

router.get('/card/:id', cardController.cardDetails);

router.get('/search/element', cardController.cardsByElement);
router.get('/search/level', cardController.cardsByLevel);

router.get('/deck', deckController.deckContent);
router.get('/deck/add/:id', deckController.addCard);
router.get('/deck/remove/:id', deckController.removeCard);



module.exports = router;