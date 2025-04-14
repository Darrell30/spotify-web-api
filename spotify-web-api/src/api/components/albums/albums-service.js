const booksRepository = require('./books-repository');

async function getBooks() {
  return booksRepository.getBooks();
}

async function create(title) {
  return booksRepository.create(title);
}

module.exports = {
  getBooks,
  create,
};
