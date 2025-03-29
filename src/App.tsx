import "./App.css";

import { Card } from "./components/ui/card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="p-4 max-w-[850px] w-full">
        <Header />
        <Tasks />
        <Footer />
      </Card>
    </div>
  );
}

export default App;
