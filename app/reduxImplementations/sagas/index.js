import { fork } from 'redux-saga/effects';
import dashboard from './dashboard';

const rootSaga = function* root() {

    yield [
        fork(dashboard)
    ]   
}  

export default rootSaga;