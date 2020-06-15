import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Title from './title';
import Container from './container';

const Section = styled.section`
	position: relative;
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: ${(p) => p.theme.colors.N0};
	padding: 125px 30px;
	@media screen and (min-width: 768px) {
		padding: 125px 0;
	}
`;
const Content = styled.a`
	width: 100%;
	text-decoration: none;
	color: ${(p) => p.theme.colors.N900};
`;
const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-auto-rows: minmax(100px, auto);
	border-top: 1px solid ${(p) => p.theme.colors.N500};
	border-left: 1px solid ${(p) => p.theme.colors.N500};
	margin: 56px 0 0px;
	@media screen and (min-width: 768px) {
		flex-direction: column;
		margin: 56px 0 0;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: minmax(100px, auto);
	}
`;
const Column = styled.a`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0;
	box-sizing: border-box;
	padding: 32px;
	border-bottom: 1px solid ${(p) => p.theme.colors.N500};
	border-right: 1px solid ${(p) => p.theme.colors.N500};
	text-decoration: none;
	@media screen and (min-width: 768px) {
	}
	${(p) =>
		p.center === true &&
		css`
			align-items: center;
		`};
`;
const Title1 = styled.h2`
	color: ${(p) => p.theme.colors.N900};
	font-size: 30px;
	font-weight: 800;
	margin: 0px 0px 16px 0px;
	padding: 0;
	@media screen and (min-width: 768px) {
		font-size: 32px;
		margin: 0 0 24px;
	}
`;
const Description = styled.p`
	color: ${(p) => p.theme.colors.N500};
	font-weight: 200;
	font-size: 16px;
	line-height: 24px;
	margin: 0;
`;
const Link1 = styled.div`
	color: #ffffff;
	font-size: 16px;
	color: ${(p) => p.theme.colors.primary};
	margin: 32px 0 0;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;
const Group = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
`;
const Details = styled.div``;
const Box = styled.div`
	margin: 0 0 24px;
`;
const Links = styled.a`
	text-decoration: none;
`;

const Projects = (props) => {
		return (
			<Section>
				<Container>
					<Group>
						<Title size='h2' text='Projects' />
						<Links to='projects'>
							<Title size='h6' color='B400' text='View all' />
						</Links>
					</Group>
					<Row>
						{props.projects.map((project) => (
							<Column href={project.url}>
								<Details>
									<Box>
										<Title
											color='B500'
											size='body2'
											text={project.tags[0].toUpperCase()}
										/>
									</Box>
									<Title
										color='N500'
										size='h3'
										text={project.name}
									/>
								</Details>
								<Link1>
									<svg
										width='20'
										height='14'
										viewBox='0 0 20 14'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M-2.60475e-07 7.45898L16.7871 7.45898L12.0234 12.375L13.1016 13.418L19.6113 6.70898L13.1016 -5.72687e-07L12.0234 1.04297L16.7871 5.95898L-3.26043e-07 5.95898L-2.60475e-07 7.45898Z'
											fill='#46556E'
										/>
									</svg>
								</Link1>
							</Column>
						))}
					</Row>
				</Container>
			</Section>
		);
	}

export default Projects;
