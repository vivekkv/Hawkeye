import { take, call, put, select, fork } from 'redux-saga/effects';
import { Map, List } from 'immutable';
import {
    INPUT_CHANGE, SET_FORM, LOAD_RECENT_FILES, LOAD_GLOBE_DATA, LOAD_APPLICATIONS, LOAD_IP_REPUTATIONS, LOAD_BANDWIDTH, LOAD_CPU,
    LOAD_DISK_OS, LOAD_RECENT_PROCESS, REFRESH_DASHBOARD, LOAD_RESOURCES
} from '../constants/dashboard';
import { loadRecentFilesData, loadGlobeData, loadApplicationsData, loadIpReputationsData, loadBandwidthData, loadCpuData, loadDiskOsData, loadRecentProcessData,
    loadResource } from '../services/dashboard';
import { createActionType } from '../actionBuilder';
import { getWorkspaceId } from 'utils/authRegistry';


const getStateData = (state) => Map(state.dashboard);
const LIMIT = 30;

function* loadRecentFiles() {

    while (true) {

        let { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_RECENT_FILES);
        let formData = yield select(getStateData);

        workspaceId = "workspace_56beb2ae";
        startDate = 1503365520;
        endDate = 1503366661;

        let response = yield call(loadRecentFilesData, workspaceId, startDate, endDate, sensorId);
        let newList = formData.get("lstRecentFiles").concat(response.lstRecentFiles);
        yield put(createActionType(SET_FORM, { 'data': { 'lstRecentFiles': newList.reverse().slice(0, LIMIT) } }));
    }
}

function* loadApplications() {

    while (true) {

        let { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_APPLICATIONS);
        let formData = yield select(getStateData);

        workspaceId = "workspace_fdd2616a";
        startDate = 1521472881;
        endDate = 1521472881;

        let response = yield call(loadApplicationsData, workspaceId, startDate, endDate, sensorId);
        let newList = formData.get("lstApplications").concat(response.lstApplications);
        yield put(createActionType(SET_FORM, { 'data': { 'lstApplications': newList.reverse().slice(0, LIMIT) } }));
    }
}

function* loadIpRepucations() {

    while (true) {

        const { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_IP_REPUTATIONS);
        let formData = yield select(getStateData);
        let response = yield call(loadIpReputationsData, workspaceId, startDate, endDate, sensorId);
        let newList = formData.get("lstIPReputations").concat(response.lstIPReputations);
        yield put(createActionType(SET_FORM, { 'data': { 'lstIPReputations': newList.reverse().slice(0, LIMIT) } }));
    }
}

function* loadResources() {

    while (true) {

        let { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_RESOURCES);
        let formData = yield select(getStateData);

        workspaceId = "workspace_fdd2616a";
        startDate = 1522094048;
        endDate = 1522094078;

        let response = yield call(loadResource, workspaceId, startDate, endDate, sensorId);
        let newList = formData.get("lstResources").concat(response.lstResources);
        yield put(createActionType(SET_FORM, { 'data': { 'lstResources': newList.reverse().slice(0, LIMIT) } }));
    }
}

function* loadBandWidth() {

    while (true) {

        let { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_BANDWIDTH);
        let formData = yield select(getStateData);

        workspaceId = "workspace_fdd2616a";
        startDate = 1522094049;
        endDate = 1522094254;

        let response = yield call(loadBandwidthData, workspaceId, startDate, endDate, sensorId);
        let newList = response.lstBandwidth.concat(formData.get("lstBandwidth"));
        yield put(createActionType(SET_FORM, { 'data': { 'lstBandwidth': newList.reverse().slice(0, LIMIT) } }));
    }
}

function* loadGlobalData() {

    while (true) {

        const { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_GLOBE_DATA);
        let formData = yield select(getStateData);
        let response = yield call(loadGlobeData, startDate, endDate, sensorId, workspaceId);
        let newList = formData.get("lstGlobeData").concat(response.lstGlobeData);
        yield put(createActionType(SET_FORM, { 'data': { 'lstGlobeData': newList.reverse().slice(0, 30) } }));
    }
}

function* loadCpu() {

    while (true) {

        const { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_CPU);
        let formData = yield select(getStateData);
        let response = yield call(loadCpuData, startDate, endDate, sensorId, workspaceId);
        let newList = response.lstCpu.concat(formData.get("lstCpu"));
        yield put(createActionType(SET_FORM, { 'data': { 'lstCpu': newList } }));
    }
}

function* loadDiskOs() {

    while (true) {

        const { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_DISK_OS);
        let formData = yield select(getStateData);
        let response = yield call(loadDiskOsData, startDate, endDate, sensorId, workspaceId);
        let newList = response.lstDiskOs.concat(formData.get("lstDiskOs"));
        yield put(createActionType(SET_FORM, { 'data': { 'lstDiskOs': newList } }));
    }
}

function* loadRecentProcess() {

    while (true) {

        const { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_RECENT_PROCESS);
        let formData = yield select(getStateData);
        let response = yield call(loadRecentProcessData, startDate, endDate, sensorId, workspaceId);
        let newList = response.lstRecentProcess.concat(formData.get("lstRecentProcess"));
        yield put(createActionType(SET_FORM, { 'data': { 'lstRecentProcess': newList } }));
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

        yield put(createActionType(LOAD_RECENT_FILES, { startDate : stUnix, endDate: endUnix, sensorId, workspaceId }));
        yield put(createActionType(LOAD_APPLICATIONS, { startDate : stUnix, endDate: endUnix, sensorId, workspaceId }));
        yield put(createActionType(LOAD_IP_REPUTATIONS, { startDate : stUnix, endDate: endUnix, sensorId, workspaceId }));
        yield put(createActionType(LOAD_RESOURCES, { startDate : stUnix, endDate: endUnix, sensorId, workspaceId }));
        yield put(createActionType(LOAD_BANDWIDTH, { startDate : stUnix, endDate: endUnix, sensorId, workspaceId }));
        
        
        // yield put(createActionType(LOAD_GLOBE_DATA, { startDate : stUnix, endDate: endUnix, sensorId, workspaceId }));
        // yield put(createActionType(LOAD_CPU, { startDate : stUnix, endDate: endUnix, sensorId, workspaceId }));
        // yield put(createActionType(LOAD_DISK_OS, { startDate : stUnix, endDate: endUnix, sensorId, workspaceId }));
        // yield put(createActionType(LOAD_RECENT_PROCESS, { startDate : stUnix, endDate: endUnix, sensorId, workspaceId }));

        let nwStartDate = endDate.clone();
        let nwEndDate = endDate.add(1, 'seconds');

        yield put(createActionType(SET_FORM, { 'data': { startDate: nwStartDate, endDate: nwEndDate } }));
    }
}

export default function* deviceSagas() {
    yield [
        fork(loadRecentFiles),
        fork(loadGlobalData),
        fork(loadApplications),
        fork(loadIpRepucations),
        fork(loadBandWidth),
        fork(loadCpu),
        fork(loadDiskOs),
        fork(loadRecentProcess),
        fork(refreshDashboard),
        fork(loadResources)
    ]
}