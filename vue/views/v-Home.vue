<template lang="jade">

	section
		c-jumbotron(img="https://placehold.it/1920x1080")
			c-grid
				c-cell(	width="100",
						md-width="80", md-offset="10",
						lg-width="60", lg-offset="20",
						size="xl", padding="lg-y")
					c-h(level="1" text-align="center" padding="sm-y") Vuelements
					c-p(text-align="center" padding="md-y") Inspired by Google's Polymer framework, Vuelement is a modern framework for building scalable web applications.
					c-button(padding="md-y" text-align="center") Download Vuelements

		c-container(padding="lg-y")

			c-grid(padding="md-y")
				c-cell(text-align="center" width="100", size="lg")
					c-h(level="2") What is Vuelements?
					c-p Vuelements is a collection of Vue components wrapped with pre-built CSS classes following the BEM and SMACSS conventions. It encourages re-useability and modualrity by writing more abstract code. Vuelements also include recomendations on workflow and tooling, while also attempting to build a community with a single goal. To create a user-driven based development, where new components may be added into Vuelements for everyone to use.

			c-grid(padding="md-y")
				c-cell(text-align="center" width="100")
					c-h(level="2") Architectured for scalability, maintainibility, and extensibility.
					c-p Scaffold your web application with pre-built Vue components. Don't worry about writing HTML or CSS.

			c-grid(padding="md-y")
				c-cell(text-align="center")
					c-h(level="3") Consistent CSS ideology.
					c-p With modularilty in mind, we built Vue component around <a href="http://blazecss.com/">Blaze CSS</a>, a BEM/SMACSS inspired CSS framework. CSS classes should be designed top-down, with distinct local and global classes.
				c-cell(text-align="center")
					c-h(level="3") Encapsulation at its finest.
					c-p By exposing the HTML/CSS API through Vue components/props, we discourage developers to write additional HTML/CSS and make them conform to Vuelement's ideology. By using components, we add another layer of control and separation.
				c-cell(text-align="center")
					c-h(level="3") Greater abstraction and clarity.
					c-p It might seem more difficult to use components instead of HTML/CSS directly, but getting into the mindset of thinking modular will give you greater clarity.
			
			c-grid(padding="md-y")
				c-cell(text-align="center" width="100")
					c-h(level="2") Built with the latest web technologies.
					c-p The future is here. We combined the best workflow and tools to create the last web framework you'll need.

			c-grid(padding="md-y", :wrap="true")
				c-cell(text-align="center" width="33")
					c-h(level="3") Laravel Mix
					c-p Laravel Mix is a PHP package built as a wrapper around webpack. It removes all the pain around configuring Webpack modules. The built-in hot reload feature means you won't have to refresh your browser to see your updated Vue components.
				c-cell(text-align="center" width="33")
					c-h(level="3") Vue.js 2.0
					c-p Javascript techonology has been on the rise, including the many javascript frameworks like Node.js, React, and Angular2. Vue.js seemed the most intuitive and easy to use, while being just as formidable.
				c-cell(text-align="center" width="33")
					c-h(level="3") Jade & SASS
					c-p Write lean code with better readability by not having to write open and closing tags with Jade. Since you shouldn't have to write additional CSS classes, you'll have full control of your website just by editing the pre-built SASS variables.
				c-cell(text-align="center" width="33")
					c-h(level="3") NPM / Bower / Composer
					c-p We believe building modular, re-useable code with packages is the future for web development. No one should have to rewrite code when it can be avoided. Dependency management also lets you know which version of the package is compability with your project.
				c-cell(text-align="center" width="33")
					c-h(level="3") Git and Open Source
					c-p Open source technology with depedency management tools helps everyone involved. The community can help debug, development, and give feedback on the project. The more people using the package, the better it will become.
				c-cell(text-align="center" width="33")
					c-h(level="3") Jade & SASS
					c-p Write lean code with better readability by not having to write open and closing tags with Jade. Since you shouldn't have to write additional CSS classes, you'll have full control of your website just by editing the pre-built SASS variables.
					
		//- c-modal(name="login")
		//- c-modal(name="payment")

</template>

<script>

	export default {
		props: {

		},
		computed: {

		}
	}

</script>