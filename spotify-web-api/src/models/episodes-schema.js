module.exports = (db) => {

    const episodeSchema = new db.Schema({
      title: { type: String, required: true },
      description: { type: String },
      release_date: { type: Date },
      duration_ms: { type: Number },
      language: { type: String },
      show: {
        id: { type: String },
        name: { type: String },
        publisher: { type: String },
      },
      external_urls: { type: db.Schema.Types.Mixed },
      uri: { type: String },
    });

    return db.models.Episodes || db.model('Episodes', episodeSchema);
  };