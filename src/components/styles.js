import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    footer: {
        color: 'white',
        backgroundColor: '#117fe0',
        paddingTop: '3em',

        position: 'absolute',
        width: '100%',
    },
    grow: {
        flexGrow: 1,
      },
    search: {
      display:'flex',
        position: 'relative',
        borderWidth: '2px',
        padding:'2',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#c3ccd3',
        '&:hover': {
          backgroundColor: 'gray',
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
   
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
      title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
      },
      sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },


    
}));

