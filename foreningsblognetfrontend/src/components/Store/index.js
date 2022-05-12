import Vuex from 'vuex';
import {alert} from './alert.module';
import {authentication}  from './authentication.module';
import {users}  from './users.module';
import {RegisterUser} from './RegisterStore.module';


export const store = new Vuex.Store({
    modules: {
        alert,
        authentication,
        users,
        RegisterUser
    }
});
