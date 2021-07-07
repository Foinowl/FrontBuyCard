
export const createBillingObject = function (data) {
	return {
		id: Math.random() * (100000 - 1) + 1,
		name: data.full_name,
		email: data.email,
		street: data.street,
		apt: data.apt,
		city: data.city,
		county: data.type,
		zip: data.zip,
	}
}
