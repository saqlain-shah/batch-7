import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Card, CardMedia, CardContent, Typography, List, ListItem, ListItemText, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        card: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    },
}));

const DummyDataComponent = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
                console.log(response)
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" gutterBottom>
                Dummy Data
            </Typography>
            {/* <List>
                {data && data((item) => (
                    <ListItem key={item.id}>
                        <ListItemText primary={item.title} secondary={item.body} />
                    </ListItem>
                ))}
            </List> */}
            <Grid container spacing={2}>
                { data && data.map((item) => (

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItem: 'center', padding: '20px' }} key={item.id}>
                        <Grid item xs={12} sm={6} md={4} >
                            <img src={item.url} alt="" width={'200px'} height={'200px'} />
                            <span>{item.title}</span>
                        </Grid>
                    </div>
                    // <Card className={classes.root} key={item.id}>
                    //     {console.log("item",item)}
                    //     <CardMedia
                    //         className={classes.media}
                    //         image={item.url}
                    //         // src={item.url}
                    //         title={item.title}
                    //     />
                    //     <CardContent>
                    //         <Typography gutterBottom variant="h5" component="div">
                    //             {item.title}
                    //         </Typography>
                    //     </CardContent>
                    // </Card>
                ))}
            </Grid>

        </Paper>
    );
};

export default DummyDataComponent;
