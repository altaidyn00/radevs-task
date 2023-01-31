import { writable } from 'svelte/store';

export const car = writable({
	carBrand: null,
	zipCode: null,
	firstName: null,
	lastName: null,
	carModel: null,
	firstRegistration: null
});

export const setCar = (payload) => {
	car.update((car) => {
		return { ...car, ...payload };
	});
};
