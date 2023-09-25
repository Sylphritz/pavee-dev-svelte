<script>
	import ExternalLinkIcon from '$lib/components/Common/Icons/ExternalLinkIcon.svelte'
</script>

<div>
	<h3>Certifications</h3>

	<div class="flex flex-column gap-6">
		<div
			class="cert-block w-full p-4 flex flex-row justify-between bg-gradient-to-b from-red-500/20 to-red-500/10 gap-6"
		>
			<div class="flex-grow">
				<h5>Certified Vue.js Developer</h5>
				<p class="mb-6">
					One of the first people to become an officially certified Vue.js developer through a
					series of proctored exams crafted by Vue.js experts and signed by Evan You, the creator of
					Vue.js, himself.
				</p>
				<a
					class="inline-block py-2 uppercase tracking-widest"
					href="https://certificates.dev/vuejs/certificates/9a2ba08f-b145-473a-ab04-f829b26a720c"
					target="_blank">View certification <ExternalLinkIcon className="-mt-1" /></a
				>
			</div>
			<div class="flex-none w-1/3 hidden md:block">
				<img
					src="/images/vuejs-cert.jpg"
					class="object-contain"
					alt="Official Vue.js Certification"
				/>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.cert-block {
		h5 {
			@apply font-normal uppercase tracking-widest;
		}
	}
</style>
