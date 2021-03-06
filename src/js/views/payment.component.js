import { Component } from "../core/component"
import { Form } from "../core/form"
import { Validators } from "../core/validators"

export class PaymentComponent extends Component {
	constructor(id, page,nav) {
		super(id)
		this.nav = nav
		this.name = "payment"
		this.completPage = page
	}

	init() {
		this.form = new Form(this.$el, {
			full_name: [
				[Validators.required, "Имя обязательно"],
				[Validators.minLength(2), "Минимальная длина имени два символа"],
			],
			card: [
				[Validators.required, "Эта поле обязательно"],
				[Validators.cardRequired, "Введите корректный номер телефона"],
			],
			date: [
				[Validators.required, "Эта поле обязательно"],
				[Validators.cardDateRequired, "Введите корректную дату"],
			],
			pincod: [[Validators.required, "Эта поле обязательно"]],
		})
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
	get getForm() {
		return this.form
	}

	get nodeNav() {
		return this.nav
	}

	get getName() {
		return this.name
	}

	renderInputs() {
		return `
								<h2 class="checkout__form-name-form">Payment</h2>

						<div class="checkout__subtitle">
							<svg width="19" height="26" viewBox="0 0 19 26" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4006 14.5071V10.1378C14.4006 9.85407 14.171 9.62412 13.8877 9.62412H12.6984V5.50597C12.6984 2.47008 10.2318 0 7.20015 0C4.16852 0 1.70192 2.47008 1.70192 5.50597V9.59601H2.72775V5.50597C2.72775 3.03652 4.73417 1.02727 7.20015 1.02727C9.66614 1.02727 11.6726 3.0362 11.6726 5.50597V9.62412H0.512603C0.229314 9.62412 0 9.85407 0 10.1378V18.5931C0 19.5969 0.811803 20.4099 1.80987 20.4099H8.11179C8.37137 23.183 10.7069 25.361 13.5429 25.361C16.3659 25.361 18.7008 23.2417 18.9741 20.4317C18.9913 20.2549 19 20.0746 19 19.8959C19.0003 18.5568 18.5114 17.2681 17.6235 16.2673C16.7805 15.3176 15.6367 14.7049 14.4006 14.5071ZM1.02583 18.5975V15.3738C1.02583 15.3735 1.02583 15.3735 1.02583 15.3732V10.6514H13.3751V14.4399C10.6158 14.5246 8.36638 16.6651 8.1121 19.3826H1.80987C1.37744 19.3829 1.02583 19.0305 1.02583 18.5975ZM17.9536 20.3324C17.7318 22.6138 15.8358 24.334 13.5433 24.334C11.0997 24.334 9.11173 22.3432 9.11173 19.8962C9.11173 17.4493 11.0997 15.4585 13.5433 15.4585C14.8081 15.4585 16.0158 16.0021 16.8569 16.9497C17.5776 17.762 17.9748 18.8083 17.9748 19.8962C17.9745 20.0418 17.9676 20.1887 17.9536 20.3324Z" fill="#6B6B6B"/>
								<rect x="8" y="14.35" width="11" height="11" rx="5.5" fill="#7ED321"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M16.2687 18.1138C16.469 18.3144 16.469 18.6396 16.2687 18.8402L12.9491 22.1645C12.8489 22.2648 12.7176 22.3151 12.5866 22.3151C12.4555 22.3151 12.3242 22.2648 12.224 22.1645L10.8182 20.7567C10.6179 20.5561 10.6179 20.2308 10.8182 20.0303C11.0185 19.8297 11.3433 19.8297 11.5436 20.0303L12.5866 21.0747L15.5436 18.1135C15.7439 17.9132 16.0684 17.9132 16.2687 18.1138Z" fill="white"/>
							</svg>


							<p>This is a secure 128-bit SSL encrypted payment</p>
						</div>

						<p class="checkout__form-label">Cardholder Name</p>

						<div class="checkout__form-input-wrapper">
							<input name="full_name" class="checkout__form-input" type="text" placeholder="Name as it appears on your card">
						</div>


						<p class="checkout__form-label">Cardholder Number</p>

						<div class="checkout__form-input-wrapper">
							<input name="card" class="checkout__form-input" type="number"placeholder="XXXX XXXX XXXX XXXX XXXX">
						</div>


						<div class="checkout__container-payment">
							<div>
								<p class="checkout__form-label">Expire Date</p>

								<div class="checkout__form-input-wrapper">
									<input name="date" class="checkout__form-input checkout__form-input--mini" type="text"placeholder="MM / YY">
								</div>
							</div>
							<div>
								<p class="checkout__form-label">Security Cod</p>

								<div class="checkout__form-input-wrapper">
									<input name="pincod" class="checkout__form-input checkout__form-input--mini" type="number"placeholder>
								</div>
							</div>
						</div>

							<button type="submit" class="checkout__form-submit">
								Pay Securely
							</button>
		`
	}
}
