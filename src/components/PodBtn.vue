<template>
<button class="pod_btn">
<slot></slot>
</button>

</template>

<script>
export default{
    name: 'pod-btn'
}
</script>

<style scoped>
.pod_btn{
    border: 1px solid;
    border-color: #6c6464;
    border-radius: 5px;
    background-color:burlywood;
    width: 100px;
    /* padding-top: 10px;
    padding-bottom: 10px; */
    margin: 2px;
}
</style>