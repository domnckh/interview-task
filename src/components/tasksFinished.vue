<template>
    <div>
        <div class="title">{{title}}</div>
        <ul class="finished">
            <li v-for="(task, index) in finished">
                <label :for="getId(index, task.name)">
                    <input @click.prevent checked="checked" type="checkbox" :id="getId(index, task.name)"
                           @click="finishTask(index)"/>
                    <span>{{task.name}}</span>
                </label>
                <span class="close" @click="deleteTask(index)"></span>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "app-tasks-finished",
    props: ['title', 'finished'],
    methods: {
      /**
       * Creates an ID
       * @param index position of the task
       * @returns {string}
       */
      getId(index) {
        return "task-finished-" + index;
      },
      /**
       * Mark task as finished
       * @param index position of the task
       */
      finishTask(index) {
        this.$emit("notFinishedTask", this.finished[index].name);
        this.finished.splice(index, 1);
      },
      /**
       * Delete Task
       * @param index position of the task
       */
      deleteTask(index) {
        this.finished.splice(index, 1);
      }
    }
  }
</script>

<style scoped lang="scss">
    .finished {
        label,
        .close {
            color: #aaa;
        }
    }
</style>
