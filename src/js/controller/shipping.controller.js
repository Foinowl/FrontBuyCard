import { createShippingObject } from "../model/shipping.model"

export const submitHandler = function (event) {
  	event.preventDefault()

    this.shippModel = {}
		if (this.getForm.isValid()) {
      this.shippModel = createShippingObject({
        type: this.$el.type.value,
        ...this.form.value(),
      })
      console.log(this.shippModel)

      this.hide()
      this.billingPage.show()
		}
}