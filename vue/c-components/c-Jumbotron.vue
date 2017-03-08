<template lang="jade"> 

	section#jumbotron(:style="{ backgroundImage: 'url(' + img + ')' }")
		slot

</template>

<script>

	export default {
		props: ['img', 'title', 'description']
	}

</script>

<style lang="sass">

	#jumbotron
		min-height: 500px
		background-size: cover
		background: no-repeat center center

</style>