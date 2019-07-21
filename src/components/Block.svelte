<script>
    export let page;
    export let text;
    export let styles;

    let classes = [];
    const style = Object.keys(styles).reduce((acc, key) => {
        let value = styles[key];
        switch (key) {
          case 'top':
          case 'left':
          case 'position':
          case 'white-space':
            return acc;
          case 'font-weight':
          case 'font-style':
          case 'color':
            if (value === 'bold') classes.push('bold');
            if (value === 'italic') classes.push('emphasis');
            if (value === 'rgba(0,0,237,1)') classes.push('blue')
        }
      return `${acc}${key}:${value};`
      }, '');
</script>

<style>
    p {
        text-indent: 5em;
        font-weight: bold;
    }

    .blue {
        text-indent: inherit;
    }

    .bold, .emphasis {
        text-align: center;
        text-indent: inherit;
    }
</style>

<p style="{style}" class="{classes.join(' ')}">{text}</p>
