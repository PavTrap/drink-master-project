import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import { PrivateRoute } from './Routes/PrivateRoute';
import { RestrictedRoute } from './Routes/RestrictedRoute';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const DrinksPage = lazy(() => import('../pages/DrinksPage'));
const AddRecipePage = lazy(() => import('../pages/AddRecipePage'));
const RecipePage = lazy(() => import('../pages/RecipePage'));
const MyRecipesPage = lazy(() =>
  import('../pages/MyRecipesPage/MyRecipesPage')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route path="/welcome" element={<WelcomePage />} />

      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/signin" element={<LoginPage />} />

      <Route path="/main" element={<MainPage />} />
      <Route path="/drinks/:categoryName	" element={<DrinksPage />} />

      <Route path="/add" element={<AddRecipePage />} />
      <Route path="/recipe/:recipeId" element={<RecipePage />} />
      <Route path="/my" element={<MyRecipesPage />} />

      <Route path="*" element={<WelcomePage />} />

    </Routes>
  );
};
