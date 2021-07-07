import { Component } from './core/component'

import { ShippingComponent } from './views/shipping.component'
import { BillingComponent } from "./views/billing.component"
import { PaymentComponent } from "./views/payment.component"
import { NavigationComponent } from "./views/navigation.component"

import { submitShippingHandler } from "./controller/shipping.controller"
import { submitBillingHandler } from "./controller/billing.controller"
import { submitPaymentHandler } from "./controller/payment.controller"
import { tabClickHandler } from "./controller/navigation.controller"


export class Checkout extends Component {
	constructor(id) {
		super(id)
	}

	init() {
		this.navigation = new NavigationComponent("navigation")

		this.paymentPage = new PaymentComponent(
			"payment",
			this.navigation
		)
		this.billingPage = new BillingComponent(
			"billing",
			this.paymentPage,
			this.navigation
		)
		this.shippingPage = new ShippingComponent(
			"shipping",
			this.billingPage,
			this.navigation
		)


		this.navigation.registerTabs([
			{ name: "shipping", component: this.shippingPage },
			{ name: "billing", component: this.billingPage },
			{ name: "payment", component: this.paymentPage },
		])

		this.shippingPage.nodeEl.addEventListener(
			"submit",
			submitShippingHandler.bind(this.shippingPage)
		)


		this.billingPage.nodeEl.addEventListener(
			"submit",
			submitBillingHandler.bind(this.billingPage)
		)


		this.paymentPage.nodeEl.addEventListener(
			"submit",
			submitPaymentHandler.bind(this.paymentPage)
		)


		this.navigation.nodeEl.addEventListener("click", tabClickHandler.bind(this.navigation))
	}
}