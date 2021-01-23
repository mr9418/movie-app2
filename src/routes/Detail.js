import React, { Component } from 'react';

class Detail extends Component {
   
    componentDidMount(){
        const {location , history} = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }

    render() {
        const {location} = this.props;
        if(location.state){
            return (
                <div>
                    <h1>{location.state.title}</h1>
                     <h3>ddddd</h3>
                </div>
            );
          }else{
              return null;
          }
        }
        
}

export default Detail;