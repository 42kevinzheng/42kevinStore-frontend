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
  scrollBar: {
    width: 800, 
    height: 1200,
    display: "flex",
    borderStyle: 'solid',
    borderWidth: '5'
  },
  scrollBarImport : {
    width: 1000, 
    height: 1200,
    display: "flex",
    border: 200,
    borderColor: 'black',
  },

  cardsLarge : {
      width:'100%',
      height:'100%',
      marginTop: 20
  },




  
  cartImageRoot : {
      width: '100%',   
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
