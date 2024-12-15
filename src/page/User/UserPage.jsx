import React from "react";
import UserRegistrationForm from "../../components/Registration/UserRegistrationForm";
import RegistrationTable from "../../components/Registration/RegistrationTable";
import RegistrationSummary from "../../components/Registration/RegistrationSummary";
import { useRegistration } from "../../context/RegistrationContext";

const UserPage = () => {
  const { registrations } = useRegistration();

  return (
    <div className="grid grid-cols-4 gap-4 mx-auto p-6 h-[calc(100vh-120px)]">
      <div className="col-span-1">
        <UserRegistrationForm />
      </div>
      <div className="col-span-3">
        <RegistrationSummary />
        <RegistrationTable data={registrations} />
      </div>
      {/* <div className="container mx-auto p-6 h-[calc(100vh-120px)]"></div> */}
      {/* <h2 className="text-xl font-bold mb-4">User Registration</h2> */}
      {/* <UserRegistrationForm /> */}
      {/* <RegistrationSummary />
    

  
      <RegistrationTable data={registrations} /> */}
    </div>
  );
};

export default UserPage;
