import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 4%;
    gap: 0.5%;

    span{
      color: #ffcb05;
    }

`;

export const Label = styled.label`
    font-size: 1.5rem;
    font-weight: bolder;
    letter-spacing: 3px;

    @media (max-width: 1129px) {
    font-size: 0.8rem;
    letter-spacing: 1px;
    }

`;

export const TextInput = styled.input`
    font-size: 1rem;
    font-weight: 600;
    width: 30%;
    background-color: #F2F2F2;
    border-radius: 20px;
    margin-right: 1%;
    padding: 0.5%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 40px -7px;

    @media (max-width: 1129px) {
      width: 60%;
    }
`;

export const Button = styled.button`
    font-size: 1rem;
    font-weight: bold;
    background-color: #F2F2F2;
    color: #FF0000;
    border-radius: 20px;
    width: 10%;
    padding: 0.4%;
    cursor: pointer;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 40px -7px;

    @media (max-width: 1129px) {
              font-size: 0.5rem;
              width: fit-content;
    }

        &:hover,
        &:focus{
            scale: 1.1;
            background-color: #FF0000;
            color: #FFFFFF;

}
`;
