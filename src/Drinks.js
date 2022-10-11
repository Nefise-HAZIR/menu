import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './Drinks.css';
class Drinks extends Component {
    render() {
        const { cay, kahve, alkol, soguk } = this.props;
        return (
            <div className='drinks'>
                <div className='hot'>
                    <div>
                        <p className='title'>Çay Çeşitleri</p>
                        <ul>
                            {
                                cay?.map(item =>
                                    <li>
                                        <Card className="bg-dark text-black card ">

                                            <Card.Img src={item.img} className='image' alt="Card image" id='cardImg' />
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
                    <div>
                        <p className='title'>Kahve Çeşitleri</p>
                        <ul>
                            {
                                kahve?.map(item =>
                                    <li>
                                        <Card className="bg-dark text-black card ">

                                            <Card.Img src={item.img} className='image' alt="Card image" id='cardImg' />
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
                </div>
                <div>
                    <p className='title'>Soğuk içecekler</p>
                    <ul>
                        {
                            soguk?.map(item =>
                                <li>
                                    <Card className="bg-dark text-black card ">

                                        <Card.Img src={item.img} className='image' alt="Card image" id='cardImg' />
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
                <div>
                    <p className='title'>Alkollü İçecekler</p>
                    <ul>
                        {
                            alkol?.map(item =>
                                <li>
                                    <Card className="bg-dark text-black card ">

                                        <Card.Img src={item.img} className='image' alt="Card image" id='cardImg' />
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

            </div>
        );
    }
}

export default Drinks;