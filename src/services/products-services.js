let comidas = require("../data/comidas.js");
let db = require("../data base/models/index.js")
const  service={
    listarComidas:async()=>{
        let productos = await db.Products.findAll();
        return productos
    },
    buscarComidas:async(id)=>{
        let comidas = service.listarComidas ()
        let comidasAEnviar = await db.Products.findOne({
            where:{
                id:id
            }
        }) 
        return comidasAEnviar || {}
    },
    create: async (data) => {
        let comidasACrear = {
            name: data.name,
            category_id: data.category,
            description: data.description,
            price: data.price,
        };
    
        try {
            await db.Products.create(comidasACrear);
            return { success: true, message: "Producto creado con éxito" };
        } catch (error) {
           
        }
    },
    
    delete:(id)=>{
        db.Products.destroy({
            where : {
                id:id
            }
        })
        
    },
    update:async (data,id) =>{
        let comidasAEditar=await {
            name:data.name,
            description:data.description,
            category:data.category,
            price:data.price,
        }
        db.Products.update(comidasAEditar,{
            where : {
                id:id
            }
        })
    }
    
}

module.exports=service