import React, { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";


const useFirestore = (collection) => {
    const [docs,setDocs] = useState([]);

    useEffect( () => {
        const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot( (snap) => {
            let documents = [];
            snap.forEach( doc => {
                documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents);                    
        }); // onSnapshot fires callback function everytime collection is changed
        return () => unsub();
    },[collection]);
    // console.log(docs);

    return {docs};
}

export default useFirestore;