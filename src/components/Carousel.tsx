import React, {useState, useEffect} from 'react';
import {animated, useTransition, config} from 'react-spring';
import '../css/carouselstyles.css';

interface Props {

}

const slides = [
    {id: 0, url: '1YBhEkWJmSZfLoQCRl5zZ09lH2LUgpIrg'},
    {id: 1, url: '1nnufQtCHvg6jUokh3IPnBKlqf8-GZ9Tg'},
    {id: 2, url: '1i74jIT4iFzh4KcIB91lHOL33URnro9IP-GZ9Tg'},
    {id: 3, url: '1ZifkzFIbqduHHiNx9BAxu-4EQxw-5KEq'},
];

export const Carousel: React.FC<Props> = () => {
    const [index, set] = useState(0);
    const transitions = useTransition(slides[index], item => item.id, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        config: config.molasses,
    });

    useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 4000), []);

    const transitionList = transitions.map(({item, props, key}) => (<animated.div
        key={key}
        className="bg"
        style={{...props, backgroundImage: `url(https://drive.google.com/uc?export=view&id=${item.url})`}}
    />));

    return (<>{transitionList}</>)
};
