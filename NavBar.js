import React from "react";
import {Link} from "react-router-dom";
import CustomBtn from './CustomBtn'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 
import "../App.css";

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#pink",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }

    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }

})


function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/">
                    <CustomBtn txt="Home"/>
                   </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/OurStory">
                    <CustomBtn txt="Our Story"/>
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/NewRecipe">
                    <CustomBtn txt="Recipe Book"/>
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/Wellness">
                    <CustomBtn txt="Wellness"/>
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/ContactUs">
                    <CustomBtn txt="Contact Us"/>
                    </Link>
                </Typography>
            </Toolbar>
    )
}

export default NavBar;