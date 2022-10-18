import LoaderImage from './style';
import spinningCircles from '../../images/spinning-circles.svg'

export default function Loader(){
    return(
        <LoaderImage src={spinningCircles} alt='Loader'/>
    )
}