import React, {useState, useEffect} from 'react';

import './progressBar.style.scss';

const ProgressBar = ({ done }) => {
  const [style, setStyle] = useState({});

 

  useEffect(() => {
    const timer =  setTimeout(() => {
      const updateStyle = {
        opacity: 1,
        width: `${done}%`
      }
      setStyle(updateStyle);
    }, 500)
    
    return () => clearTimeout(timer);
  }, [done]);

  return (
    <div className='progress'>{done === 0 
      ? <span className='zero-percent-text'>0%</span>
      : <div className='progress-done' style={style} >{done > 0 ? `${done}%` : null}</div>
     }  
    </div>
  )
}

export default ProgressBar;