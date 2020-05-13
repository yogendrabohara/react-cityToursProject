import React from 'react';
import Tour from '../Tour/Tour';
import './tourlist.scss';
import {tourData} from '../../tourData';

// const tourData={
//     id: 1,
//     city: "new york",
//     img: "./img/newyork.jpeg",
//     name: "new york bridge tour",
//     info:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, nam omnis error corrupti eum assumenda enim odit architecto corporis. Sequi"
//   };

export default class TourList extends React.Component{
    state = {
        tours: tourData
    };

    removeTour = id => {
        // console.log(id);
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState ({
            tours: sortedTours
        });

    };

    render() {
        // console.log(this.state.tours);
        const {tours} = this.state;


        return (
            <section className="tourlist">
                {tours.map(tour => (
                    <Tour key= {tour.id} tour={tour} removeTour={this.removeTour} />
                ))}

            </section>
            
        )
    }
}
