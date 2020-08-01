import React from 'react';
import { PHOTO_HERO, PHOTO_ENEMY } from '../../constants';

const Hero = (props) =>
    <div>
        <h2>Hero: {props.name} da Arena {props.arena}</h2>
        <img src={ PHOTO_HERO } alt='' />
    </div>

const Enemy = (props) =>
    <div>
        <h2>Enemy: {props.name} da Arena {props.arena}</h2>
        <img src={ PHOTO_ENEMY } alt='' />
    </div>

const Arena = (props) =>
    <div>
        {React.Children.map(
            props.children, (personagens)=>{
              //clonar cada filho, passando o nome da arena como propriedade pro clone
              return React.cloneElement(personagens,{...props});
        })}
    </div>

export {Hero, Enemy, Arena};