<script>
	import kiwi from '$lib/assets/kiwi.svg';
</script>

<svelte:head>
	<title>Alex Babakhanov</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="min-h-screen bg-black text-green-400" style="font-family: 'JetBrains Mono', monospace;">
	<div class="container mx-auto px-8 py-20">
		<div class="max-w-4xl mx-auto">
			<div class="flex flex-col md:flex-row items-center gap-12 mb-20">
				<div class="flex-shrink-0">
					<img src={kiwi} alt="Alex Babakhanov" class="w-48 h-48 md:w-64 md:h-64" />
				</div>
				<div class="flex-1">
					<div class="mb-6">
						<span class="text-gray-500">$</span> <span class="text-white">whoami</span>
					</div>
					<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Alex Babakhanov</h1>
					<p class="text-xl text-green-300 mb-8">&gt; Developer & Photographer</p>
					<div class="space-y-2">
						<div><span class="text-gray-500">→</span> <a href="https://github.com/babakhanov" target="_blank" class="text-green-400 hover:text-green-300 transition underline">github.com/babakhanov</a></div>
						<div><span class="text-gray-500">→</span> <a href="https://linkedin.com/in/babakhanov" target="_blank" class="text-green-400 hover:text-green-300 transition underline">linkedin.com/in/babakhanov</a></div>
						<div><span class="text-gray-500">→</span> <a href="https://instagram.com/alexbabakhanov" target="_blank" class="text-green-400 hover:text-green-300 transition underline">instagram.com/alexbabakhanov</a></div>
						<div><span class="text-gray-500">→</span> <a href="https://t.me/patercap" target="_blank" class="text-green-400 hover:text-green-300 transition underline">t.me/patercap</a></div>
					</div>
				</div>
			</div>

			<section class="mb-20 border border-green-900 p-8 rounded bg-green-950/20">
				<div class="mb-4">
					<span class="text-gray-500">$</span> <span class="text-white">cat about.txt</span>
				</div>
				<div class="text-green-300 space-y-3 pl-4">
					<p>
						Platform engineer passionate about building distributed systems
						and full-stack applications.
					</p>
					<p>
						When I'm not coding, you'll find me behind the camera capturing moments,
						reading science fiction, or exploring new places around the world.
					</p>
				</div>
			</section>

			<footer class="text-center pt-12 border-t border-green-900">
				<p class="text-gray-600">© 2025 Alex Babakhanov</p>
			</footer>
		</div>
	</div>
</div>