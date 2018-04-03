import CrudBase from './crudBase';
import { List } from 'immutable';

export function loadRecentFilesData(startDate, endDate, sensorId) {

	return new Promise((resolve, reject) => {

        resolve({
            'lstRecentFiles': List([{
                "name": 'Dummy file' + Math.random(),
                'id': Math.random()
            }])
        })

        // new CrudBase("recentFiles").request({
        // 	'method': "POST",
        // 	'body': {},
        // 	'headers': {
        // 		'Content-Type': 'application/json'
        // 	}
        // }, {

        // 	'startDate': startDate,
        // 	'endDate': endDate,
        // 	'sensorId': sensorId

        // }).then((response) => {

        // 	if (response.completed) {

        // 		resolve({ 'lstRecentFiles': List(response.data) }  );

        // 	} else {

        // 		resolve();
        // 	}

        // }).catch((e) => {

        // 	reject(e);
        // });

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
                "country":"india",
                "city": "",
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
                "count":  Math.floor(Math.random()*(100-0+1)+0),
                "label": "cpu " + Math.random().toFixed(1),
            }])
        })

    });
}

export function loadCpuData(startDate, endDate, sensorId) {

	
    return new Promise((resolve, reject) => {

        resolve({
            'lstCpu': List([{
                "count":  Math.floor(Math.random()*(100-0+1)+0),
                "label": "cpu " + Math.random().toFixed(1),
            }])
        })

    });
}

export function loadDiskOsData(startDate, endDate, sensorId) {

	return new Promise((resolve, reject) => {

        resolve({
            'lstDiskOs': List([{
                "count":  Math.floor(Math.random()*(100-0+1)+0),
                "label": "diskos " + Math.random().toFixed(1),
            }])
        })

    });
}

export function loadRecentProcessData(startDate, endDate, sensorId) {

    return new Promise((resolve, reject) => {

        resolve({
            'lstRecentProcess': List([{
                "count":  Math.floor(Math.random()*(100-0+1)+0),
                "label": "recent process " + Math.random().toFixed(1),
            }])
        })
    });
}