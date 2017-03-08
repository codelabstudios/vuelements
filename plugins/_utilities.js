const utilities = {
	props: {
		size: String,
		// [t-c, t-l, t-r, b-c, b-x, b-y] text/box
		// left, center, right
		textAlign: String,
		align: String,
		// [size]-[axis] i.e. md-y,
		padding: String,
		axis: String,
		bg: String 
	},
	computed: {
		/**
		 * Utilities
		 *
		 * Alignment / Boxing (padding) / Elevation (box shadow) / Sizes / Colors
		 */
		utilityClasses () {
			var utilityClasses = ''

			this._alignment 		? utilityClasses += this._alignment 		+ ' ' : ''
			this._textAlignment 	? utilityClasses += this._textAlignment	+ ' ' : ''
			this._boxPadding 		? utilityClasses += this._boxPadding 		+ ' ' : ''
			this._boxShadow 		? utilityClasses += this._boxShadow 		+ ' ' : ''
			this._textSize 		? utilityClasses += this._textSize 			+ ' ' : ''
			this._textColor 		? utilityClasses += this._textColor 		+ ' ' : ''
			this._bgColor 			? utilityClasses += this._bgColor 			+ ' ' : ''

			return utilityClasses.trim()
		},
		// Alignment (text alignment)
		_textAlignment () {
			var textAlign = ''

			if (this.textAlign == 'left') 	textAlign = 'u-left'
			if (this.textAlign == 'center') textAlign = 'u-centered'
			if (this.textAlign == 'right') 	textAlign = 'u-right'

			return textAlign
		},
		_alignment () {
			var align = ''

			if (this.align == 't-l') 	align = 'u-left'
			if (this.align == 't-c') 	align = 'u-centered'
			if (this.align == 't-r') 	align = 'u-right'
			if (this.align == 'b') 		align = 'u-center-block'
			if (this.align == 'b-c') 	align = 'u-absolute-center'
			if (this.align == 'b-x') 	align = 'u-center-block__content u-center-block__content--horizontal'
			if (this.align == 'b-y') 	align = 'u-center-block__content u-center-block__content--vertical'
			if (this.align == true)		align = 'u-align-flex u-align-flex__content'
			if (this.align == 'c')		align = 'u-align-flex u-align-flex__center'
			if (this.align == 'x')		align = 'u-align-flex u-align-flex__horizontal'
			if (this.align == 'y')		align = 'u-align-flex u-align-flex__vertical'


			return align
		},
		/**
		 * Boxing
		 * Split 'md-y' to ['md', 'y']
		 */
		_boxPadding () {
			var padding = ''
 
			if (this.padding) {
				// padding="md-y"
				if (this.padding.includes('-')) {
					var split = this.padding.split('-')
					padding = 'u-' + this.mapAxis(split[1]) + '-box--' + this.mapSize(split[0])
				// padding="md", add padding all around
				} else {
					padding = 'u-window-box--' + this.mapSize(this.padding)
				}
			}

			return padding
		},
		// Elevation 
		_boxShadow () {

		},
		// Sizes
		_textSize () {
			return this.size ? 'u-' + this.mapSize(this.size) : ''
		},
		// Colors
		_bgColor () {
			return this.bg ? 'u-bg-' + this.bg : ''
		}
	},
	methods: {
		/**
		 * Convert [x, y, a] to [letter, pillar, window]
		 */
		mapAxis (direction) {
			var axis = ''

			if (direction == 'x') axis = 'pillar'
			if (direction == 'y') axis = 'letter'

			return axis
		},
		/**
		 * Convert  [n, xxs, xs, sm, md, lg, xl, xxl] ->
		 * 			[none, tiny, xsmall, small, medium, large, xlarge, super]
		 */
		mapSize (size) {
			var newSize = ''

			if (size == 'n') 	newSize = 'none'
			if (size == 'xxs') 	newSize = 'tiny'
			if (size == 'xs') 	newSize = 'xsmall'
			if (size == 'sm') 	newSize = 'small'
			if (size == 'md') 	newSize = 'medium'
			if (size == 'lg') 	newSize = 'large'
			if (size == 'xl') 	newSize = 'xlarge'
			if (size == 'xxl') 	newSize = 'super'

			return newSize
		}
	}
}

export { utilities }