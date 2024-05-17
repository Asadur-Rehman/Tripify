import React from 'react';

const userContext = React.createContext({
    firstName: '',
    lastName: '',
    email: '',
})

export default userContext;