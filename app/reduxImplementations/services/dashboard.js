import CrudBase from './crudBase';
import { List } from 'immutable';
import { httpRequest } from 'utils/request';
import { getToken } from 'utils/authRegistry';

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

export function loadRecentProcessData(workspaceId, startDate, endDate, sensorId) {

	return new Promise((resolve, reject) => {

		new CrudBase("hawkeye/process").request({
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

				resolve({ 'lstRecentProcess': List(response.data) });

			} else {

				resolve({ 'lstRecentProcess': List([]) });
			}

		}).catch((e) => {

			reject(e);
		});

	});
}

export function loadGlobeData(workspaceId, startDate, endDate, sensorId) {

	return new Promise((resolve, reject) => {

		let token = getToken();

		httpRequest("https://api-beacon.apvera.com/api/v4/ip/map", {
			'method': "POST",
			'body': JSON.stringify({
				'StartDate': startDate,
				'EndDate': endDate,
				'WorkspaceId': workspaceId,
				'sensorId': ""
			}),
			'headers': {
				'Content-Type': 'application/json',
				'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzMsImV4cCI6MTUyMzE3NDIyNSwidXNlcl9pZCI6NzMsImNsaWVudF9pZCI6MTIsImNvbnRhY3RfaWQiOjUxLCJ3b3Jrc3BhY2VfdXVpZCI6IndvcmtzcGFjZV81NmJlYjJhZSJ9.pPzs1GlAt2QR75AHZ_HehqNmqLjme29rsapMETMT-Jw"
			}
		}).then((response) => {

			debugger
			resolve({
				'lstGlobeData': List([{
					"signature": 'Dummy file' + Math.random(),
					'latitude': "123",
					"longitude": "123",
					"severity": "high",
					"country": "india",
					"lat": "",
					"long": "",
					"city": "",
					"mac": Math.random(),
					"ip": "127.1.2.1",
					"code": "flag-icon flag-icon-eng"
				}])
			})
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
