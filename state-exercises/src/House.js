import React from 'react';
import './House.css';

class House extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: {
                kitchen: true,
                bathroom: false,
                livingroom: true,
                bedroom: false,
            }
        }
        this.toggleKitchen = this.toggleKitchen.bind(this);
        this.toggleBathroom = this.toggleBathroom.bind(this);
        this.toggleLivingroom = this.toggleLivingroom.bind(this);
        this.toggleBedroom = this.toggleBedroom.bind(this);
    }

    toggleKitchen(){
        this.setState((state,props) => {
            const rooms = state.rooms;
            return {
                rooms: {
                    kitchen: !rooms.kitchen,
                    bathroom: rooms.bathroom,
                    livingroom: rooms.livingroom,
                    bedroom: rooms.bedroom,
                }
            }
        });
    }
    toggleBathroom(){
        this.setState((state,props) => {
            const rooms = state.rooms;
            return {
                rooms: {
                    kitchen: rooms.kitchen,
                    bathroom: !rooms.bathroom,
                    livingroom: rooms.livingroom,
                    bedroom: rooms.bedroom,
                }
            }
        });
    }
    toggleLivingroom(){
        this.setState((state,props) => {
            const rooms = state.rooms;
            return {
                rooms: {
                    kitchen: rooms.kitchen,
                    bathroom: rooms.bathroom,
                    livingroom: !rooms.livingroom,
                    bedroom: rooms.bedroom,
                }
            }
        });
    }
    toggleBedroom(){
        this.setState((state,props) => {
            const rooms = state.rooms;
            return {
                rooms: {
                    kitchen: rooms.kitchen,
                    bathroom: rooms.bathroom,
                    livingroom: rooms.livingroom,
                    bedroom: !rooms.bedroom,
                }
            }
        });
    }
    
    render() {
        console.log(this.state);
        return(
            <div>
                <div>
                    <span>Kitchen</span>
                    <div className={'light-'+this.state.rooms.kitchen.toString()}>
                    </div>
                    <button onClick={this.toggleKitchen}>Toggle Light Switch</button>
                </div>
                <div>
                    <span>Bathroom</span>
                    <div className={'light-'+this.state.rooms.bathroom.toString()}>
                    </div>
                    <button onClick={this.toggleBathroom}>Toggle Light Switch</button>
                </div>
                <div>
                    <span>Living Room</span>
                    <div className={'light-'+this.state.rooms.livingroom.toString()}>
                    </div>
                    <button onClick={this.toggleLivingroom}>Toggle Light Switch</button>
                </div>
                <div>
                    <span>Bedroom</span>
                    <div className={'light-'+this.state.rooms.bedroom.toString()}>
                    </div>
                    <button onClick={this.toggleBedroom}>Toggle Light Switch</button>
                </div>
            </div>
        );
    }

}
export default House;