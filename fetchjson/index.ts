import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  logTodo(response.data as Todo);
});

const logTodo = ({ id, title, completed }: Todo) => {
  console.log(`
    The Todo with ID: ${id}
    Has a Title of: ${title}
    Is it finished: ${completed}
  `);
};
