const app = Vue.createApp({
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            title: 'Lord of the Rings',
            author: 'J.R.R. Tolkien',
            age: 81
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        }
    }
})

app.mount('#app')