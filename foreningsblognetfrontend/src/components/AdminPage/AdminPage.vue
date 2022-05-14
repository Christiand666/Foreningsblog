<template>
   <div>
        <h1>Admin</h1>
        <div>
        <b-table
        hover head-variant="dark"
        :items="items" :fields="fields" 
        >
        <template v-slot:cell(actions)="{ item }">
        <button @click="DeleteItem(item)" >Delete</button>
        </template>
        </b-table>
        </div>
    </div>
</template>

<script>
import { authenticationService, userService } from '../ServicesHelp';

export default {
    data () {
        return {
            user: authenticationService.currentUserValue,
            items: 
            [{id: 'id', fullName:'fullName', email:'email', role:'role'}],
            fields: ["id", "fullName", "email","role", "actions"]
            
        };
    },
    created () {
        userService.getAll().then(items => this.items = items);
    },
    methods:{
        DeleteItem(item){ console.log(item); }
    }
};
</script>