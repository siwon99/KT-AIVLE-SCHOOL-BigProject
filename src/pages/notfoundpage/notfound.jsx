import React from 'react';
import Navbar from '../navbar/navbar';
import './notfound.css'

export const Notfound = () => {
    return (
        <>
            <Navbar />
            <div className='notfound-page'>페이지가 존재하지 않습니다. <br />메인화면으로 돌아가주세요.</div>
        </>
    )
}

export default Notfound;