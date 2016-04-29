import CliApp from 'cli/main'
import GuiApp from 'gui/main'

class App {
	static App() {
		for (let argument of process.argv) {
			console.info('found argument: ', argument)
		}
	}
}
