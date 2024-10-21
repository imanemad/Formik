import LayoutContextContainer from "./context/layoutContext";
import Index from "./layouts/admin/Index";

function App() {
  
  return (
    <LayoutContextContainer>
      <Index/>
    </LayoutContextContainer>
  );
}

export default App;
