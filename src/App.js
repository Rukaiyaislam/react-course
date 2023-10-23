import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetup";
import FavoriteMeetups from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} />

        <Route path="/new-meetups" element={<NewMeetups />} />

        <Route path="/fav-meetups" element={<FavoriteMeetups />} />
      </Routes>
    </Layout>
  );
}

export default App;
