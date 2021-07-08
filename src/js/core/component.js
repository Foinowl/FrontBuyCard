export class Component {
	constructor(id) {
		this.$el = document.getElementById(id)
		this.init()
	}

	init() {}

	onShow() {}

	onHide() {}

	onDestroy() { }

	hide() {
		this.$el.classList.add("hide")
		this.onHide()
	}

	destroy() {
		this.onDestroy()
	}

	show() {
		this.$el.classList.remove("hide")
		this.onShow()
	}
}