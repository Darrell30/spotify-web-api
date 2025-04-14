const userService = require('./user-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getProfile(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw errorResponder(errorTypes.AUTHORIZATION_ERROR, 'Authorization token required');
    }
    const userProfile = await userService.getUserProfile(token);
    return res.status(200).json(userProfile);
  } catch (error) {
    return next(error);
  }
}

async function createUser(req, res, next) {
  try {
    const { display_name, email, spotify_id } = req.body;
    if (!display_name || !spotify_id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Missing required fields');
    }

    const newUser = await userService.createUser(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    return next(error);
  }
}

async function getUsers(req, res, next) {
  try {
    const users = await userService.getUsers();
    return res.status(200).json(users);
  } catch (error) {
    return next(error);
  }
}

async function getUserById(req, res, next) {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (!user) {
      throw errorResponder(errorTypes.RESOURCE_NOT_FOUND, 'User not found');
    }
    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    const { id } = req.params;
    const deleted = await userService.deleteUser(id);
    if (!deleted) {
      throw errorResponder(errorTypes.RESOURCE_NOT_FOUND, 'User not found');
    }
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getProfile,
  createUser,
  getUsers,
  getUserById,
  deleteUser,
};
