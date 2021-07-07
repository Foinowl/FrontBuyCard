export const submitPaymentHandler = function (event) {
	event.preventDefault()

	this.shippModel = {}
	if (this.getForm.isValid()) {
		this.shippModel = createPayementObject({
			...this.form.value(),
		})
		console.log(this.shippModel)

		nextPageHandler(this, this.billingPage, this.nodeNav)
	}
}
