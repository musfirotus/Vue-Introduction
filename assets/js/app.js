Vue.component('render-title',{
    data() {
    },
    template:"<h1>{{title}}</h1>"
})

const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        fruits:[
            {
                id:1,
                text: 'Apel'
            },
            {
                id:2,
                text: 'Jeruk'
            },
            {
                id:3,
                text: 'Pisang'
            }
        ]
    },
    computed: {
        capital(){
            return this.message.toUpperCase();
        }
    },
    methods: {
        capitalize(){
            const message = this.message
        }
    },
})