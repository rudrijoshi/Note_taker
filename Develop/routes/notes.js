const router = require('express').Router();

const {readFromFile, readAndAppend} = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

router.post('/', (req, res) => {
    if (req.body.title && req.body.text){
        let newNote = {title: req.body.title, text: req.body.text, id: uuid()}
        readAndAppend(newNote, './db/db.json')
        res.json(`New notes added`)
    } else {
        res.json('Error in adding note');
    }

});



module.exports = router;
