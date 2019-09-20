import React, { Component} from 'react'
import{
    FormControl,
    InputLabel,
    Input,
    Button
} from "@material-ui/core"

import Paper from '@material-ui/core/Paper';

export default class Contact extends Component {
    render(){
        return(
           
            <div
            style={{
                display: "flex",
                justifyContent: "center",
                margin: 20,
                padding: 20
            }}
            >
                <Paper >
                    <form style={{ width: "50%", margin: 'auto', padding: "20px 10px" }}>
                        <h1>Contact Form</h1>

                        <FormControl margin="normal" fullWidth>
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <Input id="name" type="text"/>
                        </FormControl>

                        <FormControl margin="normal" fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" type="email"/>
                        </FormControl>

                        <FormControl margin="normal" fullWidth>
                            <InputLabel htmlFor="email">Message</InputLabel>
                            <Input id="email" multiline rows={10}/>
                        </FormControl>

                        <Button variant="contained" color="primary" size="medium" >
                            Send
                        </Button>
                    </form>  
                </Paper>
            </div>
            
        )
    }
}