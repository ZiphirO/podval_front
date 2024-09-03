<template>
    <form @submit.prevent="saveData">

        <div class="log-form">
            <h3 class="h-3" style="margin-bottom: 0;">sign up your pogreb_OK account</h3>
            <pod-input id="userName" placeholder="user name" type="text" v-model="user.userName" />
            <pod-input id="userEmail" placeholder="email" type="text" v-model="user.userEmail" />
            <pod-input id="userPass" placeholder="password" type="password" v-model="user.userPass" />
            <div class="log_btns">
                <pod-btn
                type="submit"
                >Sign up</pod-btn>
                <h4 class="h-3"><a href="/login">login</a></h4>
            </div>

        </div>
    </form>
</template>

<script>
import PodInput from '@/components/PodInput.vue';
import PodBtn from '@/components/PodBtn.vue';
import axios from 'axios';

export default {
    name: 'SignUp',
    components: { PodInput, PodBtn },
    data() {
        return {
            result: {},
            user: {
                userName: '',
                userEmail: '',
                userPass: ''
            }
        }
    },
    created(){

    },
    mounted(){
        console.log("mounted() called....")
    },
    methods: {
        saveData() {
            axios.post("http://localhost:9090/user/add", this.user)
            .then(
                ({data}) => {
                    console.log(data);
                    try{
                        alert("user registred");
                    }catch(e){
                        alert("registration failed")
                    }
                }
            )
        },

    }
}
</script>
<style scoped>
.log-form {
    display: flex;
    flex-direction: column;
    margin-top: 350px;
    align-items: center;
}

.log_btns {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    align-items: center;
    width: 200px;
    /* justify-content: space-between; */
}

.h-3 {

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #6c6464;
}
</style>