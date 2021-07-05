var phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
var cardRegExp =
	/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
var cardExpDateRegExp = /^(0[1-9]|1[0-2])\/\d{2}$/

export class Validators {
	static required(value = "") {
		return value && value.trim()
	}

	static minLength(length) {
		return (value) => {
			return value.length >= length
		}
	}

	static phoneRequired(value = "") {
		return new RegExp(value).test(phoneRegExp)
	}

	static cardRequired(value = "") {
		return new RegExp(value).test(cardRegExp)
	}

	static cardDateRequired(value = "") {
		return new RegExp(value).test(cardExpDateRegExp)
	}
}
