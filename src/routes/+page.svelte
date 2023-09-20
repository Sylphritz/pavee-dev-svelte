<script lang="ts">
	import AboutMeSection from '$lib/components/LandingPage/AboutMeSection/AboutMeSection.svelte'
	import ContactSection from '$lib/components/LandingPage/ContactSection/ContactSection.svelte'
	import HeroSection from '$lib/components/LandingPage/HeroSection/HeroSection.svelte'
	import WorkSection from '$lib/components/LandingPage/WorkSection/WorkSection.svelte'
	import type { PageData } from './$types'

	// export let data: PageData
</script>

<HeroSection />
<AboutMeSection />
<WorkSection />
<ContactSection />
