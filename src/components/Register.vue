<template>
 <div class="w-full h-screen flex justify-center items-center ">
   <div class="shadow-md rounded  w-[500px] p-4">
     <h2 class="text-center font-medium text-2xl text-blue-400">Sign Up</h2>
     <form @submit.prevent="signupUser" class="mt-4 flex flex-col gap-4">
       <div class="flex flex-col gap-2">
         <label for="email" class="text-base font-medium text-blue-400">Email:</label>
         <input type="email" id="email" v-model="email" required  class="border-blue-400 border-[1.5px] rounded"/>
       </div>
       <div class="flex flex-col gap-2">
         <label for="password" class="text-base font-medium text-blue-400">Password:</label>
         <input type="password" id="password" v-model="password" required  class="border-blue-400 border-[1.5px] rounded"/>
       </div>
       <div class="flex flex-col gap-2">
         <label for="confirmPassword" class="text-base font-medium text-blue-400">Confirm Password:</label>
         <input type="password" id="confirmPassword" v-model="passwordConfirmation" required  class="border-blue-400 border-[1.5px] rounded"/>
       </div>
       <div class="flex flex-col justify-center items-center my-4">
         <button type="submit" class="bg-blue-400  text-white py-2 px-4 rounded">Sign Up</button>
       </div>
     </form>
     <div class="flex items-center justify-center">
       <p class="text-sm font-medium text-blue-400" >Already have an account?<router-link :to="'/login'" class="font-bold">
         Sign in.
       </router-link></p>
     </div>
   </div>
 </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      passwordConfirmation: ''
    };
  },
  methods: {
    async signupUser() {
      try {
        const response = await axios.post('http://127.0.0.1:3000/api/v1/signup', {
          user: {
            email: this.email,
            password: this.password,
            password_confirmation: this.passwordConfirmation
          }
        });
         this.$router.push('/login')
      } catch (error) {
        console.error(error.response.data);
        alert('Failed to register user!');
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
