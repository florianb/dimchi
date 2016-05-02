import meow from 'meow'

class CliApp {
	constructor() {
		this.cli = meow(`
	Options:

	Usage:
`)
	}

	run() {
		this.cli.showHelp(0)
	}
}

export default CliApp
