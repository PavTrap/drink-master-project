import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const DrinksPage = lazy(() => import('../pages/DrinksPage'));
const AddRecipePage = lazy(() => import('../pages/AddRecipePage'));
const RecipePage = lazy(() => import('../pages/RecipePage'));
const MyRecipesPage = lazy(() => import('../pages/MyRecipesPage'));

export const App = () => {
  return (
    <Routes>
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
