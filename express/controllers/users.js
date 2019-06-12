const { UsersModel } = require('../../mongo/models')
// const { Users } = require('../../mongo/schemas')

const defaultUser = {
  name: 'Ted',
  age: '24'
}

const getAll = () => {
  return UsersModel.find({})
}

const getOne = (name) => {
  return UsersModel.findOne({name:name})
}

const createDefault = () => {
  return UsersModel.create(defaultUser)
}

const createUser = (user) => {
 return UsersModel.create(user)
}

const updateUser = (name, updates) => {
 return UsersModel.updateOne({name: name}, updates)
}

const deleteUser = (name) => {
  return UsersModel.deleteMany(name)
}

module.exports = {
  getAll,
  getOne,
  createDefault,
  createUser,
  updateUser,
  deleteUser
}