import React from 'react';

const Hero = (props) =>
    <div>
        <h2>Hero: {props.name}</h2>
        <img src = "https://static1.purebreak.com.br/articles/6/42/37/6/@/197155-thor-chris-hemsworth-conta-porque-nao-diapo-3.jpg" alt=''/>
    </div>


const Enemy = (props) =>
    <div>
        <h2>Enemy: {props.name}</h2>
        <img src = "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/6/63/97d1d9f934a350cee765c5ac1a466605.jpg/revision/latest?cb=20190527184444" alt=''/>
    </div>


const Arena = (props) =>
    <div>
        <Hero name = "Thor - THE BEST" />
        <Enemy name = "Thanos" />
    </div>

export default Arena;