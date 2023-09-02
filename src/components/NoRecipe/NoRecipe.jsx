
export const NoRecipe = ({ title }) => {
  return (
    <div>
      <picture>
        <source
          srcset="
          ../../images/notFound/not-found-desk.webp   517w,
          ../../images/notFound/not-found-desk@2x.webp 1034w,
          ../../images/notFound/not-found-desk@3x.webp 1551w
          "
          media="(min-width: 1440px)"
          sizes="(min-width: 1440px) 517px"
          type="image/webp"
        />
        <source
          srcset="
          ../../images/notFound/not-found-desk.jpg   517w,
          ../../images/notFound/not-found-desk@2x.jpg 1034w,
          ../../images/notFound/not-found-desk@3x.jpg 1551w
          "
          media="(min-width: 1440px)"
          sizes="(min-width: 1440px) 517px"
          type="image/jpeg"
        />
        <source
          srcset="
          ../../images/notFound/not-found-tab.webp   465w,
          ../../images/notFound/not-found-tab@2x.webp 930w,
          ../../images/notFound/not-found-tab@3x.webp 1395w
          "
          media="(min-width: 768px)"
          sizes="(min-width: 768px) 465px"
          type="image/webp"
        />
        <source
          srcset="
          ../../images/notFound/not-found-tab.jpg   465w,
          ../../images/notFound/not-found-tab@2x.jpg 930w,
          ../../images/notFound/not-found-tab@3x.jpg 1395w
          "
          media="(min-width: 768px)"
          sizes="(min-width: 768px) 465px"
          type="image/jpeg"
        />
        <source
          srcset="
          ../../images/notFound/not-found-mob.webp   375w,
          ../../images/notFound/not-found-mob@2x.webp 750w,
          ../../images/notFound/not-found-mob@3x.webp 1125w
          "
          media="(max-width: 767px)"
          sizes="(min-width: 375px) 375px, 100vw"
          type="image/webp"
        />
        <source
          srcset="
          ../../images/notFound/not-found-mob.jpg   375w,
          ../../images/notFound/not-found-mob@2x.jpg 750w,
          ../../images/notFound/not-found-mob@3x.jpg 1125w
         "
          media="(max-width: 767px)"
          sizes="(min-width: 480px) 450px, 100vw"
          type="image/jpeg"
        />
        <img src="../../images/notFound/not-found-mob.jpg" alt="Recipes not found" />
      </picture>
      <p>{title}</p>
    </div>
  );
};
