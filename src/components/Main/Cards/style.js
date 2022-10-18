import styled from "styled-components";
import pokeballBg from '../../../images/pokeballBg.png'

export const Card = styled.figure`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    width: 250px;
    height: 250px;
    background: url(${pokeballBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 300px;
    transition: 0.7s;
    box-shadow: rgba(0, 0, 0, 0.85) 1.95px 1.95px 2.6px;
    cursor: pointer;

    p{
        font-size: 1rem;
        margin: 1%;
    };

    &:hover{
        scale: 1.1;
    };

    @media (max-width: 944px ) {
        width: 165px;
        height: 165px;

            p{
            font-size: 0.7rem;
            margin: 0%;
    };
    }

    @media (max-width: 620px ) {
        width: 125px;
        height: 125px;
    }
`;

export const CardText = styled.h3`
    font-size: 2rem;
    color: #E6D200;
    margin: 1%;

    @media (max-width: 944px ) {
        font-size: 1rem;
        margin: 0%;
    }
`;

export const CardImage = styled.img`
    width: 50%;
    height: 50%;
`