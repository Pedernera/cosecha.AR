const express = require('express');
const conexion = require('../conexion')

const router = express.Router();

router.get('/',(req,res)=>{
           const sql ='SELECT * FROM prestador';

       conexion.query(sql,(error,result)=>{
           if(error){
               res.send('error prestador')
           }else{
               res.json(result)
           }
       })
      
})



 router.get('/:id',(req,res)=>{
    const id = req.params.id
    const sql = 'SELECT * FROM prestador WHERE id= ?' 
    
    conexion.query(sql, [id] ,(err, result)=>{
        if(err){

            res.send('Error Prestador')
        }else{
            res.json(result[0])
        }
    })
 })

 router.get('/usuario/:idUsuario',(req,res)=>{
    const idUsuario = req.params.idUsuario
    const sql = 'SELECT * FROM prestador WHERE idUsuario= ?' 
    
    conexion.query(sql, [idUsuario] ,(err, result)=>{
        if(err){

            res.send('Error idUsuario no encontrado')
        }else{
            res.json(result[0])
        }
    })
 })

 router.post('/:idUser',(req,res)=>{
    const sql=`INSERT INTO prestador (idUsuario) 
               VALUES(?)`
    
    const idUser= req.params.idUser
    conexion.query(sql, [idUser], (err,result)=>{
        if(err){
            res.status(401).json({message:'Error al crear cuenta'})
            console.log(err)
        }else{
            res.status(200).json({message:'Bienvenido'})
            console.log('Nuevos prestador')
        }
    })
})

 module.exports=router