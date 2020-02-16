import React from 'react'
import cars from '../cars.json'
import { Container, Paper, Chip } from '@material-ui/core';

// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
const id =  props.match.params.id
const car = cars.find(car => car.id == id)

    return (

        <Container fixed className="car-container">
            <Paper className="car-paper">
                <h2>{car.Name}</h2>
                {
                    Object.keys(car).map((carinfo, idx) => {
                        return <p><Chip label={`${carinfo}: ${car[carinfo]}`}></Chip></p>
                    })
                }
            </Paper>
        </Container>
    
        
    )
}

export default Car