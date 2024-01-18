import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const User = db.define('users',{
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    notelp: DataTypes.STRING,
    medsos: DataTypes.STRING,
    gender: DataTypes.STRING,
    kategori: DataTypes.STRING,
    judul: DataTypes.STRING,
},{
    freezeTableName:true
});
 
export default User;
 
(async()=>{
    await db.sync();
})();