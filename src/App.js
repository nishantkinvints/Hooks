import React from 'react';
import Fullpage from './Component/fullpage';
import Listcomponent from './Component/Listcomponent';
import Api from './Component/fetch';
import Wrap_div from './Component/wrap_div';
import Child_wrap_div from './Component/child_wrap_div';
import Reduxaction from './Component/Reduxaction';

function App(props) {
  return (
    <div className="App">
        <Listcomponent />
        <Api />
        <Wrap_div subtext="wrap_div_content">
        <Child_wrap_div />
        </Wrap_div>
        <Reduxaction />


    </div>
  );
}

export default App;
