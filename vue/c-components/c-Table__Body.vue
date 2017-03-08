<template lang="jade"> 

	tbody.c-table__body
		slot

</template>

<script>

	export default {
		props: {
			body: Array
		}
	}

</script>