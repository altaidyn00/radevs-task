<script>
	import { car } from '../../stores/car';
	import { goto } from '$app/navigation';
	import '../result.scss';
</script>

<template>
	<div class="result">
		<h1>Step 3</h1>
		<div class="info-container">
			<div class="attribute">
				<div class="attribute-label">Car brand</div>
				<div class="attribute-value">{$car.carBrand}</div>
			</div>
			<div class="attribute">
				<div class="attribute-label">Zip code</div>
				<div class="attribute-value">{$car.zipCode}</div>
			</div>
			<div class="attribute">
				<div class="attribute-label">First Name</div>
				<div class="attribute-value">{$car.firstName}</div>
			</div>
			<div class="attribute">
				<div class="attribute-label">Last name</div>
				<div class="attribute-value">{$car.lastName}</div>
			</div>
			<div class="attribute">
				<div class="attribute-label">Car model</div>
				<div class="attribute-value">{$car.carModel}</div>
			</div>
			<div class="attribute">
				<div class="attribute-label">First registration</div>
				<div class="attribute-value">{$car.firstRegistration}</div>
			</div>
		</div>
		<button on:click={() => goto('/sign-up')}>Previous</button>
	</div>
</template>
