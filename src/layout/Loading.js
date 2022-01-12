import React, { Component } from 'react'
import loader from '../img/loading.gif'
export class Loading extends Component {
    render() {
        return (
            <div className='text-center' style={{marginTop:"20px"}}>
                <img  src={loader}></img>
            </div>
        )
    }
}

export default Loading
