import { useState } from "react";
import { UtilFunction } from "../util/functions";
import { DropdownOptions, FormElementProps } from "../util/model";

const FormElement = ({
  label,
  id,
  type,
  error,
  disabled,
  customStyles,
  errorMessage,
  placeholder,
  extraTypeAttributes,
  options,
  onKeyDown,
}: FormElementProps) => {
  const isDropdown = type === "dropdown" ? true : false;
  const extraAttributes = UtilFunction.flattenArrayToObj(extraTypeAttributes);

  const [showDropdownOptions, setShowDropdownOptions] =
    useState<boolean>(false);
  const [selectedDropdownOption, setSelectedDropdownOption] =
    useState<DropdownOptions>();

  return (
    <div className={`flex flex-col`}>
      <label htmlFor={id} className="text-c-secondary">
        {label}
      </label>
      {!isDropdown ? (
        <input
          id={id}
          placeholder={placeholder}
          style={customStyles}
          disabled={disabled}
          onKeyDown={onKeyDown}
          {...extraAttributes}
          type={`${
            type === "text" ? "text" : type === "email" ? "email" : "password"
          }`}
          className="mt-2 outline-0 border-2 border-[#DFEAF2] rounded-2xl px-5 py-2"
        />
      ) : (
        <div className="mt-2 flex outline-0 border-2 border-[#DFEAF2] rounded-2xl">
          {!showDropdownOptions && (
            <span
              className="flex w-full cursor-pointer"
              onClick={() => {
                setShowDropdownOptions(true);
              }}
            >
              <span
                className={`w-full rounded-2xl rounded-r-none ${
                  selectedDropdownOption?.label ? "hover:bg-c-light-ash" : ""
                }  px-5 py-2`}
              >
                {selectedDropdownOption?.label ?? "Select one: "}
              </span>
              <span className={`self-center me-3 material-symbols-outlined`}>
                keyboard_arrow_down
              </span>
            </span>
          )}
          {showDropdownOptions && (
            <div className="flex flex-col w-full rounded-2xl">
              {options &&
                options.map((v, i) => (
                  <span
                    className={`w-full cursor-pointer ${
                      i === 0
                        ? "rounded-t-2xl"
                        : i === options.length - 1
                        ? "rounded-b-2xl"
                        : ""
                    } hover:bg-c-light-ash px-5 py-2`}
                    key={i}
                    onClick={() => {
                      setSelectedDropdownOption(v);
                      setShowDropdownOptions(false);
                    }}
                  >
                    {v.label}
                  </span>
                ))}
            </div>
          )}
        </div>
      )}
      {error && (
        <span className={`mt-1 text-c-red font-normal`}>
          {errorMessage ? errorMessage : "An error occurred"}
        </span>
      )}
    </div>
  );
};

export default FormElement;
