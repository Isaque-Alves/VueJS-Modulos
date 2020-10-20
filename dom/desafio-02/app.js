new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(event){
            alert("Alerta da questão 1")
        },
        armazene(event){
            this.valor = event.target.value
        }
    },
})