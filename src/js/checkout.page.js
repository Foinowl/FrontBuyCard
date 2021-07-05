import './core/component'

export class Checkout extends Component {
	constructor(id) {
		super(id)

		this.navigation = new NavigationComponent("navigation")

		this.shipping = new ShippingComponent()
		// this.billing = new BillingComponent()
		// this.payment = new PaymentComponent()
	}
}