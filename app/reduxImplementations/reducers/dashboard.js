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
    'startDate': moment(),
    'endDate': moment(),
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