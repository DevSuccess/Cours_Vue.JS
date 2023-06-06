const app = Vue.createApp({
    data(){
        return{
            name: 'Mr or Miss',
            isConnected: false,
            
            age: 22,
            bio: 'ITDevSuccess'
        }
    },
    methods: {
        augmenterAge(){
            this.age++
        },
        diminuerAge(){
            this.age--
        },
        connexion(){
            this.name = 'Muriel'
            this.isConnected  = true
        },
        deconnection(){
            this.isConnected = false
            this.name = 'Mr ou Miss'
        }
    }
})

app.mount('#app')