
import "./App.scss";
import Counter from "./components/Counter/Counter";
import InfoBox from "./components/InfoBox/InfoBox";
import team from "./data/team";


const App = () => {

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Ticket Tracker</h1>
      </header>
      <section className="tickets">
        <InfoBox employeeArr={team}/>

      </section>
    </div>
  );
};

export default App;