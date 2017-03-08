<template lang="jade"> 

	.o-container(class="o-container--medium@medium o-container--large@large o-container--xlarge@xlarge", 
				:class="[ utilityClasses || '' ]")
		slot


</template>

<script>

	export default {
		props: { 
		 	screenSize: {
		 		type: String,
		 		default: 'lg'
	 		}
		},
		computed: {
			// Boxing (container size)
			containerSize () {
				return this.screenSize ? 'o-container--' + this.mapSize(this.screenSize) : ''
			}
		}
	}

</script>