import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Spinner } from './Spinner/Spinner';
import Private from './Routes/Privat';
import OnlyGuest from './Routes/OnlyGuest';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const DrinksPage = lazy(() => import('../pages/DrinksPage'));
const AddRecipePage = lazy(() => import('../pages/AddRecipePage/AddRecipePage'));
const RecipePage = lazy(() => import('../pages/RecipePage'));
const MyRecipesPage = lazy(() => import('../pages/MyRecipesPage/MyRecipesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage'));

export const App = () => {
  return (
    <Routes>
      {/* 
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />

        <Route path='spinner' element={<Spinner />} />
        <Route path="signin" element={<RestrictedRoute retirectTo={"/main"} component={<LoginPage />} />} />
        <Route path="signup" element={<RestrictedRoute retirectTo={"/main"} component={<RegisterPage />} />} />
        <Route path="main" element={<PrivateRoute retirectTo={"/"} component={<MainPage />} />} />
        <Route path="drinks/:categoryName" element={<DrinksPage />} />
        <Route path="add" element={<AddRecipePage />} />
        <Route path="recipe/:recipeId" element={<RecipePage />} />
        <Route path="my" element={<MyRecipesPage />} />
        <Route path="/favorite" element={<FavoritePage/>} />
        <Route path="*" element={<NotFoundPage />} />
        
*/}
      <Route path="/" element={<OnlyGuest component={<SharedLayout />} />}>
        <Route path="welcome" element={<OnlyGuest component={<WelcomePage />} />} />
        <Route path="signin" element={<OnlyGuest component={<LoginPage />} />} />
        <Route path="signup" element={<OnlyGuest component={<RegisterPage />} />} />
      </Route>
      <Route path="/" element={<Private component={<SharedLayout />} />}>
        <Route path="main" element={<Private component={<MainPage />} />} />
        <Route path="drinks" element={<Private component={<DrinksPage />} />} />
        <Route path="drinks/:categoryName" element={<Private component={<DrinksPage />} />} />
        <Route path="add" element={<Private component={<AddRecipePage />} />} />
        <Route path="recipe" element={<Private component={<RecipePage />} />} />
        <Route path="recipe/:recipeId" element={<Private component={<RecipePage />} />} />
        <Route path="my" element={<Private component={<MyRecipesPage />} />} />
        <Route path="favorite" element={<Private component={<FavoritePage />} />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
      <Route path="spinner" element={<Spinner />} />
    </Routes>
  );
};
