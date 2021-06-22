import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles({
    title: {
        color: '#fff'
    },
    sub_title:{
        color: '#fff',
        marginLeft:35
    }
});
const Heading = (props) => {
    const classes = useStyles();
    return (
        <div style={{
            width: '100%',
            padding: 15,
            paddingLeft:30,
            backgroundImage: 'linear-gradient(to left, rgb(16, 47, 34) 0%, rgb(30, 154, 100) 50%, rgb(39, 144, 99) 100%), url("https://sadaqahmail.s3.us-east-2.amazonaws.com/assets/Pages/Explore/triangles.png")'
        }}>
            <Typography variant="h4" gutterBottom
                className={classes.title}
            >
                Campaigns Updates
            </Typography>
            <Typography variant="h5" gutterBottom
              className={classes.sub_title}>
                Donate Now - Help Today
            </Typography>
        
        </div>

    );
};
export default Heading;
