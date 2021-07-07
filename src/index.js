const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');

const app = express();
const port = process.env.PORT || config.get('PORT');

// Парсинг
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Подключение cors
app.use(cors());

// Подключение роутов controllers
app.use('/food', require('./routes'));

app.get('/food', (req, res) => {
  res.send("Hello world");
})

(async function () {
  try {
    // подключение БД

    await mongoose.connect(config.get('dbUrl'), {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(port, () => {
      console.log(`Server started on PORT: ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
})();
