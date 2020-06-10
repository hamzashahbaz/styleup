import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Section = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 64px 0px;
    background-color: ${p => p.theme.colors.N10};
    overflow: hidden;
    box-sizing: border-box;
    @media ${p => p.theme.device.desktop} {
        padding: 100px 0px;
        justify-content: flex-start;
    }
`

const Back = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 0;
    object-fit: cover;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px 56px;
    z-index: 1;
    box-sizing: border-box;
    @media ${p => p.theme.device.tablet} {
        padding: 0px 64px;
        max-width: 1140px;
    }
    @media ${p => p.theme.device.desktop} {
        padding: 0px 56px;
        max-width: 1140px;
    }
`
const Title = styled.h2`
    color: ${p => p.theme.colors.N600};
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
    margin: 0px 0px 12px 0px;
    padding: 0;
    @media ${p => p.theme.device.desktop} {
        text-align: left;
        font-size: 32px;
        width: 100%;
    }
`
const Description = styled.p`
    color: ${p => p.theme.colors.N400};
    text-align: left;
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
    margin: 0;
    @media ${p => p.theme.device.desktop} {
        text-align: left;
        font-size: 16px;
        width: 100%;
    }
`
const Details = styled.div`
    width: 100%;
    @media ${p => p.theme.device.desktop} {
        max-width: 450px;
    }
`
const List = styled.ul`
    color: ${p => p.theme.colors.B50};
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
    @media ${p => p.theme.device.desktop} {
        text-align: left;
        font-size: 16px;
        width: 100%;
    }
`
const Label = styled.label`
    color: ${p => p.theme.colors.N900};
    font-size: 14px;
    font-weight: 500;
    font-family: 'Quicksand';
    margin: 0 0 4px;
    padding: 0;
    @media ${p => p.theme.device.desktop} {
        text-align: left;
        width: 100%;
    }
`
const Control = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media ${p => p.theme.device.desktop} {
        width: 100%;
    }
`
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    box-sizing: border-box;
    margin: 32px 0px 0px 0px;
    @media ${p => p.theme.device.tablet} {
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: row;
        max-width: 588px;
    }
`

const Input = styled.input`
    width: 100%;
    background-color: ${p => p.theme.colors.N0};
    border: 1px solid ${p => p.theme.colors.N100};
    outline: none;
    font-size: 16px;
    font-weight: 400;
    padding: 20px 24px;
    margin-bottom: 12px;
    box-sizing: border-box;
    @media ${p => p.theme.device.desktop} {
        margin-bottom: 0px;
    }
`
const NewButton = styled.button`
    padding: 21px 20px;
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    box-sizing: border-box;
    background-color: ${p => p.theme.colors.B400};
    color: ${p => p.theme.colors.N0};
    outline: none;
    border: none;
    @media ${p => p.theme.device.tablet} {
        margin: 0;
        width: 45%;
    }
    @media ${p => p.theme.device.desktop} {
        &:hover {
            background-color: ${p => p.theme.colors.B500};
            color: white;
            cursor: pointer;
        }
    }
`
const Error = styled.p`
    margin: 0;
    color: ${p => p.theme.colors.R400};
    font-size: 12px;
    font-family: 'Quicksand';
`

class Newsletter extends Component {
    state = {
        name: '',
        email: ''
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        //const result = await addToMailchimp(this.state.email)
        //console.log(result);
        //this.setState({ message: result.msg })
    }
    render() {
        return (
            <Section>
                <Back src='/assets/banner.png'/>
                <Container>
                    <Details>
                        <Title>Don’t miss out on latest news</Title>
                        <Description>Get the latest learning materials and free tools delievered to your indox. Unsubscribe at anytime.</Description>
                    </Details>
                    <Form onSubmit={this.handleSubmit}>
                        <Control>
                            <Input placeholder="Enter your email address" onChange={e => this.setState({ email: e.target.value })}></Input>
                            <Error>{ this.state.message }</Error>
                        </Control>
                        <NewButton type="submit">Subscribe now</NewButton>
                    </Form>
                </Container>
            </Section>
        )
    }
}

export default Newsletter;
