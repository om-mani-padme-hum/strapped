/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 modals.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class Modal extends html.Div {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.init(data);
    
    this.middle(data.middle || false);
    this.large(data.large || false);
    this.small(data.small || false);
    this.xlarge(data.xlarge || false);
  }
  
  /**
   * Middle boolean getter/setter.
   * @signature middle() Get the middle boolean
   * @signature middle(boolean) Set the middle boolean as (boolean)
   * @return This object for call chaining
   */
  middle(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._middle;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._middle = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Modal.middle(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Large boolean getter/setter.
   * @signature large() Get the large boolean
   * @signature large(boolean) Set the large boolean as (boolean)
   * @return This object for call chaining
   */
  large(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._large;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._large = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Modal.large(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Small boolean getter/setter.
   * @signature small() Get the small boolean
   * @signature small(boolean) Set the small boolean as (boolean)
   * @return This object for call chaining
   */
  small(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._small;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._small = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Modal.small(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * XLarge boolean getter/setter.
   * @signature xlarge() Get the xlarge boolean
   * @signature xlarge(boolean) Set the xlarge boolean as (boolean)
   * @return This object for call chaining
   */
  xlarge(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._xlarge;
    
    /** Setter */
    else if ( typeof arg1 == 'boolean' )
      this._xlarge = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`Modal.xlarge(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    const div = new html.Div().addClass(`modal fade`).attr('tabindex', '-1').attr('role', 'dialog').id(this.id());
    const div2 = new html.Div().addClass(`modal-dialog`).attr('role', 'document');
    const div3 = new html.Div();
    
    if ( this.small() )
      div2.addClass(`modal-sm`);
    else if ( this.large() )
      div2.addClass(`modal-lg`);
    else if ( this.xlarge() )
      div2.addClass(`modal-xl`);
    
    if ( this.middle() )
      div2.addClass(`modal-dialog-centered`);
    
    div.append(div2);
    div2.append(div3);
    
    div3.attributes(this.attributes());
    div3.classes(this.classes());
    div3.content(this.content());
    div3.id('');
    div3.style(this.style());
    div3.title(this.title());
    div3.addClass(`modal-content`);
    
    return div.render(indent);
  }
}

module.exports.Modal = Modal;
