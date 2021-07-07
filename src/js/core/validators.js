var phoneRegExp = /^(?:\+|\d)[\d\-\(\) ]{9,}\d/g
var emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

var zipRussiaRegExp = /^\d{6}$/
var zipAmericanRegExp = /^\d{5}(?:[-\s]\d{4})?$/

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
		return new RegExp(phoneRegExp).test(value)
	}

	static emailRequired(value = "") {
		return new RegExp(emailRegExp).test(value)
	}

	static zipRequired(value = "") {
		return (
			new RegExp(zipRussiaRegExp).test(value) ||
			new RegExp(zipAmericanRegExp).test(value)
		)
	}

	static cardRequired(value = "") {
		return new RegExp(cardRegExp).test(value)
	}

	static cardDateRequired(value = "") {
		return new RegExp(cardExpDateRegExp).test(value)
	}
}
