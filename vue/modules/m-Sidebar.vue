<template lang="jade"> 

	section
		c-h(level="4" padding="tiny-y") Objects
		c-list
			c-list-item(v-for="object in objects")
				c-a {{ object }}
		//- Components
		c-h(level="4" padding="tiny-y") Components
		c-list
			c-list-item(v-for="component in components")
				c-a {{ component }}
		//- Utilities
		c-h(level="4" padding="tiny-y") Utilities
		c-list
			c-list-item(v-for="utility in utilities")
				c-a {{ utility }} 

</template>

<script>

	export default {
		data () {
			return {
				objects: ['containers', 'grid', 'panels', 'images', 'drawers', 'media', 'modals'],
				components: ['addresses', 'accordions', 'alerts', 'avatars', 'badges', 'breadcrumbs', 'bubbles', 'buttons', 'calendars', 'cards', 'headings', 'inputs', 'menus', 'navs', 'overlays', 'pagination', 'progress', 'ranges', 'tables', 'tabs', 'tags', 'toasts', 'toggles', 'tooltips', 'trees', 'typography'],
				utilities: ['alignment', 'boxing', 'elevation', 'sizes', 'colors']
			}
		}
	}

</script>