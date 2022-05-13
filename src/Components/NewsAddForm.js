import React from 'react';
import {useState} from 'react';
import {useHttp} from '../hook/useHttp';
import {useDispatch, useSelector} from 'react-redux';
import {v4} from 'uuid';
import {newsCreated} from './NewsList/news_slice';     

function NewsAddForm(props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const {filters, filterLoadingStatus} = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const {request} = useHttp();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const news = {
            id: v4(),
            name,
            description,
            category,
        }
        dispatch(newsCreated(news));
        request("http://localhost:3001/news", "POST", JSON.stringify(news))
            .then(() => {
                setName("");
                setDescription("");
                setCategory("");
            })
            .catch((err) => console.log(err));                          
    }

    const renderFilters = (filters, status) => {
        if (status === "loading") {
            return <option>Loading...</option>
        } else if (status === "error") {
            return <option>Error</option>
        }

        if (filters && filters.length > 0) {
            return filters.map(({name, label}) => {
                if(name === "all") return;
                    return <option key={name} value={name}>{label}</option>
            })
        }
    }
    
    return (
        <form className='border p-4 shadow-lg rounded' onSubmit={onSubmitHandler}>
            <div className='mb-3'>
                <label htmlFor='name' className='form-label fs-4'>Name for new news</label>
                <input 
                 type="text" 
                 name='name' 
                 required className='form-control'
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 id='name' placeholder='Whats the name of news' />
            </div>
            <div className='mb-3'>
                <label htmlFor='text' className='form-label fs-4'>Description</label>
                <textarea 
                type="text" 
                name='text' required className='form-control' 
                id='text' placeholder='Whats your news about' 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{"height": "120px"}}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='category' className='form-label fs-4'>Choose category of news</label>
                <select 
                className='form-select' 
                id='category' 
                name='category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                 required >
                    <option>Category of News...</option>
                    {renderFilters(filters, filterLoadingStatus)}
                </select>
            </div>
            <button  type='submit' className='btn btn-dark w-100 shadow-lg text-light'>Create News</button>
        </form>
    );
};

export default NewsAddForm;