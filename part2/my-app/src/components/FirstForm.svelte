<script>
	import { createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';
	import { setCar } from '../stores/car';
	import './form.scss';

	const dispatch = createEventDispatcher();

	let carBrand = '';
	let zipCode = '';

	let carBrandValid = true;
	let zipCodeValid = true;

	let carBrandValidation = ['Audi', 'BMW', 'Nissan'];
	let zipCodeValidation = [65000, 66000, 67000, 68000];

	const submit = () => {
		const touchBrandValidation = validateCarBrand(carBrand);
		const touchZipValidation = validateZipCode(zipCode);

		if (!touchBrandValidation || !touchZipValidation) return;
		setCar({ carBrand, zipCode });
		dispatch('changeForm', 2);
	};

	const validateCarBrand = (brand) => {
		carBrandValid = carBrandValidation.some((element) => {
			return element.toLowerCase() === brand.toLowerCase();
		});
		return carBrandValid;
	};

	const validateZipCode = (zip) => {
		zipCodeValid = zipCodeValidation.includes(+zip);
		return zipCodeValid;
	};
</script>

<template>
	<div class="form">
		<div class="custom-field">
			<label for="carBrand">Car Brand</label>
			<input
				type="text"
				id="carBrand"
				placeholder="Enter car brand"
				autocomplete="false"
				bind:value={carBrand}
				class:input--invalid={!carBrandValid}
			/>
			{#if !carBrandValid}
				<p class="error-message">Car brand is unfortunately not serviced</p>
			{/if}
		</div>
		<div class="custom-field">
			<label for="zipCode">Zip Code</label>
			<input
				type="number"
				id="zipCode"
				placeholder="Enter zip code"
				autocomplete="false"
				bind:value={zipCode}
				class:input--invalid={!zipCodeValid}
			/>
			{#if !zipCodeValid}
				<p class="error-message">Postal code is unfortunately not serviced</p>
			{/if}
		</div>
		<div class="buttons-container">
			<button on:click={() => goto('/')}>Previous</button>
			<button on:click={submit}>Next</button>
		</div>
	</div>
</template>
