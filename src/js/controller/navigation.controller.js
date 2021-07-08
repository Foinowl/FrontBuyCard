

const elemenCanNextPage = ($nav, nextPage) => {

	const indexNextPage = $nav.getIndexByTabName(nextPage)

	const indexCurrentPage = $nav.getIndexByTabName($nav.getCurrentTab)

	return indexCurrentPage > indexNextPage
}

export const tabClickHandler = function (event) {
	event.preventDefault()
	
	if (!elemenCanNextPage(this, event.target.dataset.name)) {
		return
	}

	this.setCurrentTab(event.target.dataset.name)
	
	if (event.target.classList.contains("checkout__breadcrumbs-item")) {

		Array.from(
			this.$el.querySelectorAll(".checkout__breadcrumbs-item")
		).forEach((tab) => {
			tab.classList.remove("checkout__breadcrumbs-item--active")
		})

		event.target.classList.add("checkout__breadcrumbs-item--active")

		const activeTab = this.tabs.find(
			(t) => t.name === event.target.dataset.name
		)
		this.tabs.forEach((t) => t.component.hide())
		activeTab.component.show()
	}
}


export const nextPageHandler = function ($currEl, $nextEl, $nav) {
	$currEl.hide()
	$nextEl.show()

	const nav = $nav.nodeEl

	Array.from(
		nav.querySelectorAll(".checkout__breadcrumbs-item")
	).forEach((tab) => {
		tab.classList.remove("checkout__breadcrumbs-item--active")
	})

	const activeTab = Array.from(
		nav.querySelectorAll(".checkout__breadcrumbs-item")
	).find((tab) => (tab.dataset.name === $nextEl.name))

	activeTab.classList.add("checkout__breadcrumbs-item--active")

	$nav.setCurrentTab($nextEl.getName)
}


export const removeAcriveTab = function () {
	Array.from(
		this.$el.querySelectorAll(".checkout__breadcrumbs-item")
	).forEach((tab) => {
		tab.classList.remove("checkout__breadcrumbs-item--active")
	})
}
