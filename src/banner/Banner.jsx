import React from "react";
import "./Banner.css"

export function Banner({fruits, students}) {

    let is_color = false


    const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase()

    return <div className="banner" >
        {/* 
        <ol>
            {
                fruits.map((item,index) => <li key={index}>{item}</li>)
            }
        </ol>

        */}

        <div style={{ color: is_color ? "red" : "blue" }} >
            {
                fruits.map((item, index) => <p> {index + 1} {item}</p>)
            }
        </div>

        {/* <div className="students">
            {
                students.map((item) =>
                    <div className="item" >
                        <b>{item.id}</b>
                        <p> <b>Ism:</b> {item.first_name[0].toUpperCase() + item.first_name.slice(1).toLowerCase()}</p>
                        <p> <b>Familiya:</b> {item.last_name[0].toUpperCase() + item.last_name.slice(1).toLowerCase()}</p>
                        <p> <b>Yosh:</b> {item.age}</p>
                    </div>)
            }
        </div> */}

        <div className="students">
            {
                students.map((item,index) =>
                    <div style={{background: item.color}} className="item" key={index} >
                        <b>{item.id}</b>
                        <p> <b>Ism:</b> {capitalize(item.first_name)} </p>
                        <p> <b>Familiya:</b> {capitalize(item.last_name)}</p>
                        <p> <b>Yosh:</b> {item.age}</p>
                        <p><b>Tugulgan yili:</b>  { new Date().getFullYear() - item.age } </p>
                    </div>)
            }
        </div>


    </div>
}