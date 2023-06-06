const app = Vue.createApp({
    data(){
        return{
            name: 'Muriel',
            'autheur': 'TSIDIANY Raharison Muriel',
            'age': 22,
            'bio': 'ITDevSuccess'
        }
    },
    methods: {
        augmenterAge(){
            this.age++
        },
        diminuerAge(){
            this.age--
        }
    }
})

app.mount('#app')