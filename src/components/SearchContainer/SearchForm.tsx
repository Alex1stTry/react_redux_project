
import {SubmitHandler, useForm} from "react-hook-form";

import {searchActions} from "../../store/slices";


import {useAppDispatch, useAppSelector} from "../../hooks";

const SearchForm = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useAppDispatch()
    const {page,} = useAppSelector(state => state.search);

    const submit: SubmitHandler<any> = (data) => {
        //@ts-ignore
        dispatch(searchActions.search({query: data.query, page}));
        reset();
    };
    return (

        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder="Movie's title"{...register('query')}/>
                <button>Search</button>
            </form>
        </div>

    );
};

export {SearchForm};