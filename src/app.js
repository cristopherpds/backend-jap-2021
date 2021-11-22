const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
app.use(cors());

/*GET*/
app.get('/products', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'ecommerce-api-master/ecommerce-api-master/product/all.json'));
});

app.get('/cart-info-2', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'ecommerce-api-master/ecommerce-api-master/cart/654.json'));
});

app.get('/categorias', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/ecommerce-api-master/ecommerce-api-master/category/all.json'));
});

app.get('/publish', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/ecommerce-api-master/ecommerce-api-master/product/publish.json'));
});


app.get('/categoria-info', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/ecommerce-api-master/ecommerce-api-master/category/1234.json'));
});

app.get('/cart-info', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/ecommerce-api-master/ecommerce-api-master/cart/987.json'));
});

app.get('/products-info', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/ecommerce-api-master/ecommerce-api-master/product/5678.json'));
});

app.get('/product-info-comments', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'ecommerce-api-master/ecommerce-api-master/product/5678-comments.json'));
});

app.get('/buy', (req, res) => {
  res.sendFile(path.join(__dirname, 'ecommerce-api-master/ecommerce-api-master/cart/buy.json'));
})


/*POST*/
app.post('/buy', (req, res) => {
  fs.writeFileSync(path.join(__dirname, './logs/log.txt'), JSON.stringify(req.body));

  let msj = {
    dato: 'Log generado',
  }

  res.send(JSON.stringify(msj));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});