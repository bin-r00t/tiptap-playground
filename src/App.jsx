import Tiptap from "./components/Tiptap";
import "./App.css";

function App() {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <div style={{ background: "#f5f5f5", height: "100%" }}>
          <Tiptap />
        </div>
      </div>
    </>
  );
}

export default App;
