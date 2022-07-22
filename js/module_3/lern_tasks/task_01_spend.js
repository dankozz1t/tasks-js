// Write a function makeTask(data) that takes one parameter data - an object with the following properties.

// text - the text of the task.
// category - task category.
// priority - the priority of the task.
// The function should compose and return a new task object without directly modifying the data parameter. The new object must have a completed property, the value of which is stored in the local variable of the same name.

// The data parameter is guaranteed to contain only the text property, and the other two, category and priority, may be missing. Then, in the new task object, the category and priority properties should contain the default values ​​stored in the local variables of the same name.

// const {
//   title,
//   coverImage = "https://via.placeholder.com/640/480",
//   author,
// } = book;

function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';

  const newData = { completed, category, priority, ...data };

  return newData;
}

console.log(
  makeTask({
    category: 'Homemade',
    priority: 'Low',
    text: 'Take out the trash',
  })
);
//{ category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
