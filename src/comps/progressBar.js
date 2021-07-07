import React, { useEffect } from 'react';
import useStroage from '../hooks/useStorage';

const ProgressBar = (props) => {
    const { url, progress } = useStroage(props.file);
    console.log(progress,url);
    useEffect(()=>{
        if(url) {
            props.setFile(null);
        }
    },[url, props.setFile]);

    return <div className="progress-bar" style={ { width: progress + '%'} }></div>

}

export default ProgressBar;