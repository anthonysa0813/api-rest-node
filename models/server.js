const express = require("express");
const cors = require("cors");
const router = require("../routes/users");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3030;
    this.usersPath = "/api/users";

    //middlewares
    this.middlewares();

    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    // lectura y parseo de datos
    this.app.use(express.json());

    // static
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPath, router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`the aplication listening in the port ${this.port}`);
    });
  }
}

module.exports = Server;
