<script>
	import { createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';
	import { Progress } from 'sveltestrap';
	import { setCar } from '../stores/car';
	import './form.scss';

	const dispatch = createEventDispatcher();

	let firstName = '';
	let lastName = '';
	let carModel = '';
	let firstRegistration = '';

	let firstNameValid = true;
	let lastNameValid = true;
	let carModelValid = true;
	let firstRegistrationValid = true;

	let showProgressBar = false;
	let progressBar = 0;

	const submit = () => {
		const touchFirstNameValidation = validateFirstName(firstName);
		const touchLastNameValidation = validateLastName(lastName);
		const touchCarModelValidation = validateCarModel(carModel);
		const touchFirstRegistrationValidation = validateFirstRegistration(firstRegistration);

		if (
			!touchFirstNameValidation ||
			!touchLastNameValidation ||
			!touchCarModelValidation ||
			!touchFirstRegistrationValidation
		)
			return;
		setCar({ firstName, lastName, carModel, firstRegistration });
		showProgressBar = true;
		setTimeout(() => {
			incrementProgressBar();
		}, 1000);
		setTimeout(() => {
			randomRedirect();
		}, 6000);
	};

	const incrementProgressBar = () => {
		for (let i = 1; i <= 4; i++) {
			setTimeout(() => {
				progressBar += 100 / 4;
			}, i * 1000);
		}
	};

	const validateFirstName = (firstName) => {
		firstNameValid = firstName === '' ? false : true;
		return firstNameValid;
	};

	const validateLastName = (lastName) => {
		lastNameValid = lastName === '' ? false : true;
		return lastNameValid;
	};

	const validateCarModel = (carModel) => {
		carModelValid = carModel === '' ? false : true;
		return carModelValid;
	};

	const validateFirstRegistration = (firstRegistration) => {
		firstRegistrationValid = firstRegistration === '' ? false : true;
		return firstRegistrationValid;
	};

	const randomRedirect = () => {
		const result = Math.floor(Math.random() * 2) + 1;
		goto(`/result-v${result}`);
	};
</script>

<template>
	<div class="form">
		<div class="custom-field">
			<label for="firstName">First Name</label>
			<input
				type="text"
				id="firstName"
				placeholder="Enter first name"
				autocomplete="false"
				bind:value={firstName}
				class:input--invalid={!firstNameValid}
			/>
			{#if !firstNameValid}
				<p class="error-message">Required</p>
			{/if}
		</div>
		<div class="custom-field">
			<label for="lastName">Last Name</label>
			<input
				type="text"
				id="zipCode"
				placeholder="Enter last name"
				autocomplete="false"
				bind:value={lastName}
				class:input--invalid={!lastNameValid}
			/>
			{#if !lastNameValid}
				<p class="error-message">Required</p>
			{/if}
		</div>
		<div class="custom-field">
			<label for="carModel">Car Model</label>
			<input
				type="text"
				id="carModel"
				placeholder="Enter car model"
				autocomplete="false"
				bind:value={carModel}
				class:input--invalid={!carModelValid}
			/>
			{#if !carModelValid}
				<p class="error-message">Required</p>
			{/if}
		</div>
		<div class="custom-field">
			<label for="firstRegistration">First Registration</label>
			<input
				type="text"
				id="firstRegistraion"
				placeholder="Enter first registration"
				autocomplete="false"
				bind:value={firstRegistration}
				class:input--invalid={!firstRegistrationValid}
			/>
			{#if !firstRegistrationValid}
				<p class="error-message">Required</p>
			{/if}
		</div>
		<div class="buttons-container">
			<button on:click={() => dispatch('changeForm', 1)}>Previous</button>
			<button on:click={submit}>Next</button>
		</div>
		{#if showProgressBar}
			<Progress value={progressBar}>{progressBar}%</Progress>
		{/if}
	</div>
</template>
