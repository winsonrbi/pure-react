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
                bedrooom: false,
            }
        }
        this.toggleKitchen = this.toggleKitchen.bind(this);
        this.toggleBathroom = this.toggleBathroom.bind(this);
        this.toggleLivingroom = this.toggleLivingroom.bind(this);
        this.toggleBedroom = this.toggleBedroom.bind(this);
    }

    toggleKitchen(){
        this.setState((state,props) => {
            return {
                rooms: {
                    kitchen: !state.rooms.kitchen
                }
            }
        });
    }
    toggleBathroom(){
        this.setState((state,props) => {
            return {
                rooms: {
                    bathroom: !state.bathroom
                }
            }
        });
    }
    toggleLivingroom(){
        this.setState((state,props) => {
            return {
                rooms: {
                    livingroom: !state.livingroom
                }
            }
        });
    }
    toggleBedroom(){
        this.setState((state,props) => {
            return {
                rooms:{
                    bedroom: !state.bedroom
                }
            }
        });
    }
    
    render() {
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
                    <div className={'light-'+this.state.rooms.bedrooom.toString()}>
                    </div>
                    <button onClick={this.toggleBedroom}>Toggle Light Switch</button>
                </div>
            </div>
        );
    }

}

export default House;