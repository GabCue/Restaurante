module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        category_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
        },
        description: {
            type: dataTypes.STRING,
            // allowNull: false,
        },
        price: {
            type: dataTypes.STRING,
            // allowNull: false,
            validate: {
                isDecimal: true,
                min: 0,
            },
        },
        image_filename: {
            type: dataTypes.STRING,
            // allowNull: true,
        },
    };
    let config = {
        tableName: "products", // Corregir aquí
        timestamps: false,
    };
  
    const Model = sequelize.define(alias, cols, config);

    Model.associate = (models) => {
        Model.belongsTo(models.Categories, {
            as: 'Category',
            foreignKey: 'category_id'
        })
        Model.belongsTo(models.Brands, {
            as: "Brand",
        
            foreignKey: "brand_id"
        })
    }

    

    return Model;
};