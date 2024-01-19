import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import PostDetails from "./pages/PostDetails";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Authors from "./pages/Authors";
import CreatePosts from "./pages/CreatePosts";
import CategoryPost from "./pages/CategoryPost";
import AuthorPosts from "./pages/AuthorPosts";
import Dashboard from "./pages/Dashboard";
import EditPost from "./pages/EditPost";
import Register from "./pages/Register";
import DeletePost from "./pages/DeletePost";
import UserProvider from './context/userContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserProvider>
        <Layout />
      </UserProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts/:id", element: <PostDetails /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/profile/:id", element: <UserProfile /> },
      { path: "/authors", element: <Authors /> },
      { path: "/create", element: <CreatePosts /> },
      { path: "/posts/categories/:categories", element: <CategoryPost /> },
      { path: "/posts/users/:id", element: <AuthorPosts /> },
      { path: "/myposts/:id", element: <Dashboard /> },
      { path: "/posts/:id/edit", element: <EditPost /> },
      { path: "/posts/:id/delete", element: <DeletePost /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
