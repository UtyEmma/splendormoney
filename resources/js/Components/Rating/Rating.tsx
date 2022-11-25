import { ComponentProps, useEffect, useRef, useState } from "react";

interface IRatingInputProps extends ComponentProps<'input'> {
}

export const RatingInput = ({onChange, ...props} : IRatingInputProps & {onChange: (val: number | string) => void}) => {
    const [rating, setRating] = useState(props.defaultValue as number || 1);
    const [hover, setHover] = useState(0);

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(onChange) onChange(rating)
    }, [rating])

    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <span 
                key={index}
                className={`text-warning fa-2x ${(index <= (hover || rating)) ? "fa fa-star" : "far fa-star"}`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
            />
          );
        })}

        <input type="text" ref={inputRef} {...props} name={props.name} value={rating}    hidden />
      </div>
    );
};

interface IRatingProps {
    rating: number,
    count?: number
}


export const Rating = ({rating = 1, count}: IRatingProps) => {
    
    return (
        <div className="rating mb-0">
            {
                [...Array(5)].map((num, i) => {
                    i += 1
                    return <i className={`fas fa-star ${i <= (rating || 1) && 'filled'} fs-5`} />
                })
            }
            
            <span className="d-inline-block average-rating fs-5 ms-2"><span> {rating || 1}.0</span> {(count && count > 0) && <>({count})</>}</span>
        </div>
    )
}