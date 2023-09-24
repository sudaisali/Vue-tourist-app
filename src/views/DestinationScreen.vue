<template>
        <div class="container">
           
            <h1 class="fs-10 p-3" >{{destination.name}}</h1>
            <div class="m-2">
                <TheBack/>
            </div>
           
            <div class="container d-flex ">
               
                <img :src="`/assets/${destination.image}`" alt="" class="img-fluid rounded">
                <p class="mx-5">{{ destination.description }}</p>
            </div>
       
        </div>
       <div class="container mb-5">
        <h1 class="fs-10 p-3">Top Experience in {{ destination.name }}</h1>
         <div class="container d-flex ">
            <router-link 
            v-for="experience in destination.experiences"
           :key="experience.slug"
           :to="{
            name : 'experience',
            params:{
                myslug:experience.slug

            }
           }"
            >
            <TheExp   :experience="experience"/>

            </router-link>

           
         </div>
 
         
      
       
            </div>
   
       
       
 
</template>

<script setup>
import { computed, defineProps } from 'vue';
import TheBack from '@/components/TheBack.vue';
import TheExp from '@/components/TheExp.vue';
// import { useRoute } from 'vue-router';
import sourcedata from '../data.json';

const props = defineProps({
    id:{
        type : Number,
        required : true 
    }
})

// const  destinationId =  computed(()=>{
//        const route = useRoute()
//         return parseInt(route.params.id)
//     }
// )

const destination = computed(()=>
{

return sourcedata.destinations.find(destination => destination.id === props.id)
}
)

</script>