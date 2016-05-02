import app from 'app'

import Cli from './cli'
// import Dimchi from './dimchi'

class GuiApp {
	constructor() {
		this.cli = new Cli()
	}

	run() {
		this.cli.run()

		console.info(process.versions.electron)

		app.on('ready', () => console.info('were ready'))
		app.on('will-finish-launching', () => console.info('will finish soon..'))
		// this.dimchi = new Dimchi(this.cli)
	}
}

export default GuiApp
