import {Component} from "../core/component"

export class NavigationComponent extends Component {
	constructor(id) {
		super(id)

		this.tabs = []
		this.currentTab = 'shipping'
	}

	init() { }

	registerTabs(tabs) {
		this.tabs = tabs
	}

	setCurrentTab(val) {
		this.currentTab = val 
	}

	getIndexByTabName(name) {

		const newTabs = this.tabs.reduce((acc, curr) => {
			acc.push(curr.name)
			return acc
		}, [])

		return newTabs.indexOf(name)
	}

	get getCurrentTab() {
		return this.currentTab
	}

	get nodeEl() {
		return this.$el
	}
}
