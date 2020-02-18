import React from 'react';
import styles from './Form.module.css';
import useSelect from './hooks/useSelect';
import PropTypes from 'prop-types';


const Form = ({saveCategory}) => {


    const OPTIONS = [
        {value: 'general', label: "General"},
        {value: 'business', label: "Business"},
        {value: 'entertainment', label: "Entertainment"},
        {value: 'health', label: "Health"},
        {value: 'science', label: "Science"},
        {value: 'sports', label: "Sports"},
        {value: 'technology', label: "Technology"}
    ]

    //Use customhook

    const [categories, SelectNews] = useSelect('general', OPTIONS);

    //****Submit to the form. Send category to app.justify ****//

    const SearchNews = e => {
        
        e.preventDefault();

        saveCategory(categories);
    }


    return ( 
        <div className ={`${styles.searcher} row`}>
            <div className=" col s12 m8 offset-m2">
                <form
                onSubmit={SearchNews}>
                    <h2 className={`${styles.heading} `}>Find news by categories</h2>
                    <SelectNews />
                    <div className="input-field col s12">
                        <input
                        type="submit"
                        className={`${styles.btn_block} btn-large  yellow darken-2 z-depth-4`}
                        value="Search" />
                    </div>
                </form>
            </div>
        </div>
     );
}
Form.propTypes ={
    saveCategory: PropTypes.func.isRequired
}   
export default Form;
