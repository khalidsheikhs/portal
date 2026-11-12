import {
  Select as ScnSelect,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "../../ui/select"

import type { ComponentProps } from "react"

type SelectOption = {
  label: string
  value: string
}

type SelectGroupOption = {
  label?: string
  options: SelectOption[]
}

type SelectOptionItem =
  | SelectOption
  | SelectGroupOption
  | { separator: true }

type SelectProps = ComponentProps<typeof ScnSelect> & {
  options: SelectOptionItem[]
  placeholder?: string
  triggerClassName?: string
  contentClassName?: string
}

function Select({
  options,
  placeholder = "Select an option",
  triggerClassName = "",
  contentClassName = "",
  ...props
}: SelectProps) {
  return (
    <ScnSelect {...props}>
      <SelectTrigger className={`w-full ${triggerClassName}`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent className={contentClassName}>
        {options.map((item, index) => {
          if ("separator" in item) {
            return <SelectSeparator key={index} />
          }

          if ("options" in item) {
            return (
              <SelectGroup key={index}>
                {item.label && (
                  <SelectLabel>{item.label}</SelectLabel>
                )}

                {item.options.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            )
          }

          return (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          )
        })}
      </SelectContent>
    </ScnSelect>
  )
}

export default Select