import Head from "next/head";
import { Component } from "react";

import styles from "../styles/Home.module.css";

import Header from "../components/Header";
import RenderImages from "../components/RenderImages";
import images from "../components/Images";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		/* this.handleClick = this.handleClick.bind(this); */
	}

/* 	handleClick(evt) {
        let target
        if(evt.target.childNodes.length > 1) {
            target = evt.target.lastChild.childNodes[0].alt
        }else if(evt.target.localName === "h4"){
            target = evt.target.nextSibling.childNodes[0].alt
        }else {
            target = evt.target.alt
        }
        let status = this.state[target]
        this.setState({
            ...this.state,
            [target]: !status
        })
    } */

	render() {
		return (
			<div>
				<Head>
					<title>G&amp;C - Home</title>
					<meta
						name="description"
						content="Home page for G&amp;C Excavation Services"
					/>
					<meta name="keywords" content="" />
				</Head>
				<Header title="G&amp;C Dirt Moving Services" />
				<div>
					<div>
						<h1>Lets move Dirt!</h1>
					</div>
					<div>
						<p>
							For over 50 years, G&amp;C has been serving the
							southern Sacramento Valley. We offer excavation
							services, dirt hauling, dirt disposal, or we can
							even deliver dirt if you need to backfill.
						</p>
						<p>
							When you are landscaping, grading, or doing any other 
							kind of large excavating project, we can help! We have the tools,
							knowledge, and heavy equipment to get your project in the ground!
							We can also take care of all the unwanted dirt, cement, and other
							stuff that comes out while taking care of your project. 
						</p>
					</div>
					<RenderImages
						state={this.state}
						images={images.home}
/* 						handleClick={this.handleClick}
 */					/>
				</div>
			</div>
		);
	}
}

export default Home;
