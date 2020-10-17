const RepositoreBillet = require("../database/repositories/repositorieBillet");

class boletoController {
  async index(req, res) {
    const data = await RepositoreBillet.listAll();
    res.json({ billet: data });
  }

  async store(req, res) {
    const {
      path_billet,
      price,
      data_payment,
      date_expiration,
      description,
    } = req.body;

    try {
      const data = await RepositoreBillet.store(
        path_billet,
        price,
        data_payment,
        date_expiration,
        description
      );
      res.json({ billet: data });
    } catch (error) {
      res.json({ error });
    }
    
  }
}

module.exports = new boletoController();
