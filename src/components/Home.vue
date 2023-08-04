<template>
    <div>
        <Header />
        <div class="my-4"></div>
        <router-link :to=" '/new'" class="bg-blue-500 text-white p-2 rounded mx-4  uppercase">
                        Add new
        </router-link>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :name="restaurant.name" :description="restaurant.description" :id="restaurant.id" />
        </div>
    </div>
</template>



<script lang="ts">
import axios from 'axios'
import Header from './Header.vue'
import RestaurantCard from "./RestaurantCard.vue";
import { useCounterStore } from '../stores/counter'

interface RestaurantDetail{
  name:string
  description:string
  id:number
  rating:number
}
export default {
    name: 'Home',
    components: {
        Header,
      RestaurantCard,
    },
    data() {
        return {
            name: "",
            restaurants: [] as RestaurantDetail[],
            counter:useCounterStore(),
          isModalOpen: false,
        }
    },
  methods:{
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
    async mounted() {
      const jwtToken = localStorage.getItem('jwtToken');
      if(jwtToken){
        try {
          const response = await axios.get('http://127.0.0.1:3000/api/v1/restaurants');
          this.restaurants=response.data
        }  catch (error) {
          console.error(error);
        }
      }
      else{
        this.$router.push('/login')
      }
    }
}
</script>

<style scoped>

.horizontal-line-with-text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 20px 0;
}

.horizontal-line-with-text::before,
.horizontal-line-with-text::after {
  content: "";
  flex: 1;
  height: 1px;
  background-color: #000;
}

.horizontal-line-with-text span {
  padding: 0 10px;
}


</style>