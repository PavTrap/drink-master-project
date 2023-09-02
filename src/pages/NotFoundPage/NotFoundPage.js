// import { useNavigate } from 'react-router-dom';
// export default function NotFoundPage() {
//   const navigate = useNavigate();
//   return (
//     <div style={littleStyles}>
//       THIS IS NOT FOUND 404 PAGE
//       <button
//         style={button}
//         onClick={() => {
//           navigate('/');
//         }}
//       >
//         {' '}
//         Oops not found <br /> Whant to go to main page?
//       </button>
//     </div>
//   );
// }

// const littleStyles = {
//   height: '70vh',
//   fontSize: '40px',

//   width: '100%',
//   textAlign: 'center',
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '50px',
//   flexWrap: 'no-wrap',
//   alignItems: 'center',
//   justifyContent: 'center',
// };

// const button = {
//   padding: '20px',
//   backgroundColor: 'lightblue',
// };

import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <section className={css.notFoundContainer}>
      <picture>
        <source
          srcSet="
          images/notFound/not-found-desk.webp   517w,
          images/notFound/not-found-desk@2x.webp 1034w,
          images/notFound/not-found-desk@3x.webp 1551w
          "
          media="(min-width: 1440px)"
          sizes="(min-width: 1440px) 517px"
          type="image/webp"
        />
        <source
          srcSet="
          images/notFound/not-found-desk.jpg   517w,
          images/notFound/not-found-desk@2x.jpg 1034w,
          images/notFound/not-found-desk@3x.jpg 1551w
          "
          media="(min-width: 1440px)"
          sizes="(min-width: 1440px) 517px"
          type="image/jpeg"
        />
        <source
          srcSet="
          images/notFound/not-found-tab.webp   465w,
          images/notFound/not-found-tab@2x.webp 930w,
          images/notFound/not-found-tab@3x.webp 1395w
          "
          media="(min-width: 768px)"
          sizes="(min-width: 768px) 465px"
          type="image/webp"
        />
        <source
          srcSet="
          images/notFound/not-found-tab.jpg   465w,
          images/notFound/not-found-tab@2x.jpg 930w,
          images/notFound/not-found-tab@3x.jpg 1395w
          "
          media="(min-width: 768px)"
          sizes="(min-width: 768px) 465px"
          type="image/jpeg"
        />
        <source
          srcSet="
          images/notFound/not-found-mob.webp   375w,
          images/notFound/not-found-mob@2x.webp 750w,
          images/notFound/not-found-mob@3x.webp 1125w
          "
          media="(max-width: 767px)"
          sizes="(min-width: 375px) 375px, 100vw"
          type="image/webp"
        />
        <source
          srcSet="
          images/notFound/not-found-mob.jpg   375w,
          images/notFound/not-found-mob@2x.jpg 750w,
          images/notFound/not-found-mob@3x.jpg 1125w
         "
          media="(max-width: 767px)"
          sizes="(min-width: 480px) 450px, 100vw"
          type="image/jpeg"
        />
        <img src="/images/notFound/not-found-mob.jpg" alt="Recipes not found" />
      </picture>
      <div className={css.textContainer}>
        <span className={css.span}>4</span>
        <span className={css.span}>4</span>
      </div>
    </section>
  );
}
