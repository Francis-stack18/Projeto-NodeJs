module.exports = {
  user: (req, res) => {
    req.assert("name", "O nome é obrigatório.").notEmpty();
    req.assert("email", "O email é inválido.").notEmpty().isEmail();

    let erros = req.validationErrors();

    if (erros) {
      app.utils.error.send(erros, req, res);
      return false;
    }else{

        return true

    }
  }
};
