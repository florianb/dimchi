const packageJson = require('../package.json')

import CliApp from './cli/main'
import GuiApp from './gui/main'

class App {
	static run() {
		let app = null

		if (process.argv.includes('--cli')) {
			app = new CliApp(packageJson)
		} else {
			app = new GuiApp(packageJson)
		}

		process.exit(app.run() || 0)
	}
}

export default App
