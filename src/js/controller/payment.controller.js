import { createPaymentObject } from "../model/payment.model"
import { nextPageHandler } from "./navigation.controller"

export const submitPaymentHandler = function (event) {
	event.preventDefault()

	if (this.getForm.isValid()) {
		this.paymentModel = createPaymentObject({
			...this.form.value(),
		})
		console.log(this.shippModel)

		nextPageHandler(this, this.billingPage, this.nodeNav)
	}
}
