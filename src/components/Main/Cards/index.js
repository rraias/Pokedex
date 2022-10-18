import {Card, CardText, CardImage} from './style';
import { Button } from '../style';
import { Container } from '../style';

export default function Figure({id, src, name, types}){
    return(
        <>
        <Card>
            <CardImage src={src} alt='pokemon image'></CardImage>
            <CardText>{name}</CardText>
            <p>#{id}</p>
            <p>{types}</p>
        </Card>
        </>

    )
}