/** Require external modules */
const html = require('ezhtml');

/**
 * Class for rendering Bootstrap 4 table headers.
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 */
class TableHeader extends html.TableHeader {
  /**
   * Construct a new object and initialize.
   */
  constructor(data = {}) {
    super(data);
    
    this.scope(data.scope || 'col');
  }
  
  /**
   * Scope getter/setter.
   * @signature scope() Get the scope
   * @signature scope(string) Set the scope as (string)
   * @return This object for call chaining
   */
  scope(arg1) {
    /** Getter */
    if ( arg1 === undefined )
      return this._scope;
    
    /** Setter */
    else if ( typeof arg1 == 'string' )
      this._scope = arg1; 
    
    /** Handle errors */
    else
      throw new TypeError(`TableHeader.scope(): Invalid signature (${typeof arg1}).`);
    
    /** Allow for call chaining */
    return this;
  }
  
  /**
   * Render the component.
   * @signature render(number) Render this component with (number) spaces of indentation
   * @return The rendered HTML
   */
  render(indent) {
    this.attr('scope', this.scope());
    
    return super.render(indent);
  }
}

module.exports.TableHeader = TableHeader;
