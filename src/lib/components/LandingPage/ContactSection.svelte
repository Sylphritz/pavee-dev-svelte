<script lang="ts">
	import GithubIcon from '$lib/components/Common/Icons/GithubIcon.svelte'
	import LinkedinIcon from '$lib/components/Common/Icons/LinkedinIcon.svelte'
	import MailIcon from '$lib/components/Common/Icons/MailIcon.svelte'
	import TwitterXIcon from '$lib/components/Common/Icons/TwitterXIcon.svelte'
	import SectionBlock from '$lib/components/LandingPage/SectionBlock.svelte'
</script>

<SectionBlock id="contact" title="Contact">
	<p>
		For inquiries regarding work, or anything, really, you can send me an email or contact me
		through my social media accounts. I'm open to discuss about anything. And also, if you're
		looking to recruit me, I'm also open to the idea of moving abroad for work!
	</p>
	<div class="social-icons flex flex-row flex-wrap gap-3">
		<a href="https://github.com/Sylphritz" target="_blank" aria-label="Visit my Github profile page"
			><GithubIcon /></a
		>
		<a
			href="https://twitter.com/PaveeDev"
			target="_blank"
			aria-label="Visit my TwitterX profile page"><TwitterXIcon /></a
		>
		<a
			href="https://www.linkedin.com/in/pavee-udomkarnpaisarn-64957437/"
			target="_blank"
			aria-label="Visit my Linkedin profile page"><LinkedinIcon /></a
		>
		<a href="mailto:pudomkarnpaisarn@gmail.com" target="_blank" aria-label="Contact me via email"
			><MailIcon /></a
		>
	</div>
</SectionBlock>

<style lang="scss">
	.social-icons {
		a {
			@apply inline-block text-4xl text-gray-200 hover:text-red-400;
		}
	}
</style>
