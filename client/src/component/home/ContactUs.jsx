import { useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import emailjs from 'emailjs-com';
import { Instagram, Email } from '@material-ui/icons';
import { Box, Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';
import { useEffect, useState } from "react";
import { getprofile } from "../../service/api";
const useStyle = makeStyles({
  field: {
    marginBottom: 10
  },
  label: {
  //  display: 'block',
  },
  container: {
    margin: '10px 50px'
  },
  input100: {
    padding: 0,
    display: 'block',
    // border: 'none',
    backgroundColor: '#87cae542',
    border: '1px solid black',
    minWidth: '100%',
    marginBottom: 10,
    borderRadius: '5px',

    lineHeight: 1.5,
    fontSize: 14
  },
  submit: {
    cursor: 'pointer',
    borderRadius: '5px',
    height: 40,
    minWidth: '100%',
    margin: "20px 0px",
    display: "block",
    padding: "6px 30px",
    fontSize: 14,
    backgroundColor: " #67a85d",
    color: "white",
    border: "none"
  },
  submitall: {
    target: '_blank',
    textDecoration: 'none',
    borderRadius: '5px',
    padding: "14px 0px",
    minWidth: '100%',
    margin: "20px 0px",
    display: "block",
    textAlign: 'center',
    fontSize: 14,
    backgroundColor: " #4460AA",
    color: "white",
    border: "none"
  },
  heading: {
    height: 400,
    minWidth: '100%',
    backgroundColor: '#3c9779ed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 50,
    fontWeight: 600,
  },
  image: {
    height: 200,
    width: 200
  },
  row: {
    backgroundColor: 'aquamarine',
    //  height: 40,
  },
  banner: {
    backgroundImage: `url(${'http://mrtaba.ir/image/bg2.jpg'})`,
    width: '100%',
    height: '50vh',
    backgroundPosition: 'left 0px top -100px',
    backgroundSize: 'cover'
  },
  wrapper: {
    padding: 20,
    '& > *': {
      marginTop: 50
    }
  },
  text: {
    margin: '10px 50px',
    color: '#878787'
  }
})
const Result = () => {
  return (
    <p>
      Your message has been successfully sent.We will contact you soon
    </p>
  )
}
export default function ContactUs() {
  const { search } = useLocation();
  const [result, showResult] = useState(false);
  const [data, setdata] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      
      let data2 = await getprofile(search);
      setdata(data2.data);
    }
    fetchData();
    
  }, [search]);
  
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uetnfdj', 'template_erac1oy', e.target, 'user_jOSJCzoSt8b5bbg0qTyeO')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    showResult(true);
  }
  setTimeout(() => {
    showResult(false);
  }, 3000)

  const classes = useStyle();
  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <div className={classes.container}>
        <div className={classes.heading}>
          <img className={classes.image} src="https://www.emailjs.com/assets/support.svg" alt="" />
          <p style={{ margin: 0 }}>Contact Us</p>
        </div>
        <br />
      <div className={classes.container}>
         </div>
        <div className={classes.field}>
          <label className={classes.label} htmlFor="fullName">Full Name</label>
          <input type="text" className={classes.input100} style={{ height: 40 }} name="fullName" id="fullName" required  Value={`${data.firstname} ${data.lastname}`}/>
        </div>

        <div className={classes.field}>
          <label className={classes.label} htmlFor="phone">Phone Number</label>
          <input type="text" className={classes.input100} style={{ height: 40 }} name="phone" id="phone" required defaultValue={data.phone}/>
        </div>
        <div className={classes.field}>
          <label className={classes.label} htmlFor="email">Enter Email</label>
          <input type="text" className={classes.input100} style={{ height: 40 }} name="email" id="email" required defaultValue={data.email}/>
        </div>
     
       <div className={classes.field}>
          <label className={classes.label} htmlFor="message">Message</label>
          <textarea type="text" rows={5} className={classes.input100} name="message" id="message" placeholder="Write your massage here.."/>
        </div>
        <div>
          <input className={classes.submit} type="submit" id="button" value="Send Email" ></input>
          <div className={classes.row}>{result ? <Result /> : null}</div>
          <a className={classes.submitall} href="https://www.linkedin.com/in/mohit-kumar-18284a1ba/">Connect With Linkdien</a>
          <a className={classes.submitall} href="https://www.facebook.com/profile.php?id=100007754415029">Connect With Facebook</a>
        </div>
      </div>
      <Box>
        {/* <Box className={classes.banner}>Helloo</Box>
            <Box className={classes.wrapper}> */}
        <Typography variant="h3" style={{ margin: '10px 50px' }}>Getting in touch is easy!</Typography>
        <Typography variant="h5" className={classes.text}>
          Reach out to me on
          <Link href="https://www.instagram.com/_kumar__mohit_/" color="inherit" target="_blank">
            <Instagram />
          </Link>
          <br />
          or send me an Email
          <Link href="mailto:mohitkmr14302@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
            <Email />
          </Link>.
        </Typography>
        {/* </Box> */}
      </Box>
    </form>


  );
}