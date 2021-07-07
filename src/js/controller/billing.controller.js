import { createBillingObject } from "../model/billing.model"
import { nextPageHandler } from "./navigation.controller"

export const submitBillingHandler = function (event) {
	event.preventDefault()

	if (this.getForm.isValid()) {
		this.billingModel = createBillingObject({
			type: this.$el.type.value,
			...this.form.value(),
		})
		console.log(this.billingModel)

		nextPageHandler(this, this.paymentPage, this.nodeNav)
	}
}



export const clickShippingButton = function (event) {
	if (event.target.className === "checkout__sameas-button") {
		const shippModel = {
			...{ email: "" },
			...this.nav.tabs[0].component.shippModel,
		}
		this.hide()
		this.setBillingModel(shippModel)
		this.show()
	}
}