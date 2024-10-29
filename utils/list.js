export const addDotToStrOrEl = (arr) =>
  arr.map((el) => (typeof el === "string" ? `.${el}` : el));

export const getDOMElementsFromCls = (arr) =>
  arr.map((el) => (typeof el === "string" ? document.querySelector(el) : el));

export const removeDOMElementsIfDisplayNone = (arr) =>
  arr.filter((el) => getComputedStyle(el).display !== "none");
