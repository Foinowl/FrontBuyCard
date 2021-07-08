import { Component } from "../core/component"
import {
	tabClickHandler,
	removeAcriveTab,
} from "../controller/navigation.controller"


export class NavigationComponent extends Component {
	constructor(id) {
		super(id)

		this.tabs = []
		this.currentTab = "shipping"
	}

	init() {
		this.$el.addEventListener(
			"click",
			tabClickHandler.bind(this)
		)
		this.removeAcriveTab = removeAcriveTab.bind(this)
	}

	onDestroy() {
		this.removeAcriveTab()
		
		this.$el.removeEventListener("click", tabClickHandler.bind(this))

		this.tabs = []
		
	}

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
