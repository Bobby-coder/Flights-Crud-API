const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  // add data
  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repo : create");
      throw error;
    }
  }
  // delete data
  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repo : destroy");
      throw error;
    }
  }
  // get specific data
  async get(data) {
    try {
      const response = await this.model.findByPK(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repo : get");
      throw error;
    }
  }
  // get all data
  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repo : getAll");
      throw error;
    }
  }
  // update data
  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id,
        },
      });
    } catch (error) {
      Logger.error("Something went wrong in the Crud Repo : update");
      throw error;
    }
  }
}

module.exports = CrudRepository;
