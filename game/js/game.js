"use strict";
const board = document.querySelector("#board");
const gridSize = 10;
const game = {
  packages:0
}

makeBoard(board, gridSize);
addingHouses(6);
addingTrees(10)
addingTruck();
courierCall();
packagePickUp();


window.addEventListener('keydown', function (event) {
  const truckNode = document.querySelector('.cell .truck').parentElement;
  if (event.code === 'ArrowRight') {
    const targetNode = truckNode.nextElementSibling;
    if (targetNode === null) {
      return;
    }
    if (checkBarriers(targetNode)){
      truckMove(targetNode,0);
    }
    
    
    packagePickUp();
    deliveryPackage()
  }

  if (event.code === 'ArrowLeft') {
    const targetNode = truckNode.previousElementSibling;
    if (targetNode === null) {
      return;
    }
    if (checkBarriers(targetNode)){
    truckMove(targetNode,180);
    }
    packagePickUp();
    deliveryPackage();
  }
  if (event.code === 'ArrowUp') {
    const truckNodeIndex = Array.from(truckNode.parentElement.children).indexOf(truckNode);
    const truckRow = truckNode.parentElement;
    const targetRow = truckRow.previousElementSibling;
    if (targetRow === null) {
      return;
    }
    const targetNode = targetRow.children[truckNodeIndex];
    if (checkBarriers(targetNode)){
    truckMove(targetNode,270);
    }
    packagePickUp();
    deliveryPackage();
  }
  if (event.code === 'ArrowDown') {
    const truckNodeIndex = Array.from(truckNode.parentElement.children).indexOf(truckNode);
    const truckRow = truckNode.parentElement;
    const targetRow = truckRow.nextElementSibling;
    console.log(targetRow);
    if (targetRow === null || targetRow.classList.contains('truckPhantom')) {
      console.log('null?')
      return;
    }
    const targetNode = targetRow.children[truckNodeIndex];
    if (checkBarriers(targetNode)){
    truckMove(targetNode,90);
    }
    packagePickUp();
    deliveryPackage();
  }
})






