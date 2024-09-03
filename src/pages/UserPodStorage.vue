<template>
  <form @submit.prevent>
    <h2 class="h-3">{{ user }}</h2> 
    <input type="file" @change="onFileSelected">

    <pod-btn style="margin-left: 20px; margin-bottom: 5px;"
        @click="onUpload"  >upload</pod-btn>
        <pod-storage :userFiles="userFiles" @remove="deleteFile" @download="downloadFile">
        </pod-storage>
      </form>


</template>

<script>
import PodInput from '@/components/PodInput.vue';
import PodBtn from '@/components/PodBtn.vue';
import PodFile from '@/components/PodFile.vue';
import PodStorage from '@/components/PodStorage.vue';
import axios from 'axios';

export default {
  components: { PodInput, PodBtn, PodFile, PodStorage },

  data() {
    return {
      userFiles: [],
      selectedFile: null,
      message: '',
      
    }
  },
  
  methods: {
    onFileSelected(event){
    this.selectedFile = event.target.files[0];
  },
  onUpload(){
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name)
    axios.post('http://localhost:9090/files/upload/art_yommy', fd)
    .then(res => {
      console.log(res)
    })
  },


  downloadFile(userFile) {
    axios({
      url: `http://localhost:9090/files/download/${userFile.creator}/${userFile.fileName}`,
      method: 'GET',
      responseType: 'blob',
      headers: {
        'Content-Type': "application/ octet-stream"
      } // Важно для получения файла как blob
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', userFile.fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch((error) => {
      console.error('Ошибка при загрузке файла:', error);
    });
  },
  async deleteFile(userFile) {
    this.userFiles = this.userFiles.filter(f => f.id !== userFile.id);

    try {
      const response = await axios.get('http://localhost:9090/files/del/'
        + userFile.fileName + '/' + userFile.id + '/' + userFile.creator);

    } catch (e) {
      alert('delete error')
    }
  },
  async fetchFiles() {
    try {
      const response = await axios.get('http://localhost:9090/files/userName/art_yommy');
      this.userFiles = response.data;
    } catch (e) {
      alert('user files view error')
    }
  },

},
mounted() {
  this.fetchFiles();

}
}

</script>

<style>
.pod_window {
  margin: 30px;
  border: 2px;
}

.h-3 {
  display: inline-block;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #6c6464;
  margin-bottom: 0;
}
</style>