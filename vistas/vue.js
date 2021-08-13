const app = new Vue ({
    el: '#app',
    data:{
        mensaje: 'Hola mundo',
        frutas:[
            {nombre:'Platano', cantidad:10},
            {nombre:'Piña', cantidad:0},
            {nombre:'Fresa', cantidad:20},
            {nombre:'Pera', cantidad:5},
        ],
        nuevaFruta:'',
        contador:0
    },
    /* Los métodos son solo funciones estáticas que se ejecutan una vez 
    que se invoca. Puede pasar argumentos y pueden devolver un valor, pero no están obligados a hacerlo.*/ 
    methods:{
        agregarFruta: function(){
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });
            this.nuevaFruta='';
        },
        agregarFruta2(){

        }
    },
    /*Retorna un valor y es dinamico*/
    computed:{
        sumarFrutas(){
            this.total=0;
            for(fruta of this.frutas){
                this.total=this.total + fruta.cantidad
            }
            return this.total
        }
    }
})
