import createConstant from './constantBuilder';

export default function actionCreator(moduleName, actionName, actionTypeName, payLoad) {

	return {
		type: createConstant(moduleName, actionName, actionTypeName),
		...payLoad
	}
}


export function createActionType(type, payLoad) {

	return {
		type,
		...payLoad
	}
}