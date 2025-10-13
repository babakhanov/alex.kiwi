<script>
	const currentYear = new Date().getFullYear();
</script>

<svelte:head>
	<title>Blog - Alex Babakhanov</title>
</svelte:head>

<div class="min-h-screen bg-black text-green-400" style="font-family: 'JetBrains Mono', monospace;">
	<div class="container mx-auto px-8 pt-12 pb-4">
		<div class="max-w-4xl mx-auto">
			<div class="mb-12">
				<div class="mb-6">
					<span class="text-gray-500">$</span> <span class="text-white">cd blog</span>
				</div>
				<h1 class="text-4xl font-bold text-white mb-4">Blog</h1>
				<p class="text-xl text-green-300">&gt; Coming soon...</p>
			</div>

			<section class="mb-20 border border-green-900 p-8 rounded bg-green-950/20">
				<div class="mb-4">
					<span class="text-gray-500">$</span> <span class="text-white">ls -la</span>
				</div>
				<div class="text-green-300 space-y-3 pl-4">
					<p>total 0</p>
					<p>drwxr-xr-x  2 alex  staff   64B Oct 13 12:00 .</p>
					<p>drwxr-xr-x  3 alex  staff   96B Oct 13 12:00 ..</p>
					<p>No blog posts yet. Check back soon!</p>
				</div>
			</section>

			<footer class="text-center pt-12 border-t border-green-900">
				<p class="text-gray-600">© {currentYear} Alex Babakhanov</p>
			</footer>
		</div>
	</div>
</div>