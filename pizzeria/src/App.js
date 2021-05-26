import './App.scss';
import { TopSection } from "./components/TopSection";
import { Items } from "./components/Items";
import { Basket } from "./components/Basket"


function App() {
  return (

    <div>
      <TopSection />
      <Basket />
      <Items />
    </div>
  );
}

export default App;
