new Vue({
    el: ".app",
    data: {
        counter: 0,
        name: "",
        initValue: 0,
        message: "",
        result: false,
        toggle: false,
        courses: [
            {id: 1,title: "Angular", price: 250},
            {id: 1,title: "Javascript", price: 250},
            {id: 1,title: "React", price: 250},
            {id: 1,title: "Mern", price: 350}
        ]
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
        },
        classObject: function(){
            return  {'bg-success' : this.result , 'bg-warning' : !this.result}
        }
    },
    watch: {
        calcul: function(v){
            if(v >= 10) {
                this.result = true;
                this.message = "Winner";
            }
            else {
                this.result = false;
                this.message = "Losser";
            }
        }
    }      
})