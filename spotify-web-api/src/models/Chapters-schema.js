// models/Chapters.js
module.exports = (mongoose) => {
  const ChaptersSchema = new mongoose.Schema({
    chapter_id: {
      type: String,
      required: true,
      unique: true,
    },
    market: {
      type: String,
      required: true,
    },
    chapter_ids: {
      type: [String],
      default: [],
    },
  }, { timestamps: true });

  return mongoose.model('Chapters', ChaptersSchema, 'chapter');

  
};

