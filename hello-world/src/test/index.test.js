// node_modules
const fetch = require('node-fetch');

// constants
const HEADERS = { 'content-type': 'application/json' };
const URL = String('http://localhost:4321');

describe('[GET] /', () => {
  test('responds with status "200" and body "<h1>Hello, World!</h1>"', async () => {
    expect.assertions(2);
    const response = await fetch(URL);
    const { status } = response;
    const body = await response.text();
    expect(body).toBe('<h1>Hello, World!</h1>');
    expect(status).toBe(200);
  });
});

describe('[POST] /', () => {
  test('responds with status "200" and body matching request body', async () => {
    expect.assertions(2);
    const testCase = JSON.stringify({ message: String(Math.random() + 1).toString(36) });
    const response = await fetch(URL, { body: testCase, headers: HEADERS, method: 'POST' });
    const { status } = response;
    const body = await response.text();
    expect(body).toBe(testCase);
    expect(status).toBe(200);
  });
});
