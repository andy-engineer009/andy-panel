import Table from "../../shared/pages/table/table";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/counterSlice';

const Dashboard = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Jim", age: 35 },
  ];
  const columns = ["id", "name", "age"];
  return (
    <div>
        <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      <h1>---</h1>
      <Table data={data} columns={columns} />
    </div>
  );
};

export default Dashboard;
    