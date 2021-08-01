// import React, { useEffect, useState } from 'react';
// import { jsPDF } from "jspdf";
// import {detailsOrder } from '../actions/actions2';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import Axios from 'axios';
// import useStyles from './styles';


// const DownloadScreen = (props) => {

//     const location = props.location.pathname;
//     const orderArr = location.split("/");
//     const orderId = orderArr[2];
//     console.log('this is orderId', orderId);

//     const orderDetails = useSelector((state) => state.orderDetails);
//     const { order, loading, error } = orderDetails;

//     const dispatch = useDispatch();

//     useEffect(() => {
//         if (
//             !order ||
//           (order && order._id !== orderId)
//         ) {
//         dispatch(detailsOrder('60fe288daf39ae6f944dd542'));
//         } 
//     }, [dispatch, orderId, order]);
//     console.log('this is order s3243ss', order);

//     function createPDF(imageArray){
//         // var doc = new jsPDF();

//         // var imgData2 = '';
//         // doc.addImage(imgData, 'JPEG', 0, 0, 250, 250);    
//         // doc.save('datauri.pdf');
//     }

//     return loading ? (
//         <div className="loading">
//             <i className="fa fa-spinner fa-spin"></i> Loading...
//             </div>
//       ) : error ? (
//         {error}
//       ) : (
//         <div>
//             {order.orderItems.map((item) => (
//                 <img src={item.image[0]} ></img>
//             ))}

//         </div>
//     )
// }

// export default DownloadScreen





import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jsPDF } from "jspdf";
import { Link } from 'react-router-dom';
import {  detailsOrder } from '../actions/actions2';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Scrollbars } from 'react-custom-scrollbars';
import useStyles from './styles';
const DownloadScreen =(props)=>{
    const location = props.location.pathname;
    const orderArr = location.split("/");
    const orderId = orderArr[2];
    const classes = useStyles();
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        if (
            !order ||
            (order && order._id !== orderId)
        ) {
            dispatch(detailsOrder(orderId));
        } 
    }, [dispatch, orderId,order]);

    console.log('this is order ', order);

    

    function createPDF(imageArray,name){
        const doc = new jsPDF();

        for(let i =0; i < imageArray.length; i++) {
             var imgData = imageArray[i];
            doc.addImage(imgData, 'JPEG', 0, 0, 250, 250);
            if(i!== imageArray.length-1)
            doc.addPage();    
          }
          doc.save(`${name}.pdf`);

      
    }

  return loading ? (
    <div className="loading">
        <i className="fa fa-spinner fa-spin"></i> Loading...
        </div>
  ) : error ? (
    {error}
  ) : (
    <div>
                <div style={{   
  width: 1800, 
  height: 1200,
  borderStyle: 'solid',
  borderWidth: '5'}} >
<Scrollbars >
<Grid container justify="center" spacing={1}>
{/* <img src={item.image[0]} alt={item.name} style={{height:300, width:300}} ></img> */}

  {order.orderItems.map((item,index) => (
     
    <Grid item xs={12} sm={6} md={4} lg={3}  key={index}>
    <Card className={classes.root} style={{  borderStyle: 'solid',}}>
    <CardMedia className={classes.media} image={item.image[0]} title={item.name} />
    <CardContent className={classes.cardContent}>
    <Typography gutterBottom variant="h6" component="h5">
          <Link to={`/description/${item.product}`}>{item.name}</Link> 
          </Typography>
      
          </CardContent>
          <Typography  gutterBottom variant="h5" component="legend">
          {item.qty} x ${item.price} = ${item.qty * item.price}
          </Typography>

            <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="legend" >
          ${item.price}
          </Typography>

          <button onClick={(e) =>createPDF(item.image,item.name)}>download</button>


          </div>
    </Card>
    </Grid>
  ))}
              </Grid>
  </Scrollbars>
  
</div>


         
        </div>
       

  );
}
export default DownloadScreen
