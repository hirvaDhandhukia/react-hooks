import './styles.css';
import PrintingProps from "./components/PrintingProps";
import UsestateBtn from "./components/UseState/UsestateBtn";
import UsestateInput from "./components/UseState/UsestateInput";
import ComponentTree from "./components/UseState/ComponentTree";


function App() {
  return (
    <div className="App">
      {/* <PrintingProps name="Hirva" /> */}
      {/* <UsestateBtn /> */}
      {/* <UsestateInput /> */}
      <ComponentTree />
    </div>
  );
}

export default App;
