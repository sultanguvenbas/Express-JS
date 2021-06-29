const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
// router.use(bodyParser.json())
// router.use(
//     bodyParser.urlencoded({
//         extended: false,
//     })
// )

const Pool= require("pg").Pool;
const pool = new Pool({
    user: 'postgres',
    host:'localhost',
    database:'sultan',
    password:'',
    port:5432,
});


router.get('/',function (req,res) {
    pool.query('SELECT * FROM users',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.status(200).json(results.rows);
        }
    })
});

router.post('/',function (req,res) {
    const {id,name, lastname}=req.body;

    pool.query('insert into users(id,name,lastname) values ($1,$2,$3)',[id,name,lastname],(error,results)=>{
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
});

router.put('/:id',function (req,res) {
    const id=parseInt(req.params.id);

    const {name, lastname}=req.body;

    pool.query('update users set name = $1, lastname=$2 where id=$3', [name,lastname,id],(error,results)=>{
        if(error)
            throw error
        res.status(200).json(results.rows);
    })
})

router.delete('/:id',function (req,res) {
    const id=parseInt(req.params.id);

    pool.query("delete from users where id=$1",[id],(error,results)=>{
        if(error)
            throw error
        res.status(200).json(results.rows);
    })
})




module.exports = router;
