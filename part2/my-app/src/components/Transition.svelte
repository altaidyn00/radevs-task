<script>
	import { fly } from 'svelte/transition';
	export let pathname = '';
</script>

{#key pathname}
	<div in:fly={{ x: -1000, duration: 700, delay: 500 }} out:fly={{ x: 1000, duration: 700 }}>
		<slot />
	</div>
{/key}
