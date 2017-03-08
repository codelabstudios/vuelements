<template lang="jade">

	div(:class="utilityClasses")
		button.c-button(:class="[ buttonColor 			|| '',"+
										" buttonWidth 			|| '',"+
										" ghostColor 			|| '',"+
										" buttonBorderRadius	|| '',"+
										" isActive 				|| '']",
						:disabled="disabled")
			slot

</template>

<script>

	export default {
		props: {
			color: String,
			disabled: Boolean,
			fullWidth: Boolean,
			ghost: {
				type: Boolean,
				default: false				
			},
			rounded: {
				type: Boolean,
				default: false
			},
			active: Boolean
		},
		computed: {
			buttonColor () {
				return this.color ? 'c-button--' + this.color : ''
			},
			ghostColor () {
				let color = this.color ? '-' + this.color : ''
				return this.ghost ? 'c-button--ghost' + color : ''
			},
			buttonWidth () {
				return this.fullWidth ? 'c-button--block' : ''
			},
			buttonBorderRadius () {
				return this.rounded ? 'c-button--rounded' : ''
			},
			isActive () {
				return this.active ? 'c-button--active' : ''
			}
		}
	}

</script>