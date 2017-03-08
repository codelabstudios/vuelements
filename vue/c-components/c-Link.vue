<template lang="jade">

	a.c-link(:href="link")
		slot
	
</template>

<script>

	export default {
		props: ['link']
	}

</script>