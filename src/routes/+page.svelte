<script lang="ts">
	import { asset, resolve } from '$app/paths';

	const links = [
		{ label: 'me@alex.kiwi', href: 'mailto:me@alex.kiwi' },
		{ label: 'github.com/babakhanov', href: 'https://github.com/babakhanov' },
		{ label: 'linkedin.com/in/babakhanov', href: 'https://linkedin.com/in/babakhanov' },
		{ label: 'instagram.com/alexbabakhanov', href: 'https://instagram.com/alexbabakhanov' },
		{ label: 't.me/alexbabakhanov', href: 'https://t.me/alexbabakhanov' },
		{ label: '/blog', href: resolve('/blog') }
	];

	const external = (href: string) => href.startsWith('http');
</script>

<svelte:head>
	<title>Alex Babakhanov</title>
</svelte:head>

<main>
	<!-- The hero owns the first screenful on every device: identity on the
	     left, the bird on the right (below it on narrow screens). -->
	<section class="hero shell">
		<div class="hero__intro">
			<p class="prompt">
				<span class="sigil">$</span> <span class="cmd">whoami</span><span
					class="caret"
					aria-hidden="true"></span
				>
			</p>

			<h1 class="gradient-text">Alex Babakhanov</h1>

			<p class="tagline"><span class="sigil">&gt;</span> Developer &amp; Photographer</p>

			<ul class="link-list">
				{#each links as link (link.href)}
					<li>
						<a
							class="link"
							href={link.href}
							target={external(link.href) ? '_blank' : undefined}
							rel={external(link.href) ? 'noopener noreferrer' : undefined}
						>
							<span class="arrow" aria-hidden="true">→</span>{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="hero__art">
			<img src={asset('kiwi.svg')} alt="" width="930" height="795" />
		</div>
	</section>

	<section class="about shell">
		<div class="panel">
			<p class="prompt"><span class="sigil">$</span> <span class="cmd">cat about.txt</span></p>
			<p>
				Platform engineer passionate about building distributed systems and full-stack
				applications.
			</p>
			<p>
				When I'm not coding, you'll find me behind the camera capturing moments, reading
				science fiction, or exploring new places around the world.
			</p>
		</div>
	</section>
</main>

<style>
	.hero {
		display: grid;
		gap: clamp(2rem, 6vw, 4.5rem);
		align-content: center;
		align-items: center;
		min-height: 100svh;
		padding-block: clamp(3rem, 10vh, 7rem) clamp(2.25rem, 7vh, 5rem);
	}

	.hero__intro {
		display: flex;
		flex-direction: column;
		gap: clamp(0.9rem, 2vw, 1.25rem);
		min-width: 0;
	}

	h1 {
		font-size: var(--step-3);
	}

	/* Blinking block cursor, the one moving part on the page. */
	.caret {
		display: inline-block;
		width: 0.5em;
		height: 1.05em;
		margin-left: 0.35em;
		background: var(--accent);
		vertical-align: -0.15em;
		animation: blink 1.15s steps(1, end) infinite;
	}

	@keyframes blink {
		0%,
		49% {
			opacity: 1;
		}
		50%,
		100% {
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.caret {
			animation: none;
		}
	}

	.link-list {
		margin-top: clamp(0.5rem, 1.5vw, 1rem);
	}

	.hero__art {
		position: relative;
		justify-self: center;
		width: min(52vw, 15rem);
	}

	/* Hologram haze behind the bird. */
	.hero__art::before {
		content: '';
		position: absolute;
		inset: -18%;
		border-radius: 50%;
		background: radial-gradient(circle at 50% 45%, rgba(47, 232, 166, 0.18), transparent 65%);
		filter: blur(8px);
	}

	.hero__art img {
		position: relative;
		width: 100%;
		height: auto;
		filter: drop-shadow(0 0 26px rgba(47, 232, 166, 0.22));
	}

	.about {
		padding-bottom: clamp(3.5rem, 10vh, 6rem);
	}

	/* Side by side once there is room for the bird not to crowd the text. */
	@media (min-width: 900px) {
		.hero {
			grid-template-columns: minmax(0, 1fr) minmax(0, 21rem);
		}

		.hero__art {
			width: 100%;
			justify-self: end;
		}
	}
</style>
