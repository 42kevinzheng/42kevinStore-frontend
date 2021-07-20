import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    footer: {
        color: 'white',
        backgroundColor: 'gray',
        paddingTop: '3em',
        position: 'relative',
        bottom: 0,
        width: '100%',
        marginTop: 100
    },
}));

