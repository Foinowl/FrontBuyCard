export class Form {
	constructor(form, controls) {
		this.form = form
		this.controls = controls
	}

	value() {
		const value = {}
		Object.keys(this.controls).forEach((control) => {
			value[control] = this.form[control].value
		})
		return value
	}

	clear() {
		Object.keys(this.controls).forEach((control) => {
			this.form[control].value = ""
		})
	}

	isValid() {
		let isFormValid = true

		Object.keys(this.controls).forEach((control) => {
			const validators = this.controls[control]

			let isValid = true
			for (let i = 0; i < validators.length; i++) {
				const lst = validators[i]
				const validator = lst[0]
				const messageError = lst[1]

				isValid = validator(this.form[control].value) && isValid

				if (!isValid) {
					setError(this.form[control], messageError)
					break
				}

				if (isValid) {
					clearError(this.form[control])
				}
			}

			isFormValid = isFormValid && isValid
		})

		return isFormValid
	}
}

function setError($control, mess) {
	clearError($control)

	const error = `
		<div class="validation-error">${mess}</div>
	`
	$control.insertAdjacentHTML("beforebegin", error)
}

function clearError($control) {
	const errorNode = $control.nextSibling.parentNode.querySelector(".validation-error")
	if (errorNode) {
		errorNode.remove()
	}
}
