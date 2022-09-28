import { ColumnElem } from './view';

export const ColumnsController = class {
  constructor() {
    const leftColumn = document.querySelector('.left-column');
    const rightColumn = document.querySelector('.right-column');

    this.leftColumnElem = new ColumnElem(leftColumn);
    this.rightColumnElem = new ColumnElem(rightColumn);

    this.clean = this.clean.bind(this);
    this.expandLeft = this.expandLeft.bind(this);
    this.expandRight = this.expandRight.bind(this);
  }

  clean() {
    this.leftColumnElem.cleanModifyClasses();
    this.rightColumnElem.cleanModifyClasses();
  }

  expandLeft() {
    this.clean();
    this.rightColumnElem.disable();
  }

  expandRight() {
    this.clean();
    this.leftColumnElem.disable();
  }
};
