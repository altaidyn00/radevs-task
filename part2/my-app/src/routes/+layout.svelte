<script>
	import Transition from '../components/Transition.svelte';
	import "./layout.scss"
	export let data;
</script>

<div class="container">
	<main>
		<Transition pathname={data.pathname}>
			<slot />
		</Transition>
	</main>
</div>
