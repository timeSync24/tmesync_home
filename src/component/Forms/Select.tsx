/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx } from "clsx";
import { Fragment, JSX, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ImCheckmark } from "react-icons/im";
import { BiChevronDown } from "react-icons/bi";
import { ClipLoader } from "react-spinners";

interface Props {
  value: any;
  onChange: (value: any) => void;
  onBlur: any;
  label: string | null;
  height?: string;
  placeholder?: string;
  options:
    | Array<{
        value: string;
        label: string;
      }>
    | undefined;
  validationError?: any;
  loading?: boolean;
  fetchError?: boolean;
}

export default function Select({
  value,
  onChange,
  onBlur,
  label,
  options = [],
  validationError,
  placeholder,
  height,
  loading,
}: Props): JSX.Element {
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options?.filter((option) => {
          return option?.label?.toLowerCase()?.includes(query?.toLowerCase());
        });

  function getLabel(value: string | number): string {
    const option = options?.find((option) => option?.value === value);
    return option?.label ?? "";
  }
  const defaultValue = { value: "", label: "" };

  return (
    <fieldset className="relative space-y-2">
      <Combobox value={value || defaultValue} onChange={onChange}>
        <Combobox.Label className="text-[#060606] mt-2 text-[16px] font-[500px] mb-2">
          {label}
        </Combobox.Label>
        <div className="relative">
          <Combobox.Button className="w-full">
            <Combobox.Input
              style={{ height }}
              className="w-full px-4 py-2 text-sm font-medium text-gray-600  cursor-pointer  rounded-xl bg-[#F4F4F4]"
              onChange={(event) => {
                setQuery(event.target.value);
              }}
              displayValue={({ value }: { value: string; label: string }) =>
                getLabel(value)
              }
              placeholder={placeholder ?? "Start typing to search..."}
              onBlur={onBlur}
            />
            {!loading && (
              <BiChevronDown
                className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 top-1/2 right-4"
                aria-hidden="true"
              />
            )}
            {loading && (
              <ClipLoader
                className="absolute text-gray-400 top-1/3 right-4"
                size={12}
              />
            )}
          </Combobox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => {
              setQuery("");
            }}
          >
            <Combobox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredOptions?.length === 0 && query !== "" ? (
                <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                  Nothing found.
                </div>
              ) : (
                filteredOptions?.map((option) => (
                  <Combobox.Option
                    key={option?.value}
                    className={({ active }) =>
                      ` cursor-pointer relative flex items center py-2 px-10 ${
                        active
                          ? "bg-blue-500 text-white cursor-pointer"
                          : "text-gray-900 cursor-pointer"
                      }`
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={clsx("block truncate", {
                            "font-medium": selected,
                            "font-normal": !selected,
                          })}
                        >
                          {option?.label}
                        </span>
                        {(selected || value?.value === option?.value) && (
                          <ImCheckmark
                            className={clsx(
                              "w-3 h-3 absolute top-1/2 left-4 -translate-y-1/2",
                              {
                                "text-blue-500": !active,
                                "text-white": active,
                              }
                            )}
                            aria-hidden="true"
                          />
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      {validationError && (
        <p className=" text-sm text-red-600  " id="error">
          {validationError.message}
        </p>
      )}
    </fieldset>
  );
}
