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
                    url: 'http://site_muriel.com',
                    image: 'assets/image1.png',
                    isPro: true
                },{
                    name: 'Fatima',
                    age: 21,
                    url: 'http://site_fatima.com',
                    image: 'assets/image2.png',
                    isPro: false
                }
            ]
        }
    },
    methods: {
  
    }
})

app.mount('#app')