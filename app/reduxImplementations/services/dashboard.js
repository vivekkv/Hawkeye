import CrudBase from './crudBase';
import { List } from 'immutable';

export function loadRecentFilesData(startDate, endDate, sensorId) {

	return new Promise((resolve, reject) => {

		// resolve({
		//     'lstRecentFiles': List([{
		//         "name": 'Dummy file' + Math.random(),
		//         'id': Math.random()
		//     }])
		// })

		new CrudBase("pathfinder/recentfiles").request({
			'method': "POST",
			'body': JSON.stringify({
				'StartDate': 1503365520,
				'EndDate': 1503366661,
				'SensorId': "sensor_10ffa630",
				"WorkspaceId": "workspace_56beb2ae"
			}),
			'headers': {
				'Content-Type': 'application/json'
			}
		}).then((response) => {

            debugger

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

export function loadApplicationsData(startDate, endDate, sensorId) {

	return new Promise((resolve, reject) => {

		resolve({
			'lstApplications': List([{
				"name": "application " + Math.random()
			}])
		})

	});
}

export function loadIpReputationsData(startDate, endDate, sensorId) {

	return new Promise((resolve, reject) => {

		resolve({
			'lstIPReputations': List([{
				"name": "123 " + Math.random(),
				"flag": "In"
			}])
		})

	});
}

export function loadBandwidthData(startDate, endDate, sensorId) {

	return new Promise((resolve, reject) => {

		resolve({
			'lstBandwidth': List([{
				"count": Math.floor(Math.random() * (100 - 0 + 1) + 0),
				"label": "cpu " + Math.random().toFixed(1),
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