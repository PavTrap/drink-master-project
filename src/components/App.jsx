import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PrivateRoute } from './Routes/PrivateRoute';
import { RestrictedRoute } from './Routes/RestrictedRoute';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const DrinksPage = lazy(() => import('../pages/DrinksPage'));
const AddRecipePage = lazy(() => import('../pages/AddRecipePage'));
const RecipePage = lazy(() => import('../pages/RecipePage'));
const MyRecipesPage = lazy(() => import('../pages/MyRecipesPage/MyRecipesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LogInPage/LoginPage'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="signin" element={<RestrictedRoute retirectTo={"/main"} component={<LoginPage />} />} />
        <Route path="signup" element={<RestrictedRoute retirectTo={"/main"} component={<RegisterPage />} />} />
        <Route path="main" element={<PrivateRoute retirectTo={"/"} component={<MainPage />} />} />
        <Route path="drinks/:categoryName" element={<DrinksPage />} />
        <Route path="add" element={<AddRecipePage />} />
        <Route path="recipe/:recipeId" element={<RecipePage />} />
        <Route path="my" element={<MyRecipesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
