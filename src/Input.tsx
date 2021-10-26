import { PureInput } from '@intouchhealth/cig-components';
import { useState } from 'react';

interface InputProps {
  initialValue: string
  disabled?: boolean
}

export default function Input(props: InputProps) {

  const [value, setValue] = useState<string>(`${props.initialValue}`);

  const handleChange = (event: any) => {
    console.log(event)
    setValue(event);
  };

  return (
    <PureInput
      value={value}
      onChange={(event) => { handleChange(event) }}
      type='text'
      placeholder=""
      disabled={props.disabled}
    />
  )
}
