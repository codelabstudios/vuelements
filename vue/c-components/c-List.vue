<template lang="jade">

	component(:is="listType", :class="utilityClasses", :styled="styled")
		slot

</template>

<script>

	var OrderedList = {
		template: '<ol class="c-list c-list--ordered"><slot></slot></ol>'
	}

	var UnorderedList = {
		props: ['styled'],
		template: `<ul class="c-list" :class="[ styled ? '' : 'c-list--unstyled' ]"><slot></slot></ul>`
	}	

	export default {
		props: {
			// Unordered / Ordered
			ordered: {
				type: Boolean,
				default: false
			},
			// List Style
			styled: {
				type: Boolean,
				default: false
			}
		},
		components: {
			OrderedList, UnorderedList
		},
		computed: {
			listType () {
				return this.ordered ? 'OrderedList' : 'UnorderedList'
			}
		}
	}

</script>