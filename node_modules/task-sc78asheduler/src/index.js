// index.js

class TaskScheduler {
    constructor() {
      this.tasks = [];
      this.timer = null;
    }
  
    scheduleTask(task, delay) {
      const scheduledTask = { task, delay };
      this.tasks.push(scheduledTask);
      if (!this.timer) {
        this.timer = setInterval(() => this.runTasks(), 1000);
      }
    }
  
    runTasks() {
      const now = Date.now();
      const tasksToRemove = [];
      this.tasks.forEach((scheduledTask, index) => {
        if (scheduledTask.delay <= now) {
          scheduledTask.task();
          tasksToRemove.push(index);
        }
      });
      tasksToRemove.reverse().forEach(index => {
        this.tasks.splice(index, 1);
      });
      if (this.tasks.length === 0) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  }
  
  module.exports = TaskScheduler;
  