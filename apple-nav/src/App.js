import React from 'react';
import './App.css';
import TopNav from './components/TopNav';

const data = [
  {
    name: "[logo]"
  },
  {
    name: "Mac",
    links: ["MacBook", "MacBook Air", "iMac", "iMac Pro", "Mac Pro", "Mac mini", "Compare", "Pro Display XDR", "Accessories", "Mojave"]
  },
  {
    name: "iPad",
    links: ["pad 1", "pad 2", "pad 3", "pad 4"]
  },
  {
    name: "iPhone",
    links: ["phone 1", "phone 2", "phone 3", "phone 4"]
  },
  {
    name: "Watch",
    links: ["watch 1", "watch 2", "watch 3", "watch 4"]
  },
  {
    name: "TV",
    links: ["TV 1", "TV 2", "TV 3", "TV 4"]
  },
  {
    name: "Music",
    links: ["Music 1", "Music 2", "Music 3", "Music 4"]
  },
  {
    name: "Support",
    links: ["s 1", "s 2", "s 3", "s 4"]
  },
  {
    name: "[search]"
  },
  {
    name: "[bag]"
  }
];

function App() {
  return (
    <div className="App">
      <header>
        <TopNav />
      </header>
      <div className="bodyContainer">
        App Body.
      </div>
    </div>
  );
}

export default App;
