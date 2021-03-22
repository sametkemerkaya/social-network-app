import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../components/NotFound';

const GeneratePage = (PageName) => {
    const component = () => require(`./../pages/${PageName}`).default 
    try {
        return React.createElement(component())
    }catch (err) {
        return <NotFound error={ err } />
    }
}

const PageRender = () => {
    
    let PageName;
    let { page, id } = useParams();

    if (id) {
        PageName = `${page}[id]`
    } else {
        PageName = `${page}`;
    }

    return GeneratePage(PageName);

}

export default PageRender