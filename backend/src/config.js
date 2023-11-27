require('dotenv').config()

module.exports = {
    development: {
        username: 'root',
        password:  '',
        database: 'busque_pesque',
        host: 'localhost',
        dialect: 'mysql'
    },
    secret: 'minha'
}
// require('dotenv').config()

// module.exports = {
//     development: {
//         username: process.env.USER,
//         password:  process.env.PASSWORD,
//         database: process.env.DATABASE_URL,
//         host: process.env.HOST,
//         dialect: process.env.DIALECT
//     }
// }