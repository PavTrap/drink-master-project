import { useEffect,  useState } from "react";

const useAnimationOnStart = (ref) => {

    const [isIntersecting, setIsIntersecting] = useState(false);


    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { threshold: 0.2 }
      );
      observer.observe(ref.current);
  
      return () => observer.disconnect();
    }, [isIntersecting, ref]);
  
    useEffect(() => {
      if (isIntersecting) {
        ref.current.classList.add('active');
        if( ref.current.querySelector('img')){
          ref.current.querySelector('img').classList.add('active')
        }
        
      }
    }, [isIntersecting, ref]);

};
export default useAnimationOnStart