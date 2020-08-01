import React from 'react';
import { PHOTO_HERO, PHOTO_ENEMY } from '../../constants';

const Hero = (props) =>
    <div>
        <h2>Hero: {props.name}</h2>
        <img src={props.photo} alt='' />
    </div>

const Enemy = (props) =>
    <div>
        <h2>Enemy: {props.name}</h2>
        <img src={props.photo} alt='' />
    </div>

const World = (props) =>
    <div>
        {props.children}
    </div>

const Arena = (props) =>
    <div>
        <h2>Nome: {props.name}</h2>
        <Hero name="Thor" photo={PHOTO_HERO} />
        <Enemy name="Thanos" photo={PHOTO_ENEMY} />
    </div>

export {World, Arena};