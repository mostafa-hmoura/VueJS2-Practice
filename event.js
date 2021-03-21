new Vue({
    el: ".app",
    data: {
        counter: 0,
        name: "",
        initValue: 0,
        message: ""
    }, 
    methods: {
        increment: function(step) {
            this.counter += step;
        },
        decrement: function(step) {
            this.counter -= step;
        },
        add: function(){
            alert('Submit Form');
        },
        logName: function(){
            console.log('My Name');
        }
    },
    computed: {
        calcul: function(){
            console.log('calcul method');
            return this.counter * this.initValue;
        }
    },
    watch: {
        calcul: function(v){
            if(v >= 10) {
                
                this.message = "Winner";
            }
            else {

                this.message = "Losser";
            }
        }
    }      
})