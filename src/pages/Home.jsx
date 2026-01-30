import React from 'react'
import Header from '../header/Header'
import { Banner } from '../banner/Banner'
import Main from '../main/Main'
import Users from '../components/users/Users'

function Home() {
    let fruits = ["olma", "behi", "ananas", "banan", "gilos"]
    let students = [
        {
            id: 0,
            first_name: "g'ulomjon",
            last_name: "olimov",
            age: 34,
            color: "pink"
        },
        {
            id: 0,
            first_name: "bobUr",
            last_name: "olimov",
            age: 34,
            color: "red"
        },
        {
            id: 0,
            first_name: "AbroR",
            last_name: "olimov",
            age: 34,
            color: "green"
        },
        {
            id: 0,
            first_name: "gafur",
            last_name: "olimov",
            age: 34,
            color: "yellow"
        }
    ]
    return (
        <div>
            <Header />
            {/* <Banner fruits={fruits} students={students} /> */}
            {/* <Main /> */}
            <Users />
        </div>
    )
}

export default Home