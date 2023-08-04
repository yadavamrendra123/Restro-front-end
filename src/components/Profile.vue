<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      profilePicture: null,
      profilePictureUrl: null,
    };
  },
  methods: {
    onFileChange(event) {
      this.profilePicture = event.target.files[0];
    },
    async uploadProfilePicture() {
      const formData = new FormData();
      formData.append('profile_picture', this.profilePicture);

      try {
        const response = await axios.post('/api/v1/upload-profile-picture', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        this.profilePictureUrl = response.data.profile_picture_url;
      } catch (error) {
        console.error(error.response.data);
        alert('Failed to upload profile picture.');
      }
    },
  },
};
</script>

<template>
  <div>
    <form @submit.prevent="uploadProfilePicture">
      <input type="file" ref="fileInput" @change="onFileChange" />
      <button type="submit">Upload Profile Picture</button>
    </form>
    <!-- Show the user's profile picture if available -->
    <img v-if="profilePictureUrl" :src="profilePictureUrl" alt="Profile Picture" />
  </div>
</template>


<style scoped>

</style>