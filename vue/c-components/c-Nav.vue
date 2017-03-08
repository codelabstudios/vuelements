<template lang="jade"> 

	ul.c-nav(:class="isInline + ' ' + menuPosition")
		c-container
			template(v-for="item in items")
				a-event.c-nav__item(v-if="item.event",
						:event="item.event", 
						:name="item.name",
						tag="li",
						:class="{ 'c-nav__item--right' : item.align_right,"+
								"'c-nav__item--active' : item.active }")
					c-a(:link="item.link") {{ item.title }}
				template(v-else)
					li.c-nav__item(:class="{ 'c-nav__item--right' : item.align_right, "+
											"'c-nav__item--active' : item.active }")
						c-a(:link="item.link") {{ item.title }}

</template>

<script>

	export default {
		props: {
			inline: Boolean,
			items: Array,
			//
			// .c-nav--top 
			// .c-nav--bottom
			// .c-nav--left 
			// .c-nav--right
			// .c-nav--fixed
			//
			position: String
		},
		computed: {
			isInline () {
				return this.inline ? 'c-nav--inline' : ''
			},
			menuPosition () {
				return this.position ? 'c-nav--' + this.position : ''
			}
		},
		methods: {
			/**
			 * @param  String align left or right
			 */
			getAlignment (align) {

			}
		}
	}

</script>