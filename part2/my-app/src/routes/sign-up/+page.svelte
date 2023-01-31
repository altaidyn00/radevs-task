<script>
	import FirstForm from '../../components/FirstForm.svelte';
	import SecondForm from '../../components/SecondForm.svelte';
	import { fly } from 'svelte/transition';
	import './index.scss';

	let form = 1;

	const changeForm = (step) => {
		form = step.detail;
	};
</script>

<template>
	<div class="signup">
		{#if form === 1}
			<div in:fly={{ x: -1000, duration: 700, delay: 500 }} out:fly={{ x: 1000, duration: 700 }}>
				<h1>Step 1</h1>
				<FirstForm on:changeForm={changeForm} />
			</div>
		{:else if form === 2}
			<div in:fly={{ x: -1000, duration: 700, delay: 500 }} out:fly={{ x: 1000, duration: 700 }}>
				<h1>Step 2</h1>
				<SecondForm on:changeForm={changeForm} />
			</div>
		{/if}
	</div>
</template>
