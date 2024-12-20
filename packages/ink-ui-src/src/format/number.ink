<script>
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import setBold from '../utilities/style/bold';
  import setColor from '../utilities/style/color';
  import setDisplay from '../utilities/style/display';
  import setSize from '../utilities/style/size';
  //extract props
  const {
    value,
    separator = '',
    decimal = '.',
    decimals,
    absolute
  } = this.props;
  //override default styles
  const styles = new StyleSet();
  this.styles = () => styles.toString();
  //determine display
  setDisplay(this.props, styles, 'inline-block');
  //determine color
  setColor(this.props, styles, false, ':host', 'color');
  //determine size
  setSize(this.props, styles, false, ':host', 'font-size');
  //determine font weight
  setBold(this.props, styles, ':host');

  //get the absolute value of the number
  const abs = Math.abs(value);
  //get the integer part of the number
  const integer = Math.floor(abs);
  //get the decimal part of the number
  const decimalPart = abs - integer;
  //get the number of decimals to show
  const decimalCount = Math.max(0, decimals || String(decimalPart).split('.')[1].length);
  //get the decimal part of the number as a string
  const decimalString = decimalCount ? decimal + decimalPart.toFixed(decimalCount).slice(2) : '';
  //get the integer part of the number as a string
  const integerString = integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  const number = absolute 
    //if the number is absolute, return the formatted number without the sign
    ? (integerString + decimalString)
    //return the formatted number with the sign
    : ((value < 0 ? '-' : '') + integerString + decimalString);
</script>
{number}