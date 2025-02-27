import { ContactProps } from "../util/model";

const Contact = ({ image, name, role }: ContactProps) => {
  return (
    <div className="flex flex-col items-center flex-none w-[110px] text-center ">
      <img
        className={`rounded-full  w-[60px] h-[60px]`}
        src={image}
        alt={`Contact - ${name}`}
      />
      <span className="text-c-secondary text-sm w-full mt-2">{name}</span>
      <span className="text-c-alt text-xs w-full ">{role}</span>
    </div>
  );
};

export default Contact;
