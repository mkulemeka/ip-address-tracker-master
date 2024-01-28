import { createContext, useEffect, useMemo, useRef, useState } from "react";

import PropTypes from "prop-types";
import axios from "axios";

const TrackerContext = createContext();

const TrackerProvider = ({ children }) => {
  const [address, setAddress] = useState("");
  const [data, setData] = useState({}); //
  const [isLoading, setIsLoading] = useState(false);
  const input = useRef("");
  
  // Fetch data from API
  useEffect(() => {
    let source = axios.CancelToken.source();
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${address}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    //! Cancel axios request on unmount
    return () => {
      source.cancel("axios request cancelled");
    };
  }, [address]);

  // Memoize context value
  const contextValue = useMemo(
    () => ({ address, input, setAddress, data, isLoading }),
    [address, setAddress, data, isLoading]
  );

  return (
    <TrackerContext.Provider value={contextValue}>
      {children}
    </TrackerContext.Provider>
  );
};

TrackerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TrackerContext, TrackerProvider };
