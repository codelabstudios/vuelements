<template lang="jade"> 

	.c-card(:class="shadowAmount")
		slot

</template>

<script>

	var Child = {
		template: '<div><slot text="hello from child"> </slot></div>'
	}

	export default {
		props: {
			names: Array,
			shadow: String
		},
		computed: {
			shadowAmount () {
				return this.shadow ? 'u-' + this.shadow : ''
			}
		},
		components: {
			Child
		}
	}

</script>