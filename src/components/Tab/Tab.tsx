import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import "./style.css";

type TypeTab = {
  id: number,
  label: string,
};

type TypeHeader = {
  tablist: Array<TypeTab>;
};

const Header: React.FC<TypeHeader> = (props: TypeHeader) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      allowScrollButtonsMobile
      aria-label="scrollable auto tabs example"
    >
      {
        props.tablist.map(tab => <Tab key={tab.id} label={tab.label} />)
      }
    </Tabs>
  )
};

export default Header;
