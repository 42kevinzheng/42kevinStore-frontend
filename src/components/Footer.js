import React, {useState,useEffect} from "react";
import Axios from 'axios';
import useStyles from './styles';


function Footer() {
    const [details, setDetails] = useState(null);
    const classes = useStyles();

    const getUserGeolocationDetails = async() => {
        const { data } = await Axios.get(`https://geolocation-db.com/json/7bad3e80-c704-11eb-a4bc-19a5c6a04c5d`); 
        setDetails(data);
    };

    useEffect(() => {
        getUserGeolocationDetails();
    }, []);

  return (
    <div className={classes.footer}>
      <hr/>
      <div className="container">
        <div className="row" style={{justifyContent:'center'}}>
          <div className="col">
            <h2  style={{marginLeft: 250}}>Kevin's Everything Store</h2>
            <h3>Contact info and location for store</h3>
            <h4>(City, State, and Postal uses your ip address to find location. Does not work well with a VPN, will go to default.)</h4>
            <h4 className="list-unstyled">
            <li>123-456-7890</li>
            <li>1234 Street Address</li>
            {details==null || details.city==null ||details.state==null || details.postal==null  ?
                <li>
                {"Default City, Default State, Default Postal"}
                </li>
                :   
            <li>
            {`${details.city}, ${details.state} ${details.postal}`}
            </li>
            }
            </h4>
          </div>
          </div>
            <div style={{display: 'flex', justifyContent: "space-between"}}>
          <div className="col" style={{marginLeft: 40}}>
            <h4>Other Cool Projects</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>

          <div className="col" style={{marginRight: 40}}>
            <h4>Future Features (In Progress)</h4>
            <ui className="list-unstyled">
              <li>Pages for Products</li>
              <li></li>
              <li>GUD STUFF</li>
            </ui>
          </div>
          </div>
        <hr />
        <div className="row" style={{justifyContent:'center'}}>
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Kevin Zheng | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;