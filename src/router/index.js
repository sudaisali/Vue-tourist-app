import {createRouter , createWebHistory} from 'vue-router';
import HomeScreen from '../views/HomeScreen'
import datasource from '../data.json'



const routes = [
    {
        path : '/',
        name: 'Home',
        component : HomeScreen
    },
    {
        path: '/destination/:id/:slug',
        name: 'destination',
        component : ()=> import("../views/DestinationScreen"),
        props : route => ({id:parseInt(route.params.id)}),
        beforeEnter: (to) => {
             const exist = datasource.destinations.find(
                destination => destination.id === parseInt(to.params.id)
             )
             if(!exist) return {name :'NotFound',
            params:{pathMatch:to.path.split('/').slice(1)},
            query: to.query,
            hash: to.hash
        }
            // ...
        }
        // children:[

        //     {
        //         path: ':myslug',
        //         name: 'experience',
        //         component : ()=> import("../views/ExperienceScreen"),
        //         props : route =>({id:parseInt(route.params.id),myslug:route.params.myslug})
        //     }

        // ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component : ()=> import("../views/NotFound")
    },
    {
        path: '/experience/:id/:slug/:myslug',
        name: 'experience',
        component : ()=> import("../views/ExperienceScreen"),
        props : route =>({id:parseInt(route.params.id),myslug:route.params.myslug})
    }
  
   
]

const router = createRouter({
    history : createWebHistory(),
    routes,
    linkActiveClass: 'active-class',
    scrollBehavior() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ left: 0, top: 0 })
          }, 200)
        })
      },
})

export default router
