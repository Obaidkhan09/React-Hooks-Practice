import React from 'react'
const ValueContext = React.createContext(0, () => {});    //default value as 0, function that will be used to update value


export default ValueContext;