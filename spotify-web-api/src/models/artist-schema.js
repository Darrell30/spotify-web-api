module.exports = (db) =>
  db.model(
    'Artist',
    new db.Schema(
      {
        artist_id: {
          type: String,
          required: true,
        },
        artist_name: {
          type: String,
          required: true,
        },
        popularity: {
          type : Number,
          required: true,
        },
      },
    ),
    'artist'
  );
