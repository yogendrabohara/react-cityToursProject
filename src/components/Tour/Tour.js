import React, { Component } from 'react';
import './tour.scss';

export default class Tour extends Component {
    state = {
        showInfo: false
    };

    handleInfo = () => {
        this.setState({showInfo: !this.state.showInfo})      //toggle 
    }




    render() {
        // console.log(this.props);   //finding props
        const {id, city , name , img , info} = this.props.tour;       //destructuring
        const {removeTour} = this.props;
        return (
           <article className ='tour'>
               <div className ='img-container'>
                   <img src ={img} alt = "city tour" />
                   <span className= 'close-btn' onClick={() => removeTour(id)}>
                       <i className= "fas fa-window-close" />
                   </span>
               </div>
               <div className='tour-info'>
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info {''} 
                        <span onClick={this.handleInfo}><i className='fas fa-caret-square-down'></i></span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}

               </div>
           </article>
        )
    }
}
