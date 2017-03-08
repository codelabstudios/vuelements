<template lang="jade">

	table.c-table(:class="[ stripedClass || '', condensedClass || '' ]")
		caption.c-table__caption {{ title }}
		slot(name="head")
		slot(name="body")

</template>

<script>

	export default {
		props: {
			title: String,
			striped: Boolean,
			condensed: Boolean
		},
		computed: {
			stripedClass () {
				return this.striped ? 'c-table--striped' : ''
			},
			condensedClass () {
				return this.condensed ? 'c-table--condensed' : ''
			}
		}
	}

</script>