<template lang="jade"> 
	
	.o-grid__cell(:class="[ cellWidth 		|| '', "+
						  " xsCellWidth 	|| '', "+
						  " smCellWidth 	|| '', "+
						  " mdCellWidth 	|| '', "+
						  " lgCellWidth 	|| '', "+
						  " xlCellWidth 	|| '', "+
						  " xxlCellWidth 	|| '', "+

						  " cellOffset 		|| '', "+
						  " xsCellOffset 	|| '', "+
						  " smCellOffset 	|| '', "+
						  " mdCellOffset 	|| '', "+
						  " lgCellOffset 	|| '', "+
						  " xlCellOffset 	|| '', "+
						  " xxlCellOffset 	|| '', "+

						  " gutterWidth 	|| '', "+

						  " utilityClasses	|| '' ]")
		slot

</template>

<script>

	export default {
		props: {
			// Width
			width: String,
			xsWidth: String,
			smWidth: String,
			mdWidth: String,
			lgWidth: String,
			xlWidth: String,
			xxlWidth: String,

			// Offset
			offset: String,
			xsOffset: String,
			smOffset: String,
			mdOffset: String,
			lgOffset: String,
			xlOffset: String,
			xxlOffset: String,

			// Gutter
			gutter: String			
		},
		computed: {
			// Width
			cellWidth () {
				return this.width ? 'o-grid__cell--width-' + this.width : ''
			},
			xsCellWidth () {
				return this.xsWidth ? 'o-grid__cell--width-' + this.xsWidth + '@xsmall' : ''
			},
			smCellWidth () {
				return this.smWidth ? 'o-grid__cell--width-' + this.smWidth + '@small' : ''
			},
			mdCellWidth () {
				return this.mdWidth ? 'o-grid__cell--width-' + this.mdWidth + '@medium' : ''
			},
			lgCellWidth () {
				return this.lgWidth ? 'o-grid__cell--width-' + this.lgWidth + '@large' : ''
			},
			xlCellWidth () {
				return this.xlWidth ? 'o-grid__cell--width-' + this.xlWidth + '@xlarge' : ''
			},
			xxlCellWidth () {
				return this.xxlWidth ? 'o-grid__cell--width-' + this.xxlWidth + '@super' : ''
			},
			// Offset
			cellOffset () {
				return this.offset ? 'o-grid__cell--offset-' + this.offset : ''
			},
			xsCellOffset() {
				return this.xsOffset ? 'o-grid__cell--offset-' + this.xsOffset + '@xsmall' : ''
			},
			smCellOffset() {
				return this.smOffset ? 'o-grid__cell--offset-' + this.smOffset + '@small' : ''
			},
			mdCellOffset() {
				return this.mdOffset ? 'o-grid__cell--offset-' + this.mdOffset + '@medium' : ''
			},
			lgCellOffset() {
				return this.lgOffset ? 'o-grid__cell--offset-' + this.lgOffset + '@large' : ''
			},
			xlCellOffset() {
				return this.xlOffset ? 'o-grid__cell--offset-' + this.xlOffset + '@xlarge' : ''
			},
			xxlCellOffset() {
				return this.xxlOffset ? 'o-grid__cell--offset-' + this.xxlOffset + '@super' : ''
			},
			// Gutter
			gutterWidth () {
				return this.gutter == 0 ? 'o-grid__cell--no-gutter' : '' 
			}
		}
	}

</script>