import React from 'react';
import { Dropdown } from '../../../../../Common/Dropdown';
import { DeleteIcon, EditIcon, MinusIcon, PlusIcon2, CircleIcon } from '../../../../../Common/Icons';
import styles from './menu.css';

interface IMenuProps {
  btnСlassName?: string;
}

function btnPlusClick() {
  console.log('Plus')
}
function btnMinusClick() {
  console.log('Minus')
}
function btnEditClick() {
  console.log('Edit')
}
function btnDeleteClick() {
  console.log('Delete')
}

export function Menu({btnСlassName=''}: IMenuProps) {

  return (
    <Dropdown 
      className={btnСlassName}
      dropDownListClassname={styles.dropDown}
      onClose={() => {}} 
      onOpen={() => {}} 
      isOpen= {false} 
      button={ 
        <button>
          <CircleIcon size={30}/>
        </button> 
      }
    >
      <button className={styles.btnItem} onClick={btnPlusClick}>
        <PlusIcon2 className={styles.btnIcon} /> 
          Увеличить
      </button>
      <button className={styles.btnItem} onClick={btnMinusClick}>
        <MinusIcon className={styles.btnIcon} />
          Уменьшить
      </button>
      <button className={styles.btnItem} onClick={btnEditClick}>
        <EditIcon className={styles.btnIcon} />
          Редактировать
      </button>
      <button className={styles.btnItem}  onClick={btnDeleteClick}>
        <DeleteIcon className={styles.btnIcon} />
            Удалить
        </button>
    </Dropdown>
  );
}
