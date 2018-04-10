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

export function loadWebsiteData(workspaceId, startDate, endDate, sensorId) {

	return new Promise((resolve, reject) => {

		new CrudBase("beacon/websites").request({
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

				resolve({ 'lstWebsites': List(response.data) });

			} else {

				resolve({ 'lstWebsites': List([]) });
			}

		}).catch((e) => {

			reject(e);
		});

	});
}

export function loadIpReputationsData(workspaceId, startDate, endDate, sensorId) {

	return new Promise((resolve, reject) => {

		new CrudBase("beacon/ssh").request({
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

				response.data[0].sensor_uuid = "abc";
				//let groupe = _.chain(response.data).groupBy(p=> p.sensor_uuid);

				debugger
				var result = _.chain(response.data).groupBy("sensor_uuid").map(function(v, i) {

					let average = (name) => {
						let sum = 0;
						for (let i in v) {
							sum += Number(v[i][name])
						}
						return sum / v.length;
					}

					return {
						name: i,
						cpuAverage: average("cpuUsage"),
						diskTransfer: average("diskTransfer"),
						freeMemory: average("freeMemory")
					}
				}).value();

				debugger


				resolve({ 'lstResources': List(result) });

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
				'startTime': startDate,
				'endTime': endDate,
				'workspaceId': workspaceId,
				'sensorId': ""
			}),
			'headers': {
				'Content-Type': 'application/json',
				'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzMsImV4cCI6MTUyMzM4MzY4NiwidXNlcl9pZCI6NzMsImNsaWVudF9pZCI6MTIsImNvbnRhY3RfaWQiOjUxLCJ3b3Jrc3BhY2VfdXVpZCI6IndvcmtzcGFjZV81NmJlYjJhZSJ9.PaFmUuEd0oYD9H5_g1MPw5ToXrF2MCV_mjbz2OEScjQ"
			}
		}).then((response) => {

			if (response.completed && Array.isArray(response.data)) {

				response.data.forEach((i) => {
					i.marked = false;
				})

				resolve({
					'lstGlobeData': List(response.data)
				});
			} else {

				resolve({
					'lstGlobeData': List([])
				});
			}
		});
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