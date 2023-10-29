import './App.css';
import Datatable from './components/Datatable';
import Sampledata from './Sampledata';

const COLUMNS = [
  {
    title: "Date",
    field: "Date"
  },
  {
    title: "Icon",
    field: "Icon"
  },
  {
    title: "Event",
    field: "Event"
  },
  {
    title: "Genre",
    field: "Genre"
  },
  {
    title: "Venue",
    field: "Venue"
  }
];

function App() {
  return (
    <Datatable data={Sampledata} columns={COLUMNS} />
  );
}

export default App;
