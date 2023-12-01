const path = require("path");
const service = require("../services/products-services");
const products=require ("../services/products-services")
let baseUrl = "http://localhost:3031"
let url = '/api'



const controller = {
    home: (req, res) => {
        let filepath = path.resolve(__dirname,"../views/home.html")
        res.sendFile(filepath)
    },
    apiHome: (req,res) => {
        res.send({
            productos: baseUrl + url + "/productos",
        });
    },
    apiProducts: async (req,res) => {
        let comidas = await products.listarComidas()
        res.send(comidas);
    },
    apiProductDetail: async(req,res) => {
        const id = req.params.id;
        let comidaAEnviar = await products.buscarComidas (id)
        res.send(comidaAEnviar || {});
       

    },
    createProducts: async (req,res) => {
        await products.create(req.body);
         res.redirect ("/api/productos");
    },
    
    apiProductPut: async (req,res) => {
        await products.update(req.body,req.params.id);
         res.redirect ("/api/productos");
     },
    apiProductDelete: async (req,res) =>{
       await products.delete (req.params.id);
        res.redirect ("/api/productos");
    },
        

}


module.exports = controller;