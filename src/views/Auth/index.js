import React, {lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";
const SignUp  = lazy(() => import("./SignUp"))
const SignIn  = lazy(() => import("./SignIn"))
const Started  = lazy(() => import("../Started/Started"));

function Auth() {
  return (
    <Suspense fallback="Authentication Loading...">
      <Routes>
        <Route path="*" element={<Started />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Suspense>
  );
}

export default Auth;
