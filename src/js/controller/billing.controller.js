import { createBillingObject } from "../model/billing.model"

export const submitBillingHandler = function (event) {
	event.preventDefault()

	this.shippModel = {}
	if (this.getForm.isValid()) {
		this.shippModel = createBillingObject({
			type: this.$el.type.value,
			...this.form.value(),
		})
		console.log(this.shippModel)

		this.hide()
		this.paymentPage.show()
	}
}
