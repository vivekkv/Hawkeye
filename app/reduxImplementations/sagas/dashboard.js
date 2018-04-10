import { take, call, put, select, fork } from 'redux-saga/effects';
import { Map, List } from 'immutable';
import {
    INPUT_CHANGE, SET_FORM, LOAD_RECENT_FILES, LOAD_GLOBE_DATA, LOAD_APPLICATIONS, LOAD_IP_REPUTATIONS, LOAD_BANDWIDTH, 
    LOAD_RECENT_PROCESS, REFRESH_DASHBOARD, LOAD_RESOURCES, LOAD_WEBSITES
} from '../constants/dashboard';
import { loadRecentFilesData, loadGlobeData, loadApplicationsData, loadIpReputationsData, loadBandwidthData, loadCpuData, loadDiskOsData, loadRecentProcessData,
    loadResource, loadWebsiteData } from '../services/dashboard';
import { createActionType } from '../actionBuilder';
import { getWorkspaceId } from 'utils/authRegistry';


const getStateData = (state) => Map(state.dashboard);
const LIMIT = 30;

function* loadRecentFiles() {

    while (true) {

        let { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_RECENT_FILES);
        let formData = yield select(getStateData);

        workspaceId = "workspace_310af574";
        startDate = 1520615777;
        endDate = 1520674263;

        let response = yield call(loadRecentFilesData, workspaceId, startDate, endDate, sensorId);
        let newList = formData.get("lstRecentFiles").concat(response.lstRecentFiles);
        yield put(createActionType(SET_FORM, { 'data': { 'lstRecentFiles': newList.slice(0, LIMIT) } }));
    }
}

function* loadWebsites() {

    while (true) {

        let { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_WEBSITES);
        let formData = yield select(getStateData);

        workspaceId = "workspace_fdd2616a";
        startDate = 1520615777;
        endDate = 1523294177;

        let response = yield call(loadWebsiteData, workspaceId, startDate, endDate, sensorId);
        let newList = formData.get("lstWebsites").concat(response.lstWebsites);
        yield put(createActionType(SET_FORM, { 'data': { 'lstWebsites': newList.slice(0, LIMIT) } }));
    }
}

function* loadIpRepucations() {

    while (true) {

        let { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_IP_REPUTATIONS);
        let formData = yield select(getStateData);
        let response = yield call(loadIpReputationsData, workspaceId, startDate, endDate, sensorId);
        let newList = formData.get("lstIPReputations").concat(response.lstIPReputations);
        yield put(createActionType(SET_FORM, { 'data': { 'lstIPReputations': newList.slice(0, LIMIT) } }));
    }
}

function* loadResources() {

    while (true) {

        let { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_RESOURCES);
        let formData = yield select(getStateData);
        let response = yield call(loadResource, workspaceId, startDate, endDate, sensorId);
        let newList = formData.get("lstResources").concat(response.lstResources);
        yield put(createActionType(SET_FORM, { 'data': { 'lstResources': newList.slice(0, LIMIT) } }));
    }
}

function* loadBandWidth() {

    while (true) {

        let { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_BANDWIDTH);
        let formData = yield select(getStateData);
        let response = yield call(loadBandwidthData, workspaceId, startDate, endDate, sensorId);
        let newList = response.lstBandwidth.concat(formData.get("lstBandwidth"));
        yield put(createActionType(SET_FORM, { 'data': { 'lstBandwidth': newList.slice(0, LIMIT) } }));
    }
}

function* loadRecentProcess() {

    while (true) {

        let { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_RECENT_PROCESS);
        let formData = yield select(getStateData);
        let response = yield call(loadRecentProcessData, workspaceId, startDate, endDate, sensorId);
        let newList = response.lstRecentProcess.concat(formData.get("lstRecentProcess"));
        yield put(createActionType(SET_FORM, { 'data': { 'lstRecentProcess': newList.slice(0, LIMIT) } }));
    }
}

function* loadGlobalData() {

    while (true) {

        let { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_GLOBE_DATA);
        let formData = yield select(getStateData);
        let response = yield call(loadGlobeData, workspaceId, startDate, endDate, sensorId);

        let formGlobeData = formData.get("lstGlobeData");

        debugger
        formGlobeData.forEach((i) => {
            i.marked = true;
        });

        let newList = response.lstGlobeData.concat(formGlobeData);
        yield put(createActionType(SET_FORM, { 'data': { 'lstGlobeData': newList.slice(0, LIMIT) } }));
    }
}


function* refreshDashboard() {

    while (true) {

        yield take(REFRESH_DASHBOARD);

        let formData = yield select(getStateData);
        let startDate = formData.get("startDate");
        let endDate = formData.get("endDate");
        let workspaceId = getWorkspaceId();
        let sensorId = formData.get("sensorId");

        let stUnix = startDate.unix();
        let endUnix = endDate.unix();

        yield put(createActionType(LOAD_RESOURCES, { startDate : stUnix, endDate: endUnix, sensorId, workspaceId }));
        yield put(createActionType(LOAD_RECENT_FILES, { startDate : stUnix, endDate: endUnix, sensorId, workspaceId }));
        yield put(createActionType(LOAD_WEBSITES, { startDate : stUnix, endDate: endUnix, sensorId, workspaceId }));
        yield put(createActionType(LOAD_BANDWIDTH, { startDate : stUnix, endDate: endUnix, sensorId, workspaceId }));
        yield put(createActionType(LOAD_IP_REPUTATIONS, { startDate : stUnix, endDate: endUnix, sensorId, workspaceId }));
        yield put(createActionType(LOAD_GLOBE_DATA, { startDate : stUnix, endDate: endUnix, sensorId, workspaceId }));
        yield put(createActionType(LOAD_RECENT_PROCESS, { startDate : stUnix, endDate: endUnix, sensorId, workspaceId }));

        let nwStartDate = endDate.clone();
        let nwEndDate = endDate.add(5, 'seconds');

        yield put(createActionType(SET_FORM, { 'data': { startDate: nwStartDate, endDate: nwEndDate } }));
    }
}

export default function* deviceSagas() {
    yield [
        fork(loadRecentFiles),
        fork(loadGlobalData),
        fork(loadWebsites),
        fork(loadIpRepucations),
        fork(loadBandWidth),
        fork(loadRecentProcess),
        fork(refreshDashboard),
        fork(loadResources)
    ]
}