import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { stopPropagation } from '../../../utils/react/stopPropagation';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode; 
  className?: string;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

interface ICoords {
  left: number;
  top: number;
}

const NOOP = () => {};

export function Dropdown({ className='', children, button, isOpen=false, onOpen=NOOP, onClose=NOOP }: IDropdownProps) {

  const [isMounted, setIsMounted] = React.useState(false);
  const [coords, setCoords] = useState<ICoords>({left: 0, top: 0});

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect( () => {setIsDropdownOpen(isOpen)}, [isOpen]);
  React.useEffect( () => {isDropdownOpen ? onOpen() : onClose()}, [isDropdownOpen]);

  React.useEffect(() => {
    window.addEventListener('click', closeDropDown)
  return () => {
      window.removeEventListener('click', closeDropDown)
    }
  })
  React.useEffect(() => {
    setIsMounted(true);      
  }, [])
  
  let node;  
  if (isMounted) 
    node = document.querySelector("#popupRoot");

  if (!node) return null;

  const closeDropDown = () => {
    setIsDropdownOpen(false)
  }
  const handleOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isOpen === false) {
      setIsDropdownOpen(!isDropdownOpen)

      if (!(e.target instanceof Element)) return
      const rect = e.target.getBoundingClientRect();
      setCoords({
        left: rect.x - 68,
        top: rect.y + window.scrollY + 30
      });
    }
  }

  return (
    <div className={`${styles.container} ${className}`} onClick= {stopPropagation(handleOpen)}>
      { button }
      { isDropdownOpen &&          
          ReactDOM.createPortal(
          <div className= {styles.list} style={{left: coords?.left, top: coords?.top}}> 
            { children }
          </div>, node)          
      }
    </div>
  );
}
