let express = require('express')
let db = require('../db/index')

let bandasController = {
    index : function(req, res){
        return res.render('listadoBandas', {bandas: db.lista})
    },
    detalle: function(req, res){
        let id = req.params.id
        let rta = []
        for (let i = 0; i < db.lista.length; i++) {
            if (id == db.lista[i].id ) {
                rta.push(db.lista[i])
        
            }}
        if (rta.length === 0) {
            return  res.send('Su id excede la cantidad de bandas o es igual o menor que cero')
        }
        else{
        return  res.render('detalleBanda', {bandas: rta})
    }
    },
    porGenero: function(req, res){
        let gen = req.params.gen
        let rta = []
        for (let i = 0; i < db.lista.length; i++) {
            if(gen.toLowerCase() === db.lista[i].genero.toLowerCase()){
                rta.push(db.lista[i])
            }            
        }
        if (rta.length === 0) {
            return  res.send(`No contamos con bandas del genero ${gen}`)
        }
        return  res.render('porGenero', {bandas: rta})
    }
}

module.exports = bandasController