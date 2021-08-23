const app= Vue.createApp(
    {

        //data,functions

        data(){
            return{
                showBooks:true,
                books:[
                        {title:'Name of the wind',author:'patrick'},
                        {title:'the way of kings',author:'brandon sanderson'},
                        {title:'final empire',author:'brandon'},
                    ]
                
            }
        },

        methods:{
            toggleShowBooks(){
                this.showBooks = !this.showBooks
            },
           
            }
    }
    
)

app.mount('#app')