import css from './RecipePageTitle.module.css'

const RecipePageTitle = ({title}) => {
  return (
    <h2 className={css.title}>{title}</h2>
  )
};


export default RecipePageTitle;