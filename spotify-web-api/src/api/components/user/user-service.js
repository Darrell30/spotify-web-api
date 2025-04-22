const User = require('../../../models').User; 

async function getAllUsers() {
  try {
    return await User.find({});
  } catch (error) {
    throw errorResponder(errorTypes.DATABASE_ERROR, 'Failed to fetch users', error);
  }
}

async function getUserById(id) {
  try {
    const user = await User.findById(id);
    
    if (!user) {
      throw errorResponder(errorTypes.NOT_FOUND, `User with ID ${id} not found`);
    }
    
    return user;
  } catch (error) {
    if (error.name === 'CastError') {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Invalid user ID format');
    }
    throw error.type ? error : errorResponder(errorTypes.DATABASE_ERROR, 'Failed to fetch user', error);
  }
}

async function createUser(userData) {
  try {
    return await User.create(userData);
  } catch (error) {
    throw errorResponder(errorTypes.DATABASE_ERROR, 'Failed to create user', error);
  }
}

async function updateUser(id, userData) {
  try {
    const user = await User.findByIdAndUpdate(id, userData, { new: true, runValidators: true });
    
    if (!user) {
      throw errorResponder(errorTypes.NOT_FOUND, `User with ID ${id} not found`);
    }
    
    return user;
  } catch (error) {
    if (error.name === 'CastError') {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Invalid user ID format');
    }
    throw error.type ? error : errorResponder(errorTypes.DATABASE_ERROR, 'Failed to update user', error);
  }
}

async function deleteUser(id) {
  try {
    const user = await User.findByIdAndDelete(id);
    
    if (!user) {
      throw errorResponder(errorTypes.NOT_FOUND, `User with ID ${id} not found`);
    }
    
    return;
  } catch (error) {
    if (error.name === 'CastError') {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Invalid user ID format');
    }
    throw error.type ? error : errorResponder(errorTypes.DATABASE_ERROR, 'Failed to delete user', error);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};