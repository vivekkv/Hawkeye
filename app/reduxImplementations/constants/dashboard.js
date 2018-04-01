import ConstantBuilder from '../constantBuilder';

export const MODULE = "HOME";
export const TYPE = "DASHBOARD";
export const INITALIZE = "INITALIZE";

export const INIT_MODULE = ConstantBuilder(MODULE, TYPE, INITALIZE);
export const INPUT_CHANGE = ConstantBuilder(MODULE, TYPE, "INPUT_CHANGED");
export const SET_FORM = ConstantBuilder(MODULE, TYPE, "SET_FORM");
export const LOAD_RECENT_FILES = ConstantBuilder(MODULE, TYPE, "LOADRECENT_FILES");
export const LOAD_GLOBE_DATA = ConstantBuilder(MODULE, TYPE, "LOAD_GLOBE_DATA");
export const LOAD_APPLICATIONS = ConstantBuilder(MODULE, TYPE, "LOAD_APPLICATIONS");
export const LOAD_IP_REPUTATIONS = ConstantBuilder(MODULE, TYPE, "LOAD_IP_REPUTATIONS");
export const LOAD_BANDWIDTH = ConstantBuilder(MODULE, TYPE, "LOAD_BANDWIDTH");
export const LOAD_CPU = ConstantBuilder(MODULE, TYPE, "LOAD_CPU");
export const LOAD_DISK_OS = ConstantBuilder(MODULE, TYPE, "LOAD_DISK_OS");
export const LOAD_RECENT_PROCESS = ConstantBuilder(MODULE, TYPE, "LOAD_RECENT_PROCESS");
export const REFRESH_DASHBOARD = ConstantBuilder(MODULE, TYPE, "REFRESH_DASHBOARD");