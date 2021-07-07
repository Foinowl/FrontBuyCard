import { Component } from "../core/component"
import { Form } from "../core/form"
import { Validators } from "../core/validators"
import {clickShippingButton} from "../controller/billing.controller"
import { COUNTRIES } from "../countries"


export class BillingComponent extends Component {
	constructor(id, page, nav) {
		super(id)

		this.name = "billing"
		this.paymentPage = page
		this.nav = nav
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
				[Validators.zipRequired, "Введите корректный индекс"],
			],
		})


		this.$el.addEventListener("click", clickShippingButton.bind(this))
	}

	onShow() {
		const html = this.renderInputs()
		this.$el.insertAdjacentHTML("afterbegin", html)
	}

	onHide() {
		this.$el.innerHTML = ""
	}

	get nodeEl() {
		return this.$el
	}

	get nodeNav() {
		return this.nav
	}

	get getForm() {
		return this.form
	}

	get getName() {
		return this.name
	}


	setBillingModel(model) {
		this.billingModel = model
	}

	renderInputs() {

		const model = this.billingModel

		const selectValues = COUNTRIES.map((option) => {
			return `<option value=${option}>${option}</option>`
		}).join(" ")

		return `
		<div class="checkout__first-container">
			<h2 class="checkout__form-name-form">Billing Information</h2>
		
			<button class="checkout__sameas-button" type="button"> Same as shipping</button>
		</div>

			<p class="checkout__form-label">Billing Contact</p>

			<div class="checkout__form-input-wrapper">
				<input name="full_name" class="checkout__form-input" placeholder="Full name" value="${
					model ? model.name : ""
				}">
			</div>
			<div class="checkout__form-phone">
				<div class="checkout__form-input-wrapper">
					<input name="email" class="checkout__form-input checkout__form-phone-input" placeholder="E-mail"
					value="${model ? model.email : ""}"
					>
				</div>
				<p class="checkout__form-phone-label">
					For delivery <br> questions only
				</p>
			</div>

			<p class="checkout__form-label">Billing Address</p>

			<div class="checkout__form-adress">
				<div class="checkout__form-input-wrapper">
					<input name="street" class="checkout__form-input" placeholder="Street adress" value="${
						model ? model.street : ""
					}">
				</div>
				<div class="checkout__form-input-wrapper">
					<input name="apt" class="checkout__form-input" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" value="${
						model ? model.apt : ""
					}">
				</div>
				<div class="checkout__form-input-wrapper">
					<input name="city" class="checkout__form-input" placeholder="City" value="${
						model ? model.city : ""
					}">
				</div>

				<div class="checkout__form-input-container">
					
							<div>
							<select class="checkout__form-input checkout__form-country-select" placeholder="Country" name="type">
								<option value="" disabled>Country</option>

								${selectValues}
							</select>
							</div>
							
							<div class="checkout__form-input-wrapper">
							<input name="zip" class="checkout__form-input checkout__form-zip-input" placeholder="Zip code" value="${
								model ? model.zip : ""
							}">
							</div>
				</div>

				<button type="submit" class="checkout__form-submit">
					Continue
				</button>
			</div>
		`
	}
}
