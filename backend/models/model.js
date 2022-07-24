const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const Model = (modelo) => {
	const exec = async (func) => {
		try {
			return await func()
		} finally {
			await prisma.$disconnect()
		}
	}

	const getById = async (id) => {
		return await exec(async () => {
			return await prisma[modelo].findUnique({
				where: {
					id: id
				}
			})
		})
	}

	const getAll = async (getObj) => {
		if (!getObj)
			return await exec(async () => {
				return await prisma[modelo].findMany()
			})
		return await exec(async () => {
			return await prisma[modelo].findMany(getObj)
		})
	}

	const find = async (getObj) => {
		return await exec(async () => {
			return await prisma[modelo].findUnique(getObj)
		})
	}

	const create = async (data) => {
		return await exec(async () => {
			return await prisma[modelo].create({
				data: {
					...data
				}
			})
		})
	}

	const update = async (id, data) => {
		return await exec(async () => {
			return await prisma[modelo].update({
				where: {
					id: id
				},
				data: {
					...data
				}
			})
		})
	}

	const createOrUpdate = async (id, data) => {
		return await exec(async () => {
			return await prisma[modelo].upsert({
				where: {
					id: id
				},
				update: {
					...data
				},
				create: {
					...data
				}
			})
		})
	}

	const deleteById = async (id) => {
		return await exec(async () => {
			return await prisma[modelo].delete({
				where: {
					id: id
				}
			})
		})
	}

	const truncate = async () => {
		return await exec(async () => {
			return await prisma[modelo].deleteMany({})
		})
	}

	return {
		exec, // Exporta funcao para testes
		getById,
		getAll,
		find,
		create,
		createOrUpdate,
		update,
		truncate,
		deleteById
	}
}

module.exports = Model
