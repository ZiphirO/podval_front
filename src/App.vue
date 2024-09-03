<template>
    <div class="container">
        <div>
            <router-view />
        </div>
    </div>

</template>

<script>
import PodInput from './components/PodInput.vue';
import PodBtn from './components/PodBtn.vue';
import axios from 'axios';


export default {
    name: 'App',
    components: {PodInput, PodBtn},
    data(){
        return{
            userFiles: [],
            loading: false,
        
        }
    },
    
}
</script>

<style>
* {
    background-color: blanchedalmond;

}
.container{
    
}
</style>