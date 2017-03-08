<template lang="jade">

	.c-card__item(:class="dividerClass + ' ' + backgroundColor")
		p.c-paragraph(v-if="isParagraph")
			slot
		template(v-if="isDivider")
			slot

</template>

<script>

	export default {
		props: {
			// paragraph or divider
			type: String,
			color: String
		},
		computed: {
			dividerClass () {
				return (this.type == 'divider') ? 'c-card__item--divider' : ''
			},
			backgroundColor () {
				return this.color ? 'c-card__item--' + this.color : ''
			},
			isParagraph () {
				return (this.type == 'paragraph') ? true : false
			},
			isDivider () {
				return (this.type == 'divider') ? true : false
			}
		}
	}

</script>