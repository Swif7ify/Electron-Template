# Electron App Template

A minimal, clean Electron application template that provides a solid foundation for building cross-platform desktop applications. This template includes basic setup, modern styling, and a simple interactive example to get you started quickly.

## Features

- ✨ Clean, modern UI with responsive design
- 🚀 Ready-to-use Electron setup
- 📦 Minimal dependencies for fast development
- 🎨 Pre-styled components with hover effects
- 🔧 Easy customization and extensibility
- 📱 Cross-platform compatibility (Windows, macOS, Linux)

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12.20.55 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Quick Start

### 1. Clone or Download
```bash
git clone <your-repo-url>
cd ocpl-logging
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Application
```bash
npm start
```

The application will launch in a new window with a clean interface and a demo button to test functionality.

## Project Structure

```
├── index.html          # Main HTML file with UI layout
├── index.js            # Main Electron process
├── renderer.js         # Renderer process scripts
├── package.json        # Project configuration and dependencies
├── package-lock.json   # Dependency lock file
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## File Overview

### `index.js` (Main Process)
- Creates the main application window
- Handles app lifecycle events
- Configures window properties and web preferences

### `index.html` (UI)
- Clean, responsive layout with modern styling
- Includes a demo button and output area
- Uses embedded CSS for easy customization

### `renderer.js` (Renderer Process)
- Handles DOM interactions
- Manages button click events
- Can be extended for more complex UI logic

## Customization

### Changing Window Properties
Edit the `createWindow()` function in `index.js`:
```javascript
const mainWindow = new BrowserWindow({
    width: 1200,        // Window width
    height: 800,        // Window height
    // Add more options as needed
});
```

### Modifying the UI
Update `index.html` to change:
- Layout and structure
- Styling and colors
- Content and text

### Adding Functionality
Extend `renderer.js` to add:
- More interactive elements
- API integrations
- Complex UI behaviors

## Development Scripts

- `npm start` - Launch the Electron application
- `npm test` - Run tests (placeholder - add your own tests)

## Building for Production

To prepare your app for distribution, you may want to add build tools like:
- [electron-builder](https://www.electron.build/) - Package and build
- [electron-forge](https://www.electronforge.io/) - Build and publish

Example with electron-builder:
```bash
npm install electron-builder --save-dev
```

Add to package.json:
```json
"scripts": {
    "build": "electron-builder",
    "dist": "electron-builder --publish=never"
}
```

## Security Considerations

This template includes basic security settings:
- `nodeIntegration: true` - Consider disabling for production
- `contextIsolation: false` - Consider enabling for production

For production apps, review and implement:
- Content Security Policy (CSP)
- Secure defaults for web preferences
- Input validation and sanitization

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Electron](https://www.electronjs.org/)
- Created by Earl Romeo Ordovez
- Template designed for rapid prototyping and development

## Support

If you encounter any issues or have questions:
1. Check the [Electron documentation](https://www.electronjs.org/docs)
2. Search existing issues in this repository
3. Create a new issue with detailed information

---

**Happy coding!** 🚀

Feel free to customize this template to fit your specific needs and build amazing desktop applications with Electron.