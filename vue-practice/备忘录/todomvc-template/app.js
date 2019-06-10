new Vue({
    el: "#app",
    data: {
        aa: 'qwe',
        todoListData: [
            { id: 1, title: '一会去嫖娼', status: false }
        ],
        title: 'TodoList',
        todoData: '',
    },
    //方法
    methods: {
      
        addToto() {
            // alert(this.todoData)
            if (this.todoData == '') {
                alert('不能为空');
                return;
            } else {
                var obj = {};
                var ids = this.todoListData
                obj.id = ids.length >= 1 ? ids[ids.length - 1].id + 1 : 1;
                obj.title = this.todoData;
                obj.status = false;
                this.todoListData.push(obj);
                this.todoData = '';
            }

        },
        delTodo: function (k) {
            //传递一个参数
            this.todoListData.splice(k, 1);
        },
        delall() {
            this.todoListData = this.todoListData.filter(function (demo1) {
                return !demo1.status
            })

        },


    },
    filters: {

        all(todoListData) {
            var aa = this.todoListData.status;
            console.log(aa);
        }
       
    },
    //计算
    computed: {

    },
    //监听
    watch: {

    }

})