import { Component } from "../core/component"
import { Form } from "../core/form"
import { Validators } from "../core/validators"

export class BillingComponent extends Component {
	constructor(id, page) {
    super(id)
    
		this.paymentPage = page
	}

	init() {
		this.form = new Form(this.$el, {
			full_name: [
				[Validators.required, "Имя обязательно"],
				[Validators.minLength(2), "Минимальная длина имени два символа"],
			],
			email: [
				[Validators.required, "Email обязателен"],
				[Validators.emailRequired, "Введите корректный Email"],
			],
			street: [[Validators.required, "Улица обязательна"]],
			apt: [[Validators.required, "Квартира обязательна"]],
			city: [[Validators.required, "Город обязателен"]],
			zip: [
				[Validators.required, "Индекс обязателен"],
				[Validators.zipRequired, "Введите корректный индекс"]
			],
		})
	}

	onShow() {
		const html = this.renderInputs()
		this.$el.insertAdjacentHTML("afterbegin", html)
	}

	get nodeEl() {
		return this.$el
	}


	get getForm() {
		return this.form
	}

	renderInputs() {
		return `
			<h2 class="checkout__form-name-form"> Billing Info</h2>

			<p class="checkout__form-label">Billing Contact</p>

			<div class="checkout__form-input-wrapper">
				<input name="full_name" class="checkout__form-input" placeholder="Full name">
			</div>
			<div class="checkout__form-phone">
				<div class="checkout__form-input-wrapper">
					<input name="email" class="checkout__form-input checkout__form-phone-input" placeholder="E-mail">
				</div>
				<p class="checkout__form-phone-label">
					For delivery <br> questions only
				</p>
			</div>

			<p class="checkout__form-label">Billing Address</p>

			<div class="checkout__form-adress">
				<div class="checkout__form-input-wrapper">
					<input name="street" class="checkout__form-input" placeholder="Street adress">
				</div>
				<div class="checkout__form-input-wrapper">
					<input name="apt" class="checkout__form-input" placeholder="Apt, Suite, Bldg, Gate Code. (optional)">
				</div>
				<div class="checkout__form-input-wrapper">
					<input name="city" class="checkout__form-input" placeholder="City">
				</div>

				<div class="checkout__form-input-container">
					
							<div>
							<select class="checkout__form-input checkout__form-country-select" placeholder="Country" name="type">
								<option value disabled">Country</option>
								<option value="Afghanistan">Afghanistan</option>
							</select>
							</div>
							
							<div class="checkout__form-input-wrapper">
							<input name="zip" class="checkout__form-input checkout__form-zip-input" placeholder="Zip code">
							</div>
				</div>

				<button type="submit" class="checkout__form-submit">
					Continue
				</button>
			</div>
		`
	}
}
