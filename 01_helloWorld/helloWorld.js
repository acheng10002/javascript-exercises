const helloWorld = function() {
  // tests are set up in such a way that I only have to write the code being tested
  // I should not have to worry about importing or exporting anything
  return 'Hello, World!';
};

// below exports the function so that it can be imported with require()
module.exports = helloWorld;
