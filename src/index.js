import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App(){
  return(
    <>
      <div className='card'>
        <Avatar />
        <div className='data'>
          <Intro />
          <SkillList />
        </div>
      </div>
    </>
  );
}

function SkillList(){
  return(
    <div className='skill-list'>
      <Skill skill='pizza' emoji='🤌' color='red' />
      <Skill skill='burgur' emoji='👌' color='blue' />
      <Skill skill='python' emoji='👉👈' color='pink' />
      <Skill skill='javascript' emoji='🦾' color='green' /> 
    </div>
  );
}

function Skill(props){
  return(
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro(){
  return(
    <div>
      <h1>นายภูษณ จันภักดี</h1>
      <p>
        นักศึกษาที่จะเป็นโปรแกรมอันดับ 1 ของโลก จากสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์
        มหาวิทยาลัยอุบลราชธานี ชืนชอบเกมออนไลน์ และอยากมีเงินเก็บเยอะๆ
      </p>
    </div>
  );
}

function Avatar(){
  return <img className='avatar' src='ass1.jpg' alt="My Avatar"></img>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
