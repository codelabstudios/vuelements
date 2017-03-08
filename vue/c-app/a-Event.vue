<template lang="jade"> 

	li(v-if="tag == 'li'" @click="fireEvent()")
		slot
	span(v-else @click="fireEvent()")
		slot

</template>

<script>

	export default {
		props: ['event', 'name', 'tag'],
		methods: {
			fireEvent () {
				Event.$emit(this.event, this.name)
			}
		}
	}

</script>