new Vue ({
    el: ".app",
    data: {
        nom: "Mostafa HMOURA",
        age: 23,
        google: "<a href='https://www.google.com/'>Google</a>",
        img: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/aL2OXWSpTguVo0azLaPb"
    },
    methods: {
        sayName: function() {
            return `Hello ${this.nom} i have ${this.age} years`;
        }
    }
})