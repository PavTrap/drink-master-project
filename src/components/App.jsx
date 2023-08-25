import { lazy } from 'react'
import { Route, Routes   } from "react-router-dom";


const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const SingupPage = lazy(() => import('../pages/SingupPage'));
const SinginPage = lazy(() => import('../pages/SinginPage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const DrinksPage = lazy(() => import('../pages/DrinksPage'));
const AddRecipePage = lazy(() => import('../pages/AddRecipePage'));
const RecipePage = lazy(() => import('../pages/RecipePage'));
const MyRecipesPage = lazy(() => import('../pages/MyRecipesPage'));





export const App = () => {
  return (
     <Routes>

      <Route path="/welcome" element={<WelcomePage />} />
      
      <Route path="/singup" element={<SingupPage />} />
      <Route path="/singin" element={<SinginPage />} />


   

      <Route path="/main" element={<MainPage />} />
      <Route path="/drinks/:categoryName	" element={<DrinksPage />} />


        <Route path="/add" element={<AddRecipePage />} />
        <Route path="/recipe/:recipeId" element={<RecipePage />} />
         <Route path="/my" element={<MyRecipesPage />} /> 
        

    </Routes>
  );
};
