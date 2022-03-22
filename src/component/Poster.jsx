import React from 'react';

const Poster = ({pic}) => {
    return ( 
        <>
            {pic.map(src => (    
            <img src={src} alt="" width={200} height={150}/>
            ))}
        </>
     );
}
 
export default Poster;