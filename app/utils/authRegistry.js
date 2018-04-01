import { setItem, getItem, remove } from './localstorage';
import Promise from 'bluebird';
import { ENVIORNEMNT, DEV } from 'utils/apiConfig';
import { getCookie } from 'utils/cookie';
import moment from 'moment';
import { debug } from 'util';
import { logError } from './errorLog';
import { setInterval } from 'timers';
import { httpRequest } from 'utils/request';
import { refreshToken, sentinelHomeUrl, demoAuthentication } from './apiConfig';

export function getToken() {

	try {

		let beacon_storage = JSON.parse(getItem("beacon_storage"));

		if (!beacon_storage.token) {

			//alert("beacon token parse failed");

			window.location = sentinelHomeUrl;
			return null;
		}

		return beacon_storage.token;
	} catch (e) {

		window.location = sentinelHomeUrl;
		//alert("beacon token parse failed");
		return null;
	}
}

export function getWorkspaceId() {

	try {

		let beacon_storage = JSON.parse(getItem("beacon_storage"));

		if (!beacon_storage.workspaceId) {

			alert("beacon work space id parse failed");
			return null;
		}

		return beacon_storage.workspaceId;
	} catch (e) {

		alert("beacon work space id parse failed");
		return null;
	}
}

export function getSensors() {

	try {

		let beacon_storage = JSON.parse(getItem("beacon_storage"));

		if (!beacon_storage.sensors) {

			//alert("beacon sensor listing parse failed");
			return [];
		}

		return beacon_storage.sensors;

	} catch (e) {

		//alert("beacon sensor list parse failed");
		logError(e);
		return [];
	}
}

export function getDevelopmentCookieInfo() {

	return demoAuthentication;
}

export function readSentinelCookie() {

	return new Promise((resolve, reject) => {
		
		if (ENVIORNEMNT == "DEV") {

			let sentilenCookie = getDevelopmentCookieInfo()
			updateSentinelInfoToLocalStorage(sentilenCookie);
			initRefreshToken();
			resolve();

		} else {
			
			try {

				let cookie = getCookie("apvera");
	
				if (cookie != "") {
	
					let sentilenCookie = JSON.parse(cookie);
					updateSentinelInfoToLocalStorage(sentilenCookie);
					initRefreshToken();
					resolve();
	
				} else {
	
					reject();
				}
	
			} catch (e) {
	
				reject(e);
	
			}

		}

	});
}

export function unAuthorizeUser() {

	remove("beacon_storage");
}

function updateSentinelInfoToLocalStorage(sentienlInfo) {

	// let sensorInfo = parseSensorInfo(sentienlInfo);
	// let token = sentienlInfo.token;
	// let workspaceId = sentienlInfo.workspace_uuid;

	// let date = moment().subtract(7, 'days');
	// let day = date.date();
	// let month = date.month();
	// let year = date.year();
	// let startDate = moment(new Date(year, month, day, 0, 0, 0));
	// let endDate = moment();

	// setItem("startDate", startDate.unix());
	// setItem("endDate", endDate.unix());
	// setItem("beacon_storage", JSON.stringify({ 'sensors': sensorInfo, 'token': token, 'workspaceId': workspaceId }));
}

function initRefreshToken() {

	setInterval(function () {

		let token = getToken();

		httpRequest(refreshToken, {
			'method': "GET",
			'headers': {
				'Authorization': 'token ' + token
			}
		}).then((response) => {

			if (response.completed && response.data) {

				let beacon_storage = JSON.parse(getItem("beacon_storage"));
				beacon_storage.token = response.data.refresh_token;
				setItem("beacon_storage", JSON.stringify(beacon_storage));

			} else {


				window.location = sentinelHomeUrl;
			}

		});

	}, 1800000)

}

function parseSensorInfo(sentinelInfo) {

	try {

		let sensors = _.filter(sentinelInfo.sensor, (i) => { return i.product_code == "Beacon" });

		sensors.forEach((i) => {

			i.label = i.sensor_name;
			i.value = i.sensor_uuid
		});

		return sensors;
	} catch (e) {

		alert("failed to parse sensor details from cookie");

		return [];
	}
}