import React from 'react';
import { Dropdown } from '../../../../../Common/Dropdown';
import { CircleIcon } from '../../../../../Common/Icons';
import styles from './menu.css';

interface IMenuProps {
  btnСlassName?: string;
}

export function Menu({btnСlassName=''}: IMenuProps) {

  return (
    <Dropdown 
      className={btnСlassName}
      onClose={() => {}} 
      onOpen={() => console.log('opened')} 
      isOpen= {false} 
      button={ 
        <button className={`${styles.menuButton}`}>
          <CircleIcon size={30}/>
        </button> 
      }
    >
      <button>11111</button>
      <button>22222</button>
    </Dropdown>
  );
}
