<template lang="jade"> 

	thead.c-table__head
		tr.c-table__row.c-table__row--heading
			th.c-table__cell(v-for="title in head", :class="utilityClasses") {{ title }}

</template>

<script>

	export default {
		props: {
			head: Array
		}
	}

</script>