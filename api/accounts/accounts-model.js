const { get } = require('superagent')
const db = require('../../data/db-config')

const getAll = () => {
  return db('accounts')
}

const getById = idParam => {
  return db('accounts').where('id', idParam).first()
}

const create = async ({ name, budget }) => {
  const [id] = await db('accounts').insert({ name, budget })
  return getById(id)
}

const updateById = async (id, { name, budget }) => {
  await db('accounts').where('id', id).update({ name, budget })
  return getById(id)
}

const deleteById = async id => {
  const deletedPost = await getById(id)
  await db('accounts').where('id', id).delete()
  return deletedPost
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
