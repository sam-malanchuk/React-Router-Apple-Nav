import React from 'react';
import './App.css';
import TopNav from './components/TopNav';

const data = [
  {
    name: "[logo]", 
    link: "/"
  },
  {
    name: "Mac",
    children: ["MacBook", "MacBook Air", "iMac", "iMac Pro", "Mac Pro", "Mac mini", "Compare", "Pro Display XDR", "Accessories", "Mojave"],
    link: "/mac"
  },
  {
    name: "iPad",
    children: ["pad 1", "pad 2", "pad 3", "pad 4"],
    link: "/ipad"
  },
  {
    name: "iPhone",
    children: ["phone 1", "phone 2", "phone 3", "phone 4"],
    link: "/iphone"
  },
  {
    name: "Watch",
    children: ["watch 1", "watch 2", "watch 3", "watch 4"],
    link: "/watch"
  },
  {
    name: "TV",
    children: ["TV 1", "TV 2", "TV 3", "TV 4"],
    link: "/tv"
  },
  {
    name: "Music",
    children: ["Music 1", "Music 2", "Music 3", "Music 4"],
    link: "/music"
  },
  {
    name: "Support",
    children: ["s 1", "s 2", "s 3", "s 4"],
    link: "/support"
  },
  {
    name: "[search]",
    link: "/"
  },
  {
    name: "[bag]",
    link: "/"
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
    </div>
  );
}

export default App;
