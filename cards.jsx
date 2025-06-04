export const Card = ({ children }) => {
  return <div>{children}</div>;
};

export const Todo = () => {
  const list = [
    {
      title: "Go to gym",
      done: false,
    },
    {
      title: "Meditate for 10 mins",
      done: true,
    },
  ];

  const todoComponents = list.map((todo, id) => (
    <TodoItem key={id} title={todo.title} done={todo.done} />
  ));

  return <div>{todoComponents}</div>;
};

function TodoItem({ title, done }) {
  return (
    <div>
      {title} - {done ? "Done!" : "Not Done Yet!"}
    </div>
  );
}
