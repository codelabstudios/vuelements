<template lang="jade">

	section.u-fixed__full-screen(:ref="name" v-if="visible")
		div.c-overlay.c-overlay--dismissable(@click="hideModal()")
		div.o-modal.o-modal--top(:class="[ modalSize || '' ]")
			div.c-card
				header.c-card__header
					button.c-button.c-button--close(@click="hideModal()", type="button") ×
					h2.c-heading {{ title }}
				div.c-card__body
					slot
				footer.c-card__footer
					button.c-button.c-button--brand(@click="hideModal()" type="button") Close

</template>

<script>

	export default {
		props: ['name', 'title', 'size'],
		data () {
			return {
				visible: false
			}
		},
		mounted () {
			console.log(this.size)
			Event.$on('modal', name => this.showModal(name))
		},
		computed: {
			modalSize () {
				var modalSize = ''

				modalSize = (this.size) ? 'o-modal--' + this.mapSize(this.size) : ''

				return modalSize
			}
		},
		methods: {
			showModal (name) {
				if (name == this.name) this.visible = true
				this.toggleBodyClass()
			},
			hideModal () {
				this.visible = false
				this.toggleBodyClass()
			},
			// Add overflow hidden when modal is visible
			toggleBodyClass () {
				var body = document.getElementsByTagName('body')[0]
				this.visible ? body.classList.add('u-no-overflow') : body.classList.remove('u-no-overflow')
			}
		}
	}

</script>