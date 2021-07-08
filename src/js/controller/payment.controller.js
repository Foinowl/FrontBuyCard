import { createPaymentObject } from "../model/payment.model"

export const submitPaymentHandler = function (event) {
	event.preventDefault()

	if (this.getForm.isValid()) {
		this.paymentModel = createPaymentObject({
			...{ email: this.nodeNav.tabs[1].component.billingModel.email },
			...this.form.value(),
		})

		
		this.nodeNav.destroy()
		this.hide()
		this.completPage.setModel(this.paymentModel)
		this.completPage.show()
	}
}
