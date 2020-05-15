import React from 'react'
// @ts-ignore
import {useSpring, animated} from 'react-spring'
import range from 'lodash-es/range';
import '../css/BannerStyles.css';

const items = range(4);
const interp = (i: number) => (r: number) => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

interface Props {

}

export const Banners: React.FC<Props> = () => {

    const {radians} = useSpring({
        to: async (next: (arg0: { radians: number; }) => any) => {
            while (1) await next({radians: 2 * Math.PI})
        },
        from: {radians: 0},
        config: {duration: 3500},
        reset: true,
    });

    return <>{items.map(i => <animated.div key={i} className="script-bf-box"
                                           style={{transform: radians.to(interp(i))}}/>)}</>
};
