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
                res.render('cardsByElement', {
                    cards:result
                });
            }
        })
    },

}

module.exports = cardController;