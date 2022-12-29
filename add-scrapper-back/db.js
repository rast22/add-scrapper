const Client = require('pg').Client

// const pool = new Pool({
//   user: 'addMaintainer',
//   host: 'localhost',
//   database: 'addsDatabase',
//   password: 'admin',
//   port: 5432,
// })
// const client = new Client({
//   user: 'addmaintainer',
//   host: 'localhost',
//   password: 'admin',
//   port: 5432
// })
// console.log(client)
//  client.connect((err) => {
//   if (err) {
//     console.error('connection error', err.stack)
//   } else {
//     console.log('connected')
//   }
// })
//  client.query(sqlInit)
//  client.end()

// export class dbConnection {
//   client;
//   dropSql = `DROP DATABASE IF EXISTS addsDatabase;`
//   sqlInit = `CREATE DATABASE addsDatabase;`
//   tableSql = `CREATE TABLE IF NOT EXISTS adverts (
//     id SERIAL PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     image VARCHAR(255) NOT NULL
//   );`
//   constructor(dbName) {
//     if (!dbName) {
//       this.client = new Client({
//         user: 'addmaintainer',
//         host: 'localhost',
//         database: 'postgres',
//         password: 'admin',
//         port: 5432
//       })
//       this.connect().then(() => {
//         this.client.query(this.dropSql)
//         this.client.query(this.sqlInit)
//         this.client.end()
//       });
//
//     }else{
//       this.client = new Client({
//         user: 'addmaintainer',
//         host: 'localhost',
//         database: dbName,
//         password: 'admin',
//         port: 5432
//       })}
//       this.connect().then(() => {
//         this.client.query(this.tableSql)
//         this.client.end()
//       });
//   }
//
//   async connect() {
//     await this.client.connect((err) => {
//       if (err) {
//         console.error('connection error', err.stack)
//       } else {
//         console.log('connected')
//       }})
//   }
//
// }

 class Connection {
  client;
  dropSql = `DROP DATABASE IF EXISTS addsDatabase;`
  sqlInit = `CREATE DATABASE addsdatabase;`
  tableSql = `CREATE TABLE IF NOT EXISTS adverts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL
  );`
  async createDB () {
    this.client = new Client({
      user: 'postgres',
      host: 'postgres',
      database: 'postgres',
      password: 'postgres',
      port: 5432
    })
    await this.client.connect();
    await this.client.query(this.dropSql)
    await this.client.query(this.sqlInit)
    await this.client.end();
    this.client = new Client({
      user: 'postgres',
      host: 'postgres',
      database: 'addsdatabase',
      password: 'postgres',
      port: 5432
    })
    await this.client.connect().then(async () => {
      await this.client.query(this.tableSql)
    });
    await this.client.end();
  }
  async connectToDb () {
    this.client = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'addsdatabase',
      password: 'postgres',
      port: 5432
    })
    await this.client.connect();
  }

  async insertAdvert ({title, image}) {
    await this.client.query(`INSERT INTO adverts (title, image) VALUES ('${title}', '${image}')`)
  }

  async getAdverts () {
    const res = await this.client.query(`SELECT * FROM adverts`)
    return res.rows
  }

}
module.exports = new Connection();
