const db = require("../knex");

const table = "billet";

class repositorieBillet {
  async listAll() {
    const response = await db(table).select("*");
    return response;
  }
  async store(path_billet, price, data_payment, date_expiration, description) {
    try {
      const response = await db(table).insert({
        path_billet,
        price,
        data_payment,
        date_expiration,
        description,
      }).toString();
       
      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new repositorieBillet();
