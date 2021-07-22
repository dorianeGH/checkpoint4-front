import "./App.css";
// import Header from "./components/Header";
import Main from "./components/Main";
import EventContextProvider from "./contexts/eventContext";
import "./index.css";

function App() {
  return (
    <>
      <EventContextProvider>
        <Main />
      </EventContextProvider>
    </>
  );
}

export default App;
