module.exports = (db) =>
  db.model(
    'Albums',
    db.Schema({
      spotifyId: { type: String, required: true, unique: true },
      _id : String,
      name: String,
      artists: String,
      release_date: String,
      total_tracks: Number,
    })
  );
