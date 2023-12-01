module.exports = (sequelize, DataTypes) => {
    let alias = "Brands";

    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(255),
        }
        
    };

    let config = {
        tableName: "brands",
        timestamps: false,
    };

    const Brand = sequelize.define(alias, cols, config);

    const Model = sequelize.define(alias, cols, config);

  
 
    Model.associate = (models) => {
        Model.hasMany(models.Products, {
            as: "Products",
       
            foreignKey: "brand_id"
        })
    }


    return Brand;
}