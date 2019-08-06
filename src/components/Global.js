import React , {Component} from 'react';
import {FormGroup, FormControl, InputGroup,ButtonToolbar ,Button } from 'react-bootstrap';
import Gallery from './Gallery';


class Global extends Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            items:[]
        }
    }
    search(){
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='
        //console.log("search",this.state.query);
        fetch(`${BASE_URL}${this.state.query}`,{method:'GET'})
         .then(response=>response.json())
         .then(json=>{
             let {items} = json;
             this.setState({items})
         })

    }
render(){
    return(
        <div className="Global" >
           <h2>Book Finder </h2>
           <div className="From" >
           <FormGroup className="Dis" >
               <InputGroup>
                    <FormControl
                     type="text"
                     placeholder="type books "
                     onChange={event => this.setState({ query:event.target.value })}
                     onKeyPress={event =>{
                         if(event.key === 'Enter'){
                             this.search();
                         }
                     }}
                      />
                <ButtonToolbar className="But" onClick={()=>this.search()} >
                    <Button  >
                        search
                    </Button>
                </ButtonToolbar>
               </InputGroup>
           </FormGroup>

           <Gallery items={this.state.items} />
           </div>
           
        </div>
    )
}
}

export default Global;