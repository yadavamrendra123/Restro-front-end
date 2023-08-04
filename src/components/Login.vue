<template>
<div class=" flex h-screen w-full items-center justify-center">
  <div class="shadow-md flex flex-col rounded  w-[500px] p-4 ">
    <h2  class="text-center font-medium text-2xl text-blue-400">Login</h2>
    <form @submit.prevent="loginUser" class="mt-4 flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="email" class="text-base font-medium text-blue-400">Email:</label>
        <input type="email" id="email" v-model="email" class="border-blue-400 border-[1.5px] rounded" required />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="text-base font-medium text-blue-400">Password:</label>
        <input type="password" id="password"  class="border-blue-400 border-[1.5px] rounded"  v-model="password" required />
      </div>
      <div class="flex flex-col justify-center items-center my-4">
        <button type="submit" class="bg-blue-400  text-white py-2 px-4 rounded">Log In</button>
      </div>
    </form>
    <div class="flex items-center justify-center">
      <p class="text-sm font-medium text-blue-400" >Don't have an account?<router-link :to="'/register'" class="font-bold">
        Sign Up.
      </router-link></p>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name:'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post('http://127.0.0.1:3000/api/v1/login', {
          email: this.email,
          password: this.password
        });

        const jwtToken = response.data.token;

        console.log(response)
        localStorage.setItem('jwtToken', jwtToken);
        this.$router.push('/')


      } catch (error) {
        console.error(error.response.data);
        alert('Failed to log in. Please check your credentials.');
      }
    }
  },
  async mounted() {
    const jwtToken = localStorage.getItem('jwtToken');
    if(jwtToken){
      this.$router.push('/')
    }
  }
};
</script>
