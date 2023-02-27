import './App.css';
import ComponentA from './components/ComponentA';
import FetchData from './components/FetchData';
import NameList from './components/NameList';
import PersonList from './components/PersonList';
import FetchDataPerson from './components/FetchDataPerson';

function App() {
  return (
    <div className="App">
      <h1>Data Fetch API</h1>
      <NameList/>
      <PersonList/>
      <FetchData/>
      <FetchDataPerson/>
      <ComponentA/>
    </div>
  );
}

export default App;