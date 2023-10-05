<script>
	// Supports weights 100-900
	import '@fontsource-variable/lexend'
	import '@fontsource-variable/dm-sans'
	import '$assets/styles/base.scss'

	import { page } from '$app/stores'

	import BodyWrapper from '$lib/components/Layout/BodyWrapper.svelte'
	import Header from '$lib/components/Layout/Header.svelte'
	import Footer from '$lib/components/Layout/Footer.svelte'

	const yearsOfExperience = new Date().getFullYear() - 2014 - 1

	const author = 'Pavee Udomkarnpaisarn'
	const description = `Meet Pavee Udomkarnpaisarn, an ${yearsOfExperience}-year experienced front-end developer, specializing in Vue.js and exploring other cutting-edge frameworks like Svelte and Astro.`
</script>

<svelte:head>
	{#if $page.data.title}
		<title>{$page.data.title} - Pavee.dev</title>
	{:else}
		<title
			>Pavee Udomkarnpaisarn | Certified Vue.js Developer | Front-end/Full-stack Developer -
			Pavee.dev</title
		>
	{/if}
	<meta name="author" content={author} />
	<meta name="description" content={description} />
</svelte:head>

<main>
	<BodyWrapper>
		<Header />
		<slot />
		<Footer />
	</BodyWrapper>
</main>
