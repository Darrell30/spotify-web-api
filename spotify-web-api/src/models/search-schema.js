module.exports = (db) =>
  db.model(
    'Users',
    db.Schema(
      {
        email: {
          type: String,
          required: true,
          unique: true,
          lowercase: true,
          trim: true,
        },
        password: {
          type: String,
          required: true,
        },
        fullName: {
          type: String,
          required: true,
          trim: true,
        },
      },
    )
  );
