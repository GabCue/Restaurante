module.exports = (sequelize, DataTypes) => {
    let alias = "Categories";

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
        tableName: "categories",
        timestamps: false,
    };

    const Model = sequelize.define(alias, cols, config);

    Model.associate = (models) => {
        Model.hasMany(models.Products,{
            as: "Products",
            foreignKey: 'category_id'
        })
    }

    return Model;
}