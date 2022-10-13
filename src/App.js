import React, { useState, useEffect } from "react";
import Grid from "./components/Grid";
import Card from "./components/Card";

const App = () => {
  let [history, setHistory] = useState([])

  const [items, setItems] = useState([
    {id: 1, img: '/img/blitz-car.jpg', status: "hidden"},
    {id: 1, img: '/img/blitz-car.jpg', status: "hidden"},
    {id: 2, img: '/img/blitz-goalk.jpg', status: "hidden"},
    {id: 2, img: '/img/blitz-goalk.jpg', status: "hidden"},
    {id: 3, img: '/img/blitz-i.jpg', status: "hidden"},
    {id: 3, img: '/img/blitz-i.jpg', status: "hidden"},
    {id: 4, img: '/img/blitz-ko.jpg', status: "hidden"},
    {id: 4, img: '/img/blitz-ko.jpg', status: "hidden"},
    {id: 5, img: '/img/blitz-lancer-black.jpg', status: "hidden"},
    {id: 5, img: '/img/blitz-lancer-black.jpg', status: "hidden"},
    {id: 6, img: '/img/blitz-lancer-white.jpg', status: "hidden"},
    {id: 6, img: '/img/blitz-lancer-white.jpg', status: "hidden"},
    {id: 7, img: '/img/blitz-not.jpg', status: "hidden"},
    {id: 7, img: '/img/blitz-not.jpg', status: "hidden"},
    {id: 8, img: '/img/blitz-police.jpg', status: "hidden"},
    {id: 8, img: '/img/blitz-police.jpg', status: "hidden"},
    {id: 9, img: '/img/blitz-space.jpg', status: "hidden"},
    {id: 9, img: '/img/blitz-space.jpg', status: "hidden"},
    {id: 10, img: '/img/blitz-victory.jpg', status: "hidden"},
    {id: 10, img: '/img/blitz-victory.jpg', status: "hidden"},
    {id: 11, img: '/img/blitz-witch.jpg', status: "hidden"},
    {id: 11, img: '/img/blitz-witch.jpg', status: "hidden"},
    {id: 12, img: '/img/blitz-zenith.jpg', status: "hidden"},
    {id: 12, img: '/img/blitz-zenith.jpg', status: "hidden"}
  ].sort(() => Math.random() - 0.5))

  const gameLogic = () => {
    const lastHistoryItem = history[history.length - 1]
    const lastItem = items[lastHistoryItem]
    const lastButOneHistoryItem = history[history.length - 2]
    const lastButOneItem = items[lastButOneHistoryItem]
    
      if (typeof lastItem != "undefined" && typeof lastButOneItem != "undefined" && lastItem.id === lastButOneItem.id) {
        lastItem.status = "check"
        lastButOneItem.status = "check"
//        const listItems = [...items]
        setHistory([])
//        setItems(listItems)
      } else if (typeof lastItem != "undefined" && typeof lastButOneItem != "undefined"){
        lastItem.status = "hidden"
        lastButOneItem.status = "hidden"   
        setHistory([])
      }
  }

  useEffect(() => {
    gameLogic()
  }, [history])

  const handleClick = (index) => {
    const selectItem = items[index];
    if (selectItem.status === "hidden") {
      selectItem.status = "show";
    } else {
      alert("Clique em um item diferente")
    }  

    const newItemsList = [...items];
    newItemsList[index] = selectItem;
    setItems(newItemsList)

    const newHistory = [...history, index]
    setHistory(newHistory)

  }

  return (
      <Grid>
        {items.map((item, index) => 
        <Card item={item} key={index} index={index} handleClick={handleClick}/>)}
      </Grid>
  )
}

export default App