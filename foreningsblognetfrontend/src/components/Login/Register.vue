<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                
                <h1>skriv dig op!</h1>
                <p>Udfyld tingene tak.</p>
                <hr>
                <form @submit.prevent="handleRegisterSubmit">
                <label for="FullName"><b>FullName</b></label>
                <input v-model="FullName" ref="FullName" type="text" placeholder="Enter FullName" name="FullName" :class="{ 'is-invalid': submitted && !FullName }"/>
                <div v-show="submitted && !FullName" class="invalid-feedback">FullName is required</div>
                   

                <label for="email"><b>Email</b></label>
                <input v-model="Email" ref="email" type="email" placeholder="Enter Email" name="Email" :class="{ 'is-invalid': submitted && !Email }"/>
                <div v-show="submitted && !Email" class="invalid-feedback">Email is required</div>

 
                <label for="psw"><b>Password</b></label>
                <input v-model="password" ref="psw" type="password" placeholder="Enter Password" name="psw" :class="{ 'is-invalid': submitted && !password }"/>
                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input v-model="repeatPassword" type="password" placeholder="Repeat Password" name="psw-repeat" :class="{ 'is-invalid': submitted && !password }"/>
                <div v-show="submitted && !password" class="invalid-feedback">reapeat Password</div>

                <p>Big chunkes <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

                <div class="clearfix">
                    <button type="button" class="cancelbtn" v-on:click="back">Nevermind</button>
                    <button type="submit" class="signupbtn" :disabled="RegisterRun">Skriv mig op</button>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import Swal from 'sweetalert2';

export default({
    data(){
        return{
            user:{
                Email:"",
                password:"",
                repeatPassword:"",
                Fullname:"",
                submitted: false
            },
        }
    },
    computed: {
        RegisterRun () {
            return this.$store.state.RegisterUser.status.RegisterRun
        }
    },
    setup() {
        
    },
    methods:{
        handleRegisterSubmit () {
            if(this.checkValidation()){
            this.submitted = true;
            
            const { Email, password, FullName } = this.user;
            const { dispatch } = this.$store;
            if (Email && password && FullName) {
                dispatch('RegisterUser/Register', { Email, password, FullName });
            }  
            } 
        },
        back(){
            this.$router.push({ name: 'Login' });
        },

        checkValidation(){
            if(!this.Fullname){
                console.log(this.Fullname)
                this.$refs.FullName.focus();
                Swal.fire("Giv FullName !");
                return;
            }
            if(!this.Email){
                this.$refs.Email.focus();
                Swal.fire("Giv email !");
                return;
            }
            if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/).test(this.Email)){
                this.$refs.Email.focus();
                Swal.fire("Ugyldig email !");
                return;
            }
            if(!this.password){
                this.$refs.psw.focus();
                Swal.fire("Giv password !");
                return;
            }
            if(this.password != this.repeatPassword){
                this.$refs.psw.focus();
                Swal.fire("Password var ikke det samme !");
                return;
            }
            return true;
        },
    }
})
</script>

<style scoped>
    .container{
        width: 40%;
        padding: 16px;
    }
    input[type=text], input[type=password], input[type=email] {
        width: 100%;
        padding: 15px;
        margin: 5px 0 22px 0;
        display: inline-block;
        border: none;
        background: #f1f1f1;
    }
    input[type=text]:focus, input[type=password]:focus, input[type=email]:focus {
        background-color: #ddd;
        outline: none;
    }
    hr {
        border: 1px solid #f1f1f1;
        margin-bottom: 25px;
    }
    button {
        background-color: #04AA6D;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
        opacity: 0.9;
    }
    button:hover {
        opacity:1;
    }
    .cancelbtn {
        padding: 14px 20px;
        background-color: #f44336;
    }
    .cancelbtn, .signupbtn {
        float: left;
        width: 50%;
    }
    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }
</style>
