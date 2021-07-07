import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = (props) => {

    const { docs } = useFirestore('images');
    console.log(docs);
    
    return <div className="img-grid">
        { docs && docs.map( doc => (
            <div className="img-wrap" key={doc.id} onClick={ () => props.setSelectedImg(doc.url)}>
                <img src={doc.url} alt="upladed img" />
            </div>
        ))}    
    </div>

}

export default ImageGrid;