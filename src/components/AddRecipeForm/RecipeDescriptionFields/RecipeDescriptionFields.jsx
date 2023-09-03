// import PropTypes from 'prop-types';
import s from './RecipeDescriptionFields.module.css';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import { fetchCategory, fetchGlasses } from '../../../fetchAPI/fetchAPI';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import React from 'react';
import LoadingCircle from 'components/Spinner/LoadingCircle';
import { writeToLoaclStore, readFromLocalStore } from 'helpers/localStorageApi';
//styles
import { categoryStyles } from './FieldStyles';


export const RecipeDescriptionFields = ({ drinkThumb, cocktailImg, itemTitle, about, category, glass }) => {
  const [allCategory, setCategory] = useState([]);
  const [allGlasses, setGlasses] = useState([]);
  const [addImage, setAddImage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(!readFromLocalStore("category-list") || readFromLocalStore("glasses-list")){
      (async () => {
        const categories = await fetchCategory();
        const glasses = await fetchGlasses();
        const calegorieList = categories.map(({ name }) => {
          return { value: `${name}`, label: `${name}`, descr: `category` };
        });
  
        const glassesList = glasses.map(({ name }) => {
          return { value: `${name}`, label: `${name}`, descr: `glasses` };
        });
        writeToLoaclStore("category-list",calegorieList )
        writeToLoaclStore("glasses-list",glassesList )
        calegorieList && setCategory(calegorieList);
        glassesList && setGlasses(glassesList);
      })();
    }else{
      const calegorieList = readFromLocalStore("category-list")
      const glassesList = readFromLocalStore("glasses-list")
      calegorieList && setCategory(calegorieList);
      glassesList && setGlasses(glassesList);

    }
    
  }, []);

  useEffect(() => {
    if (drinkThumb === '') {
      setAddImage(false);
      return;
    } else {
      setAddImage(true);
      setIsLoading(false);
    }
  }, [drinkThumb]);

  const handleChangeSelect = e => {
    switch (e.descr) {
      case 'category':
        category(e.value);
        break;

      case 'glasses':
        glass(e.value);
        break;

      default:
        break;
    }
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'cocktailImg':
        cocktailImg(value);
        break;

      case 'itemTitle':
        itemTitle(value);
        break;

      case 'about':
        about(value);
        break;

      default:
        break;
    }
  };

  function onClickOnImage() {
    setTimeout(() => {
      setIsLoading(true);
    }, 500);
  }
  return (
    <div className={s.recipeDescriptionSection}>
      <label className={s.recipeDescription_labelImg}>
        {addImage ? (
          <div className={s.recipeDescription_showImgContainerActive}>
            <img className={s.recipeDescription_showImg} src={drinkThumb} alt="Cocktail" />
          </div>
        ) : (
          <div onClick={onClickOnImage}>
            {isLoading ? (
              <div className={s.loadingIcon}>
                <LoadingCircle />
              </div>
            ) : (
              <>
                <BsFillPlusSquareFill className={s.recipeDescription_addImgIcon} />{' '}
                <p className={s.recipeDescription_addImgDescr}>Add image</p>
              </>
            )}
          </div>
        )}
        <input
          required
          type="file"
          className={s.recipeDescription_inputImg}
          id="cocktailImg"
          name="cocktailImg"
          accept=".jpg, .jpeg, .png"
          multiple
          onChange={cocktailImg}
        />
      </label>

      <div className={s.recipeDescriptionFields}>
        <label className={s.recipeDescriptionFields_label}>
          <input
            placeholder=""
            className={s.recipeDescriptionFields_input}
            type="text"
            name="itemTitle"
            required
            autoComplete="off"
            onChange={handleChange}
          />
          <div className={s.recipeDescriptionFields_labelContent}>Enter item title</div>
        </label>

        <label className={s.recipeDescriptionFields_label}>
          <input
            placeholder=""
            className={s.recipeDescriptionFields_input}
            type="text"
            name="about"
            autoComplete="off"
            onChange={handleChange}
          />
          <div className={s.recipeDescriptionFields_labelContent}>Enter about recipe</div>
        </label>

        <label className={s.recipeDescriptionFields_label}>
          <Select
            className={s.recipeDescriptionFields_input}
            classNamePrefix="select"
            isSearchable={true}
            name="category"
            placeholder="Category"
            onChange={handleChangeSelect}
            components={{
              IndicatorSeparator: () => null,
            }}
            required
            options={allCategory}
            styles={categoryStyles}
          />
        </label>

        <label className={s.recipeDescriptionFields_label}>
          <Select
            className={s.recipeDescriptionFields_input}
            classNamePrefix="select"
            isSearchable={true}
            name="glass"
            placeholder="Glass"
            onChange={handleChangeSelect}
            components={{
              IndicatorSeparator: () => null,
            }}
            options={allGlasses}
            required
            styles={categoryStyles}
          />
        </label>
      </div>
    </div>
  );
};

// Создайте стилизованный компонент
// Опции для React Select
// RecipeDescriptionFields.propTypes = {
//   drinkThumb: PropTypes.string,
//   cocktailImg: PropTypes.func,
//   itemTitle: PropTypes.func,
//   about: PropTypes.func,
//   category: PropTypes.func,
//   glass: PropTypes.func,
// };
