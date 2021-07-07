import { createShippingObject } from "../model/shipping.model"
import { nextPageHandler } from "./navigation.controller"

export const submitShippingHandler = function (event) {
  	event.preventDefault()

    this.shippModel = {}
		if (this.getForm.isValid()) {
      this.shippModel = createShippingObject({
        type: this.$el.type.value,
        ...this.form.value(),
      })
      console.log(this.shippModel)

      nextPageHandler(this, this.billingPage, this.nodeNav)
		}
}