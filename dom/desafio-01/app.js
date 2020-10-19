
new Vue({
    el:"#desafio",
    data: {
        Nome: "Isaque",
        Idade: 19,
        src: "https://i.pinimg.com/originals/09/86/73/098673aabab69efda911f7ab60e00261.png" 
    },
    methods: {
        numeroRandomico: function(){
            return Math.random()
        }
    },
})