import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './MainCourse.css';
import './App.css';

class MainCourse extends Component {
    render() {
        const {hamburger,dürüm,kebap}=this.props;
        return (
            <div className='mainCourse'>
                <div className='container text-align-center'>
                   <p className='title'>Hamburger Çeşitleri</p>
                <ul>
                    {
                        hamburger?.map(item =>
                            <li>
                                <Card className="bg-dark text-black card ">

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
                <div className='container text-align-center'>
                    <p className='title'>Dürüm Çeşitleri</p>
                <ul>
                    {
                        dürüm?.map(item =>
                            <li>
                                <Card className="bg-dark text-black card ">

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
                <div className='container text-align-center'>
                    <p className='title'>Kebap Çeşitleri</p>
                <ul>
                    {
                        kebap?.map(item =>
                            <li>
                                <Card className="bg-dark text-black card ">

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
            </div>
        );
    }
}

export default MainCourse;