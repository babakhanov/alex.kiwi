<script lang="ts">
	import '../app.css';
	import { asset } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={asset('/favicon.svg')} />
</svelte:head>

<div class="fixed inset-0 bg-black -z-10"></div>

{@render children?.()}
