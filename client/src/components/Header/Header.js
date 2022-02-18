import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1, mb: 15 }}>
            <AppBar position="fixed" sx={{ backgroundColor: 'orange', mb: 8 }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Box>
                        <Link to="/" className="logo">
                            <FontAwesomeIcon icon={solid('couch')} />
                            <span>Place Marquette</span>
                        </Link>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width: '10%' }}>
                        <Link to="/favoris" className="link">
                            <FontAwesomeIcon icon={regular('star')} />
                        </Link>
                        <Link to="/messages" className="link">
                            <FontAwesomeIcon icon={regular('message')} />
                        </Link>
                        <Link to="/login" className="link">
                            <FontAwesomeIcon icon={regular('user')} />
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

