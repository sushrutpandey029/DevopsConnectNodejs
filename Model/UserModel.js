import { DataTypes } from "sequelize";

import sequelize from "../db/dbconnect.js";

const user = sequelize.define('king',{
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phonenumber: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

export default user;