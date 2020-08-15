const app = new Vue({
    el: '#app',
    data: {
        todolists: [{
                text: "Tutorial Todolist"
            },
            {
                text: "Tutorial Vue JS"
            },
            {
                text: "Tutorial Angular 5"
            },
        ],
        newtodolist: "",
        done: false
    },
    methods: {
        addTodo: function () {
            this.todolists.push({
                text: this.newtodolist
            });
            this.$refs.textbox.focus()
            this.newtodolist = ""
        },
        removeTodo: function (index) {
            this.todolists.splice(index, 1);
        }
    }
})