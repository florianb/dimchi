import CliApp from './cli/main'
import GuiApp from './gui/main'

class App {
	constructor() {
		if (process.argv.includes('--cli')) {
			this.app = new CliApp()
		} else {
			this.app = new GuiApp()
		}
	}

	run() {
		this.app.run()
	}
}

export default App
