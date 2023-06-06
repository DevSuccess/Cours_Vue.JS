const app = Vue.createApp({
    data(){
        return{
           titre: 'Mon titre',
           x: 0,
           y: 0
        }
    },
    methods: {
        HandleMouse(e){
            console.log('Evenement Déclanche : '+e)
        },
        DeplacementSouri(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')