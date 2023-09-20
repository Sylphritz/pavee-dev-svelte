<script lang="ts">
	import HeaderNavigation from './HeaderNavigation/HeaderNavigation.svelte'
</script>

<header class="lg:py-3 md:py-1 flex flex-row justify-between md:justify-start items-baseline gap-3">
	<a
		href="/"
		class="inline-block text-2xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent hover:text-transparent font-['Lexend_Variable'] tracking-tight"
		>PAVEE<small class="opacity-60 text-green-300">.dev</small></a
	>
	<HeaderNavigation />
</header>
