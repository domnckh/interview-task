<template>
    <div>
        <div class="title">{{title}}</div>
        <ul>
            <li v-for="(task, index) in tasks">
                <label :for="getId(index, task.name)">
                    <input @click.prevent type="checkbox" :id="getId(index, task.name)" @click="finishTask(index)"/>
                    <span>{{task.name}}</span>
                </label>
                <span class="close" @click="deleteTask(index)"></span>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "app-tasks",
    props: ['title', 'tasks'],
    methods: {
      /**
       * Creates an ID
       * @param index position of the task
       * @returns {string}
       */
      getId(index) {
        return "task-" + index;
      },
      /**
       * Mark task as finished
       * @param index position of the task
       */
      finishTask(index) {
        this.$emit("finishedTask", this.tasks[index].name);
        this.tasks.splice(index, 1);
      },
      /**
       * Delete Task
       * @param index position of the task
       */
      deleteTask(index) {
        this.tasks.splice(index, 1);
      }
    }
  }
</script>

<style scoped>

</style>
