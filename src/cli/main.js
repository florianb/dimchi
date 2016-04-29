import meow from 'meow'

class CliApp {
	constructor(currentPackageJson) {
		this.packageJson = currentPackageJson
		this.cli = meow(`
			${currentPackageJson.name} - version ${currentPackageJson.version}
			Usage:
				$ ${currentPackageJson.name} <options>
`)
	}

	run() {
		console.info(this.cli.help)
		return 0
	}
}

export default CliApp
