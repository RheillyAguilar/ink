<script observe="autocomplete,disabled,name,pattern,readonly,required,value">
  import Inputmask from 'inputmask';
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  import { getHandlers, setDefaultStyles } from '../utilities/input';
  //get props
  const { 
    error,  change, update,
    mask,   regex,  alias,
    repeat, greedy, numericInput,
    rightAlign, definitions,
    //dont need these...
    style, 'class': _,
    //input attributes
    ...attributes
  } = this.props;
  //override default styles
  const styles = new StyleSet();
  this.styles = () => styles.toString();
  //set default styles
  setDefaultStyles(this.props, styles);
  const im = new Inputmask({
    mask,   regex,  alias,
    repeat, greedy, numericInput,
    rightAlign, definitions
  });
  //get handlers
  const handlers = getHandlers(this, change, update);
  handlers.init = () => {
    im.mask(this.querySelector('input'));
  }
</script>
<template type="light">
  <input 
    {...attributes} 
    change={handlers.change} 
    mount={handlers.init}
  />
</template>
<template type="shadow">
  <slot></slot>
</template>