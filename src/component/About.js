import { withRouter } from 'react-router-dom';

const About = ({ match }) =>{
    console.log(match)
    return(
        <h1>This is About Component {match.url}</h1>
    )
}

export default withRouter(About);