import Cli from './cli'

class GuiApp {
	constructor(packageJson) {
		this.cli = new Cli(packageJson)
	}

	run() {
		if (this.cli.hasPassed === true) {
			return this.launchElectron()
		}

		return 0
	}

	launchElectron() {
		console.info('launching Electron')
	}

}

export default GuiApp
