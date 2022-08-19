import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
// import { color } from '@mui/system';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import { makeStyles } from '@mui/material';

// const useStyles = makeStyles({
//     root: {
//         width: "100%",
//         position: "fixed",
//         bottom : 0,
//         backgroundColor: "#2d313a",
//         zIndex: 100,

//     },
// });

export default function SimpleBottomNavigation() {
  
  //const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    if(value ===0)
        navigate("/");
    else if(value === 1)
        navigate("/movies");
    else if (value === 2) 
        navigate("/series");
    else if( value === 3)
        navigate("/search")           
  }, [value,navigate]); 
 

  return (
    <Box sx={{ 
        width: "100%",
        position: "fixed",
        bottom : 0,
        backgroundColor: "#27292e",
        zIndex: 100,
         }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
        //className={classes.root}
      >
        <BottomNavigationAction style={{color: "black"}} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{color: "black"}} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{color: "black"}} label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction style={{color: "black"}} label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
