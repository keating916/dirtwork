import { Component } from "react";
import Head from "next/head";
import Header from "../components/Header";

import styles from "../styles/Services.module.css";

export class Services extends Component {
	render() {
		return (
			<div>
				<Head>
					<title>G&amp;C - Services</title>
					<meta
						name="description"
						content="Services List for G&amp;C Excavation Services"
					/>
					<meta name="keywords" content="" />
				</Head>
				<Header title="Services Offered" />
				<div>
					<h3>We move dirt</h3>
					<p>
						It is a simple statement, and its what we do. Whatever
						your project, whatever the volume, we will move the dirt
						for you.
					</p>
					<p>
						We can do the dirt work for your next landscaping
						project, or if you are excavating for a new pool for
						summer, or maybe even a hot tub for those cold winter
						nights
					</p>
					<div className={styles.smallServicesContainer}>
						<ul className={styles.serviceList}>
							<li>Pool Excavation</li>
							<li>Import Dirt</li>
							<li>Haul dirt away</li>
							<li>Concrete demolition</li>
							<li>Septic Excavation</li>
							<li>Drainage Excavation</li>
							<li>Area grading</li>
							<li>Trenching</li>
							<li>Road Grading</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Services;
//TODO add keywords
