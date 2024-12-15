import { useForm, Controller } from "react-hook-form";
import { Button, Message, useToaster, Input } from "rsuite";
import { FaUserPlus } from "react-icons/fa6";
import { useRegistration } from "../../context/RegistrationContext";

const UserRegistrationForm = () => {
  const { addRegistration, remainingSeats } = useRegistration();
  const toaster = useToaster();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
    },
  });

  const onSubmit = async (data) => {
    await addRegistration(data);
    reset();
    toaster.push(
      <Message showIcon type="success">
        Registration Successful!
      </Message>,
      { placement: "topEnd" }
    );
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md h-[calc(100vh-170px)]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-lg"
      >
        <div className="flex flex-col items-center space-y-4">
          <FaUserPlus size={80} className="text-blue-600 dark:text-blue-400" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Sign Up to Our Platform
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Join us and enjoy exclusive benefits!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Controller
            name="firstName"
            control={control}
            rules={{ required: "First Name is required" }}
            render={({ field }) => (
              <div className="grid">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <Input
                  {...field}
                  id="firstName"
                  placeholder="John"
                  className="mt-1"
                />
                {errors.firstName && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.firstName.message}
                  </div>
                )}
              </div>
            )}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <div className="grid">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <Input
                  {...field}
                  id="lastName"
                  placeholder="Doe"
                  className="mt-1"
                />
              </div>
            )}
          />
        </div>

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-900 dark:text-white"
              >
                Phone
              </label>
              <Input
                {...field}
                id="phone"
                placeholder="123-456-7890"
                className="mt-1"
              />
            </div>
          )}
        />

        <div className="pt-4">
          <Button
            appearance={remainingSeats === 0 ? "default" : "primary"}
            block
            type="submit"
            disabled={remainingSeats === 0}
            className="flex items-center justify-center gap-2"
          >
            {remainingSeats === 0 ? "No Seats Available" : "Register"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserRegistrationForm;
