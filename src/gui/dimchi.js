// import fs from 'fs'

import app from 'app'

// const BrowserWindow = electron.BrowserWindow

class Dimchi {
	constructor(cli) {
		this.cli = cli
		// this.windows = []
		this.subscribeCallbacks()
		console.log('constructed dimchi.')
	}

	dimchiIsReady() {
		console.info('dimchi ready.')
		// this.createWindow('index.html')
	}
/*
	allWindowsClosed() {
		if (process.platform !== 'darwin') {
			electron.app.quit()
		}
	}
*/
	subscribeCallbacks() {
		app.on('ready', () => console.log('ready..'))
		// electron.app.on('window-all-closed', this.allWindowsClosed)

		console.info('subscribed dimchi to electron.')
	}
/*
	createWindow(file) {
		const newWindow = new BrowserWindow({
			width: 800,
			height: 600
		})

		newWindow.loadURL(`file://${fs.join(__dirname, file)}`)
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
	} */
}

export default Dimchi
