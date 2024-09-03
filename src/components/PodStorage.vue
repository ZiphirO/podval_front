<template>

<div class="u_storage">
    <transition-group name="pod-stor">
      <pod-file v-for="userFile in userFiles"
      :userFile="userFile"
      :key="userFile.id"
      @remove="$emit('remove', userFile)"
      @download="$emit('download', userFile)"
      ></pod-file>
    </transition-group>
    </div>
</template>

<script>
import PodFile from './PodFile.vue';

export default {
    name:'pod-storage',
    components:{PodFile},
    
    props: {
    userFiles: {
      type: Array,
      required: true
    },
    
  },
    methods:{
      
    }
}

</script>

<style>
.u_storage{
    display: flex;
    border: 0.5px solid #6c6464;
    border-radius: 5px;
}
.pod-stor-item {
  display: inline-block;
  margin-right: 10px;
}
.pod-stor-enter-active,
.pod-stor-leave-active {
  transition: all 0.6s ease;
}
.pod-stor-enter-from,
.pod-stor-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.pod-stor-move {
  transition: transform 0.4s ease;
}
</style>