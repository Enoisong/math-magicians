import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

/**
 * If a button name and a calculator data object is given,
 * return an updated calculator data object.
 * The Calculate data object contains:
 * total:s     the running total
 * next:String     the next number to be operated on with the total
 * operation:String +, -, etc.
 */

export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next) {
        return { ...obj, next: obj.next + buttonName };
      }
      return { ...obj, next: buttonName };
    }

    // If no operation, update next and clear value
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return { ...obj };
      }
      return { ...obj, next: `${obj.next}.` };
    }
    if (obj.operation) {
      return { next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { total: `${obj.total}.` };
    }
    return { total: '0.' };
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    }
    // if '=' is used with no operation, then, nothing to do
    return {};
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  // Button must be an operation

  // When a user press an operation button without entering:
  // a number first, do nothing.
  // If (!obj.next && !obj.total) {
  // return {};
  // }

  // User pressed an operation after pressing '='

  if (!obj.next && obj.total && !obj.operation) {
    return { ...obj, operation: buttonName };
  }
  // If a user press an operation button and ghere is an existing operation
  if (obj.operation) {
    if (obj.total && !obj.next) {
      return { ...obj, operation: buttonName };
    }

    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  // if no operation yet, but the user type one
  // if a user has not typed a number yet, save the operation
  if (!obj.next) {
    return { operation: buttonName };
  }

  // save the operation and shift 'next' into 'total'
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
