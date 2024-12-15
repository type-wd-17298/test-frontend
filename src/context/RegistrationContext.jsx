import PropTypes from "prop-types";
import { createContext, useState, useContext } from "react";

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [registrations, setRegistrations] = useState([]);
  const [totalSeats, setTotalSeats] = useState(10);

  const addRegistration = (user) => {
    setRegistrations((prev) => [...prev, { ...user, id: Date.now() }]);
  };

  const remainingSeats = totalSeats - registrations.length;

  return (
    <RegistrationContext.Provider
      value={{
        registrations,
        totalSeats,
        remainingSeats,
        setTotalSeats,
        addRegistration,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

RegistrationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRegistration = () => useContext(RegistrationContext);
