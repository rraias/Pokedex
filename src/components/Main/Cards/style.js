import styled from 'styled-components';
import pokeballBg from '../../../images/pokeballBg.png';

export const Card = styled.figure`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    width: 300px;
    height: 300px;
    margin: 2%;
    background: url(${pokeballBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 300px;
    transition: 0.7s;
    box-shadow: rgba(0, 0, 0, 0.85) 1.95px 1.95px 2.6px;

    p{
        font-size: 1rem;
        margin: 1%;
    };

    &:hover{
        scale: 1.1;
    };

    @media (max-width: 1462px ) {
        width: 200px;
        height: 200px;

        p{
            font-size: 0.75rem;
            margin: 0%;
    };

    };

    @media (max-width: 944px ) {
        width: 150px;
        height: 150px;

    };

    @media (max-width: 513px ) {
        width: 80px;
        height: 80px;
            p{
            font-size: 0.3rem;
    }};
`;

export const CardText = styled.h3`
    width: 50%;
    font-size: 1.5rem;
    color: #E6D200;
    margin: 1%;
    text-align: center;

    @media (max-width: 1462px ) {
        font-size: 1rem;
    };

    @media (max-width: 944px ) {
        width: fit-content;
        font-size: 0.8rem;
        margin: 0%;
    }

    @media (max-width: 513px  ) {
        font-size: 0.6rem;
        margin: 0%;
    }
`;

export const CardImage = styled.img`
    width: 50%;
    height: 50%;
`;
