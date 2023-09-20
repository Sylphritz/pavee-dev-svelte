<script lang="ts">
	import SectionBlock from '../SectionBlock/SectionBlock.svelte'
	import AboutMeSectionBio from './AboutMeSectionBio/AboutMeSectionBio.svelte'
	import AboutMeSectionCertifications from './AboutMeSectionCertifications/AboutMeSectionCertifications.svelte'
	import AboutMeSectionSkills from './AboutMeSectionSkills/AboutMeSectionSkills.svelte'

	const title = 'Who Am I?'
</script>

<SectionBlock {title}>
	<AboutMeSectionBio />
	<AboutMeSectionSkills />
	<AboutMeSectionCertifications />
</SectionBlock>
