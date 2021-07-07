const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = config.get('PORT');

// Парсинг
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Подключение morgan
app.use(morgan('combined'));

// Подключение cors
app.use(cors());

// Подключение роутов controllers
app.use('/food', require('./routes'));

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
