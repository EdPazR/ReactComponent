import React from 'react';


class Songs extends React.Component {
    constructor (props) {
        super (props)
        this.state = {}
    }


componentDidMount () {

}



componentDidUpdate(prevProps, prevState){
    console.log(prevState)
}
    render () {
        return (
        <div className='songsContent'>
        <h1 className='songsTitle'>Shakira Songs</h1>
        <ul>
            <li>
                <strong>Title:</strong> Hips Don't Lie<br/>
                <strong>Artist:</strong> Shakira ft. Wyclef Jean<br/>
                <strong>Duration:</strong> 3:38 minutes
                <img src="/songsImg/Hips.png" alt="hips img" />
            </li>
            <li>
                <strong>Title:</strong> Waka Waka (This Time for Africa)<br/>
                <strong>Artist:</strong> Shakira<br/>
                <strong>Duration:</strong> 3:22 minutes
            </li>
            <li>
                <strong>Title:</strong> La Tortura<br/>
                <strong>Artist:</strong> Shakira ft. Alejandro Sanz<br/>
                <strong>Duration:</strong> 3:32 minutes
            </li>
        </ul>
        </div>

        )
    }
}

export default Songs ;
