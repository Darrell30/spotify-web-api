module.exports = (db) =>
    db.model(
      'Category',
      new db.Schema(
        {
          category_id: {
            type: String,
            required: true,
          },
          category_name: {
            type: String,
            required: true,
          },
          locale: {
            type : String,
            required: true,
          },
          playlist_id: {
            type : String,
            required : true,
          }
        },
      ),
      'category'
    );
  