<script>
  import StyleSet from '@stackpress/ink/dist/style/StyleSet';
  //get props
  const { 
    //wrapping
    nowrap, wrap1, wrap2, 
    wrap3,  wrap4, wrap5,
    //sticky
    top,    left,  right
  } = this.propsCamel;
  //override default styles
  const styles = new StyleSet();
  this.styles = () => styles.toString();
  //default host styles
  styles.add(':host', 'display', 'table-cell');
  styles.add(':host([top])', 'position', 'sticky');
  styles.add(':host([top])', 'z-index', '1');
  styles.add(':host([left])', 'position', 'sticky');
  styles.add(':host([left])', 'z-index', '2');
  styles.add(':host([right])', 'position', 'sticky');
  styles.add(':host([right])', 'z-index', '2');
  styles.add(':host([top][left])', 'z-index', '3');
  styles.add(':host([top][right])', 'z-index', '3');

  if (typeof top === 'string' || typeof top === 'number') {
    styles.add(':host([top])', 'top', top);
  } else {
    styles.add(':host([top])', 'top', '0');
  }
  if (typeof left === 'string' || typeof left === 'number') {
    styles.add(':host([left])', 'left', left);
  } else {
    styles.add(':host([left])', 'left', '0');
  }
  if (typeof right === 'string' || typeof right === 'number') {
    styles.add(':host([right])', 'right', right);
  } else {
    styles.add(':host([right])', 'right', '0');
  }

  if (nowrap) {
    styles.add(':host', 'white-space', 'nowrap');
  }
  if (wrap1) {
    styles.add('.wrap', 'width', '100px');
  } else if (wrap2) {
    styles.add('.wrap', 'width', '200px');
  } else if (wrap3) {
    styles.add('.wrap', 'width', '300px');
  } else if (wrap4) {
    styles.add('.wrap', 'width', '400px');
  } else if (wrap5) {
    styles.add('.wrap', 'width', '500px');
  }
</script>
<slot></slot>
<if true={wrap1 || wrap2 || wrap3 || wrap4 || wrap5}>
  <div class="wrap"></div>
</if>