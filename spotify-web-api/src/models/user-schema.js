module.exports = (mongoose) => {
    const userSchema = new mongoose.Schema({
      display_name: String,
      user_id: String,
      followed_artist: String,
      playlist: String
    });
  
    return mongoose.model('User', userSchema);
  };