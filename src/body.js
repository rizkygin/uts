import React from 'react'

class BodyColor extends React.Component {
    componentWillMount(){
        document.getElementById('body').className='darkTheme'
    }
    componentWillUnmount(){
        document.getElementById('body').className=''
    }
    render(){
        return (
            <div> Dark Theme </div>
        )
    }
}

export default BodyColor;