// -----------------КОМЕНТЫ НЕ УДАЛЯТЬ-----------------------
//
//
//
//
// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { SharedLayout } from './SharedLayout/SharedLayout';
// // import { PrivateRoute } from './Routes/PrivateRoute';
// import { RestrictedRoute } from './Routes/RestrictedRoute';

// const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
// const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
// const MainPage = lazy(() => import('../pages/MainPage'));
// const DrinksPage = lazy(() => import('../pages/DrinksPage'));
// const AddRecipePage = lazy(() => import('../pages/AddRecipePage'));
// const RecipePage = lazy(() => import('../pages/RecipePage'));
// const MyRecipesPage = lazy(() =>
//   import('../pages/MyRecipesPage/MyRecipesPage')
// );
// const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<SharedLayout />} />
//       <Route path="/welcome" element={<WelcomePage />} />

//       <Route path="/signup" element={<RestrictedRoute component={<RegisterPage />} />} />
//       <Route path="/signin" element={<RestrictedRoute component={<LoginPage />} />} />

//       <Route path="/main" element={<MainPage />} />
//       <Route path="/drinks/:categoryName	" element={<DrinksPage />} />

//       <Route path="/add" element={<AddRecipePage />} />
//       <Route path="/recipe/:recipeId" element={<RecipePage />} />
//       <Route path="/my" element={<MyRecipesPage />} />

//       <Route path="*" element={<WelcomePage />} />

//       <Route path="/" element={<NotFoundPage />} />
//     </Routes>
//   );
// };
//
//
//
// -----------------КОМЕНТЫ НЕ УДАЛЯТЬ-----------------------

import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Spinner } from './Spinner/Spinner';
import Private from './Routes/Privat';
import OnlyGuest from './Routes/OnlyGuest';


const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));

const MainPage = lazy(() => import('../pages/MainPage'));
const DrinksPage = lazy(() => import('../pages/DrinksPage'));
const AddRecipePage = lazy(() => import('../pages/AddRecipePage'));
const RecipePage = lazy(() => import('../pages/RecipePage'));
const MyRecipesPage = lazy(() => import('../pages/MyRecipesPage/MyRecipesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Private component={<SharedLayout />} />}>
        <Route path="main" element={<Private component={<MainPage />} />} />
        <Route path="drinks" element={<Private component={<DrinksPage />} />} />
        <Route path="drinks/:categoryName" element={<Private component={<DrinksPage />} />} />
        <Route path="add" element={<Private component={<AddRecipePage />} />} />
        <Route path="recipe" element={<Private component={<RecipePage />} />} />
        <Route path="recipe/:recipeId" element={<Private component={<RecipePage />} />} />
        <Route path="my" element={<Private component={<MyRecipesPage />} />} />
      </Route>
      <Route path="/" element={<OnlyGuest component={<SharedLayout />} />}>
        <Route path="/welcome" element={<OnlyGuest component={<WelcomePage />} />} />
        <Route path="signin" element={<OnlyGuest component={<LoginPage />} />} />
        <Route path="signup" element={<OnlyGuest component={<RegisterPage />} />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="spinner" element={<Spinner />} />
    </Routes>
  );
};
