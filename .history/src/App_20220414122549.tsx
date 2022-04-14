import React from 'react';
import Button,{ButtonType, ButtonSize} from './components/Button/button';

const App :React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <hr/>
        <h1>hello</h1>
        <h2>hello</h2>
        <h3>hello</h3>
        <h4>hello</h4>
        <Button>默认按钮</Button> 
        <Button disabled>默认按钮</Button> 
        <Button btnType={ButtonType.Primary} size={ ButtonSize.Large}>Primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large} onClick={()=>console.log(12)}>Danger</Button>
        <Button btnType={ButtonType.Link} size={ ButtonSize.Small} href="#" >LinkHello</Button>
        <Button btnType={ButtonType.Link} disabled>LinkHello</Button>
        
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
