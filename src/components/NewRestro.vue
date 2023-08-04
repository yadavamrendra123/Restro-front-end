<template>


    <div
      class="flex flex-col items-center justify-center m-8 p-4 shadow-md max-w-[500px mx-auto]"
    >
      <h1>Create a new Restaurant</h1>

      <div class="flex flex-col items-center justify-center gap-4">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" class="border border-gray-500 rounded"/>

        <label for="description">Description</label>
        <textarea type="textarea" id="description" v-model="description"   class="border border-gray-500 rounded"/>

        <label for="rating">Rating</label>
        <input type="text" id="rating" v-model="rating" class="border border-gray-500 rounded" />

          <button @click="createRestaurant" class="bg-blue-500 text-white px-4 py-2 rounded uppercase">
              Create Restaurant
          </button>

      </div>
    </div>
  </template>

  <script lang="ts" >
  import axios from 'axios'
  export default {
    name: "CreateNew",
    data() {
      return {
        name: "",
        description: "",
        rating: "",

      };
    },
    methods:{
        async createRestaurant() {

      try {
        const response = await axios.post('http://127.0.0.1:3000/api/v1/restaurants', { restaurant: {
            name: this.name,
        description: this.description,
        rating: this.rating as unknown as number
        } });

        if(response.data){
            alert("Restaurant created successfully")
            this.$router.push('/')
        }

      } catch (error) {
        console.error(error);
        alert('Failed to create the restaurant!');
      }
    }
  }
    }
  ;
  </script>
