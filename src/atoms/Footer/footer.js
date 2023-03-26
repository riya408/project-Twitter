import React from 'react'
import { Link } from 'react-router-dom'
import footerStyle from '../Footer/footer.module.css'
export default function Footer(){
    let arr=[
        {
        link:"Terms of services"
    },
    {
        link:"Privacy Policy"
    },
    {
        link:"Cookie Policy"
    },
    {
        link:"Accessbility"
    },
    {
        link:"Ads info"
    },
    {
        link:"More..."
    },

]

    return(
<div className={footerStyle.main}>
    <footer className={footerStyle.footer}>
        {arr.map((item)=>(
            <Link className={footerStyle.link}>{item.link}</Link>
            ))}
        
        
        <p className={footerStyle.para}>&#169; 2023 Twitter, Inc.</p>
    </footer>
</div>

    )
}