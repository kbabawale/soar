import { useRef } from "react";
import FormElement from "./FormElement.component";

const EditProfile = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const onFileChange = () => {
    alert("Uploading...");
  };

  const triggerDialog = () => {
    inputFileRef.current?.click();
  };
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
              error={true}
              errorMessage="Your name is required"
              placeholder="Charlene Reed"
            />
            <FormElement
              id="username"
              type="text"
              label="User Name"
              error={false}
              placeholder="Charlene Reed"
            />
            <FormElement
              id="email"
              type="email"
              label="Email"
              error={false}
              placeholder="charlenereed@gmail.com"
            />
            <FormElement
              id="password"
              type="password"
              label="Password"
              error={false}
              placeholder="**********"
            />
            <FormElement
              id="dob"
              type="dropdown"
              label="Date of birth"
              options={[
                { label: "25 January 1990", value: "Jan 1990" },
                { label: "25 February 1990", value: "Feb 1990" },
              ]}
              error={false}
              placeholder="25 January, 1990"
            />
            <FormElement
              id="presentAddress"
              type="text"
              label="Present Address"
              error={false}
              placeholder="San Jose, California, USA"
            />
            <FormElement
              id="permanentAddress"
              type="text"
              label="Permanent Address"
              error={false}
              placeholder="San Jose, California, USA"
            />
            <FormElement
              id="city"
              type="text"
              label="City"
              error={false}
              placeholder="San Jose"
            />
            <FormElement
              id="postalCode"
              type="text"
              label="Postal Code"
              error={false}
              placeholder="345483"
              extraTypeAttributes={[{ inputMode: "numeric" }]}
            />
            <FormElement
              id="country"
              type="text"
              label="Country"
              error={false}
              placeholder="USA"
            />
          </div>
        </div>
        <button
          title="Submit"
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
