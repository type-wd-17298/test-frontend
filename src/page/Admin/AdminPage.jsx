import AdminSetSeatForm from "../../components/Registration/AdminSetSeatForm";
import RegistrationSummary from "../../components/Registration/RegistrationSummary";
import RegistrationTable from "../../components/Registration/RegistrationTable";
import { useRegistration } from "../../context/RegistrationContext";

const AdminPage = () => {
  const { registrations } = useRegistration();
  return (
    <div className="grid grid-cols-4 gap-4 mx-auto p-6 h-[calc(100vh-120px)]">
      <div className="col-span-1">
        <div>
          <AdminSetSeatForm />
        </div>
      </div>
      <div className="col-span-3">
        <RegistrationSummary />
        <RegistrationTable data={registrations} />
      </div>
    </div>
  );
};

export default AdminPage;
