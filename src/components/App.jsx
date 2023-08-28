import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PrivateRoute } from './Routes/PrivateRoute';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { Spinner } from './Spinner/Spinner';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const DrinksPage = lazy(() => import('../pages/DrinksPage'));
const AddRecipePage = lazy(() => import('../pages/AddRecipePage/AddRecipePage'));
const RecipePage = lazy(() => import('../pages/RecipePage'));
const MyRecipesPage = lazy(() => import('../pages/MyRecipesPage/MyRecipesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route path="/welcome" element={<WelcomePage />} />
      <Route
        path="/singup"
        element={<RestrictedRoute component={<SingupPage />} />}
      />
      <Route
        path="/singin"
        element={<RestrictedRoute component={<SinginPage />} />}
      />
        <Route path="main" element={<MainPage />} />
        <Route path="drinks/:categoryName" element={<DrinksPage />} />
        <Route path="add" element={<AddRecipePage />} />
        <Route path="recipe/:recipeId" element={<RecipePage />} />
        <Route path="my" element={<MyRecipesPage />} />
        <Route path="/favorite" element={<FavoritePage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
