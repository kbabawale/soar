import FormElement from "./FormElement.component";

const EditProfile = () => {
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
              className="bg-c-secondary mt-16 ml-[-15px] rounded-full w-[30px] h-[30px] p-2 cursor-pointer hover:opacity-80"
              src="/pencil.svg"
              title="Upload Profile Image"
            />
          </div>

          {/* Form */}
          <div className="flex flex-col space-y-5 grow md:grid md:grid-cols-2 md:gap-5 md:ms-10 px-5 ">
            <FormElement
              type="text"
              label="Your Name"
              error={true}
              errorMessage="Your name is required"
              placeholder="Charlene Reed"
            />
            <FormElement
              type="text"
              label="User Name"
              error={false}
              placeholder="Charlene Reed"
            />
            <FormElement
              type="email"
              label="Email"
              error={false}
              placeholder="charlenereed@gmail.com"
            />
            <FormElement
              type="password"
              label="Password"
              error={false}
              placeholder="**********"
            />
            <FormElement
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
              type="text"
              label="Present Address"
              error={false}
              placeholder="San Jose, California, USA"
            />
            <FormElement
              type="text"
              label="Permanent Address"
              error={false}
              placeholder="San Jose, California, USA"
            />
            <FormElement
              type="text"
              label="City"
              error={false}
              placeholder="San Jose"
            />
            <FormElement
              type="text"
              label="Postal Code"
              error={false}
              placeholder="345483"
              extraTypeAttributes={[{ inputMode: "numeric" }]}
            />
            <FormElement
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
      </div>
    </form>
  );
};

export default EditProfile;
