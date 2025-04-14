module.exports = (db) =>
  db.model(
    'Episodes',
    db.Schema({
      title: String,
      description: String,
      release_date: Date,
      duration_ms: Number,
        language: String,
        show: {
          id: String,
          name: String,
          publisher: String,
        },
        external_urls: Object,
        uri: String,
    })
  );
