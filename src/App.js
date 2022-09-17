import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/page/Home";
function App() {
   return (
      <Layout>
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </Layout>
   );
}

export default App;
