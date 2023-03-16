import React from 'react';

import {SubHeading} from '../../components';
import {images} from '../../constants';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding ' id='home'>
    <div className="app__wrapper_info">
      <SubHeading  title={"Chase the new flavour"}/>
      <h1 className='app__header-h1'>The key to fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>direct API to the React concepts you already know: props, state, context, refs, and lifecycle. As we will show later, Hooks also offer a new powerful way to combine them.adoption strategy for Hooks in the bottom section of this page.</p>
      <button type='button' className='custom__buttom'>Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
