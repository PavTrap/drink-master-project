import { lazy, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Spinner } from './Spinner/Spinner';
import Private from './Routes/Privat';
import OnlyGuest from './Routes/OnlyGuest';
import useAuth from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/Auth/authOperation';
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LogInPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const DrinksPage = lazy(() => import('../pages/DrinksPage'));
const AddRecipePage = lazy(() => import('../pages/AddRecipePage/AddRecipePage'));
const RecipePage = lazy(() => import('../pages/RecipePage'));
const MyRecipesPage = lazy(() => import('../pages/MyRecipesPage/MyRecipesPage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'));
export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    navigate(location.pathname, { relative: 'path' });
  }, [location.pathname, navigate]);

  return isRefreshing ? (
    <Spinner />
  ) : (
    <Routes>
      <Route path="/" element={<OnlyGuest component={<SharedLayout />} />}>
        <Route index element={<OnlyGuest component={<WelcomePage />} />} />
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
