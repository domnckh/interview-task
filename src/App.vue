<template>
    <div id="app">
        <!-- Add Task -->
        <appAddTask
                @addedTask="newTask"></appAddTask>

        <!-- Not finished Tasks -->
        <appTasks
                v-if="tasks.length > 0"
                title="Not finished tasks"
                :tasks="tasks"
                @finishedTask="newFinishedTask"></appTasks>

        <!-- Finished Tasks -->
        <appTasksFinished
                v-if="finished.length > 0"
                title="Finished tasks"
                :finished="finished"
                @notFinishedTask="newTask"></appTasksFinished>
    </div>
</template>

<script>

  import addTask from './components/addTask';
  import tasks from './components/tasks';
  import tasksFinished from './components/tasksFinished';

  export default {
    name: 'app',
    data() {
      return {
        tasks: [],
        finished: []
      }
    },
    components: {
      appAddTask: addTask,
      appTasks: tasks,
      appTasksFinished: tasksFinished,
    },
    methods: {
      /**
       * Create a task
       * @param task new added task
       */
      newTask(task) {
        this.tasks.push({name: task});
      },
      /**
       * Mark task as finished
       * @param task marked task as finished
       */
      newFinishedTask(task) {
        this.finished.push({name: task});
      }
    }
  }
</script>

<style lang="scss">

</style>
