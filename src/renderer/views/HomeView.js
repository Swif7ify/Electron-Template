export const HomeView = {
	render() {
		return `
            <style>
                .container {
                    max-width: 500px;
                    margin: 40px auto;
                    padding: 32px;
                    background: #fff;
                    border-radius: 12px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                    text-align: center;
                }
                h1 {
                    color: #1976d2;
                    margin-bottom: 16px;
                }
                p {
                    color: #444;
                    margin-bottom: 24px;
                }
            </style>
            <div class="container">
                <h1>Your First Electron App</h1>
                <p>Welcome to the Electron application</p>
            </div>
        `;
	},
};
