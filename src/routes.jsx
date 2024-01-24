import React from 'react'
import { Outlet, useRoutes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import SignIn from './pages/Sign_in/SignIn'
import SpinningWheel from './pages/Spinning-wheel/FortuneWheel'
import GameMain from './pages/Main_game/game_main/Game_main'
// import Profile from './pages/Profile/Profile'

export const Routes = () => {
    const PublicRoute = [
        {
            element:(
            <div>
            <Outlet/>
            </div>),
            children: [
                { path: '', element: <Home /> },
                { path: 'menu', element: <Menu /> },
                { path: 'sign_in', element: <SignIn /> },
                // { path: 'profile', element: <Profile /> },
                { path: 'omad', element: < SpinningWheel /> },
                { path: 'boriga_baraka', element: < GameMain /> },
            ],
        },
    ];
    return useRoutes(PublicRoute)
}
