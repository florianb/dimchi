// import CliApp from 'cli/main'
// import GuiApp from 'gui/main'

class App {
	static run() {
		console.log('running now')
		for (const argument of process.argv) {
			console.log('found argument: ', argument)
		}
	}
}

export default App
