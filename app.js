const app = Vue.createApp({
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            showBooks: true,
            title: 'Lord of the Rings',
            author: 'J.R.R. Tolkien',
            age: 81
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')