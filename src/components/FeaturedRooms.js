import React, { Component } from 'react'
import {RoomContext} from '../context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'


export default class FeaturedRooms extends Component {

    static contextType = RoomContext

    render() {

        let {loading, featuredRooms: rooms} = this.context;

        rooms = rooms.map(room => {
            return <Room key={room.id} room={room}></Room>
        });

        console.log(rooms);
        return (
            <section className="featured-rooms">             
                <Title title="featured room">                    
                </Title>
                <div className="featured-rooms-center">
                    {loading === true ? <Loading /> : rooms}
                </div>           
            </section>
        )
    }
}
