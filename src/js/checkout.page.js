import { Component } from './core/component'
import { ShippingComponent } from './views/shipping.component'
import { BillingComponent } from "./views/billing.component"

import { submitHandler } from "./controller/shipping.controller"

export class Checkout extends Component {
	constructor(id) {
		super(id)

		// this.navigation = new NavigationComponent("navigation")

		// this.shippingPage = new ShippingComponent("shipping")

		// this.billing = new BillingComponent("billing")
		// this.payment = new PaymentComponent("payment")
	}

	init() {
		// this.payment = new PaymentComponent("payment")
		this.billing = new BillingComponent("billing")
		this.shippingPage = new ShippingComponent("shipping", this.billing)

		this.shippingPage.nodeEl.addEventListener(
			"submit",
			submitHandler.bind(this.shippingPage)
		)
	}
}