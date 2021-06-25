const express =require('express');
const router = express.Router();


router.get('/',function (req,res){
    res.send('Get route on router');
});

router.post('/',function (req,res){
    res.send('Post route on router');
});
router.get('/:id([0-9]{6})', function(req, res){
    res.send('id: ' + req.params.id);
});

router.get('/:name/:id', function(req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
    //You can use the req.params object to access all the parameters you pass in the url.
});

//Other routes here
router.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
});



//export this router to use in our index.js
module.exports = router;