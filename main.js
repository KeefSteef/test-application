import {
  addDotToStrOrEl,
  getDOMElementsFromCls,
  removeDOMElementsIfDisplayNone,
} from "./utils/list.js";

const TL = gsap.timeline({ delay: 0.3 });
const TL_RELATIVE = "-=0.35";
const ANIMATION = { opacity: 0, y: 50 };

const ELEMENTS_CLS = [
  "logo",
  "burger_menu",
  ...document.querySelectorAll(".nav-links a"),
  "lang-selector",
  "text-left p",
  "text-left h1",
  "text-right p",
  "text-right button",
];

removeDOMElementsIfDisplayNone(
  getDOMElementsFromCls(addDotToStrOrEl(ELEMENTS_CLS)),
).map((el) => TL.from(el, ANIMATION, TL_RELATIVE));
