import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    width: '100%',
    '&:hover':{
    boxShadow: '15px 20px 30px 11px rgba(17, 127, 224) !important',
    transition: 'all 0.7s linear',
    },
    //backgroundColor:'blue',

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
