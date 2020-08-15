const app = new Vue({
    el: '#app',
    data: {
        todolists: [],
        newtodolist: "",
        done: false
    },
    methods: {
        addTodo: function () {
            const text = this.newtodolist.trim()
            if (text) {
                this.todolists.push({
                    text: text,
                    done: false
                });
                this.newtodolist = ""
            }
        },
        removeTodo: function (index) {
            this.todolists.splice(index, 1);
        },
        tDone: function (todolist) {
            todolist.done = true
        }
    }
})