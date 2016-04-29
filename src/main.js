import meow from 'meow'

// import CliApp from 'cli/main'
// import GuiApp from 'gui/main'

class App {
	static run() {
		const commandName = 'dimchi'
		const cli = meow(`
			Usage:
				$ ${commandName} <options>
`)
		cli.showHelp()
		console.log('running now')
		for (const argument of process.argv) {
			console.log('found argument: ', argument)
		}
	}
}

export default App
