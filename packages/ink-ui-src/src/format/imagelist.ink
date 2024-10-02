<script>
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import setDisplay from '../utilities/style/display';
  //extract props
  const { 
    value, 
    //dont need these
    'class': _, style,
    //the rest is for the image tag
    ...attributes
  } = this.props;
  //override default styles
  const styles = new StyleSet();
  this.styles = () => styles.toString();
  //determine display
  setDisplay(this.props, styles, 'block');
  if (!attributes.loading) {
    attributes.loading = 'lazy';
  }
</script>
<each value=src from=value>
  <img {...attributes} {src} />
</each>