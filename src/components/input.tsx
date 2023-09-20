import { useFormContext } from 'react-hook-form'

export interface inputProps {
  name: string
  type: string
  placeholder: string
  grid: string
  errors: any
  // register: any
  isNumber?: boolean
}

export function Input({
  grid,
  name,
  type,
  placeholder,
  errors,
  // register,
  isNumber = false,
}: inputProps) {
  const { register } = useFormContext()

  return (
    <div className={`flex flex-col gap-1  ${grid}`}>
      <input
        type={type}
        placeholder={placeholder}
        {...register(`${name}`, { valueAsNumber: isNumber })}
        className={`w-full rounded-md border border-base_button p-3 text-sm text-base_text placeholder-base_label transition  ${
          errors
            ? 'bg-red-500/5  hover:border-red-500 focus:border-red-500 '
            : 'bg-base_input hover:border-yellow_dark focus:border-yellow_dark '
        } `}
      />

      {errors && (
        <span className="text-xs  text-red-700">{errors.message}</span>
      )}
    </div>
  )
}
