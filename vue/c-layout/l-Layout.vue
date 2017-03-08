<template lang="jade"> 

	c-container
		c-grid(:wrap="true")
			c-cell(xs-width="100" md-width="70" xl-width="80")
				slot
			c-cell(xs-width="100" md-width="30" xl-width="20" padding="xl-y")
				m-sidebar

</template>

<script>

	export default {

	}

</script>