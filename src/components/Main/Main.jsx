import React , {useContext} from 'react'
import {Card , CardContent , CardHeader , Typography , Grid , Divider, List} from '@material-ui/core';
import useStyles from './styles';
import Form from './Form/Form';
import ListExpense from './List/List';
import { ExpenseTrackerContext } from '../../context/context';
import InfoCard from '../infocard';

function Main({title}) {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext)

  return (
    <Card className={classes.root}>
        <CardHeader title="Expense tracker" subheader="Powered by Speechly"/>
        <CardContent>
            <Typography align="center" variant='h5' >Total Balance ₹{balance}</Typography>
            <Typography variant="subtitle1" style={{lineHeight : '1.5em' , marginTop : '20px'}}>
              <InfoCard/>
            </Typography>
            <Divider/>
            <Form/>
        </CardContent>
        <CardContent className={classes.cartContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ListExpense/>
            </Grid>
          </Grid>
        </CardContent>
    </Card>
  )
}

export default Main