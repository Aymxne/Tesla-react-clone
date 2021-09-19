import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Header() {
	const [navState, setNavState] = useState(false);
	return (
		<Container>
			<Announcement>
				<a href="#">Read Tesla's 2020 Impact Report</a>
			</Announcement>
			<NavBar>
				<Logo>
					<a href="#">
						<img src="/images/logo.svg" alt="" />
					</a>
				</Logo>
				<Menu>
					<ul>
						<li>
							<a href="#">Model S</a>
						</li>
						<li>
							<a href="#">Model 3</a>
						</li>
						<li>
							<a href="#">Model X</a>
						</li>
						<li>
							<a href="#">Model Y</a>
						</li>
						<li>
							<a href="#">Powerwall</a>
						</li>
						<li>
							<a href="#">Charging</a>
						</li>
					</ul>
				</Menu>
				<SecondaryMenu>
					<ul>
						<li className="active">
							<a href="#">Shop</a>
						</li>
						<li className="active">
							<a href="#">Account</a>
						</li>
						<li className="menuToggle" onClick={() => setNavState(true)}>
							<a href="#">Menu</a>
						</li>
					</ul>
				</SecondaryMenu>
			</NavBar>
			<MobileNav show={navState}>
				<CustomMenu onClick={() => setNavState(false)}></CustomMenu>
				<ul>
					<li>
						<a href="#">Model S</a>
					</li>
					<li>
						<a href="#">Model 3</a>
					</li>
					<li>
						<a href="#">Model X</a>
					</li>
					<li>
						<a href="#">Model Y</a>
					</li>
					<li>
						<a href="#">Existing Inventory</a>
					</li>
					<li>
						<a href="#">Used Inventory</a>
					</li>
					<li>
						<a href="#">Trade-In</a>
					</li>
					<li>
						<a href="#">Test Drive</a>
					</li>
					<li>
						<a href="#">Fleet and Business</a>
					</li>
					<li>
						<a href="#">Powerwall</a>
					</li>
					<li>
						<a href="#">Energy</a>
					</li>
					<li>
						<a href="#">Commercial Energy</a>
					</li>
					<li>
						<a href="#">Utilities</a>
					</li>
					<li>
						<a href="#">Charging</a>
					</li>
					<li>
						<a href="#">Find Us</a>
					</li>
					<li>
						<a href="#">Support</a>
					</li>
					<li>
						<a href="#">Investor Relations</a>
					</li>
					<li>
						<a href="#">Account</a>
					</li>
					<li>
						<a href="#">
							More <ArrowRight />
						</a>
					</li>
				</ul>
			</MobileNav>
		</Container>
	);
}

export default Header;

const Container = styled.div`
	width: 100%;
	position: fixed;
	display: flex;
	align-items: center;
	flex-direction: column;
	min-height: 107px;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;
`;

const Announcement = styled.div`
	display: flex;
	width: 100%;
	height: 50px;
	background-color: white;
	align-items: center;
	justify-content: center;

	a {
		font-size: 14px;
		letter-spacing: 1px;
		color: rgba(24, 27, 33, 0.85);
		text-decoration: none;
		border-bottom: 1px solid rgba(24, 27, 33, 0.6);
		transition: all ease 0.2s;
	}

	a:hover {
		border-bottom: 2px solid rgba(24, 27, 33, 1);
	}
`;

const NavBar = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 0 0 32px;
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
	min-inline-size: 245px;
`;

const Menu = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;

	ul {
		display: flex;
		list-style-type: none;

		li {
			flex-grow: 1;

			min-height: 54px;
			display: flex;
			align-items: center;
			justify-content: center;

			a {
				padding: 8px 18px;
				text-decoration: none;
				font-weight: 600;
				color: #181b21;
				font-size: 14px;
				letter-spacing: 1px;
				color: rgba(24, 27, 33, 0.85);
				border-radius: 12px;
				transition: all ease 0.25s;
			}
		}

		li:hover a {
			background-color: rgba(24, 27, 33, 0.08);
		}
	}

	@media screen and (max-width: 1200px) {
		display: none;
	}
`;

const SecondaryMenu = styled.div`
	padding-right: 4px;
	display: flex;
	align-items: center;

	ul {
		display: flex;
		list-style-type: none;
		justify-content: space-between;

		li {
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0;
			min-height: 54px;
			a {
				padding: 8px 18px;
				text-decoration: none;
				font-weight: 600;
				color: #181b21;
				font-size: 14px;
				letter-spacing: 1px;
				color: rgba(24, 27, 33, 0.85);
				border-radius: 12px;
				transition: all ease 0.2s;
			}
		}

		li:hover a {
			background-color: rgba(24, 27, 33, 0.08);
		}
	}

	@media screen and (max-width: 1200px) {
		.active {
			display: none;
		}

		.menuToggle a {
			background-color: hsla(0, 0%, 0%, 0.05);
		}
	}
`;

const CustomMenu = styled(CloseIcon)`
	cursor: pointer;
	margin: 40px 0;
	margin-left: auto;

	&:hover {
		background-color: rgba(24, 27, 33, 0.08);
		border-radius: 50px;
	}
`;

const MobileNav = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	background: white;
	width: 295px;
	height: 100%;
	padding: 4px 32px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
	transition: transform 0.2s;
	ul {
		width: 100%;
		height: 80%;

		list-style-type: none;
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		li {
			width: 100%;
			flex-grow: 1;

			min-height: 32px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 8px;

			a {
				height: 100%;
				display: flex;
				width: 100%;
				text-decoration: none;
				font-weight: 600;
				color: rgba(24, 27, 33, 0.8);
				font-size: 14px;
				letter-spacing: 1px;
				border-radius: 12px;
				transition: all ease 0.25s;
				align-items: center;
				padding: 4px 8px;
				justify-content: space-between;
			}
		}

		li:hover a {
			background-color: rgba(24, 27, 33, 0.08);
		}
	}
`;

const ArrowRight = styled(KeyboardArrowRightIcon)``;
