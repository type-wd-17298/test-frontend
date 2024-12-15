import { useRegistration } from "../../context/RegistrationContext";

const RegistrationSummary = () => {
  const { remainingSeats, registrations } = useRegistration();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4">
      <div className="flex flex-col justify-center items-center bg-white p-6 rounded-2xl shadow-md border border-gray-200">
        <p className="text-lg font-medium">Remaining Seats</p>
        <p className={`mt-2 text-2xl font-medium text-gray-500 ${
            remainingSeats > 0 ? "text-green-500" : "text-red-500"
          }`}>
          {remainingSeats > 0 ? "Seats are available" : "All seats are full"}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center bg-white p-6 rounded-2xl shadow-md border border-gray-200">
        <p className="text-lg text-gray-700 font-medium">Total Seats</p>
        <span
          className={`text-3xl font-bold ${
            remainingSeats > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {remainingSeats}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center bg-white p-6 rounded-2xl shadow-md border border-gray-200">
        <p className="text-lg text-gray-700 font-medium">Total Registrations</p>
        <span className="text-3xl font-bold text-blue-500">
          {registrations.length}
        </span>
      </div>
    </div>
  );
};

export default RegistrationSummary;
