import Cli from './cli'
import Dimchi from './dimchi'

class GuiApp {
	constructor() {
		this.cli = new Cli()
	}

	run() {
		this.cli.run()

		console.info(process.version)
		console.info(process.versions.electron)

		this.dimchi = new Dimchi(this.cli)
	}
}

export default GuiApp
