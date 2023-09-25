<script>
	// Supports weights 100-900
	import '@fontsource-variable/lexend'
	import '@fontsource-variable/dm-sans'
	import '$assets/styles/base.scss'

	import { page } from '$app/stores'

	import BodyWrapper from '$lib/components/Layout/BodyWrapper/BodyWrapper.svelte'
	import Header from '$lib/components/Layout/Header/Header.svelte'
	import Footer from '$lib/components/Layout/Footer/Footer.svelte'

	const yearsOfExperience = new Date().getFullYear() - 2014 - 1

	const author = 'Pavee Udomkarnpaisarn'
	const description = `Meet Pavee Udomkarnpaisarn, an ${yearsOfExperience}-year experienced front-end developer, specializing in Vue.js and exploring other cutting-edge frameworks like Svelte and Astro.`
</script>

<svelte:head>
	<title>{$page.data.title}</title>
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
