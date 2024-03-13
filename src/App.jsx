import { CustomMap, Header } from "./components";

import { TrackerProvider } from "./context/TrackerProvider";

const App = () => {
  console.log(import.meta.env);
  return (
    <TrackerProvider>
      <Header />
      <CustomMap />
    </TrackerProvider>
  );
};

export default App;
