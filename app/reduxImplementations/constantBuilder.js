export function createConstant(moduleName, subModuleName, actionTypeName) {

    return "APPVERA_" + moduleName + "_" + subModuleName + "_" + actionTypeName;
}

export default createConstant;