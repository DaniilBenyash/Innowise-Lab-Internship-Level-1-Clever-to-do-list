import React from "react";
import { useSelector } from 'react-redux'

export const useUserInfo = () => {
    const userInfo = useSelector(state => state.register)
    
    return {
        userInfo
    }
}