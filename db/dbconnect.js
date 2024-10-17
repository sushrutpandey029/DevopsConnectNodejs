import { Sequelize } from "sequelize";

const sequelize = new Sequelize('nodejspracticeapi','root','root@123',{
    host:'127.0.0.1',
    dialect:'mysql'
});

const Db_connection = async()=>{
    try{

        await sequelize.authenticate();
        console.log("db connect successfully")

        // await sequelize.sync();
        // console.log("Database schema synchronized successfully.");

    }catch(err){
        console.error("Error while connecting to the database", err);
    }
};

Db_connection();

export default sequelize;