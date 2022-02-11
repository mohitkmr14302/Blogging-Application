import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { NavLink } from "react-router-dom";
import { logout } from '../service/api';
import { useHistory } from 'react-router';
import { FaBars } from 'react-icons/fa';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3RoundedIcon from '@material-ui/icons/Brightness3Rounded';
import { useEffect, useState } from 'react';
const useStyle = makeStyles({
  component: {
    backgroundColor: '#64896e',
    color: "white",
  },
  container: {

    justifyContent: "center",
    '& > *': {
      padding: 20
    },
    "@media (max-width: 591px)": {
      display: "block",
      textAlign: "center",
       '& > *': {
      padding: 5
    },
    }
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: "#b6d8f4",
    },

  },
  active_class: {
    color: "#b6d8f4",
    "@media (min-width: 591px)": {
      borderBottom: '2px solid #e3f2fd'
    }
  },
  line: {
    display: "none",
    "@media (max-width: 591px)": {
      // position: "relative",
      display: "block",
      height: 0,
      padding: 0,
      margin: 0,
      border: '0.1px solid black'
    }
  },
  check: {
    display: "none",
    cursor: "pointer",
  },
  icon: {
    cursor: "pointer",
    height: '2.7em',
    width: '25px',
    display: "none",
    float: "right",
    marginRight: "40px",
    "@media (max-width: 591px)": {
      display: "block",
      marginTop: "20px"
    }
  },
  mode: {
    cursor: "pointer",
  }

});
const Header = (props) => {
  // const onClick={updateset()} [height, setHeight] = useState(0);
  const [set, setset] = useState(true);
  const[img,setimg] =useState(false);
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newHeight = window.innerWidth;
      if(newHeight< 574){
        setset(false);
      }else{
        setset(true);
      }
    };
    updateWindowDimensions();

  }, []);
  const history = useHistory();
  const trylogout = async () => {
    await logout();
    history.push('/login');
  }
  const classes = useStyle();

  function updateset(e) {
    setset(!set);
    // console.log(set);
  }
  function updateimg(e) {
    setimg(!img);
    // console.log(set);
  }
  function updateset1(){
      if(window.innerWidth<574){
        console.log(set);
        if(set===true)
        setset(false);
        
        console.log(set);
      }
  }
  return (
    <AppBar className={classes.component}>
      <input type="checkbox" id="check" className={classes.check}    onChange={(e) => { updateset(e) }} />
      <label htmlFor="check">
        <FaBars className={classes.icon} />
        {/* <FaRegWindowClose className={classes.icon}/> */}
      </label>
      {set ?
        <Toolbar className={classes.container}>
          <NavLink exact activeClassName={classes.active_class} onClick={()=>updateset1()} className={classes.link} to={'/'}><Typography>HOME</Typography></NavLink>
          <hr className={classes.line} />
          <NavLink exact activeClassName={classes.active_class} onClick={()=>updateset1()} className={classes.link} to={'/about'}><Typography>ABOUT</Typography></NavLink>
          <hr className={classes.line} />
          <NavLink exact activeClassName={classes.active_class} onClick={()=>updateset1()} className={classes.link} to={'/contact'}><Typography>CONTACT</Typography></NavLink>
          <hr className={classes.line} />
          <NavLink exact activeClassName={classes.active_class} onClick={()=>updateset1()} className={classes.link} to={'/userprofile'}><Typography>PROFILE</Typography></NavLink>
          <hr className={classes.line} />
          <NavLink exact activeClassName={classes.active_class} onClick={()=>updateset1()} className={classes.link} to={'/login'}><Typography>LOGIN</Typography></NavLink>
          <hr className={classes.line} />
          <NavLink exact activeClassName={classes.active_class}  className={classes.link} to={'/logout'} onClick={() => {trylogout();updateset1()}}><Typography>LOGOUT</Typography></NavLink>
          {
            img ? <WbSunnyIcon className={classes.mode}  onClick={()=> {updateimg();props.togglemode()}}/> : 
            <Brightness3RoundedIcon className={classes.mode} onClick={()=> {updateimg();props.togglemode()}}/>
          }

        </Toolbar> : null}


    </AppBar>
  );
}

export default Header;
