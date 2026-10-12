<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Blog - Alex Babakhanov</title>
</svelte:head>

<main class="shell blog">
	<div class="blog__intro">
		<p class="prompt"><span class="sigil">$</span> <span class="cmd">cd blog</span></p>

		<h1 class="gradient-text">Blog</h1>

		<p class="tagline"><span class="sigil">&gt;</span> Coming soon...</p>

		<a class="link blog__back" href={resolve('/')}>
			<span class="arrow" aria-hidden="true">←</span>cd ..
		</a>
	</div>

	<div class="panel">
		<p class="prompt"><span class="sigil">$</span> <span class="cmd">ls -la</span></p>
		<pre>total 0
drwxr-xr-x  2 alex  staff   64B Oct 13 12:00 .
drwxr-xr-x  3 alex  staff   96B Oct 13 12:00 ..
No blog posts yet. Check back soon!</pre>
	</div>
</main>

<style>
	.blog {
		display: flex;
		flex-direction: column;
		gap: clamp(2.5rem, 6vw, 3.5rem);
		padding-block: clamp(3.5rem, 12vh, 7rem) clamp(3.5rem, 10vh, 6rem);
	}

	.blog__intro {
		display: flex;
		flex-direction: column;
		gap: clamp(0.9rem, 2vw, 1.25rem);
		align-items: flex-start;
	}

	h1 {
		font-size: clamp(2rem, 1.4rem + 3.4vw, 3.25rem);
	}

	.blog__back {
		margin-top: 0.35rem;
		margin-left: -0.85rem;
	}

	pre {
		overflow-x: auto;
		color: var(--ink-dim);
		font: inherit;
		line-height: 1.9;
		white-space: pre;
	}
</style>
