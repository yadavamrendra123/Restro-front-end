<template>
    <div>
        <div class="flex justify-between items-center bg-gray-200 p-4 relative">
            <h1 class="text-2xl font-bold mx-auto">Restro Management System</h1>
          <div class="absolute right-2">
            <button @click="logOut()" class="font-medium text-base ">Logout</button>
          </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Header',
    methods:{
        logOut(){
            alert("Are you sure you want to logout")
            localStorage.removeItem('jwtToken')
            this.$router.push('/login')
        }
    }
}
</script>
