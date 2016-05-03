const _ = require('lodash')
const parseArgs = require('minimist')
const packageJson = require('../../package.json')

class Cli {
	constructor() {
		const parsedArgs = parseArgs(
			process.argv.splice(2),
			{
				boolean: true
			}
		)

		this.params = _.get(parsedArgs, '_', [])
		this.flags = _.omit(parsedArgs, ['_'])
		this.package = packageJson
	}

	run() {
		if (this.flags.help === true) {
			this.showHelp()
			process.exit(0)
		}
	}

	showHelp() {
		console.log(`
	${this.package.name} - ${this.package.description}
	version ${this.package.version}

	Options:

	Usage:
`)
	}
}

export default Cli
