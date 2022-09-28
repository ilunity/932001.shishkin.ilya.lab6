import { ColumnsController } from './columns-controller';

const addButtonListeners = () => {
  const leftExpandButton = document.querySelector('.expand-left-button');
  const rightExpandButton = document.querySelector('.expand-right-button');
  const cleanButton = document.querySelector('.clean-button');


  leftExpandButton.addEventListener('click', ColumnsController.expandLeft);
  rightExpandButton.addEventListener('click', ColumnsController.expandRight);
  cleanButton.addEventListener('click', ColumnsController.clean);
};


const start = () => {
  addButtonListeners();
};

start();
