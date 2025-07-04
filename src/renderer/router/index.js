export class Router {
	constructor(routes) {
		this.routes = routes;
		this.currentRoute = "home";
	}

	navigate(route) {
		if (this.routes[route]) {
			this.currentRoute = route;
			this.render();
		}
	}

	render() {
		const app = document.getElementById("app");
		const view = this.routes[this.currentRoute];
		app.innerHTML = view.render();

		if (view.mounted) {
			view.mounted();
		}
	}
}
