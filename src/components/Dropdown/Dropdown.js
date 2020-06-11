import React, { useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import { TiArrowSortedUp } from 'react-icons/ti';
import { FaCheck } from 'react-icons/fa';


import Johndoe from '../../assets/images/Womanicon.png'



import '../Dropdown/dropdown.styles.scss';

const Dropdown = ({ title, items = [], icon, multiselect = false }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  
  const toggle = () => setOpen(!open);
 
  const handleOnClick = (item) => {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiselect) {
        setSelection([item])
      } else {
        let selectionAfterRemoval = selection;
        selectionAfterRemoval = selectionAfterRemoval.filter(
          current => current.id !== item.id
        );
        setSelection([...selectionAfterRemoval]);
      }
    }
  }
  
  const isItemSelected = (item) => {
    if (selection.find(current => current.id === item.id)) {
      return true
    } else return false
  }

  return (
    <div className='dd-wrapper'>
      <div 
        tabIndex={0} 
        className='dd-header' 
        role='button' 
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
      <div className='dd-header__title'>
        <p className='dd-header__title--bold'>{title}</p>
      </div>
      <div className='dd-header__action'>
        <p>{open 
          ? <TiArrowSortedUp style={{ color: '#5f0a87'}}/> 
          : <TiArrowSortedDown style={{ color: '#5f0a87'}} />}
          </p>
      </div>
      </div>
      {open && (
        <ul className='dd-list'>
          {items.map(item => (
            <li className='dd-list-item' key={item.id}>
              <button type='button' onClick={() => handleOnClick(item)}>
                <span><Johndoe />{item.value}</span>
                <span>{isItemSelected(item) && <FaCheck style={{ color: '#6617cb' }}/>}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown;