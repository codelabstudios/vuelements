<template lang="jade"> 

	tr.c-table__row
		slot

</template>

<script>

	export default {
		props: {
			row: String
		}
	}

</script>