import React from 'react';
import {NavBar} from "./NavBar";

interface Props {

}

export const StarterHacks2020: React.FC<Props> = () => {
    return (<div className="App">
        <NavBar/>
        <h1 className={"mt-5"}>Starter Hacks 2020</h1>
        <h3>Foodify Inspiration</h3>
        <ul>
            <li>We were inspired by the prompt of “Canadians often struggle to adopt behaviours that reduce their
                environmental footprint”, from the the sustainability impact statement of the starterhacks website.
            </li>
            <li>We noted that in our own lives how difficult it was to not only buy food to achieve health goals, yet
                also
                not overbuy and create food waste.
            </li>
            <li>Diving further into this problem, we discovered that it was larger then we imagined.</li>
            <li>If for the average person, they waste 1 pound of food per week. That equates to 48 pounds of CO2
                emissions
                per year. That is the same as driving 57 miles, which does not even include the environmental impact of
                the
                transportation of the food.
            </li>
            <li>This is where Foodify comes into play.</li>
            <li>Foodify, the new innovative platform assists you in not only eliminating your food waste but also helps
                you
                plan what to buy and how much to buy to aid in healthy eating.
            </li>
        </ul>
        <h3>How it Works</h3>
        <ul>
            <li>Once you land on our beautifully crafted website, you can read through the about to get to know about
                the
                project more.
            </li>
            <li>Once you finish scrolling through the initial landing page, you can ‘Get Started’ by simply clicking on
                the
                button.
            </li>
            <li>This bring you to the information form, a very short form to fill in to get to know a bit more about
                yourself and your weight goals.
            </li>
            <li>Soon after the completion of the form, you can search for your favourite foods that you want to eat for
                the
                next week.
            </li>
            <li>Immediately after, our algorithm composes a shopping list catered to you for the next week. This even
                includes an in depth breakdown of the macro nutrients and caloric intake of the grocery list.
            </li>
            <li>Then, for your convenience we include the possibility of emailing you your custom generated shopping
                list.
            </li>
        </ul>
    </div>)
};
