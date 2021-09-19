import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
	title,
	description,
	link,
	backgroundImage,
	leftButton,
	rightButton,
	deliveryText,
	downArrow,
}) {
	return (
		<Wrap bgImage={backgroundImage}>
			<Fade top>
				<ItemText>
					<h1>{title}</h1>
					<p>
						{description} <a href="#">{link}</a>
					</p>
				</ItemText>
			</Fade>
			<Fade bottom>
				<Buttons>
					<ButtonGroup>
						<LeftButton>{leftButton}</LeftButton>
						{rightButton && <RightButton>{rightButton}</RightButton>}
					</ButtonGroup>
					{deliveryText && (
						<ButtonSub>
							<a href="#">{deliveryText}</a>
						</ButtonSub>
					)}

					{downArrow && <DownArrow src="./images/down-arrow.svg" />}
				</Buttons>
			</Fade>
		</Wrap>
	);
}

export default Section;

const Wrap = styled.div`
	width: 100%;
	height: 100vh;
	background-image: ${(props) => `url("/images/${props.bgImage}")`};
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const ItemText = styled.div`
	padding-top: 18vh;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;

	h1 {
		color: rgba(24, 27, 33, 0.85);
		letter-spacing: 1px;
	}

	p {
		margin-top: 8px;
		font-size: 14px;
		font-weight: 500;
		color: rgba(24, 27, 33, 0.85);
	}

	a {
		font-size: 14px;
		font-weight: 600;
		color: rgba(24, 27, 33, 0.85);
	}
`;

const Buttons = styled.div`
	@media screen and (max-width: 600px) {
		width: 100%;
		padding: 0 8px;
	}
`;

const ButtonGroup = styled.div`
	display: flex;
	margin-bottom: 6vh;

	@media screen and (max-width: 600px) {
		flex-direction: column;
	}
`;

const LeftButton = styled.div`
	background-color: rgba(24, 27, 33, 0.8);
	height: 40px;
	width: 256px;
	border-radius: 50px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0.9;
	text-transform: uppercase;
	font-size: 0.9em;
	font-weight: 500;
	cursor: pointer;
	margin: 8px;

	@media screen and (max-width: 600px) {
		width: 100%;
		margin: 8px 0;
	}
`;

const RightButton = styled(LeftButton)`
	background-color: white;
	color: #181b21;
`;

const DownArrow = styled.img`
	margin-bottom: 3vh;
	height: 50px;
	animation: animateDown infinite 1.5s;
	overflow-x: hidden;
`;

const ButtonSub = styled.div`
	margin-bottom: 3vh;
	font-size: 1em;
	font-weight: light;
	color: #181b21;
`;
