module.exports = (db) =>
  db.model(
    'Users',
    db.Schema({
      email: String,
      password: String,
      fullName: String,
    })
  );
