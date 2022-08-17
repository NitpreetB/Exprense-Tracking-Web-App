const config  = require('./dbConfig'),
        sql = require('mssql');


const getTransaction = async()=>{

    try{   
        let pool = await sql.connect(config);
        let tranactions = pool.request().query("SELECT * from Transactions") 
        console.log(tranactions);
        return tranactions;
    }
    catch(error){
        console.log(error)
    }
}
module.exports = {
    getTransaction
}