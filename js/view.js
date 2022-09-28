
const COLUMN_MODIFY_CLASSES = {
  DISABLED: 'column_disabled',
}

export class ColumnElem {
  modifyClasses = [];

  constructor( elem ) {
    this.elem = elem;
  }

  disable() {
    this.elem.classList.add(COLUMN_MODIFY_CLASSES.DISABLED);
    this.modifyClasses.push(COLUMN_MODIFY_CLASSES.DISABLED)
  }

  cleanModifyClasses() {
    if (this.modifyClasses.length === 0) return

    this.modifyClasses.forEach(className => {
      this.elem.classList.remove(className);
    });

    this.modifyClasses = [];
  }
}
