# Task Scheduler

Task Scheduler is a simple JavaScript package that allows you to schedule tasks with a delay. It provides an easy-to-use interface for scheduling and running tasks asynchronously.

## Installation

You can install Task Scheduler via npm:

```bash
npm install task-sc78asheduler
```

## Usage

To use Task Scheduler in your Node.js application, require the package and create a new instance of the `TaskScheduler` class. Then, schedule tasks using the `scheduleTask` method.

```javascript
const TaskScheduler = require('task-sc78asheduler');

// Create a new TaskScheduler instance
const scheduler = new TaskScheduler();

// Define some tasks
const task1 = () => console.log("Task 1 executed!");
const task2 = () => console.log("Task 2 executed!");

// Schedule tasks with delays (in milliseconds)
scheduler.scheduleTask(task1, 3000); // task1 will execute after 3 seconds
scheduler.scheduleTask(task2, 5000); // task2 will execute after 5 seconds
```

## API

### `TaskScheduler()`

Creates a new instance of the TaskScheduler class.

### `scheduleTask(task, delay)`

Schedules a task to be executed after a specified delay.

- `task`: Function to be executed.
- `delay`: Delay in milliseconds before executing the task.

## Contributing

Contributions are welcome! Please feel free to submit a pull request if you have any enhancements, bug fixes, or new features you'd like to add.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
