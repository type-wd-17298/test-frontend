import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RegistrationProvider } from "./context/RegistrationContext";
import UserPage from "./page/User/UserPage";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import AdminPage from "./page/Admin/AdminPage";
import "rsuite/dist/rsuite.min.css";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-400 to-green-300">
      <Router>
        <RegistrationProvider>
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<UserPage />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </main>
          <Footer />
        </RegistrationProvider>
      </Router>
    </div>
  );
};

export default App;
