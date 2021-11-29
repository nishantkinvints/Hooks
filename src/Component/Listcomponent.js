import React, {us, useRef, useState} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';


function Listcomponent() {
    const onclick = event => {
        if(event.currentTarget.classList.contains('active')){
            event.currentTarget.classList.remove("active");
        }
        else{
            event.currentTarget.classList.add("active");
        }
    }
    
    const setActive = event => {
        [...event.currentTarget.parentElement.children].forEach(sib => sib.classList.remove('active'))
        event.currentTarget.classList.add("active");
    }

    const [togglediv, toggledivfn] = useState(true)

    const togglefn = () => {
        toggledivfn(!togglediv)
    }

    return (
      <div className="main_list">

        <button type="button" onClick={togglefn}>Toggle</button>

        { togglediv ? <div className="togglediv">Toggle</div> : null }
        
        <div className={togglediv ? "togglediv" : "togglediv active"}>Toggle</div>

        <ul>
            <li className="active" onClick={onclick}>1</li>
            <li className="active1" onClick={onclick}>2</li>
            <li className="active" onClick={onclick}>3</li>
            <li className="active2 active" onClick={onclick}>4</li>
            <li className="active"  onClick={onclick}>5</li>
        </ul>


        <ul>
            <li className="active" onClick={setActive}>1</li>
            <li className="" onClick={setActive}>2</li>
            <li className="" onClick={setActive}>3</li>
            <li className="" onClick={setActive}>4</li>
            <li className=""  onClick={setActive}>5</li>
        </ul>
      </div>
    );
  }
  
  export default Listcomponent;
  