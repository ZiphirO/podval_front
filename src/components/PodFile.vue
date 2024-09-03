<template>
    <div class="user_file">
        <div>
            <img src="@/assets/fileIcon.png" alt="icon">
            <div><strong>id:</strong>{{ userFile.id }}</div>
            <div><strong>name:</strong>{{ userFile.fileName }}</div>
            <div><strong>creator:</strong>{{ userFile.creator }}</div>
        </div>
        <div class="file_btns">
            <pod-btn style="width: auto; height: 25px;"
            @click="$emit('remove', userFile)"
            >delete
        </pod-btn>

            <pod-btn style="width: auto; height: 25px;"
            @click="$emit('download', userFile)"
            >download
            </pod-btn>
        </div>
    </div>
</template>

<script>
import PodBtn from '@/components/PodBtn.vue';

export default {
    name: 'pod-file',
    components: { PodBtn },

    props: {
        userFile: {
            type: Object,
            required: true,
        },
        methods:{
            
        }
    }


}
</script>

<style scoped>
.user_file {
    padding: 3px;
    border: 2px solid #6c6464;
    border-radius: 5px;
    margin: 9px;
    display: inline-block;

    justify-content: space-between;
}

.file_btns {
    justify-content: space-between;
    margin-bottom: 0;
}
</style>