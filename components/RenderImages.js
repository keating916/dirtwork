import { Component } from "react";
import Image from 'next/image';

import styles from '../styles/Modal.module.css'


export default class RenderImages extends Component {
    constructor(props){
        super(props);
    }

    render() {
        if(this.props.images[0].image) {
            return(
                <div className="gallery-image-container">
                {this.props.images.map(i => {
                    return (<div key={i.title}>
                                <div className="BACardContents">
                                    <Image
                                    className="gallery-image"
                                    src={i.thumbnail}
                                    alt={i.title}
                                    height="450"
                                    width="300"
                                    /* onClick={evt => this.props.handleClick(evt)} */
                                    />
                                </div>
                                {/* <div className={`modal ${this.props.state[i.title] || false}`} onClick={tgt => this.props.handleClick(tgt)}>
                                    <h4 onClick={tgt => this.props.handleClick(tgt)}>Click anywhere to dismiss</h4>
                                    <Image 
                                    className='modalImg'
                                    layout="responsive"
                                    height="900"
                                    width="400"
                                    sizes="10vw"
                                    src={i.image}
                                    alt={i.title}
                                    onClick={tgt => this.props.handleClick(tgt)}/>
                                </div> */}
                            </div>
                            )
                })}
            </div>
            )
        }else {
            return(
                <div>Please load images</div>
            )
        }
    }
}

//TODO change img tags to Next Images, Responsive for the modal images