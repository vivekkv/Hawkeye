import CrudBase from './crudBase';
import { List } from 'immutable';

export function loadRecentFilesData(workspaceId, startDate, endDate, sensorId) {

	return new Promise((resolve, reject) => {

		new CrudBase("pathfinder/recentfiles").request({
			'method': "POST",
			'body': JSON.stringify({
				'StartDate': startDate,
				'EndDate': endDate,
				//'SensorId': sensorId,
				"WorkspaceId": workspaceId
			}),
			'headers': {
				'Content-Type': 'application/json'
			}
		}).then((response) => {

			if (response.completed) {

				resolve({ 'lstRecentFiles': List(response.data) });

			} else {

				resolve({ 'lstRecentFiles': List([]) });
			}

		}).catch((e) => {

			reject(e);
		});

	});
}

export function loadApplicationsData(workspaceId, startDate, endDate, sensorId) {

	return new Promise((resolve, reject) => {

		new CrudBase("hawkeye/recentApplications").request({
			'method': "POST",
			'body': JSON.stringify({
				'StartDate': startDate,
				'EndDate': endDate,
				"WorkspaceId": workspaceId
			}),
			'headers': {
				'Content-Type': 'application/json'
			}
		}).then((response) => {

			if (response.completed) {

				resolve({ 'lstApplications': List(response.data) });

			} else {

				resolve({ 'lstApplications': List([]) });
			}

		}).catch((e) => {

			reject(e);
		});

	});
}

export function loadIpReputationsData(workspaceId, startDate, endDate, sensorId) {

	return new Promise((resolve, reject) => {

		new CrudBase("hawkeye/recentApplications").request({
			'method': "POST",
			'body': JSON.stringify({
				'StartDate': startDate,
				'EndDate': endDate,
				"WorkspaceId": workspaceId
			}),
			'headers': {
				'Content-Type': 'application/json'
			}
		}).then((response) => {

			if (response.completed) {

				resolve({ 'lstIPReputations': List(response.data) });

			} else {

				resolve({ 'lstIPReputations': List([]) });
			}

		}).catch((e) => {

			reject(e);
		});

	});
}

export function loadResource(workspaceId, startDate, endDate, sensorId) {

	return new Promise((resolve, reject) => {

		new CrudBase("hawkeye/resource").request({
			'method': "POST",
			'body': JSON.stringify({
				'StartDate': startDate,
				'EndDate': endDate,
				"WorkspaceId": workspaceId
			}),
			'headers': {
				'Content-Type': 'application/json'
			}
		}).then((response) => {

			if (response.completed) {

				resolve({ 'lstResources': List(response.data) });

			} else {

				resolve({ 'lstResources': List([]) });
			}

		}).catch((e) => {

			reject(e);
		});

	});
}

export function loadBandwidthData(workspaceId, startDate, endDate, sensorId) {

	return new Promise((resolve, reject) => {

		new CrudBase("hawkeye/bandwidth").request({
			'method': "POST",
			'body': JSON.stringify({
				'StartDate': startDate,
				'EndDate': endDate,
				"WorkspaceId": workspaceId
			}),
			'headers': {
				'Content-Type': 'application/json'
			}
		}).then((response) => {

			if (response.completed) {

				resolve({ 'lstBandwidth': List(response.data) });

			} else {

				resolve({ 'lstBandwidth': List([]) });
			}

		}).catch((e) => {

			reject(e);
		});

	});
}

export function loadGlobeData(startDate, endDate, sensorId) {

	return new Promise((resolve, reject) => {

		resolve({
			'lstGlobeData': List([{
				"signature": 'Dummy file' + Math.random(),
				'latitude': "123",
				"longitude": "123",
				"severity": "high",
				"country": "india",
				"city": "",
				"mac_address": Math.random(),
				"ip": "127.1.2.1"
			}])
		})

	});
}


export function loadCpuData(startDate, endDate, sensorId) {

	return new Promise((resolve, reject) => {

		resolve({
			'lstCpu': List([{
				"count": Math.floor(Math.random() * (100 - 0 + 1) + 0),
				"label": "cpu " + Math.random().toFixed(1),
			}])
		})

	});
}

export function loadDiskOsData(startDate, endDate, sensorId) {

	return new Promise((resolve, reject) => {

		resolve({
			'lstDiskOs': List([{
				"count": Math.floor(Math.random() * (100 - 0 + 1) + 0),
				"label": "diskos " + Math.random().toFixed(1),
			}])
		})

	});
}

export function loadRecentProcessData(startDate, endDate, sensorId) {

	return new Promise((resolve, reject) => {

		resolve({
			'lstRecentProcess': List([{
				"count": Math.floor(Math.random() * (100 - 0 + 1) + 0),
				"label": "recent process " + Math.random().toFixed(1),
			}])
		})
	});
}