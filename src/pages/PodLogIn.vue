<template>
    <form @submit.prevent="logInData">

        <div class="log-form">
            <h3 class="h-3" style="margin-bottom: 0;">login your pogreb_OK account</h3>
            <pod-input placeholder="email"  type="text" v-model="user.userEmail" />
            <pod-input placeholder="password"  type="password" v-model="user.userPass" />
            <div class="log_btns">
                <pod-btn type="submit">
                    Login</pod-btn>
                <h4 class="h-3"><a href="/signup">sign up</a></h4>
            </div>

        </div>
    </form>
</template>

<script>
import PodInput from '@/components/PodInput.vue';
import PodBtn from '@/components/PodBtn.vue';
import axios from 'axios';

export default {
    components: { PodInput, PodBtn },
      props:{
    user:{
      type: Object,
      required: true
    }
  },
    data() {
        return {
            user: {
                userEmail: '',
                userPass: ''
            }
        }
    },
    created() {

    },
    mounted() {
        console.log("mounted() called....")
    },
    methods: {
        logInData() {
            axios.post("http://localhost:9090/user/logIn", this.user)
                .then(
                    ({ data }) => {
                        console.log(data);
                        try {
                            if(data.message === "Email not exists"){
                                alert("email not exist")
                            }else if(data.message === "Login success"){
                                this.$router.push({name: 'Storage'})
                            }else{
                                alert("email and password not match")
                            }
                        } catch (e) {
                            alert("please try again")
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