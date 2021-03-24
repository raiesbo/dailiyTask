import { useState } from 'react';
import { Header } from '../components/header.component';
import { DayCard } from '../components/dayCard.component';


export function Calendar() {

    // const today = new Date();


    const dayOne = new Date();
    const dayTwo = new Date(dayOne);
    const dayThree = new Date(dayOne);
    const dayFour = new Date(dayOne);
    const dayFive = new Date(dayOne);
    const daySix = new Date(dayOne);
    const dayMinusOne = new Date(dayOne);

    dayTwo.setDate(dayTwo.getDate() + 2)
    dayThree.setDate(dayThree.getDate() + 3)
    dayFour.setDate(dayFour.getDate() + 4)
    dayFive.setDate(dayFive.getDate() + 5)
    daySix.setDate(daySix.getDate() + 6)
    dayMinusOne.setDate(dayMinusOne.getDate() - 1)

    let dates = [
        dayMinusOne,
        dayOne,
        dayTwo,
        dayThree,
        dayFour,
        dayFive,
        daySix,
    ]


    // const [dates, setDates] = useState([
    //     dayOne,
    //     dayTwo,
    //     dayThree,
    //     dayFour,
    //     dayFive,
    //     daySix,
    //     daySeven
    // ])

    console.log(dates)

    return (
        <div>
            <Header />
            {
                dates.map((item, id) => {

                    return (
                        <DayCard item={item} id={id} />
                    )
                })
            }
        </div>
    )
}