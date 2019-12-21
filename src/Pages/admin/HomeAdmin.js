import React from 'react';


class HomeAdmin extends React.Component {
    render(){
        return(
            <div className="homeadmin">
                <nav class="nav justify-content-center">
                  <a class="nav-link active" 
                  >Active link</a>
                  <a class="nav-link" 
                  >Link</a>
                  <a class="nav-link disabled" 
                  >Disabled link</a>
                </nav>
            </div>
        )
    }
}

export default HomeAdmin;
