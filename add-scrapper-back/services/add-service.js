

class AddService {
  connection;
  constructor() {
  }


  async getAdds() {
    try {
      const adds = await this.connection.getAdverts();
      return adds
    }
    catch (e) {
      console.log(e)
    }
  }

  async insertAdds(advertList, connection) {
    try {
      this.connection = connection
      for (let i = 0; i < advertList.length; i++) {
        await this.connection.insertAdvert(advertList[i])
      }
      console.log('all adverts are inserted into database')
    }
    catch (e) {
      console.log(e)
    }
  }
}

module.exports = new AddService();
