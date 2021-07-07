

export const tabClickHandler = function (event) {
  event.preventDefault()
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


