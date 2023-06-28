const vm = Vue.createApp({
    data(){
        return{
        firstName: 'John',
        middleName: '',
        lastName: 'Doe',
        url: "https://www.google.com/",
        rawUrl: '<a href="https://google.com" target="_blank">Google</a>',
        age: 20,
        }
    },
    //do not use arrow functions because it can interfere with vue proxying if youre using the this keyword
    //if you do not plan on accessing data, then arrow functions are fine.
    methods:{
        increment(){
            this.age++;
        },
        decrement(){
            this.age--;
        },
        // updateLastName(event)// default if function has no parameters and we only need the event target values or other properties
        updateLastName(msg, event){
            event.preventDefault();
            console.log(msg);
            this.lastName = event.target.value;
        },
        updateMiddleName(event){
            this.middleName = event.target.value;
        }
    },
    // computed properties/functions will only run if the field/variable is changed. So not when anything in data changes. 
    //fulleName is currently called everytime any of the data inside the app class changes, we want to prevent that to avoid
    //costly unnecessary computation. 
    computed:{
        fullName(){
            return `${this.firstName} ${this.middleName} ${this.lastName}`;
        },
    }
}).mount('#app');

// setTimeout(()=>{
//      vm.firstName = "Bob"
// },2000)


// Vue.createApp({
//     data(){
//         return{
//         firstName: 'John',
//         lastName: 'DoeEEEE'
//         }
//     }
// }).mount('#app2');
