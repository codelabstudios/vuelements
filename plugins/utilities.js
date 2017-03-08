const mixins = require('./mixins')

const UtilityPlugin = {
	install (Vue, options) {
		Vue.mixin(mixins.utilities)
	}
}

export default UtilityPlugin