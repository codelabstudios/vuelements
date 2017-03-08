<template lang="jade"> 

	l-layout
		c-h(level="1") Buttons
		c-p Probably the first thing people look at when choosing a CSS toolkit. The common button!
		c-h(level="2") Basic Button

		c-grid(offset)
			c-cell(width="100" md-width="50")
				pre
					c-code #{'<c-button'}
						| #{'    color="blue"'}
						| #{'    size="lg"'}
						| #{'    ghost="true"'}
						| #{'    :disabled="false"'}
						| #{'    :rounded="true"'}
						| #{'>  '}
						| #{'    Button '}
						| #{'</c-button> '}
			c-cell(width="100" md-width="50")
				c-table(title="Button Options", striped)
					c-table-head(slot="head", :head="headings", padding="sm")
					c-table-body(slot="body")
						c-table-body-row(v-for="row in rows")
							c-table-body-cell(v-for="cell in row", align="c", padding="sm")
								component(:is="cell.template", :data="cell")


</template>

<script>

	var ParameterTemplate = {
		props: ['data'],
		template: '<c-div align> {{ data.value }} </c-div>'
	}

	var OptionTemplate = {
		props: ['data'],
		template: `<c-div align> 
			<c-p> Value: 
				<a-event :event="data.event" :name="data.name">
					<c-a v-if="data.event"> 
						{{ data.value }} 
					</c-a> 
					<template v-else>
						{{ data.value }} 
					</template>
				</a-event> 
			</c-p>
			<c-p> 
				Type: <span v-html="data.type"></span> 
			</c-p>
		</c-div>`
	}

	export default {
		data () {
			return {
				headings: ['parameter name', 'option value'],
				rows: [
					[
						{ value: 'Color', template: 'ParameterTemplate' },
						{ value: 'Color', type: 'String', template: 'OptionTemplate', event: 'modal', name: 'color' },
					],
					[
						{ value: 'Size', template: 'ParameterTemplate' },
						{ value: 'Size', type: 'String', template: 'OptionTemplate', event: 'modal', name: 'size' },
					],
					[
						{ value: 'Disabled', template: 'ParameterTemplate' },
						{ value: 'Rounded', type: 'Boolean', template: 'OptionTemplate' },
					]					
				]			
			}
		},
		components: {
			ParameterTemplate,
			OptionTemplate
		}
	}

</script>