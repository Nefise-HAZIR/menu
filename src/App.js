import React, { Component } from 'react'
import './App.css';
import MainCourse from './MainCourse';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Drinks from './Drinks';
import { Container, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  
  state = {
    home: [
      { img: "menu/menu1.jpeg", title: 'İskender Menü', text: 'İskender+Patates+İçecek', price: 160 },
      { img: 'menu/menu2.jpeg', title: 'Hamburger Menü', text: ' Hamburger+Patates+İçecek', price: 70 },
      { img: 'menu/menu3.jpeg', title: 'Tavuk Döner Menü', text: '    Tavuk Döner+Ayran+Puding', price: 60 },
      { img: 'menu/menu4.jpeg', title: 'Kebap Menü', text: ' Kebap+Meze+İçecek', price: 170 },
    ],
    hamburger:[
      {img:'hamburger/hm1.jpeg',title:'Köfte Hamburger',price:40},
      {img:'hamburger/hm2.jpeg',title:'Tavuk Hamburger',price:30},
      {img:'hamburger/hm3.jpeg',title:'Pastırma Hamburger',price:50},
      
    ],
    dürüm:[
      {img:'dürüm/dm1.jpeg',title:'Et Dürüm',price:40},
      {img:'dürüm/dm2.jpeg',title:'Tavuk Dürüm',price:30},
      {img:'dürüm/dm3.jpeg',title:'Hatay Dürüm',price:50},
    ],
    kebap:[
      {img:'kebap/kb1.jpeg',title:'Adana Kebap',price:140},
      {img:'kebap/kb2.jpeg',title:'Tepsi Kebap',price:130},
      {img:'kebap/kb3.jpeg',title:'Beyti Kebap',price:75},
      {img:'kebap/kb4.jpeg',title:'Patlican Kebap',price:70},
    ],
    çay:[
      {img:'çay/çay1.jpeg',title:'Siyah Çay',price:5},
      {img:'çay/çay2.jpeg',title:'Oralet',price:5},
      {img:'çay/çay3.jpeg',title:'Bitki Çayları',price:15},
    ],
    kahve:[
      {img:'kahve/kh1.jpeg',title:'Latte',price:30},
      {img:'kahve/kh2.jpeg',title:'Mocha',price:40},
      {img:'kahve/kh3.jpeg',title:'Frappe',price:30},
    ],
    alkol:[
      {img:'alkol/al1.jpeg',title:'Bira',price:40},
      {img:'alkol/al2.jpeg',title:'Volim' ,price:50},
      {img:'alkol/al3.jpeg',title:'Rakı' ,price:120},
    ],
    soguk:[
      {img:'soguk/s1.jpeg',title:'Kola',price:20},
      {img:'soguk/s2.jpeg',title:'Fanta',price:20},
      {img:'soguk/s3.jpeg',title:'Sprite',price:20},

    ]
  }


  render() {

    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/"><img src="menu/Nefis (1).jpg" alt="" /></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href="/MainCourse">Main Course</Nav.Link>
              <Nav.Link href="/Drinks">Drinks</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
        <Routes>
          <Route path='/' element={<Home menu={this.state.home} />} />
          <Route path='/MainCourse' element={<MainCourse hamburger={this.state.hamburger} dürüm={this.state.dürüm} kebap={this.state.kebap} />} />
          <Route path='/Drinks' element={<Drinks cay={this.state.çay} kahve={this.state.kahve} alkol={this.state.alkol} soguk={this.state.soguk} />} />
        </Routes>


      </div>
    );
  }

}

export default App;
