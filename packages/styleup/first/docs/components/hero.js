import React from 'react'
import styled, { css } from 'styled-components'

const Section = styled.section`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    padding: 160px 32px 100px;
    background-color: ${p => p.theme.colors.white};
    overflow: hidden;
    @media screen and (min-width: 768px) {
        padding: 0px;
        height: 700px;
    }
`

const Container = styled.div`
    position: relative;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width: 768px) {
        max-width: 1140px;
        flex: 1;
    }
`
const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin: 0;
    z-index: 1;
    ${p => p.center === true && css`align-items: center;`};
    @media screen and (min-width: 768px) {
        width: 50%;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`
const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin: 0;
    z-index: 1;
    ${p => p.center === true && css`align-items: center;`};
    @media screen and (min-width: 768px) {
        width: 50%;
    }
`

const Back = styled.img`
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 0;
    object-fit: cover;
    height: 500px;
    @media screen and (min-width: 768px) {
        height: 700px;
    }
`

const Image = styled.img`
    display: none;
    margin: 0;
    @media screen and (min-width: 768px) {
        display: block;
        height: auto;
        width: 550px;
        position: absolute;
        bottom: 0px;
        right: 0;
        z-index: 0;
    }
`

const Title = styled.h1`
    font-weight: 500;
    color: ${p => p.theme.colors.N900};
    font-size: 32px;
    margin: 0px 0px 16px 0px;
    padding: 0;
    z-index: 1;
    font-family: 'Helvetica Now Display', Fallback, sans-serif;
    @media screen and (min-width: 768px) {
        font-size: 48px;
    }
`
const Description = styled.p`
    width: 100%;
    font-weight: 300 !important;
    font-size: 20px;
    line-height: 24px;
    color: ${p => p.theme.colors.N900};
    z-index: 1;
    margin: 0px;
    @media screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 32px;
        width: 90%;
    }
`

const Hero = (props) => {
    return (
            <Section>
                <Back src='/assets/banner.png'/>
                <Container>
                    <Image src='/assets/Image.png'/>
                    <Content>
                        <Title>Hi, I’m Hamza.</Title>
                        <Description>I’m a software developer and open source activist. I try to share what I learn by writing things down.</Description>
                    </Content>
                </Container>
            </Section>
    )
}

export default Hero
