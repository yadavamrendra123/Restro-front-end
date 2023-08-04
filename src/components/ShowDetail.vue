<template>
    <div>
        <Header />
        <div class="container mx-auto">
       <h1 class="text-xl font-extrabold">{{ restaurant.name }}</h1>
       <p>{{ restaurant.description }}</p>
       <h2 class="font-medium text-base leading-[150%]">Rating : {{ restaurant.rating }}</h2>
        </div>
    </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import Header from './Header.vue'
import axios from 'axios'
import {BiStarHalf} from 'oh-vue-icons/icons'

interface RestaurantDetail{
    name:string
    description:string
    id:number
    rating:number
}

export default {
    name: 'Detail',
    components:{
        Header,
        BiStarHalf
    },
    data() {
        return {

            id: "",
            restaurant:{} as RestaurantDetail

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
    this.restaurant.id=response.data.id
    this.restaurant.name=response.data.name
    this.restaurant.rating=response.data.rating
    this.restaurant.description=response.data.description
})
.catch(error => {
  console.log(error)
});


    }

}

</script>
