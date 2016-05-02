import meow from 'meow'

class Cli {
	constructor() {
		this.cli = meow(`
	Options:

	Usage:
`)
	}

	run() {
		if (this.cli.flags instanceof Array &&
			this.cli.flags.includes('help')
		) {
			this.cli.showHelp(0)
		}
	}
}

export default Cli
