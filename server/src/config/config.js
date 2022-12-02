module.exports = {
    port: process.env.PORT || 8081,
    db : {
        database: process.env.DB_NAME || 'geotalk',
        user: process.env.DB_USER || 'geotalk',
        password: process.env.DB_PASS || 'geotalk',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './geotalk.sqlite'
        }
    }
}