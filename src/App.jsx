import { CustomMap, Header } from "./components";

import { TrackerProvider } from "./context/TrackerProvider";

const App = () => {
  
  return (
    <TrackerProvider>
      <Header />
      <CustomMap />
    </TrackerProvider>
  );
};

export default App;
