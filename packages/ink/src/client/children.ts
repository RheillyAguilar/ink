import type InkComponent from './InkComponent';
import getComponent from './component';

/**
 * Get the innerHTML of the current component
 * ie. const html = innerHTML();
 */
export function innerHTML(pointer: InkComponent|null = null) {
  const inner = children(pointer);
  const wrapper = document.createElement('template');
  wrapper.append(...inner.map(child => child.cloneNode(true)));
  return wrapper.innerHTML;
}

/**
 * Get the innerText of the current component
 * ie. const text = innerText();
 */
export function innerText(pointer: InkComponent|null = null) {
  const inner = children(pointer);
  const wrapper = document.createElement('template');
  wrapper.append(...inner.map(child => child.cloneNode(true)));
  return wrapper.innerText;
}

/**
 * Returns an array of children from the current component
 * ie. <div>{children()}</div>
 */
export default function children(pointer: InkComponent|null = null) {
  const component = getComponent(pointer, true);
  return typeof component !== 'string' && component 
    ? component.originalChildren || [] 
    : [];
}