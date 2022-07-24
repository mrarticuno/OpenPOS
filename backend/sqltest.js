const Empresa = require('./models/empresa')

async function main() {
	const empresa = new Empresa()
	const dadosEmpresa = await empresa.getById(1)

}

await main()