console.log("Welcome to your TODO App!");
do{
	    	console.log("1: Todo list");
	        console.log("2: Add task");
	        console.log("0: Quit");

 function Task(task, date, status )
	{
        this.task = task;
        this.date = date;
        this.status = "Waiting";
	}

	Task.prototype.describe = function()
	{
        var description = "Task: " + this.task + ", Date: " + this.date + " status: " + this.status;
		return description;
	}

// Instantiate the object
var task1 = new Task("Learn OOP", "10th 2 2019");
var task2 = new Task("Write TODO app", "8th 3 2019");

var Tasks = [];
Tasks.push(task1);
Tasks.push(task2);

function allTasks()
{
	Tasks.forEach(function(task)
	{
		console.log(task.describe())
	});
}

var num = prompt("Enter your digit(0, 1, 2)");
var choice = parseInt(num);
switch(choice)
{
	case 1:
		console.log("Here's your TODO list");
		allTasks();
		break;

	case 2:
		console.log("Add task")

		task = prompt("Enter your task: ");
		date = prompt("Enter date: ");

		var task3 = new Task(task, date, status);
		Tasks.push(task3);

		console.log("Here's your TODO list");
		allTasks();

		break;
		default:
		break;
}
}

while(choice != 0);



