const axios = require("axios").default;
const config = require("../config");

class Patient {
  constructor(client, options) {
    this.client = client;
    this.options = options;
  }

  async get() {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    const endpoint = `${this.options.base.default}/${config.patient.get}`;
    const response = await axios.get(endpoint, { headers });
    return response.data;
  }

  async update(body) {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    const response = await axios.put(`${this.options.base.default}/${config.patient.get}`, body, { headers });
    return response.data;
  }

  async listHealthInsurance() {
    const headers = {
      ...this.options.headers,
      Authorization: `${this.options.authentication.token_type} ${this.options.authentication.access_token}`
    };
    const endpoint = `${this.options.base.default}/${config.patient.healthInsurance}`;
    const response = await axios.get(endpoint, { headers });
    return response.data;
  }
}

module.exports = { Patient };
