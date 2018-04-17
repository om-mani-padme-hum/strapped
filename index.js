/** Require external modules */
const html = require('ezhtml');

/** Require local modules */
const accordian = require('./accordian');
const alert = require('./alert');
const alertFromError = require('./alert-from-error');
const anchor = require('./anchor');
const badgeLink = require('./badge-link');
const badge = require('./badge');
const buttonCheckbox = require('./button-checkbox');
const buttonGroup = require('./button-group');
const buttonLink = require('./button-link');
const buttonRadio = require('./button-radio');
const buttonToolbar = require('./button-toolbar');
const button = require('./button');
const cardBody = require('./card-body');
const cardColumns = require('./card-columns');
const cardDeck = require('./card-deck');
const cardFooter = require('./card-footer');
const cardGroup = require('./card-group');
const cardHeader = require('./card-header');
const cardImageOverlay = require('./card-image-overlay');
const cardImage = require('./card-image');
const card = require('./card');
const carouselItem = require('./carousel-item');
const carousel = require('./carousel');
const col = require('./col');
const collapse = require('./collapse');
const dropdownDivider = require('./dropdown-divider');
const dropdownHeader = require('./dropdown-header');
const dropdownItem = require('./dropdown-item');
const dropdownMenu = require('./dropdown-menu');
const form = require('./form');
const heading = require('./heading');
const inputSet = require('./input-set');
const input = require('./input');
const jumbotron = require('./jumbotron');
const listGroupAnchor = require('./list-group-anchor');
const listGroupButton = require('./list-group-button');
const listGroupItem = require('./list-group-item');
const listGroup = require('./list-group');
const modalBody = require('./modal-body');
const modalFooter = require('./modal-footer');
const modalHeader = require('./modal-header');
const modal = require('./modal');
const page = require('./page');
const progressBar = require('./progress-bar');
const rowBreak = require('./row-break');
const row = require('./row');
const select = require('./select');
const strappedError = require('./strapped-error');
const tableHead = require('./table-head');
const tableHeader = require('./table-header');
const tableRow = require('./table-row');
const table = require('./table');
const textArea = require('./text-area');

/** JS HTML re-exports */
module.exports.Abbreviation = html.Abbreviation;
module.exports.Address = html.Address;
//module.exports.Anchor = html.Anchor;
module.exports.Area = html.Area;
module.exports.Article = html.Article;
module.exports.Aside = html.Aside;
module.exports.Audio = html.Audio;
module.exports.Base = html.Base;
module.exports.BidirectionalIsolation = html.BidirectionalIsolation;
module.exports.BidirectionalOverride = html.BidirectionalOverride;
module.exports.Blockquote = html.Blockquote;
module.exports.Body = html.Body;
module.exports.Bold = html.Bold;
module.exports.Button = html.Button;
module.exports.Canvas = html.Canvas;
module.exports.Caption = html.Caption;
module.exports.Child = html.Child;
module.exports.Citation = html.Citation;
module.exports.Code = html.Code;
module.exports.ColumnGroup = html.ColumnGroup;
module.exports.Column = html.Column;
module.exports.ContainerElement = html.ContainerElement;
module.exports.Container = html.Container;
module.exports.DataList = html.DataList;
module.exports.DefinitionDescription = html.DefinitionDescription;
module.exports.DefinitionList = html.DefinitionList;
module.exports.DefinitionTerm = html.DefinitionTerm;
module.exports.Definition = html.Definition;
module.exports.Deleted = html.Deleted;
module.exports.Details = html.Details;
module.exports.Dialog = html.Dialog;
module.exports.Div = html.Div;
module.exports.Element = html.Element;
module.exports.Embed = html.Embed;
module.exports.Emphasized = html.Emphasized;
module.exports.FieldSet = html.FieldSet;
module.exports.FigureCaption = html.FigureCaption;
module.exports.Figure = html.Figure;
module.exports.Footer = html.Footer;
//module.exports.Form = html.Form;
module.exports.Head = html.Head;
module.exports.Header = html.Header;
module.exports.HeadingGroup = html.HeadingGroup;
//module.exports.Heading = html.Heading;
module.exports.HorizontalRule = html.HorizontalRule;
module.exports.HTML = html.HTML;
module.exports.Image = html.Image;
//module.exports.Input = html.Input;
module.exports.Inserted = html.Inserted;
module.exports.Italic = html.Italic;
module.exports.Keyboard = html.Keyboard;
module.exports.Label = html.Label;
module.exports.Legend = html.Legend;
module.exports.LineBreak = html.LineBreak;
module.exports.Link = html.Link;
module.exports.ListItem = html.ListItem;
module.exports.Main = html.Main;
module.exports.Map = html.Map;
module.exports.Mark = html.Mark;
module.exports.MenuItem = html.MenuItem;
module.exports.Menu = html.Menu;
module.exports.Meta = html.Meta;
module.exports.Meter = html.Meter;
module.exports.MultimediaObject = html.MultimediaObject;
module.exports.Nav = html.Nav;
module.exports.NoScript = html.NoScript;
module.exports.OptionGroup = html.OptionGroup;
module.exports.Option = html.Option;
module.exports.OrderedList = html.OrderedList;
module.exports.Output = html.Output;
module.exports.Paragraph = html.Paragraph;
module.exports.Param = html.Param;
module.exports.Picture = html.Picture;
module.exports.PreformattedText = html.PreformattedText;
module.exports.Progress = html.Progress;
module.exports.Quotation = html.Quotation;
module.exports.Sample = html.Sample;
module.exports.Script = html.Script;
module.exports.Section = html.Section;
//module.exports.Select = html.Select;
module.exports.Small = html.Small;
module.exports.Source = html.Source;
module.exports.Span = html.Span;
module.exports.Strikethrough = html.Strikethrough;
module.exports.Strong = html.Strong;
module.exports.Style = html.Style;
module.exports.Subscript = html.Subscript;
module.exports.Summary = html.Summary;
module.exports.Superscript = html.Superscript;
module.exports.SVG = html.SVG;
module.exports.TableBody = html.TableBody;
module.exports.TableData = html.TableData;
module.exports.TableFooter = html.TableFooter;
//module.exports.TableHead = html.TableHead;
//module.exports.TableHeader = html.TableHeader;
//module.exports.TableRow = html.TableRow;
//module.exports.Table = html.Table;
module.exports.Template = html.Template;
//module.exports.TextArea = html.TextArea;
module.exports.Text = html.Text;
module.exports.Time = html.Time;
module.exports.Title = html.Title;
module.exports.Track = html.Track;
module.exports.Underline = html.Underline;
module.exports.UnorderedList = html.UnorderedList;
module.exports.Variable = html.Variable;
module.exports.Video = html.Video;
module.exports.WordBreakOpportunity = html.WordBreakOpportunity;

/** Strapped exports */
module.exports.Accordian = accordian.Accordian;
module.exports.Alert = alert.Alert;
module.exports.alertFromError = alertFromError.alertFromError;
module.exports.Anchor = anchor.Anchor;
module.exports.BadgeLink = badgeLink.BadgeLink;
module.exports.Badge = badge.Badge;
module.exports.ButtonCheckbox = buttonCheckbox.ButtonCheckbox;
module.exports.ButtonGroup = buttonGroup.ButtonGroup;
module.exports.ButtonLink = buttonLink.ButtonLink;
module.exports.ButtonRadio = buttonRadio.ButtonRadio;
module.exports.ButtonToolbar = buttonToolbar.ButtonToolbar;
module.exports.Button = button.Button;
module.exports.CardBody = cardBody.CardBody;
module.exports.CardColumns = cardColumns.CardColumns;
module.exports.CardDeck = cardDeck.CardDeck;
module.exports.CardFooter = cardFooter.CardFooter;
module.exports.CardGroup = cardGroup.CardGroup;
module.exports.CardHeader = cardHeader.CardHeader;
module.exports.CardImageOverlay = cardImageOverlay.CardImageOverlay;
module.exports.CardImage = cardImage.CardImage;
module.exports.Card = card.Card;
module.exports.CarouselItem = carouselItem.CarouselItem;
module.exports.Carousel = carousel.Carousel;
module.exports.Col = col.Col;
module.exports.Collapse = collapse.Collapse;
module.exports.DropdownDivider = dropdownDivider.DropdownDivider;
module.exports.DropdownHeader = dropdownHeader.DropdownHeader;
module.exports.DropdownItem = dropdownItem.DropdownItem;
module.exports.DropdownMenu = dropdownMenu.DropdownMenu;
module.exports.Form = form.Form;
module.exports.Heading = heading.Heading;
module.exports.InputSet = inputSet.InputSet;
module.exports.Input = input.Input;
module.exports.Jumbotron = jumbotron.Jumbotron;
module.exports.ListGroupAnchor = listGroupAnchor.ListGroupAnchor;
module.exports.ListGroupButton = listGroupButton.ListGroupButton;
module.exports.ListGroupItem = listGroupItem.ListGroupItem;
module.exports.ListGroup = listGroup.ListGroup;
module.exports.ModalBody = modalBody.ModalBody;
module.exports.ModalFooter = modalFooter.ModalFooter;
module.exports.ModalHeader = modalHeader.ModalHeader;
module.exports.Modal = modal.Modal;
module.exports.Page = page.Page;
module.exports.ProgressBar = progressBar.ProgressBar;
module.exports.RowBreak = rowBreak.RowBreak;
module.exports.Row = row.Row;
module.exports.Select = select.Select;
module.exports.StrappedError = error.StrappedError;
module.exports.TableHead = tableHead.TableHead;
module.exports.TableHeader = tableHeader.TableHeader;
module.exports.TableRow = tableRow.TableRow;
module.exports.Table = table.Table;
module.exports.TextArea = textArea.TextArea;
