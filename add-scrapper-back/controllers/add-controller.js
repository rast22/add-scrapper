const addService = require('../services/add-service.js');

class AddController {
    async getAdverts(req, res, next) {
      try {
        let adds = await addService.getAdds()
        return res.json(adds);
      }
      catch (e) {
        console.log(e)
      }
    }

    async insertAdverts(advertList, connection) {
      try {
        await addService.insertAdds(advertList, connection)
      }
      catch (e) {
        console.log(e)
      }
    }
}

module.exports = new AddController();
