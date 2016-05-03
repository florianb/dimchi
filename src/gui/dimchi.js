import path from 'path'
import electron from 'electron'

const BrowserWindow = electron.BrowserWindow

class Dimchi {
	constructor(cli) {
		this.cli = cli
		this.windows = []
		this.subscribeCallbacks()
	}

	dimchiIsReady() {
		this.createWindow('gui/index.html')
	}

	allWindowsClosed() {
		if (process.platform !== 'darwin') {
			electron.app.quit()
		}
	}

	subscribeCallbacks() {
		electron.app.on('ready', () => {
			this.createWindow('index.html')
		})
		electron.app.on('window-all-closed', this.allWindowsClosed)
	}

	createWindow(target) {
		const newWindow = new BrowserWindow({
			width: 800,
			height: 600
		})

		newWindow.loadURL(
			`file://${path.join(__dirname, target)}`
		)
		if (this.cli.flags.dev === true) {
			newWindow.webContents.openDevTools()
		}

		newWindow.on('closed', () => {
			const thisWindow = newWindow
			this.releaseWindow(thisWindow)
		})

		this.windows.push(newWindow)
		console.info('pushed new window.')
	}

	releaseWindow(givenWindow) {
		const windowIndex = this.windows.indexOf(givenWindow)
		if (windowIndex >= 0) {
			this.windows.splice(windowIndex, 1)
		}
		console.info('destroyed window.')
	}
}

export default Dimchi
