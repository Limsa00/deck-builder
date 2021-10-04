const dataMapper = require('../dataMapper.js');

const cardController = {
    cardDetails :(req,res) =>{
        const id = req.params.id;

        dataMapper.getOneCard(id, (error,card) =>{
            if (error) {
                res.status(500).send('Erreur dans la base de données');
            } else
            if (!card) {
                res.status(404).send('Cette carte n\'existe pas')
            } else {
                res.render('cardDetail', {
                    card:card
                });
                // res.send('détail de la carte');
            }
        })
    },

    cardsByElement:(req,res) =>{
        const element = req.query.element;

        dataMapper.findByElement(element, (error, result)=>{
            if (error) {
                res.status(500).send('Erreur dans la base de données');
            } else
            if (!result) {
                res.status(404).send('Cette élément est vide')
            } else {
                res.render('deck', {
                    cards:result
                });
            }
        })
    },

    cardsByLevel:(req,res)=>{
        const level = parseInt(req.query.level,10);

        dataMapper.findByLevel(level,(error,result)=>{
            if (error) {
                res.status(500).send('Erreur dans la base de données');
            } else
            if (!result) {
                res.status(404).send('Pas de carte dans ce niveau')
            } else {
                res.render('deck', {
                    cards:result
                });
            }
        })
    }

}

module.exports = cardController;