const app = new Vue({
    el:'#app',
    data: {
        mensaje: 'HOL',
        contador:0
    },
    computed: {
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return {
                'bg-success': this.contador >=10,
                'bg-danger': this.contador >10 && this.contador<20,
                'bg-green': this.contador <=20,

            }
    },
    
    }

})