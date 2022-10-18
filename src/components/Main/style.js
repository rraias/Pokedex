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

export const Button = styled.button`
    width: 15%;
    font-size: 1.2rem;
    padding: 1%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    color: #FF0000;
    margin: 2% 4%;
    transition: 0.4s;
    cursor: pointer; 

    &:hover{
        scale: 1.1
    }

    @media (max-width: 944px ) {
    width: 10%;
    font-size: 0.7rem;
    }
`

export const Logo = styled.img`
    width: 40%;
`