async function searchUsers(request, response, next) {
  try {
    const { keyword } = request.query;

    if (!keyword || keyword.trim() === '') {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Search keyword is required');
    }

    const results = await usersService.searchUsers(keyword);

    return response.status(200).json(results);
  } catch (error) {
    return next(error);
  }
}
exports.searchEpisodes = async (req, res) => {
  res.send("Search episodes endpoint hit");
};

exports.searchShows = async (req, res) => {
  res.send("Search shows endpoint hit");
};

exports.searchAll = async (req, res) => {
  res.send("General search endpoint hit");
};

