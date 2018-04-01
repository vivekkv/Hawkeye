import App from '../components/app';
import LandingPage from '../components/pages/LandingPage';

export default [{
    component: App,
    indexRoute: "/beacon",
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: LandingPage
            })
        })
    },
    getChildRoutes(partialNextState, callback) {
        require.ensure([], function (require) {
           callback(null, [
              require("./home"),
          ])
        })
    },
}, {
    path: "/notauthorized",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('../components/common/notAuthroized'))
        })
    }
}, {
    path: "*",
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('../components/common/notFound'))
        })
    }
}]