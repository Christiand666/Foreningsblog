<template>
   <div>
        <h1>Admin</h1>
        <div>
        <b-table
        :items="items" 
        >
        </b-table>
    
            <ul v-if="items.length">
                <li v-for="user in items" :key="user.id">
                    {{user.fullName + '' + user.email}}
                </li>
            </ul>
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
            [ ],
            fields: ['id', 'first_name', 'Email', {
                key: 'actions',
                label: ''
                }]
        };
    },
    created () {
        userService.getAll().then(items => this.items = items);
    }
};
</script>