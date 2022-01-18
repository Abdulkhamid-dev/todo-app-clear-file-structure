import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Started from '../Started/Started';

function Auth() {
    return (
        <Routes>
        <Route path="*" element={<Started />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    )
}

export default Auth
