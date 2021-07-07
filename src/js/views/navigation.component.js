import {Component} from "../core/component"

export class NavigationComponent extends Component {
	constructor(id) {
		super(id)

		this.tabs = []
	}

	init() { }

	registerTabs(tabs) {
		this.tabs = tabs
	}

	get nodeEl() {
		return this.$el
	}
}
