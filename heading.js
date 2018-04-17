/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 headings.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class Heading extends html.Heading {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.color(data.color || '');
    this.display(data.display || 0);
  }
  
  /**
   * Color getter/setter.
   * @signature color() Get the color
   * @signature color(string) Set the color as (string)
   * @return This object for call chaining
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
      throw new TypeError(`Heading.color(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Display super-size getter/setter.
   * @signature display() Get the display super-size
   * @signature display(number) Set the color as (number)
   * @return This object for call chaining
   */
  display(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._display;
    
    /** Setter */
    else if ( typeof arg1 == 'number' )
      this._display = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Heading.display(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Add text to heading.
   * @signature text(string) Add text (string) to heading
   * @return This object for call chaining
   */
  text(arg1) {
    /** Add text if string */
    if ( typeof arg1 == 'string' )
      this.append(new html.Text().text(arg1));
    
    /** Handle errors */
    else
      throw new TypeError(`Heading.text(): Invalid signature (${typeof arg1}).`);

    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    if ( this.color().length > 0 )
      this.addClass(`text-${this.color()}`);
    
    if ( this.display() > 0 )
      this.addClass(`display-${this.display()}`);
    
    return super.render(indent);
  }
}

module.exports.Heading = Heading;
