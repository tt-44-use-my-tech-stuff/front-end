import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import axios from"axios";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { blue } from "@material-ui/core/colors";


    const useStyles = makeStyles({
    root: {
    minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
})



const Renter =()=>{

    
      const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
      

    const [renter, setRenter]= useState([]);
    const [itemData, setItemData]=useState([])
    //getting data

    useEffect(()=>{
        axiosWithAuth()
        .get('https://techstufflambda.herokuapp.com/api/users') //API renter FROM UNIT 4
        .then(res =>{
            console.log(res.data);
            setRenter(res.data);
        })
        .catch(err => console.log(err))
        
    }, [])

    useEffect(()=>{
        axiosWithAuth()
        .get(`https://techstufflambda.herokuapp.com/api/techitems/`) //API OWNER/data FROM UNIT 4
        .then(res =>{
            //console.log(res.data);
            setItemData(res.data);
        })
        .catch(err => console.log(err))
        
    }, [renter])

    // const itemMap = (ownerData) => {
      
    // }
    return(
        <div className="container">
            {renter.map(res =>{
                return <p>{res.username}</p>
            })}
            {itemData.map(res =>{
                return (
                    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {res.tech_item_title}
        </Typography>
        <Typography variant="h5" component="h2">
          {res.tech_item_price}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {res.tech_item_description}
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
                   
                )
            })}
            
       
        </div>
    )

}

export default Renter;
