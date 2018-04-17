/**
 * @class StrappedError
 * @added v0.1.4
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for creating custom Bootstrap-compatable errors.
 */
class StrappedError {
  /**
   * @signature new StrappedError([data])
   * @added v0.1.4
   * @param data Object
   * @returns StrappedError
   * @description Returns a new [StrappedError] instance and initializes using any property values in `data` that have a property 
   * key matching a class method, otherwise it initializes to defaults.
   */
  constructor(data = {}) {
    this.color(data.color || 'danger');
    this.cols(data.cols || 6);
    this.stack(new StrappedError().stack);
    this.strong(data.strong || 'StrappedError:');
    this.text(data.text || '');
  }
  
  /**
   * @signature color()
   * @added v0.1.4
   * @returns string
   * @description Returns the Bootstrap color that should be used for this error alert.
   *
   * @signature color(color)
   * @added v0.1.4
   * @param color string
   * @throws TypeStrappedError if `color` is not a valid [string]
   * @returns this
   * @description Sets the Bootstrap color that should be used for this error alert.
   */
  color(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._color;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._color = arg1; 
    
    /** Handle errors */
    else
      throw new TypeStrappedError(`${this.constructor.name}.color(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * @signature cols()
   * @added v0.1.4
   * @returns number
   * @description Returns the number of Bootstrap columns that should be used for this error alert.
   *
   * @signature cols(count)
   * @added v0.1.4
   * @param count number
   * @throws TypeStrappedError if `count` is not a valid [number]
   * @returns this
   * @description Sets the number of Bootstrap columns that should be used for this error alert.
   */
  cols(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._size;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._size = arg1; 
    
    /** Handle errors */
    else
      throw new TypeStrappedError(`${this.constructor.name}.size(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }

  /**
   * @signature strong()
   * @added v0.1.4
   * @returns string
   * @description Returns any optional strong text that should be used for this error alert.
   *
   * @signature strong(text)
   * @added v0.1.4
   * @param text string
   * @throws TypeStrappedError if `text` is not a valid [string]
   * @returns this
   * @description Sets any optional strong text that should be used for this error alert.
   */
  strong(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._strong;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._strong = arg1; 
    
    /** Handle errors */
    else
      throw new TypeStrappedError(`${this.constructor.name}.strong(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * @signature stack()
   * @added v0.1.4
   * @returns string
   * @description Returns the stack trace of the process when this alert occurred.
   *
   * @signature stack(trace)
   * @added v0.1.4
   * @param trace string
   * @throws TypeStrappedError if `trace` is not a valid [string]
   * @returns this
   * @description Sets the stack trace of the process when this alert occurred.
   */
  stack(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._stack;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._stack = arg1; 
    
    /** Handle errors */
    else
      throw new TypeStrappedError(`${this.constructor.name}.stack(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * @signature text()
   * @added v0.1.4
   * @returns string
   * @description Returns the error text that should serve as the primary message of this error alert.
   *
   * @signature text(text)
   * @added v0.1.4
   * @param text string
   * @throws TypeStrappedError if `text` is not a valid [string]
   * @returns this
   * @description Sets the error text that should serve as the primary message of this error alert.
   */
  text(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._text;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._text = arg1; 
    
    /** Handle errors */
    else
      throw new TypeStrappedError(`${this.constructor.name}.text(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
}

module.exports.StrappedError = StrappedError;