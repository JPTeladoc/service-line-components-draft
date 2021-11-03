import { useState } from 'react';
import { Checkbox } from '@intouchhealth/cig-components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

type BoolDict = { [id: string]: boolean }

export interface CheckBoxListProps {
  items: BoolDict
  height?: string;
  onCheck?: (check: Event) => void;
}

export default function(props: CheckBoxListProps) {

  const [values, setValues] = useState<BoolDict>(props.items);

  const handleCheck = (event: any) => {
    const { value } = event.target;
    setValues({
      ...values,
      [value]: event.target.checked,
    });
  };

  console.log(values)
  return (
    <List sx={{ height: '100%', overflow: 'scroll', border: 2, borderRadius: 1 }}>
      {Object.entries(values).map(
        ([key, value]) => {
          return (
            <ListItem sx={{ height: '25px' }} key={key}>
              <Checkbox onCheck={handleCheck} label={key} value={key} checked={value} />
            </ListItem>
          )
        }
      )}
    </List>
  )
}
