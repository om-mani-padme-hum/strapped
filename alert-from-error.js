/** Require external modules */
const html = require('jshtml');
const octicons = require('octicons');

/** Require local modules */
const alert = require('./alert');
const col = require('./col');
const row = require('./row');

/**
 * @signature alertFromError(error)
 * @added v0.1.4
 * @param error Error|StrappedError Any extension of the [Error] class or a [StrappedError]
 * @return Row 
 * @description Returns a new [Row] instance containing a customized Bootstrap 4 alert with the error content.
 */
module.exports.alertFromError = (err) => {
  const row = new row.Row();
  const col = new col.Col();
  const alert = new alert.Alert();
  
  if ( err.constructor.name == 'StrappedError' ) {
    /** For customizable GeodeErrors, transfer properties to alert */
    col.size(err.size());
    alert.color(err.color());

    /** Toss in some octicons for certain color tyeps */
    if ( err.color() == 'success' )
      alert.strong(`${octicons.check.toSVG({ class: 'mr-2' })} ${err.strong()}`);
    else if ( err.color() == 'danger' )
      alert.strong(`${octicons.alert.toSVG({ class: 'mr-2' })} ${err.strong()}`);
    else if ( err.color() == 'warning' )
      alert.strong(`${octicons.bell.toSVG({ class: 'mr-2' })} ${err.strong()}`);
    else if ( err.color() == 'info' )
      alert.strong(`${octicons.question.toSVG({ class: 'mr-2' })} ${err.strong()}`);
    else
      alert.strong(err.strong());

    alert.text(err.text());

    /** These are designed to be user facing errors, so just debug stack on errors/warnings */
    if ( err.color() == 'error' || err.color() == 'warning' )
      console.log(err.stack());
  } else {
    /** For generic Errors, generate basic error alert */
    col.size(6);
    alert.color('danger').strong(`${octicons.alert.toSVG({ class: 'mr-2' })} Error:`).text(err.message);
    
    /** These are not designed to be user facing errors, make sure we've saved the stack in the error file */
    console.log(err.stack);
  }
  
  row.append(col);
  col.append(alert);
  col.append(new html.LineBreak());

  return row;
};
