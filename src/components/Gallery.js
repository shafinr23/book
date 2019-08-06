import React,{Component} from 'react';


class Gallery extends Component{
   
    render(){
        let missing = 'https://upload.wikimedia.org/wikipedia/commons/7/75/Missing.png'
        return(
            <div>{
                this.props.items.map((item,index) =>{
                    let {title,imageLinks, infoLink} = item.volumeInfo;
                    return(
                        <a href={infoLink} target="__blank" key={index} className="Book">
                            <img 
                            src={imageLinks !== undefined ? imageLinks.thumbnail:missing}
                            alt="book image"  
                            className="Book-img"
                            />


                            <div className="Book-text" >
                            {title}
                            </div>
                        </a>
                    )
                })
            }</div>
        )
    }
}


export default Gallery;