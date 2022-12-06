// node_modules
const express = require('express');

// constants
const port = process.env.PORT || Number('4321');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running at port: "${port}".`);
});

app.get('/', (request, response) => {
  const content = '<h1>Hello, World!</h1>';
  console.log(`[GET] /`);
  response.status(200).send(content);
});

app.post('/', (request, response) => {
  const { body } = request;
  console.log(`[POST] /`);
  console.log(`Received: ${JSON.stringify(body)}`);
  const content = body;
  response.status(200).send(content);
});
