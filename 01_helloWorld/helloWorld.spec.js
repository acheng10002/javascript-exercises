// require imports the code from the js file so that it can be tested
const helloWorld = require('./helloWorld');

// describe() is the body of the test
describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
