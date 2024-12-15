import { InputNumber, Button, Message, useToaster } from "rsuite";
import { FaChair } from "react-icons/fa";
import { useRegistration } from "../../context/RegistrationContext";
import { useForm } from "react-hook-form";

const AdminSetSeatForm = () => {
  const { setTotalSeats } = useRegistration();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const toaster = useToaster();

  const onSubmit = (data) => {
    const { seats } = data;

    if (!seats || seats <= 0) {
      toaster.push(
        <Message showIcon type="error">
          Please enter a valid number of seats
        </Message>,
        { placement: "topEnd" }
      );
      return;
    }

    setTotalSeats(seats);

    toaster.push(
      <Message showIcon type="success">
        Seats updated successfully!
      </Message>,
      { placement: "topEnd" }
    );

    setValue("seats", null);
  };

  return (
    <div className="h-[calc(100vh-170px)] flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-md"
      >
        <div className="flex flex-col items-center space-y-4">
          <FaChair size={60} className="text-green-600 dark:text-green-400" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Allocate Seats
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Adjust the total number of available seats below.
          </p>
        </div>

        <div>
          <label
            htmlFor="totalSeats"
            className="block text-sm font-semibold text-gray-900 dark:text-white "
          >
            Total Seats
          </label>
          <InputNumber
            id="totalSeats"
            {...register("seats", {
              required: "Total seats are required",
              min: { value: 1, message: "Seats must be at least 1" },
            })}
            placeholder="Enter total seats"
            style={{ width: "100%" }}
            min={1}
            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
          {errors.seats && (
            <p className="text-sm text-red-500">{errors.seats.message}</p>
          )}
        </div>

        <div className="pt-4">
          <Button
            appearance="primary"
            block
            type="submit"
            className="flex items-center justify-center gap-2 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          >
            Update Seats
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminSetSeatForm;
