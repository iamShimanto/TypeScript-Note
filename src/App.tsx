import Profile from "./components/Profile";
import TodoUseRef from "./components/TodoUseRef";
// import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div
        style={{
          border: "2px solid",
          margin: "5px",
          width: "fit-content",
          padding: "5px",
        }}
      >
        <Profile name="shimanto" age={23}>
          <span style={{ color: "red", fontSize: "30px" }}>
            From Bangladesh
          </span>
        </Profile>
      </div>
      {/* <Todos /> */}
      <TodoUseRef/>
    </>
  );
}

export default App;
