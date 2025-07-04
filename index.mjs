import { app, BrowserWindow } from "electron";

function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 1200,
		height: 800,
		fullscreen: true,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		},
	});

	mainWindow.loadFile("index.html");

	if (process.env.NODE_ENV === "development") {
		mainWindow.webContents.openDevTools();
	}
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
