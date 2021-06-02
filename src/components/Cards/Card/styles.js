import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    '&:hover':{
    boxShadow: '15px 20px 30px 11px rgba(231, 9, 9, 0.5) !important',
    transition: 'all 0.7s linear',
    }
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },

}));
