import Table from "../../shared/pages/table/table";

const Dashboard = () => {
  const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Jim", age: 35 },
  ];
  const columns = ["id", "name", "age"];
  return (
    <div>
      <h1>---</h1>
      <Table data={data} columns={columns} />
    </div>
  );
};

export default Dashboard;
    