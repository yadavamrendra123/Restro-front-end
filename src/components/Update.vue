<template>


    <div
      class="flex flex-col items-center justify-center m-8 p-4 shadow-md max-w-[500px mx-auto]"
    >
      <h1>Update Restaurant</h1>

      <div class="flex flex-col items-center justify-center gap-4">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="restaurant.name" class="border border-gray-500 rounded"/>

        <label for="description">Description</label>
        <textarea type="textarea" id="description" v-model="restaurant.description"   class="border border-gray-500 rounded"/>

        <label for="rating">Rating</label>
        <input type="number" id="rating" v-model="restaurant.rating" class="border border-gray-500 rounded" />

          <button @click="updateRestaurant" class="bg-blue-500 text-white px-4 py-2 rounded uppercase">
              Update Restaurant
          </button>

      </div>
    </div>
  </template>

  <script lang="ts">
  import axios from 'axios'
  interface RestaurantDetail{
    name:string
    description:string
    id:number
    rating:number
}
  export default {
    name: "CreateNew",
    data() {
      return {
        id:"",
        restaurant:{} as RestaurantDetail
      };
    },
    methods:{
        async updateRestaurant() {
      try {
        const response = await axios.put(`http://127.0.0.1:3000/api/v1/restaurants/${this.id}`, { restaurant: {
            name: this.restaurant.name,
        description: this.restaurant.description,
        rating: this.restaurant.rating
        }});

        if(response.data){
            alert("Restaurant created successfully")
            this.$router.push('/')
        }

      } catch (error) {
        console.error(error);
        alert('Failed to create the restaurant!');
      }
    }
         },
         async mounted(){

this.id = this.$route.params.id as string

axios.get(`http://127.0.0.1:3000/api/v1/restaurants/${this.id}`, {
headers: {
Accept: 'application/json',
},
})
.then(response => {
    this.restaurant.description=response.data.description
    this.restaurant.name=response.data.name
 this.restaurant.rating=response.data.rating

})
.catch(error => {
console.log(error)
});


}

}


  </script>
