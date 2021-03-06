import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Guide from '../components/Guide';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});
class Cook extends Component {
  constructor(props) {
   super(props);
   this.state = {
      counters: 12,
   };
 }
 
addVote(){
  this.setState({
        counters: this.state.counters +1
      });
};
render(){



  return (
    <div>
    
      <div>
      <Grid container spacing={3}>
      <Grid item xs>
      <iframe width="900" height="600" src="http://localhost:9999/" frameborder="0" allowfullscreen></iframe>

    </Grid>
<ThemeProvider theme={theme}>
    <Grid item xs>
      <Guide/>
    </Grid>
      </ThemeProvider>
    </Grid>
  
      
      </div>
    </div>
  );
}
}

export default Cook;

