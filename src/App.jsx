import AddNumbers from "./components/AddNumbers";
import Header from "./components/Header";
import UsersTable from "./components/UsersTable";

function App() {
  return (
    <>
      {/* <Header></Header> */}
      {/* <div className="xl:grid xl:grid-cols-3 p-10 gap-x-3"> */}
      <div className="p-3 gap-3 ">
        {/* <div className="container"> */}
        <AddNumbers />
        {/* <AddNumbers /> */}
        <UsersTable />
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
