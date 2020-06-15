import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0;
    @media ${p => p.theme.device.desktop} {
        max-width: 1140px;
    }
`

const Container = (props) => {
    return (
        <Wrapper>{props.children}</Wrapper>
    )
}

export default Container;