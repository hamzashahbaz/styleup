import React from 'react'
import styled, { css } from 'styled-components'

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
    padding: 48px 30px;
    box-sizing: border-box;
    @media ${p => p.theme.device.desktop} {
        padding: 100px 0 125px;
    }
`
const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(100px, auto);
    margin: 56px 0 0px;
    grid-gap: 24px;
    @media ${p => p.theme.device.desktop} {
        flex-direction: column;
        margin: 56px 0 0px;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: minmax(100px, auto);
        grid-gap: 24px;
    }
`
const Column = styled.a`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 40px;
    border: ${p => p.isFeatured ? `2px solid ${p.theme.colors.B400}` : `1px solid ${p.theme.colors.N500}`};
    ${p => p.center === true && css`align-items: center;`};
    text-decoration: none;
    color: none;
    @media ${p => p.theme.device.desktop} {
        transition: all .3s ease-in-out;
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
            transform: translate3d(0px, -1px, 0px);
        }
    }
`
const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${p => p.isFeatured ? 'space-between' : 'flex-end'};
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

const Writings = (props) => {
    const posts = props.posts
    return (
            <Section>
                <Container>
                    <Group>
                        <Title size='h2' text='Writings'/>
                    </Group>
                    <Row>
                        {(posts.map((post, index) => (
                            <Column href={`/posts/${post.slug}`} isFeatured={index === 0}>
                                <Details>
                                    <Title color='N500' size='h3' text={post.title}/>
                                    <Box>
                                        <Title color='N500' size='body1' text={post.excerpt}/>
                                    </Box>
                                </Details>
                                <Buttons isFeatured={index === 0}>
                                    {index == 0 && (<Title color='B500' size='body1' text='FEATURED'/>)}
                                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M-2.60475e-07 7.45898L16.7871 7.45898L12.0234 12.375L13.1016 13.418L19.6113 6.70898L13.1016 -5.72687e-07L12.0234 1.04297L16.7871 5.95898L-3.26043e-07 5.95898L-2.60475e-07 7.45898Z" fill="#46556E"/>
                                    </svg>
                                </Buttons>
                            </Column>
                        )))}
                    </Row>
                </Container>
            </Section>
    )
}

export default Writings
