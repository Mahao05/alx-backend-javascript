function taskFirst() {
    const taskName = "Complete homework";
    const dueDate = "2024-10-10";
    const priority = "High";

    console.log(`Task: ${taskName}`);
    console.log(`Due Date: ${dueDate}`);
    console.log(`Priority: ${priority}`);
}

taskFirst();

function taskNext() {
    let taskName = "Prepare presentation";
    let dueDate = "2024-10-15";

    console.log(`Task: ${taskName}`);
    console.log(`Due Date: ${dueDate}`);

    taskName = "Update presentation";
    dueDate = "2024-10-20";

    console.log(`Updated Task: ${taskName}`);
    console.log(`Updated Due Date: ${dueDate}`);
}
taskNext();
