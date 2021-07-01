import React from 'react'
import useStyles from './styles';
import {Grid, Button, Typography} from '@material-ui/core'
import ButtonArrow from '../UI/ButtonArrow/ButtonArrow'
import { useTheme } from '@material-ui/core';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg'

function ServicesBlock() {
    const classes = useStyles();
    const theme = useTheme();
    return (
            <Grid className={classes.serviceContainer} container direction='row'>
                <Grid style={{marginLeft:"5em"}} item>
                    <Typography variant='h4'>Custom Software Development</Typography>
                    <Typography className={classes.subtitle} variant='subtitle1'>Save Energy. Save Time. Save Money</Typography>
                    <Typography variant='subtitle1'>Complete digital solutions, from investigation to {" "}<span className={classes.specialText}>celebration</span></Typography>
                    <Button className={classes.learnBtnServices} variant = 'outlined'>
                        <span style={{marginRight: 6.5}}>Learn More</span>
                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                    </Button>  
                </Grid>
                <Grid item>
                    <img className={classes.img} src={customSoftwareIcon} alt='custom software icon'/>
                </Grid>
            </Grid>
    )
}

export default ServicesBlock
