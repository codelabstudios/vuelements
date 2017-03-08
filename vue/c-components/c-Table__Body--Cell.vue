<template lang="jade"> 

	td.c-table__cell(:style="cellHeight", :class="utilityClasses")
		slot

</template>

<script>

	export default {
		props: {
			body: Array,
			height: String
		},
		computed: {
			cellHeight () {
				return { minHeight: this.height }
			}
		}
	}

</script>