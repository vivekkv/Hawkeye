import Promsie from 'bluebird';
import { callApi } from 'utils/request';
import { getItem } from 'utils/localstorage';
import { getWorkspaceId } from 'utils/authRegistry';

export default class CrudBasic {

    constructor(entityName) {

        this.state = { entity: entityName };
        this.request = this.request.bind(this);
    }

    request(options, objParams) {

        let params = objParams ? objParams :  {};
        let entity = this.state.entity;
        let workSpaceId = params.workspaceId ? params.workspaceId: getWorkspaceId();
        
        let startDate = params.startDate ? params.startDate:  getItem("startDate");
        let endDate   = params.endDate ? params.endDate : getItem("endDate");
        let sensorId = params.sensorId ? params.sensorId: getItem("sensorId");

        _.extend(options.body, {
            "workspaceId": workSpaceId,
            "sensorId": sensorId ? sensorId : "",
            "startTime": startDate,
            "endTime": endDate,
        });

        options.body = JSON.stringify(options.body)
      
        return new Promise((resolve, reject) => {

            callApi(entity, options).then((response) => {

                resolve(response);
            });

        });
    }
}