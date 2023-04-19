//context creation
//provider - gets data and provides it
//consumer - useContext hook

import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/stories-reducer.js";


let api = "https://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading: true,
    query: 'html',
    nbPages: 0,
    page: 0,
    hits: [],
}
const AppContext = React.createContext();

//create rovide funtion

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    

    const fetchApiData = async (url) => {
        dispatch({
            type: 'SET_LOADING',
        })
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: 'FETCH_DATA',
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const removePost = (id) => {
        dispatch({
            type: 'REMOVE_POST',
            payload: id,
        })
    }

    const searchPost = (value) => {
        dispatch({
            type: 'SEARCH_POST',
            payload: value,
        })
    }

    const getPrevPage = () => {
        dispatch({
            type: 'GET_PREV_PAGE',
        })
    }

    const getNextPage = () => {
        dispatch({
            type: 'GET_NEXT_PAGE',
        })
    }

    useEffect(() => {
        fetchApiData(`${api}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page])

    return (
        <AppContext.Provider value={{...state, removePost, searchPost, getPrevPage, getNextPage}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext) ;
}

export {AppContext, AppProvider, useGlobalContext};

