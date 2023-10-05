import './App.css';
import UseState from './components/UseState';
import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
import CustomHook from './components/CustomHook';

function App() {
  return (
    <div className="App">
        <UseState totalStars={5}/>
        <hr/>
        <UseReducer/>
        <hr/>
        <UseRef/>
        <hr/>
        <CustomHook/>
    </div>
  );
}

export default App;
