<template>
    <div>
        <div class="title">TO-DO List</div>
        <label for="addTask">
            <input
                    type="text"
                    id="addTask"
                    v-on:keyup.enter="addTask(task)"
                    v-model="task"
                    placeholder="Write your task here"
            >
            <button @click="addTask(task)">Add task</button>
        </label>
    </div>
</template>

<script>
  export default {
    name: "app-add-task",
    data() {
      return {
        task: ""
      }
    },
    computed: {},
    methods: {
      /**
       * Add task to not finished
       */
      addTask() {
        this.$emit('addedTask', this.task);
        this.task = "";
      }
    }
  }
</script>

<style scoped lang="scss">
    .title {
        margin-top: 15px;
        text-align: center;
        font-size: 20px;
    }

    label {
        margin-bottom: 15px;
        display: block;
    }

    input {
        display: block;
        width: 100%;
        text-align: left;
        border: 1px solid #ddd;
        border-top: none;
        margin-bottom: 15px;
        padding: 10px;
        -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
        height: 40px;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
        border-radius: 10px;


        &::placeholder {
            color: #ccc;
            font-weight: bold;
        }
    }

    button {
        width: 40%;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 20px;
        -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
        border: none;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        background: green;
        padding: 10px;
        margin: 15px 0;

        &:focus {
            outline: none;
        }
    }

</style>
