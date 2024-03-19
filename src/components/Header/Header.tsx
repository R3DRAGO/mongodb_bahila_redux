import {useState} from "react";
import {NavLink} from "react-router-dom";
import {Avatar, createTheme, CssBaseline, FormControlLabel, FormGroup, Switch, ThemeProvider} from "@mui/material";

import css from "./Header.module.css"

const Header = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    };

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className={css.Header}>
                <NavLink to={'movies'}>
                    <div className={css.HeaderLink}>Movies</div>
                </NavLink>
                <NavLink to={'genres'}>
                    <div className={css.HeaderLink}>Genres</div>
                </NavLink>
                <NavLink to={'search'}>
                    <div className={css.HeaderLink}>Search</div>
                </NavLink>
                <FormGroup className={css.Theme}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={darkMode}
                                onChange={toggleDarkMode}
                                color="primary"
                            />
                        }
                        label="Light/Dark"
                    />
                </FormGroup>
                <div className={css.Avatar}>
                    <Avatar alt="avatar" src="/static/images/avatar/2.jpg"/>
                </div>
            </div>
        </ThemeProvider>
    );
};

export {Header};