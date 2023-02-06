
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import '../styles/movies.css'
const days = new Map();
days.set(1, "LUN")
days.set(2, "MAR")
days.set(3, "MIE")
days.set(4, "JUE")
days.set(5, "VIE")
days.set(6, "SAB")
days.set(0, "DOM")

function getDays() {

    let today = new Date()

    const my_days = []

    for (let i = 0; i < 5; i++) {
        let selected = i === 0 ? true : false
        my_days.push({ dayName: days.get(today.getDay()), day: today.getDate().toString(), focus: selected, index: i })
        today.setDate(today.getDate() + 1)
    }

    return my_days;
}

export default function Movies() {


    const [weekDays, setWeekDays] = useState(getDays())

    function updateDays(index) {

        const newArray = [...weekDays]

        for (let i = 0; i < newArray.length; i++) {
            newArray[i].focus = false
        }


        for (let i = 0; i < newArray.length; i++) {
            if (i === index)
                newArray[i].focus = true
        }

        
        setWeekDays(newArray)


    }


    return (
        <Container>
            <Container className='movies-container'>


                <table className='daily-movies'>

                    <thead>
                        <tr>
                            {
                                weekDays.map(e =>

                                    <th>
                                        <div onClick={() => updateDays(e.index)} className={`movies-header ${e.focus ? "active-header" : ""}`}>
                                            <p>{e.dayName}</p><p>{e.day}</p>
                                        </div>
                                    </th>

                                )
                            }

                        </tr>
                    </thead>

                </table>
            </Container>


        </Container>
    )



}