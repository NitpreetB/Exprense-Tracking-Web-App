const config = {

    user: 'ExpenseAPP',
    password: 'pup',
    server: 'NITPREET-PC',
    database: 'SQL_Expense',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS'
    },
    port: 1433
}

module.exports=config;