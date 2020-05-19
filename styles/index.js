import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import variables from './variables';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          boxSizing: 'border-box',
          wordBreak: 'break-word',
          margin: 0,
          padding: 0,
          border: 0,
          outline: 'none',
          background: 'transparent',
          touchAction: 'manipulation',
          '&:before, &:after': {
            boxSizing: 'border-box',
            wordBreak: 'break-word',
          },
          '&:focus': {
            outline: 'none',
          },
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
        },
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          color: variables.black,
          fontFamily: variables.fontFamily,
        },
      },
    },
  },
});

export default theme;
