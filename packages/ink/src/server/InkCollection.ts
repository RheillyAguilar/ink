//common
import type { ServerNode } from '../types';

export default class InkCollection {
  //elements in the collection
  protected _elements = new Set<ServerNode>();

  /**
   * Returns the length of the collection
   */
  public get length() {
    return this._elements.size;
  }

  /**
   * Creates a new InkCollection instance
   */
  public constructor(elements: ServerNode[] = []) {
    elements.forEach(element => this._elements.add(element));
  }

  /**
   * Adds a new element to the collection
   */
  public add(element: ServerNode) {
    this._elements.add(element);
  }

  /**
   * Returns the collection elements
   */
  public toArray() {
    return Array.from(this._elements);
  }
  
  /**
   * Renders the collection to string
   */
  public toString() {
    return Array
      .from(this._elements)
      .filter(Boolean)
      .map(child => child.toString())
      .join('');
  }
}