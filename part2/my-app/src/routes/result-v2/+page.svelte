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
				<div class="attribute-label">Full name</div>
				<div class="attribute-value">{$car.firstName} {$car.lastName}</div>
			</div>
			<div class="attribute">
				<div class="attribute-label">Car model</div>
				<div class="attribute-value">{$car.carModel} {$car.carBrand}</div>
			</div>
		</div>
		<button on:click={() => goto('/sign-up')}>Previous</button>
	</div>
</template>
