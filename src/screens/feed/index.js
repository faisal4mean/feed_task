import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import List from '../../components/List';
import withListLoading from '../../components/withListLoading';
import Heading from '../../components/Heading';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {useHistory} from 'react-router-dom'
export const Feed = () => {
    const history = useHistory()
    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

    useEffect(() => {
        setAppState({loading: true});
        const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
        axios.get(apiUrl).then((repos) => {
            const allRepos = repos.data;
            setAppState({loading: false, repos: allRepos});
        });
    }, [setAppState]);
    return (
        <div className='App'>
            <div style={{
                position: "fixed",
                bottom: 50,
                right: 50
            }}>
                <Fab 
                onClick={() =>{
                    history.push("CreateFeed")
                }}
                color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </div>
            <Heading />

            <div className='repo-container'>
                <ListLoading isLoading={appState.loading} repos={appState.repos} />

            </div>

            <footer>
                <div className='footer'>
                    JazakAllah Khair {' '}
                    <span role='img' aria-label='love'>
                        💚
                    </span>{' '}
                    with by Sadaqah.io
                </div>
            </footer>
        </div >
    );
}