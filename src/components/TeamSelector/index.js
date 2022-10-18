import { Container } from "../Main/style";
import { BaseImage, BaseTextImg } from "./style";
import base from '../../images/pokemonBase.png';
import selectTeam from '../../images/selectTeam.png'
import { useState } from "react";

export default function TeamSelector(){

    const [team, setTeam] = useState([])


    return(
        <>
        <BaseTextImg src={selectTeam} />
        <Container>
            <BaseImage src={base}></BaseImage>
            <BaseImage src={base}></BaseImage>
            <BaseImage src={base}></BaseImage>
            <BaseImage src={base}></BaseImage>
            <BaseImage src={base}></BaseImage>
            <BaseImage src={base}></BaseImage>
        </Container>
        </>
    )
}