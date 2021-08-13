const app = new Vue ({
    el: '#app',
    data: {
        mensaje: 'MY GYM VUE',
        tareas:[],
        nuevasTareas:''
    },
    methods:{
        agregarTarea(){
            this.tareas.push({
                nombre: this.nuevasTareas,
                estado: false
            })
            this.nuevasTareas='';
            localStorage.setItem('GYM VUE',JSON.stringify(this.tareas))
        },
        editarTarea(index){
            this.tareas[index].estado=true
            localStorage.setItem('GYM VUE',JSON.stringify(this.tareas))
        },
        eliminarTarea(index){
            this.tareas.splice(index,1)
            localStorage.setItem('GYM VUE',JSON.stringify(this.tareas))
        }
    },
    /*LOCAL STORAGE */
    created(){
        let datosBD = JSON.parse(localStorage.getItem('GYM VUE'));
        if (datosBD === null){
            this.tareas = []
        }else{
            this.tareas = datosBD
        }
    }
})
    
