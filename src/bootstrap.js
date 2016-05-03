import CliApp from './cli/main'
import GuiApp from './gui/main'

let app = null
if (process.argv.includes('--cli')) {
	app = new CliApp()
} else {
	app = new GuiApp()
}

app.run()
console.info('finished boostrap')
