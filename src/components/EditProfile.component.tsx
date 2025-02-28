import { useEffect, useRef } from "react";
import FormElement from "./FormElement.component";
import { EditProfileFormType } from "../util/model";
import { useForm } from "react-hook-form";
import { useUserStore } from "../store/user.store";

const EditProfile = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const fetchUser = useUserStore((state) => state.fetchUser);
  const userData = useUserStore((state) => state.data);

  const onFileChange = () => {
    alert("Uploading...");
  };

  const triggerDialog = () => {
    inputFileRef.current?.click();
  };

  const onSubmitForm = (data: unknown) => {
    alert("Updated");
    console.log(`${JSON.stringify(data)}`);
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileFormType>();

  useEffect(() => {
    if (!userData.name) fetchUser?.();
  }, []);

  useEffect(() => {
    if (userData.username) setValue("username", userData.username);
    if (userData.name) setValue("name", userData.name);
    if (userData.password) setValue("password", userData.password);
    if (userData.dateOfBirth) setValue("dateOfBirth", userData.dateOfBirth);
    if (userData.city) setValue("city", userData.city);
    if (userData.email) setValue("email", userData.email);
    if (userData.postalCode) setValue("postalCode", userData.postalCode);
    if (userData.country) setValue("country", userData.country);
    if (userData.presentAddress)
      setValue("presentAddress", userData.presentAddress);
    if (userData.permanentAddress)
      setValue("permanentAddress", userData.permanentAddress);
  }, [userData]);

  return (
    <form>
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center md:flex md:flex-row md:items-start">
          {/* Avatar */}
          <div className="flex">
            <img
              src="/profile.svg"
              className="rounded-full w-[100px] h-[100px]"
            />
            <img
              onClick={triggerDialog}
              className="bg-c-secondary mt-16 ml-[-15px] rounded-full w-[30px] h-[30px] p-2 cursor-pointer hover:opacity-80"
              src="/pencil.svg"
              title="Upload Profile Image"
            />
          </div>

          {/* Form */}
          <div className="flex flex-col space-y-5 grow md:grid md:grid-cols-2 md:gap-5 md:ms-10 px-5 ">
            <FormElement
              id="name"
              type="text"
              label="Your Name"
              placeholder="Charlene Reed"
              error={!!errors.name}
              errorMessage={errors.name ? errors.name.message : ""}
              registerValidation={register("name", {
                required: "Provide your name",
              })}
            />
            <FormElement
              id="username"
              type="text"
              label="User Name"
              placeholder="Charlene Reed"
              error={!!errors.username}
              errorMessage={errors.username ? errors.username.message : ""}
              registerValidation={register("username", {
                required: "Provide Username",
              })}
            />
            <FormElement
              id="email"
              type="email"
              label="Email"
              error={!!errors.email}
              errorMessage={errors.email ? errors.email.message : ""}
              placeholder="charlenereed@gmail.com"
              registerValidation={register("email", {
                required: "Provide Email Address",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Email Address",
                },
              })}
            />
            <FormElement
              id="password"
              type="password"
              label="Password"
              placeholder="**********"
              error={!!errors.password}
              errorMessage={errors.password ? errors.password.message : ""}
              registerValidation={register("password", {
                required: "Provide Password",
                minLength: {
                  value: 6,
                  message: "Password should be a minimum of 6 characters",
                },
              })}
            />
            <FormElement
              id="dob"
              type="dropdown"
              label="Date of birth"
              options={[
                { label: "25 January 1990", value: "Jan 1990" },
                { label: "25 February 1990", value: "Feb 1990" },
              ]}
              placeholder="25 January, 1990"
              error={!!errors.dateOfBirth}
              errorMessage={
                errors.dateOfBirth ? errors.dateOfBirth.message : ""
              }
              registerValidation={register("dateOfBirth", {
                required: "Provide DOB",
              })}
              onChange={(e) => {
                setValue("dateOfBirth", e.toString());
                handleSubmit(onSubmitForm);
              }}
            />
            <FormElement
              id="presentAddress"
              type="text"
              label="Present Address"
              placeholder="San Jose, California, USA"
              error={!!errors.presentAddress}
              errorMessage={
                errors.presentAddress ? errors.presentAddress.message : ""
              }
              registerValidation={register("presentAddress", {
                required: "Provide Present Address",
              })}
            />
            <FormElement
              id="permanentAddress"
              type="text"
              label="Permanent Address"
              placeholder="San Jose, California, USA"
              error={!!errors.permanentAddress}
              errorMessage={
                errors.permanentAddress ? errors.permanentAddress.message : ""
              }
              registerValidation={register("permanentAddress", {
                required: "Provide Permanent Address",
              })}
            />
            <FormElement
              id="city"
              type="text"
              label="City"
              placeholder="San Jose"
              error={!!errors.city}
              errorMessage={errors.city ? errors.city.message : ""}
              registerValidation={register("city", {
                required: "Provide City",
              })}
            />
            <FormElement
              id="postalCode"
              type="text"
              label="Postal Code"
              placeholder="345483"
              extraTypeAttributes={[{ inputMode: "numeric" }]}
              error={!!errors.postalCode}
              errorMessage={errors.postalCode ? errors.postalCode.message : ""}
              registerValidation={register("postalCode", {
                required: "Provide Postal Code",
              })}
            />
            <FormElement
              id="country"
              type="text"
              label="Country"
              placeholder="USA"
              error={!!errors.country}
              errorMessage={errors.country ? errors.country.message : ""}
              registerValidation={register("country", {
                required: "Provide Country",
              })}
            />
          </div>
        </div>
        <button
          title="Submit"
          onClick={handleSubmit(onSubmitForm)}
          type="button"
          className="mt-8 bg-c-secondary hover:bg-c-secondary/90 cursor-pointer text-white py-3 px-20 rounded-xl md:self-end"
        >
          Save
        </button>
        <input
          onChange={onFileChange}
          ref={inputFileRef}
          className="hidden"
          type="file"
        />
      </div>
    </form>
  );
};

export default EditProfile;
