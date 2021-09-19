import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Section from "./Section";

function Home() {
	return (
		<Container>
			<Header />
			<Section
				title="Model 3"
				description="1% Company Car Tax."
				link="Learn More"
				backgroundImage="model-3.jpg"
				leftButton="Custom Order"
				rightButton="Available Inventory"
				deliveryText="Schedule a Touchless Test Drive"
				downArrow=".down-arrow.svg"
			/>
			<Section
				title="Model S"
				description="1% Company Car Tax."
				link="Learn More"
				backgroundImage="model-s.jpg"
				leftButton="Custom Order"
				rightButton="Available Inventory"
			/>
			<Section
				title="Solar and Powerwall"
				description="Power Everything"
				backgroundImage="solar-panel.jpg"
				leftButton="Learn More"
			/>
			<Section
				title="Model X"
				description="1% Company Car Tax."
				link="Learn More"
				backgroundImage="model-x.jpg"
				leftButton="Custom Order"
				rightButton="Available Inventory"
			/>
			<Section
				title="Model Y"
				description=""
				backgroundImage="model-y.jpg"
				leftButton="Learn More"
			/>
			<Section
				title="Accessories"
				description=""
				link=""
				backgroundImage="accessories.jpg"
				leftButton="Custom Order"
			/>
		</Container>
	);
}

export default Home;

const Container = styled.div`
	height: 100vh;
	border: 1px solid red;
`;
