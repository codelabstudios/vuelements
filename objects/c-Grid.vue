<template lang="jade">  

	.o-grid(:class="[ utilityClasses, gridWrap, gutterWidth ]", :style="gutterOffset")
		slot
			
</template>

<script>

	export default {
		props: {
			wrap: Boolean,
			// offset (remove padding casued by parent)
			offset: Boolean,
			// Remove gutter
			noGutter: Boolean 
		},
		data () {
			return {
				// gutterOffset: {
				// 	marginLeft: "-15px", 
				// 	marginRight: "-15px"
				// }
			}
		},
		computed: {
			gridWrap () {
				return this.wrap ? 'o-grid--wrap' : ''
			},
			// Gutter
			gutterWidth () {
				return this.gutter ? 'o-grid__cell--no-gutter' : '' 
			},
			// Offset
			gutterOffset () {
				return this.offset ? { marginLeft: "-15px", marginRight: "-15px" } : ''
			}
		}
	}

</script>