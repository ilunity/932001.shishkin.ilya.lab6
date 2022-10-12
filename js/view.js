const COLUMN_MODIFY_CLASSES = {
  DISABLED: 'column_disabled',
}

export class ColumnElem {
  #modifyingClasses = [];

  constructor( elem ) {
    this.elem = elem;
  }

  disable() {
    this.elem.classList.add(COLUMN_MODIFY_CLASSES.DISABLED);
    this.#modifyingClasses.push(COLUMN_MODIFY_CLASSES.DISABLED)
  }

  cleanModifyClasses() {
    if (this.#modifyingClasses.length === 0) return

    this.#modifyingClasses.forEach(className => {
      this.elem.classList.remove(className);
    });

    this.#modifyingClasses = [];
  }
}
