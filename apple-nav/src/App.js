import React from 'react';
import './App.css';
import TopNav from './components/TopNav';
import { Route } from 'react-router-dom';

const data = [
  {
    name: "[logo]", 
    path: "/"
  },
  {
    name: "Mac",
    children: ["MacBook", "MacBook Air", "iMac", "iMac Pro", "Mac Pro", "Mac mini", "Compare", "Pro Display XDR", "Accessories", "Mojave"],
    path: "/mac"
  },
  {
    name: "iPad",
    children: ["pad 1", "pad 2", "pad 3", "pad 4"],
    path: "/ipad"
  },
  {
    name: "iPhone",
    children: ["phone 1", "phone 2", "phone 3", "phone 4"],
    path: "/iphone"
  },
  {
    name: "Watch",
    children: ["watch 1", "watch 2", "watch 3", "watch 4"],
    path: "/watch"
  },
  {
    name: "TV",
    children: ["TV 1", "TV 2", "TV 3", "TV 4"],
    path: "/tv"
  },
  {
    name: "Music",
    children: ["Music 1", "Music 2", "Music 3", "Music 4"],
    path: "/music"
  },
  {
    name: "Support",
    children: ["s 1", "s 2", "s 3", "s 4"],
    path: "/support"
  },
  {
    name: "[search]",
    path: "/"
  },
  {
    name: "[bag]",
    path: "/"
  }
];

function App() {
  return (
    <div className="App">
      <header>
        <TopNav data={data} />
      </header>
      <div className="bodyContainer">
        App Body.
      </div>

      {data.map((link, index) => {
        return <Route path={link.path} exact render={() => {
          return <TopNav data={data} />
          }}  key={index} />;
      })}
    </div>
  );
}



export default App;
