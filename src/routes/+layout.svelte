<script>
	// Supports weights 100-900
	import '@fontsource-variable/lexend'
	import '@fontsource-variable/dm-sans'
	import '$assets/styles/base.scss'

	import BodyWrapper from '$lib/components/Layout/BodyWrapper/BodyWrapper.svelte'
	import Header from '$lib/components/Layout/Header/Header.svelte'
	import Footer from '$lib/components/Layout/Footer/Footer.svelte'
</script>

<main>
	<BodyWrapper>
		<Header />
		<slot />
		<Footer />
	</BodyWrapper>
</main>
