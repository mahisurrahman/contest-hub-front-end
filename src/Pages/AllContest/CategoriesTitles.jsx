/* eslint-disable no-unused-vars */
import qs from 'query-string';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CategoriesTitles = ({title, selected}) => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const handleClick = ()=>{
        let currentQuery = {}
        if(params){
            currentQuery = qs.parse(params.toString());
        }
            const updatedQuery = {...currentQuery, category: title}
            const url = qs.stringifyUrl({
                url: '/all-contests/',
                query: updatedQuery,
            })

            navigate(url);
        
    }

    return (
        <div  onClick={handleClick} className={`${selected?'border-b-2 border-black text-black font-bold':'border-b-none'}`}>
            <label>{title}</label>
        </div>
    );
};

export default CategoriesTitles;