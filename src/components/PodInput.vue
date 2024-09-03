<template>
    <input 
    :value="modelValue" 
    @input="updateInput" 
    class="pod_input" 
    type="text">
    </template>
    
    <script>
    export default{
        name:'pod-input',
        props:{
            modelValue:[String, Number]
        },
        methods:{
            updateInput(event){
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
    </script>
    
    <style scoped>
    .pod_input{
        width: 20%;
        border: 2.5px solid #6c6464;
        padding: 10px 15px;
        margin-top: 15px;
        border-radius: 12px;
    }
    </style>