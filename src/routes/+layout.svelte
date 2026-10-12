<script lang="ts">
	import '../app.css';
	import { asset } from '$app/paths';

	let { children } = $props();

	// A build-time constant, not `new Date()` — this page is prerendered, and a
	// runtime clock would desync the markup the client hydrates against.
	const year = __BUILD_YEAR__;
</script>

<svelte:head>
	<link rel="icon" href={asset('favicon.svg')} />
</svelte:head>

<div class="page">
	{@render children?.()}

	<footer class="footer">
		<div class="shell">© {year} Alex Babakhanov</div>
	</footer>
</div>
