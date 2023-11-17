import RecipePageTitle from './RecipePageTitle/RecipePageTitle';
import RecipeButton from 'components/RecipePageHero/RecipeButton/RecipeButton';

import css from './RecipePageHero.module.css'

const RecipePageHero = ({ data }) => {

  const { glass, drinkThumb, drink, _id} = data;


  return (
    <section className={css.sectionContainer}>
        <div className={css.heroContainer}>
            <p className={css.textGlass}>{glass}</p>
            <RecipePageTitle title={drink} />
            {/* звідки брати опис коктейля? написати логіку за відсутності опису */}
            <p className={css.textDescript}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum excepturi, in illo obcaecati possimus accusantium hic perferendis, provident, fugit explicabo quaerat? Culpa odio magnam maxime facere unde facilis praesentium. Distinctio.
            Consectetur esse molestias odio accusamus pariatur voluptatibus dicta quidem. Deserunt, enim quis consequuntur minus velit sit reiciendis suscipit quo ad voluptate ipsam culpa neque aspernatur autem porro doloremque quam cum?</p>
            <RecipeButton id={_id}/>
        </div>
        <img className={`${css.imgDrink} animate`} src={drinkThumb} alt={drink} title={drink}/>
    </section>
  )
};

export default RecipePageHero;