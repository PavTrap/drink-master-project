import notFoundDeskJpg from './notFound/not-found-desk.jpg';
import notFoundDeskWebp from './notFound/not-found-desk.webp';
import notFoundDeskJpg2x from './notFound/not-found-desk@2x.jpg';
import notFoundDeskWebp2x from './notFound/not-found-desk@2x.webp';
import notFoundDeskJpg3x from './notFound/not-found-desk@3x.jpg';
import notFoundDeskWebp3x from './notFound/not-found-desk@3x.webp';
import notFoundMobJpg from './notFound/not-found-mob.jpg';
import notFoundMobWebp from './notFound/not-found-mob.webp';
import notFoundMobJpg2x from './notFound/not-found-mob@2x.jpg';
import notFoundMobWebp2x from './notFound/not-found-mob@2x.webp';
import notFoundMobJpg3x from './notFound/not-found-mob@3x.jpg';
import notFoundMobWebp3x from './notFound/not-found-mob@3x.webp';
import notFoundTabJpg from './notFound/not-found-tab.jpg';
import notFoundTabWebp from './notFound/not-found-tab.webp';
import notFoundTabJpg2x from './notFound/not-found-tab@2x.jpg';
import notFoundTabWebp2x from './notFound/not-found-tab@2x.webp';
import notFoundTabJpg3x from './notFound/not-found-tab@3x.jpg';
import notFoundTabWebp3x from './notFound/not-found-tab@3x.webp';
import css from './NoRecipe.module.css';

export const NoRecipe = ({ title }) => {
  return (
    <div className={css.noRecipeContainer}>
      <picture>
        <source
          srcSet={`${notFoundDeskWebp} 517w,
          ${notFoundDeskWebp2x} 1034w,
          ${notFoundDeskWebp3x} 1551w
          `}
          media="(min-width: 1440px)"
          sizes="(min-width: 1440px) 517px"
          type="image/webp"
        />
        <source
          srcSet={`
          ${notFoundDeskJpg}   517w,
          ${notFoundDeskJpg2x} 1034w,
          ${notFoundDeskJpg3x} 1551w
          `}
          media="(min-width: 1440px)"
          sizes="(min-width: 1440px) 517px"
          type="image/jpeg"
        />
        <source
          srcSet={`
          ${notFoundTabWebp}   465w,
          ${notFoundTabWebp2x} 930w,
          ${notFoundTabWebp3x} 1395w
          `}
          media="(min-width: 768px)"
          sizes="(min-width: 768px) 465px"
          type="image/webp"
        />
        <source
          srcSet={`
          ${notFoundTabJpg}   465w,
          ${notFoundTabJpg2x} 930w,
          ${notFoundTabJpg3x} 1395w
          `}
          media="(min-width: 768px)"
          sizes="(min-width: 768px) 465px"
          type="image/jpeg"
        />
        <source
          srcSet={`
          ${notFoundMobWebp}   375w,
          ${notFoundMobWebp2x} 750w,
          ${notFoundMobWebp3x} 1125w
          `}
          media="(max-width: 767px)"
          sizes="(min-width: 375px) 375px, 100vw"
          type="image/webp"
        />
        <source
          srcSet={`
          ${notFoundMobJpg}   375w,
          ${notFoundMobJpg2x} 750w,
          ${notFoundMobJpg3x} 1125w
          `}
          media="(max-width: 767px)"
          sizes="(min-width: 480px) 450px, 100vw"
          type="image/jpeg"
        />
        <img src={`${notFoundMobJpg} `} alt="Recipes not found" />
      </picture>
      <p className={css.noRecipeTitle}>{title}</p>
    </div>
  );
};
