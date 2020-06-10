import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import HeroPost from '../components/hero-post'

import Title from './title'
import Container from './container'

const Section = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    padding: 125px 30px;
    @media ${p => p.theme.device.desktop} {
        padding: 125px 0;
    }
`
const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(100px, auto);
    border-top: 1px solid ${p => p.theme.colors.N500};
    border-left: 1px solid ${p => p.theme.colors.N500};
    margin: 56px 0 0px;
    @media screen and (min-width: 768px) {
        flex-direction: column;
        margin: 56px 0 0px;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: minmax(100px, auto);
    }
`
const Column = styled.a`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 40px;
    border-bottom: 1px solid ${p => p.theme.colors.N500};
    border-right: 1px solid ${p => p.theme.colors.N500};
    ${p => p.center === true && css`align-items: center;`};
    text-decoration: none;
    color: none;
`
const Link1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 32px 0 0;
`
const Box = styled.div`
    margin: 16px 0 0;
`
const Details = styled.div`
`
const Group = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`
const Links = styled.a`
    text-decoration: none;
`

const Writings = (props) => {
    const featuredPost = props.posts[0]
    const posts = props.posts
    return (
            <Section>
                <Container>
                    <Group>
                        <Title size='h2' text='Writings'/>
                        <Links to='/blog'>
                            <Title size='h6' color='B400' text='View all'/>
                        </Links>
                    </Group>
                    <Row>
                        {(posts.map((post, index) => (
                            <Column href={`/posts/${post.slug}`}>
                                <Details>
                                    <Title color='N500' size='h3' text={post.title}/>
                                    <Box>
                                        <Title color='N500' size='body1' text={post.excerpt}/>
                                    </Box>
                                </Details>
                                <Link1>
                                    {index == 0 && (<Title color='B500' size='body2' text='Featured'/>)}
                                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M-2.60475e-07 7.45898L16.7871 7.45898L12.0234 12.375L13.1016 13.418L19.6113 6.70898L13.1016 -5.72687e-07L12.0234 1.04297L16.7871 5.95898L-3.26043e-07 5.95898L-2.60475e-07 7.45898Z" fill="#46556E"/>
                                    </svg>
                                </Link1>
                            </Column>
                        )))}
                    </Row>
                </Container>
            </Section>
    )
}

export default Writings
