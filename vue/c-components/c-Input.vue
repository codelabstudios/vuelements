<template lang="jade">

		//- Textarea
		div(v-if="isTextarea", :class="getPadding")

			//- Icon
			.o-field.o-field--icon-left(v-if="hasIcon")
				i.fa.fa-fw.fa-calendar.c-icon
				textarea.c-field(:placeholder="placeholder", :class="utilityClasses")

			//- No Icon
			textarea.c-field(v-else, :placeholder="placeholder", :class="utilityClasses")

		//- Input
		div(v-else, :class="getPadding")

			//- Icon
			.o-field.o-field--icon-left(v-if="hasIcon")
				i.fa.fa-fw.fa-calendar.c-icon
				input.c-field(:type="type", :placeholder="placeholder", :class="utilityClasses")

			//- No Icon
			input.c-field(v-else, :type="type", :placeholder="placeholder", :class="utilityClasses")

</template>

<script>

	export default {
		props: {
			icon: String,
			iconPosition: String,
			type: String,
			placeholder: String,
		},
		computed: {
			hasIcon () {
				return this.icon ? true : false
			},
			isTextarea () {
				return (this.type == 'textarea') ? true : false
			}
		}
	}

</script>