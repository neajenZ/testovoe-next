'use client'

import { authState } from "@/app/store/auth";
import { useStore } from "@nanostores/react";



const Header = () => {
    const { user } = useStore(authState)
  
    return (
        <>
            <div style={{marginTop: '25px'}}>
                Username: {user && user.username}
            </div>
        </>
  )
};

export default Header;
