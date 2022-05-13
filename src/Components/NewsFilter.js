import {useHttp} from '../hook/useHttp';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';
import Spinner from './Spinner';
import Error from './Error';
import {filterFetched, filterFetching, filterError, activeFilter} from '../Components/filter/filter_slice';


function NewsFilter() {
    const {filters, filterLoadingStatus} = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(filterFetching());
        request("http://localhost:3001/filters")
            .then(data => {
                dispatch(filterFetched(data));
            })
            .catch((err) => {
                dispatch(filterError());
            });
    }, []);

    if (filterLoadingStatus === "loading") {
        return <Spinner />
    } else if (filterLoadingStatus === "error") {
        return <Error />
    } 

    const renderFilters = (arr) => {
        if (arr.length === 0) {
            return <h4 className='text-center mt-5'>No filters</h4>
        }
        return arr.map(({name, className, label}) => {
            const btnClasses = classNames("btn", className, {
                'active': name === activeFilter
            });
            return (
            <button 
            key={name} 
            id={name} 
            className={btnClasses}
            onClick={() => dispatch(activeFilter(name))}>{label}</button>
            )
        })
        
    }
        
    const elements = renderFilters(filters);
    return (
        <div className='card shadow-lg mt-4'>
            <div className='card-body'>
                <p className='card-text'>Filter by category :</p>
                <div className='btn-group'>
                    {elements}
                </div>
            </div>
        </div>
    );
};



export default NewsFilter;