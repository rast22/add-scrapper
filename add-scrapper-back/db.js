const Client = require('pg').Client


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
      // host: 'host.docker.internal',
      host: 'postgres_db',
      database: 'postgres',
      password: 'postgres',
      port: 5432
    })
    await this.client.connect();
    await this.client.query(this.dropSql).then(() => console.log('db dropped'))
    await this.client.query(this.sqlInit).then(() => console.log('db created'))
    await this.client.end();
    this.client = new Client({
      user: 'postgres',
      host: 'postgres_db',
      database: 'addsdatabase',
      password: 'postgres',
      port: 5432
    })
    await this.client.connect().then(async () => {
      await this.client.query(this.tableSql).then(() => console.log('table created'))
    });
    await this.client.end();
  }
  async connectToDb () {
    this.client = new Client({
      user: 'postgres',
      host: 'postgres_db',
      database: 'addsdatabase',
      password: 'postgres',
      port: 5432
    })
    await this.client.connect();
  }

  async insertAdvert ({title, image}) {
    console.log('inserting advert')
    await this.client.query(`INSERT INTO adverts (title, image) VALUES ('${title}', '${image}')`)
  }

  async getAdverts () {
    const res = await this.client.query(`SELECT * FROM adverts`)
    return res.rows
  }

}
module.exports = new Connection();

