<script lang="ts">
	import SectionBlock from '$lib/components/LandingPage/SectionBlock.svelte'
	import AboutMeSectionBio from './AboutMeSection/AboutMeSectionBio.svelte'
	import AboutMeSectionCertifications from './AboutMeSection/AboutMeSectionCertifications.svelte'
	import AboutMeSectionSkills from './AboutMeSection/AboutMeSectionSkills.svelte'

	const title = 'Who Am I?'
</script>

<SectionBlock {title}>
	<AboutMeSectionBio />
	<AboutMeSectionSkills />
	<AboutMeSectionCertifications />
</SectionBlock>
