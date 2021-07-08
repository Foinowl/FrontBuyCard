import { createShippingObject } from "../model/shipping.model"
import { nextPageHandler } from "./navigation.controller"

export const submitShippingHandler = function (event) {
  	event.preventDefault()

		if (this.getForm.isValid()) {
      this.shippModel = createShippingObject({
        type: this.$el.type.value,
        ...this.form.value(),
      })

      nextPageHandler(this, this.billingPage, this.nodeNav)
		}
}