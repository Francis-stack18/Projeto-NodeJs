module.exports = (app) => {
  app.get("/", (red, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Olá</h1>");
  });
};