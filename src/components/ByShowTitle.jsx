import { useState, useContext } from 'react';
import ByShowTitleCSS from './ByShowTitle.module.css';
import {SearchContext} from '../context/SearchContext';

const ByShowTitle = ()=>{
    const [formData, setFormData] = useState("");
    const {findShow} = useContext(SearchContext);

    function handelInput(e) {
        setFormData(e.target.value);
    };

    function handelSubmit(e) {
        e.preventDefault();
        if (formData !== "") {
            findShow(formData);
            setFormData('')
        }
    };

    return (
    <form onSubmit={handelSubmit} className={`${ByShowTitleCSS.wrapper} section-margin`}>
        <input type="text" name="showSearch" id="showSearch" value={formData} onChange={handelInput} placeholder="e.g. The office ..."/>
        <button className={ByShowTitleCSS.search__btn}>Search</button>
    </form>
    );
};

export default ByShowTitle;