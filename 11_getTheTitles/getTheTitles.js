const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ];

  const getTheTitles = books.map(function (book) {
    return book.title;
}); 

module.exports = getTheTitles;
