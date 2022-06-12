// import { useState } from 'react'
// import { Provider } from "react-redux";
import { Store } from "./store/store";
// import { RenderData, ButtonDispatch } from "./components";

import { Provider } from "react-redux";

// import {
//   Header,
//   Balance,
//   IncAndExp,
//   History,
//   Addtransaction,
//   Store,
// } from "./ExpenseTrackApp/index";
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Navbar,
  OrderSummary,
  // Product,
  Featured,
  New,
  NoMatch,
  Users,
  UserList,
  AdminUser,
  Profile,
  Login,
  RequireAuth,
} from "./Router/index";
// import Product from "./Router/Product";
const LazyLoading = React.lazy(() => import("./Router/Product"));

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <Provider store={Store}>
    //   <div className="App">
    //     <RenderData />
    //     <ButtonDispatch />
    //   </div>
    // </Provider>
    // <Provider store={Store}>
    //   <div>
    //     <Header />
    //     <Balance />
    //     <IncAndExp />
    //     <History />
    //     <Addtransaction />
    //   </div>
    // </Provider>
    <>
      <Provider store={Store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route
            path="product"
            element={
              <React.Suspense fallback="loading...">
                <LazyLoading />
              </React.Suspense>
            }
          >
            <Route index element={<Featured />} />
            <Route path="featured" element={<Featured />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="users" element={<Users />} />
          <Route path="users/:userID" element={<UserList />} />
          <Route path="users/admin" element={<AdminUser />} />

          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
