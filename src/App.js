import { useSelector } from "react-redux";
import RegisterForm from "./page/RegisterForm";

function App() {
  const {mode}=useSelector(state=>state.darkmode)

  
  return (
    <div className={mode}>
      <RegisterForm/>
    </div>
  );
}

export default App;
