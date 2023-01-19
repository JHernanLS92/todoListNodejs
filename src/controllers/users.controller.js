const UserServices = require('../services/user.services');

const getAllUsers = async (req, res) => {
    try {
        const result = await UserServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
   
};
const getUsersTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getWithTasks(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const postUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};
const putUser = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
        const result = UserServices.update(field, {
            where: { id }
        });
        res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserServices.destroy({
          where: { id }
        });
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json(error.message);
      }
};
const getUserCategories = async (req, res) =>{
  try {
    const result = await UserServices.getCategories();
        res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
    getAllUsers,
    getUserById,
    getUsersTasks,
    postUser,
    putUser,
    deleteUser,
    getUserCategories
};