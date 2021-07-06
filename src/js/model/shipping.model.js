


export const createShippingObject = function (data) {
  return {
		id: Math.random() * (100000 - 1) + 1,
		name: data.full_name,
		phone: data.phone,
		street: data.street,
		apt: data.apt,
		city: data.city,
		county: data.type,
		zip: data.zip,
	}
}