module.exports = (db) =>
  db.model(
    'Books',
    db.Schema({
      title: String,
    })
  );
