<template>
<!--  <h1 class="text-xl font-bold">{{ restaurant.name }}</h1>-->
  <div class="flex flex-col gap-3 m-4 bg-gray-200 p-4" >
   <h1 class="font-medium text-base">{{name}}</h1>
    <div class="flex gap-1">
      <router-link :to="'/' + id" class="bg-blue-500 text-white p-2 rounded uppercase">
        View-Detail
      </router-link>


      <button @click="deleteRestaurant(id)" class="bg-blue-500 text-white p-2 rounded uppercase">
        Delete
      </button>
      <router-link :to="'/update/' + id" class="bg-blue-500 text-white p-2 rounded uppercase">
        Edit
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">

import axios from 'axios'
import { useCounterStore } from '../stores/counter'

export  default {
  name:'RestaurantCard',
  props:{
    name:String,
    id:{type:Number,required:true},
    description:String,
  },
  data() {
    return {
      counter:useCounterStore()
    }
  },
  methods: {

    async deleteRestaurant(id: number) {
      const confirmed = window.confirm('Do you really want to delete this?');
      if (confirmed) {
        await axios.delete(`http://127.0.0.1:3000/api/v1/restaurants/${id}`).then((response) => {
          location.reload()

        })
      } else {

        console.log('Deletion canceled');
      }

    }

  },
}

</script>