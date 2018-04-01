import PageHolder from '../components/pages/Common/PageHolder';

module.exports = {
	path: "/",
	getIndexRoute(partialNextState, callback) {
		require.ensure([], function(require) {
			callback(null, {
				component: PageHolder
			})
		})
	},
	getComponents(nextState, callback) {
		require.ensure([], function(require) {
			callback(null, require('../components/pages/Dashboard'))
		});
	},
	getChildRoutes(partialNextState, callback) {
		callback(null, [])
	}
}