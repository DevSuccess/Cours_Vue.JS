const app = Vue.createApp({
    data(){
        return{
           titre: 'Mon titre',
           x: 0,
           y: 0,
           users: [
                {
                    name: 'Muriel',
                    age: 22, 
                    url: 'http://site_muriel.com'
                },{
                    name: 'Fatima',
                    age: 21,
                    url: 'http://site_fatima.com'
                },{
                    name: 'BB',
                    age: 0,
                    url: 'http://site.com'
                },
            ]
        }
    },
    methods: {
  
    }
})

app.mount('#app')