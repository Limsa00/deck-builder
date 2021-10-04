const dataMapper = require("../dataMapper");
const { request } = require("express");

const deckController = {

    addCard:(req,res)=>{
        if (!req.session.deck) {
            req.session.deck = [];
        };

        const id = parseInt(req.params.id, 10) ;

        dataMapper.getOneCard(id, (error,card) =>{
            if (error) {
                res.status(500).send('Erreur dans la base de données');
            } else if (!card) {
                res.status(404).send('Cette carte n\'existe pas')
            } else {
                const foundCard = req.session.deck.find(element=>{
                    return element.id === id;
                });

                if (!foundCard && req.session.deck.length < 5) {
                    req.session.deck.push(card);
                }

                res.redirect ('/deck');
            }
        })
    },

    deckContent:(req,res)=>{
        res.render('deck',{
            cards: req.session.deck
        })
    },

    removeCard:(req,res)=>{
        const id = parseInt(req.params.id,10);

        req.session.deck = req.session.deck.filter((card)=>{
            return card.id !== id;
        });

        res.redirect('/deck');
    }

};

module.exports = deckController