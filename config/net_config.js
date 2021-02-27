module.exports = {
    server : {
        httpPort: 3000,
        host: "localhost",
        contentTypesAccept: [ "application/json" ]
    },
    sql: {
        host: "localhost",
        port: "3306",
        database: "time_watcher",
        user: "tw_db_user",
        pass: "myBeautifulPassword" 
    },
    mail: {
        host: process.env.HZ_HQ_WWW_MAIL_HOST,
        port: process.env.HZ_HQ_WWW_MAIL_PORT,
        user: process.env.HZ_HQ_WWW_MAIL_USER,
        pass: process.env.HZ_HQ_WWW_MAIL_PASS,
        pool: true      
    }
}
