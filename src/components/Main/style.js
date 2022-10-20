import styled from "styled-components";

export const Container = styled.section`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 3% auto 1% auto;

    @media (max-width: 944px ) {
    width: 90%;
    }
`;

export const Logo = styled.img`
    width: 35%;
    transition: 0.7s;

    &:hover{
        scale: 1.1;
    }
`