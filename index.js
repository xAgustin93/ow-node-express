const mongoose = require("mongoose");
const app = require("./app");
const port = 3977;
const urlMongoDb =
  "mongodb+srv://admin:admin123456@taskdb.p0hyu.mongodb.net/mydb";

mongoose.connect(
  urlMongoDb,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err, res) => {
    try {
      if (err) {
        throw err;
      } else {
        console.log("La conexion a la base de datos es correcta");

        app.listen(port, () => {
          console.log(
            "Servidor del API REST esta funcionando en http://localhost:3000"
          );
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
);
