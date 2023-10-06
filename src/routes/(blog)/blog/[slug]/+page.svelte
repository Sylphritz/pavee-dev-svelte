<script lang="ts">
	import type { PageServerData } from './$types'

	export let data: PageServerData
</script>

<content>
	{@html data.body}
</content>
