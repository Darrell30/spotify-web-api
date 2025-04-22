const userService = require('./user-service');

async function getAllUsers(req, res, next) {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  }
  catch(err) {
    next(err);
  }
}

async function getUserById(request, response, next) {
  try {
    const { id } = request.params;

    if (!id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'User ID is required');
    }

    const user = await userService.getUserById(id);

    return response.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

async function createUser(request, response, next) {
  try {
    const userData = request.body;

    if (!userData) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'User data is required');
    }

    const newUser = await userService.createUser(userData);

    return response.status(201).json(newUser);
  } catch (error) {
    return next(error);
  }
}

async function updateUser(request, response, next) {
  try {
    const { id } = request.params;
    const userData = request.body;

    if (!id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'User ID is required');
    }

    if (!userData) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'User data is required');
    }

    const updatedUser = await userService.updateUser(id, userData);

    return response.status(200).json(updatedUser);
  } catch (error) {
    return next(error);
  }
}

async function deleteUser(request, response, next) {
  try {
    const { id } = request.params;

    if (!id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'User ID is required');
    }

    await userService.deleteUser(id);

    return response.status(204).send();
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};