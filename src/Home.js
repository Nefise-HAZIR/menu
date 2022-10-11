import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
// import { Modal, Box, Button, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
class Home extends Component {
    render() {
        const menu = this.props.menu;
        return (

            <div className='container text-align-center'>
                <p className='title'>Menüler</p>
                <ul>
                    {
                        menu?.map(item =>
                            <li>
                                <Card data-toggle="modal" data-target="#exampleModal" className="bg-dark text-black card ">

                                    <Card.Img src={item.img} alt="Card image" id='cardImg' />
                                    <Card.ImgOverlay id='ımgOverlay'>
                                        <div id='imgCSS'>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>
                                                {item.text}
                                            </Card.Text>
                                            <Card.Text>{item.price}</Card.Text>
                                        </div>

                                    </Card.ImgOverlay>
                                </Card>
                            </li>


                        )
                    }
                </ul>


            </div>
        );
    }
}

export default Home;