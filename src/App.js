import { useLocation } from "react-router-dom";
import LayoutContextContainer from "./context/layoutContext";
import Index from "./layouts/admin/Index";
import AuthLayout from "./layouts/auth/AuthLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  const location=useLocation()
  
  return (
    <LayoutContextContainer>
      {
        location.pathname.includes('/auth')?(
          <AuthLayout/>
        ):(
          <Index/>
        )
      }
    </LayoutContextContainer>
  );
}

export default App;
