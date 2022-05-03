<template>
<div class="navbar-container">
	<ul>
	<li><a href="/home">Home</a></li>
	<li><a href="/login">Login</a></li>
  <li>
  <a href="/login">Logout</a>
  </li>
	<li><a href="/events">Events</a></li>
	</ul>  
</div>
</template>

<script>
import { authenticationService } from "../ServicesHelp/authentication.service.js"
export default({
    name: 'Navbar',
        
    methods:{
        back(){
            var currentUser = authenticationService.currentUserValue;
        }
        
    }
})

</script>

<style>
.navbar-container{
	margin-bottom: 40px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: rgb(222, 222, 222);
}

li {
  float: left;
  color: black;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: rgb(119, 119, 119);
}
</style>