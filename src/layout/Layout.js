import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Link, NavLink} from "react-router-dom";

function Layout({children}) {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Link
                            style={{ color: '#FFF' }}
                            to="/"
                            exact
                        >
                            <Button color="inherit">
                                Home
                            </Button>
                        </Link>

                        <Link
                            style={{ color: '#FFF' }}
                            to="/printTickets"
                            exact
                        >
                            <Button color="inherit">
                                PrintTickets
                            </Button>
                        </Link>

                        <Link
                            style={{ color: '#FFF' }}
                            to="/qrCodeScan"
                            exact
                        >
                            <Button color="inherit">
                                Scan QrCode
                            </Button>
                        </Link>

                        <Link
                            style={{ color: '#FFF' }}
                            to="/vitalCardRead"
                            exact
                        >
                            <Button color="inherit">
                                Lecture carte vitale
                            </Button>
                        </Link>

                        <Link
                            style={{ color: '#FFF' }}
                            to="/speak"
                            exact
                        >
                            <Button color="inherit">
                                Parole
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>

            <Box sx={{margin: 3}}>
            {children}
            </Box>
        </>
    );
}

export default Layout;
