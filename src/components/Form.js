import React from 'react';
import useSelect from './hooks/useSelect';
import PropTypes from 'prop-types';
import image from "../img_1.png"

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
            <div className ="row">
                <div className=" col-md-12 bg-log">
                    <div className="col-md-6 m-auto row">
                    <img src={image} className="img-fluid img-l m-auto"/>
                    </div>
                    <form
                        onSubmit={SearchNews}
                        className="col-md-6 m-auto"
                    >
                        <SelectNews />
                        <div className="mt-3">
                            <input
                                type="submit"
                                className="btn btn-block"
                                value="Search"
                            />
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
