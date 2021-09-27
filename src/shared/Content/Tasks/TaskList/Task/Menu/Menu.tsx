import React from 'react';
import { useDispatch } from 'react-redux';
import { Dropdown } from '../../../../../Common/Dropdown';
import { DeleteIcon, EditIcon, MinusIcon, PlusIcon2, CircleIcon } from '../../../../../Common/Icons';
import { taskAddTomato, taskDelete, taskDeleteTomato, taskEdit } from '../../../../../Store/tasks/actions';
import styles from './menu.css';

interface IMenuProps {
  btnСlassName?: string;
  taskId: string;
}

export function Menu({btnСlassName='', taskId}: IMenuProps) {
  const dispatch = useDispatch();

  function btnPlusClick() {
    dispatch(taskAddTomato(taskId))
  }
  function btnMinusClick() {
    dispatch(taskDeleteTomato(taskId))
  }
  function btnEditClick() {
    dispatch(taskEdit(taskId, 'new name'))
  }
  function btnDeleteClick() {
    dispatch(taskDelete(taskId))
  }
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
