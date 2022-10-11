import { useState } from "react";
import Home from "./pages/index";
import Drone from './pages/drone/drone';
import Layout from "./components/layout/layout";


const Routes: React.FC = () => {

  const [ page, setPage ] = useState('Drone');

  const handlePage = (page: string) => {
    console.log(page);
    setPage(page);
  }

  return (
    <Layout page={handlePage} title={page}>
      {/* {
        page === 'Home' && <Home />
      } */}
      {
        page === 'Drone' && <Drone />
      }
    </Layout>
  );
}

export default Routes;