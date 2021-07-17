import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  fit: {
    margin: "auto",
    maxWidth: '75%',
    maxHeight: '50%',
  },
  
}));
