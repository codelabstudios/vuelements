<template lang="jade">

	component(:is="headerComponent", :class="utilityClasses")
		slot

</template>

<script>

	var Header1 = { template: '<h1 class="c-heading"><slot></slot></h1>' }
	var Header2 = { template: '<h2 class="c-heading"><slot></slot></h2>' }
	var Header3 = { template: '<h3 class="c-heading"><slot></slot></h3>' }
	var Header4 = { template: '<h4 class="c-heading"><slot></slot></h4>' }
	var Header5 = { template: '<h5 class="c-heading"><slot></slot></h5>' }
	var Header6 = { template: '<h6 class="c-heading"><slot></slot></h6>' }

	export default {
		props: {
			level: String
		},
		components: {
			Header1, Header2, Header3, Header4, Header5, Header6
		},
		computed: {
			headerComponent () {
				return 'Header' + this.level
			}
		}
	}

</script>