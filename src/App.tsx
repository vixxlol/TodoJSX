import { MouseEventHandler, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

let added: number = 0;

function submit() {
  added++;
  const list = document.getElementById("list") as HTMLUListElement;
  const val = document.getElementById("input") as HTMLInputElement;

  if (list) {
    const li = document.createElement('li');
    li.id = added.toString();
    li.textContent = val.value;
    list.appendChild(li);
    val.value = '';
  }
}

function App() {

  return (
    <>
      <div>
        <ul id="list"></ul>
      </div>
      <div>
        <input type="text" id="input" />
        <button onClick={submit}>submit</button>
      </div>
    </>
  )
}

export default App;