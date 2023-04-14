import React, { useState } from 'react';
import './style.css';

const treeView = [
  {
    id: 1,
    title: 'Spec',
    children: [
      { title: 'child9' },
      { title: 'child2' },
      { title: 'child3' },
      { title: 'child4' },
      { title: 'child5' },
      { title: 'child6' },
      { title: 'child1' },
      { title: 'child1' },
    ],
  },
  {
    id: 2,
    title: 'catory',
    children: [
      { title: 'child0' },
      { title: 'child2' },
      { title: 'child3' },
      { title: 'child4' },
      { title: 'child5' },
      { title: 'child6' },
      { title: 'child1' },
      { title: 'child1' },
    ],
  },
  {
    id: 3,
    title: 'Spec',
    children: [
      { title: 'child1' },
      { title: 'child2' },
      { title: 'child3' },
      { title: 'child4' },
      { title: 'child5' },
      { title: 'child6' },
      { title: 'child1' },
      { title: 'child1' },
    ],
  },
];
export default function Treeview() {
  const [tree, setTree] = useState(false);
  const [tree1, setTree1] = useState(false);
  const [change, setchange] = useState('tree1');
  const clicked = (index) => {
    setTree((state) => ({
      ...state,
      [index]: !state[index],
    }));
    setTree1(false)
  };
  const Expandall =()=>{
    setTree1(true)
    setTree(false)

  }

  const Collopse =()=>{
    setTree1(false)
    setTree(false)
  }
  return (
    <div>
      <div className="nnn">
        <button onClick={Expandall}>Expand all</button>
        <button onClick={Collopse}>Collopse</button>
      </div>
      {treeView.map((user, i) => (
        <div>
          <button onClick={() => clicked(i)}>+ {user.title}</button>
          { tree1 && (
            <div>
              {user.children.map((user) => {
                const neee = user.title;
                return <li>{neee}</li>;
              })}
              
            </div>
          )}
           { tree[i] && (
            <div>
              {user.children.map((user) => {
                const neee = user.title;
                return <li>{neee}</li>;
              })}
              
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
