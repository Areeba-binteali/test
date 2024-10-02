import Link from 'next/link' 
import logo from 'logo.png'

export default function Header(){
    return(
        <div className="header">
            <ul className="parent-header">
                <Link href={"/"}>
                <li>Home</li>
                </Link>
                <Link href={"/about-us"}>
                <li>About Us</li>
                </Link>
                <Link href={"/contact-us"}>
                <li>Contact Us</li>
                </Link>
                <Link href={"/services"}>
                <li>Services</li>
                </Link>
            </ul>
            
        </div>
    )
} 