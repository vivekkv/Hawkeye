import { fromJS, List } from 'immutable';
import { buildNewState } from '../reducerStateMiddleware';
import { SET_FORM } from '../constants/dashboard';
import moment from 'moment';

var initialState = fromJS({
    'lstRecentFiles': List([]),
    'lstGlobeData': List([]),
    'lstApplications': List([]),
    'lstIPReputations': List([]),
    'lstBandwidth': List([]),
    'lstCpu': List([]),
    'lstDiskOs': List([]),
    'lstRecentProcess': List([]),
    'lstResources': List([]),
    'startDate': moment.unix(1503365520),// moment("2017-08-21T00:00:00", "YYYY-MM-DDThh:mm:ss").subtract(10, 'seconds'),  
    'endDate': moment.unix(1503366661),//moment("2017-08-21T00:00:00", "YYYY-MM-DDThh:mm:ss").add(10, "seconds"),  
    'workspaceId': "",
    'sensorId': ""
});
  
export default function reducer(state = initialState, action) {

    switch (action.type) {

        case SET_FORM:
        
            return buildNewState(state, action.data);

        default: 

            return state;
    }
}