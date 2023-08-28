import s from './FollowUs.module.css'
 import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoYoutube } from 'react-icons/bi';

export const FollowUs = ( ) => {
      
      return (
           <div>
            <h3>Follow Us</h3>  
              
              <ul className={s.followUs_list}>
        
            <li className={s.followUs_item}> <BiLogoFacebook className={s.followUs_icon}/>  </li>
            <li className={s.followUs_item}><BiLogoInstagramAlt className={s.followUs_icon}/></li>
            <li className={s.followUs_item}><BiLogoYoutube className={s.followUs_icon}/></li>
    </ul>
           </div>
            )
}



