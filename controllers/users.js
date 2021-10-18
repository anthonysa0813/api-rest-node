const { response, request } = require("express");

const usersGet = (req = request, res = response) => {
  const query = req.query;
  const { name } = query;
  res.json({
    msg: "get API - Controller",
    query,
    name,
  });
};

const usersPost = (req, res) => {
  const body = req.body;
  const { nombre, edad } = body;
  res.json({
    msg: "Post api - Controlador",
    nombre: nombre,
    edad,
  });
};

const usersPut = (req = request, res) => {
  const params = req.params;

  res.json({
    msg: "Put api  - Controlador",
    params,
  });
};

const usersPatch = (req, res) => {
  res.json({
    msg: "Patch api  - Controlador",
  });
};

const usersDelete = (req, res) => {
  res.json({
    msg: "Delete api  - Controlador",
  });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersPatch,
  usersDelete,
};
