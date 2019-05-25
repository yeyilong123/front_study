import React, { Component } from 'react';

class B extends Component {
    render() { 
        return ( 
            
            <div>
                {console.log(this.props.match.params.id)}
                <h4>这是带参B页面</h4>
            </div>
         );
    }
}
 
export default B;