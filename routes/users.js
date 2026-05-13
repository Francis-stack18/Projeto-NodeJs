const util = require("util")
util.isDate = util.types.isDate
util.isRegExp = util.types.isRegExp
let NeDB = require("nedb");
let db = new NeDB({
  filename: "users.db",
  autoload: true,
});

module.exports = (app) => {
  app.get("/users", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      users: [
        {
          name: "Hcode",
          email: "contato@hcode.com",
          id: 1,
        },
      ],
    });
  });

  app.post("/users", (req, res) => {
    db.insert(req.body, (err, user) => {
      if (err) {
        console.log(`Error: ${err}`);
        res.status(400).json({
          error: err
        });
      } else {
        res.status(200).json(user);
      }
    });
  });
};
