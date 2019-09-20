import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title'

export default class Services extends Component {
    state = {
        services : [
            {
                icon: <FaCocktail></FaCocktail>,
                title: "free cocktails",
                info: 'This is a sample info about cocktail',               
            },
            {
                icon: <FaHiking></FaHiking>,
                title: "endless hiking",
                info: 'This is a sample info about cocktail',                
            },
            {
                icon: <FaShuttleVan></FaShuttleVan>,
                title: "free suttle",
                info: 'This is a sample info about cocktail',               
            },
            {
                icon: <FaBeer></FaBeer>,
                title: "strongest beer",
                info: 'This is a sample info about cocktail' ,               
            }            
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"></Title>
                <div className="services-center">
                    {this.state.services.map( (item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
