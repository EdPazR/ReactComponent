import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            welcomeMsg: ""
        }
    }

    componentDidMount () {
        console.log("information has been updated");
    }

    componentWillUnmount(){

    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState)
    }

    handleButtonClick = () => {
        console.log('Button Click')
        this.setState({isLoggedIn:true})

    }

    render () {
    return (
    <div>
    <h1 className='headerTitle'><strong> App Songs </strong></h1>
    <div className='headerSubTitle'>
    <h3 className='headerH3' >Showing the Top 10 songs in the World!</h3>
    <p className='headerP' >Take a view to the most listened songs!</p>
    <div className='buttonSection'>
    <button className='buttonDemo' onClick={this.handleButtonClick}> Click here </button>
    <p>{this.state.welcomeMsg}</p>
    <p>{this.state.isLoggedIn ? "Welcome" : "You are not logged in"}</p>
    </div>
    </div>
    </div>
    )
}
}

export default Header;