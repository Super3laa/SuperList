import SuperList from './Components/SuperList';
import {data} from './data.js'
function App() {
  return (
    <div className="App">      
      <SuperList  data={data}  />
    </div>
  );
}

export default App;
