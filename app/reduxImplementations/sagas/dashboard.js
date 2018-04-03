import { take, call, put, select, fork } from 'redux-saga/effects';
import { Map, List } from 'immutable';
import {
    INPUT_CHANGE, SET_FORM, LOAD_RECENT_FILES, LOAD_GLOBE_DATA, LOAD_APPLICATIONS, LOAD_IP_REPUTATIONS, LOAD_BANDWIDTH, LOAD_CPU,
    LOAD_DISK_OS, LOAD_RECENT_PROCESS, REFRESH_DASHBOARD
} from '../constants/dashboard';
import { loadRecentFilesData, loadGlobeData, loadApplicationsData, loadIpReputationsData, loadBandwidthData, loadCpuData, loadDiskOsData, loadRecentProcessData } from
    '../services/dashboard';
import { createActionType } from '../actionBuilder';

const getStateData = (state) => Map(state.dashboard);

function* loadRecentFiles() {

    while (true) {

        const { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_RECENT_FILES);
        let formData = yield select(getStateData);
        let response = yield call(loadRecentFilesData, startDate, endDate, sensorId, workspaceId);
        let newList = formData.get("lstRecentFiles").concat(response.lstRecentFiles);
        yield put(createActionType(SET_FORM, { 'data': { 'lstRecentFiles': newList } }));
    }
}

function* loadGlobalData() {

    while (true) {

        const { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_GLOBE_DATA);
        let formData = yield select(getStateData);
        let response = yield call(loadGlobeData, startDate, endDate, sensorId, workspaceId);
        let newList = formData.get("lstGlobeData").concat(response.lstGlobeData);
        yield put(createActionType(SET_FORM, { 'data': { 'lstGlobeData': newList } }));
    }
}

function* loadApplications() {

    while (true) {

        const { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_APPLICATIONS);
        let formData = yield select(getStateData);
        let response = yield call(loadApplicationsData, startDate, endDate, sensorId, workspaceId);
        let newList = formData.get("lstApplications").concat(response.lstApplications);
        yield put(createActionType(SET_FORM, { 'data': { 'lstApplications': newList } }));
    }
}

function* loadIpRepucations() {

    while (true) {

        const { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_IP_REPUTATIONS);
        let formData = yield select(getStateData);
        let response = yield call(loadIpReputationsData, startDate, endDate, sensorId, workspaceId);
        let newList = formData.get("lstIPReputations").concat(response.lstIPReputations);
        yield put(createActionType(SET_FORM, { 'data': { 'lstIPReputations': newList } }));
    }
}

function* loadBandWidth() {

    while (true) {

        const { startDate, endDate, sensorId, workspaceId } = yield take(LOAD_BANDWIDTH);
        let formData = yield select(getStateData);
        let response = yield call(loadBandwidthData, startDate, endDate, sensorId, workspaceId);
        let newList = response.lstBandwidth.concat(formData.get("lstBandwidth"));
        yield put(createActionType(SET_FORM, { 'data': { 'lstBandwidth': newList } }));
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
        let workspaceId = formData.get("workspaceId");
        let sensorId = formData.get("sensorId");

        yield put(createActionType(LOAD_RECENT_FILES, { startDate, endDate, sensorId, workspaceId }));
        yield put(createActionType(LOAD_GLOBE_DATA, { startDate, endDate, sensorId, workspaceId }));
        yield put(createActionType(LOAD_APPLICATIONS, { startDate, endDate, sensorId, workspaceId }));
        yield put(createActionType(LOAD_IP_REPUTATIONS, { startDate, endDate, sensorId, workspaceId }));
        yield put(createActionType(LOAD_BANDWIDTH, { startDate, endDate, sensorId, workspaceId }));
        yield put(createActionType(LOAD_CPU, { startDate, endDate, sensorId, workspaceId }));
        yield put(createActionType(LOAD_DISK_OS, { startDate, endDate, sensorId, workspaceId }));
        yield put(createActionType(LOAD_RECENT_PROCESS, { startDate, endDate, sensorId, workspaceId }));
        yield put(createActionType(SET_FORM, { 'data': { startDate, endDate } }));
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
        fork(refreshDashboard)
    ]
}