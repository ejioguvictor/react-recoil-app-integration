import React from 'react';
import ArticleList from '../ArticleList/ArticleList';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import './MainContent.style.scss';

const MainContent = () => {
    return (
        <main className="MainContent">
            <Breadcrumbs />
            <ArticleList />
        </main>
    );
};

export default MainContent;
