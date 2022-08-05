import React from 'react';
import './App.style.scss';
import Header from '../components/Header/Header'
import MainContent from '../components/MainContent/MainContent';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../recoilStore/atoms/atoms'

const App = () => {
    const isDarkModeEnabled = useRecoilValue(darkModeState);

    return (
        <div className={`App ${isDarkModeEnabled ? 'App--dark-mode' : ''}`}>
            <Header />
            <MainContent />
        </div>
    );
};

export default App;
