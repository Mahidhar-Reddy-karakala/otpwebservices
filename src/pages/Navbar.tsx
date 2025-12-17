// import react from "react"
import {cn} from "@/lib/utils"
import {User,HomeIcon,Book,LogIn} from "lucide-react"
import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
// Use fragment/hash links that target section IDs on the same page
const Navitems=[
    { name: "Easyauth", href: "#Home", Icon: HomeIcon, label: "Easyauth" },
    { name: "Docs", href: "#docs", Icon: Book, label: "Documentation" },
    { name: "About", href: "#about", Icon: User, label: "About Us" },
    // {name:"Sign In",href:"#signin",Icon:LogIn,label:"Sign In"},
    // { name: "Contact", href: "#contact", Icon: Contact, label: "Contact Us" },
];
export const Navbar=()=>{
    const [ActiveSection,SetActiveSection]=useState("Home");
    const [isVisible,setVisible]=useState(true);
    const [lastScrollY,setLastScrollY]=useState(0);
    useEffect(()=>{
        const handleScroll=()=>{
            const currentScrollY=window.scrollY;
            if(currentScrollY>lastScrollY && currentScrollY>100){
                setVisible(false);
            }else{
                setVisible(true);
            }
            setLastScrollY(currentScrollY);
            const sections=Navitems.map(item=>item.href.substring(1));
            const currentSection=sections.find(section=>{
                const element=document.getElementById(section);
                if(element){
                    const rect=element.getBoundingClientRect();
                    return rect.top<=150 && rect.bottom>=150;
                }
                return false;
            });
            if(currentSection){
                SetActiveSection(currentSection);
            }
        };
        window.addEventListener('scroll',handleScroll,{passive:true});
        return ()=> window.removeEventListener('scroll',handleScroll);
    },[lastScrollY]);

    const scrollToSection=(link:string)=>{
        const element=document.querySelector(link);
        if(element){
            element.scrollIntoView({behavior:'smooth',block:'start'});
        }
    };
    return (
        <nav className={cn('fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300',isVisible?'translate-y-0 opacity:100':'-translate-y-20 opacity-0')}>
            <div className="bg-black border border-white/10 rounded-full px-6 py-3 shadow-lg backdrop-blur-sm">
                <ul className="flex items-center gap-1">
                    {Navitems.map((item)=>{
                        const Icon=item.Icon;
                        const isActive=ActiveSection===item.href.substring(1);
                        return (
                            <li key={item.name}>
                                {/* anchor with preventDefault so we can smooth-scroll to section */}
                                <a
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                    className={cn(
                                        // default: white text on dark background, subtle hover
                                        'flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-200 text-white hover:bg-white/5',
                                        // active: subtle semi-opaque white bg (not full white)
                                        isActive && 'bg-white/10 text-white'
                                    )}
                                    aria-label={item.label}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span className="text-sm font-medium hidden sm:inline">{item.label}</span>
                                </a>
                            </li>
                        )

                    })}
                    <li>
                        <NavLink
                            to="/signin"
                            className={cn(
                                'flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-200 text-white hover:bg-white/5',
                                // active: subtle semi-opaque white bg (not full white)
                                // isActive && 'bg-white/10 text-white'
                            )}
                            aria-label="Sign In"
                        >
                            <LogIn className="h-4 w-4" />
                            <span className="text-sm font-medium hidden sm:inline">Sign In</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/login"
                            className={cn(
                                'flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-200 text-white hover:bg-white/5',
                                // active: subtle semi-opaque white bg (not full white)
                                // isActive && 'bg-white/10 text-white'
                            )}
                            aria-label="Sign In"
                        >
                            <LogIn className="h-4 w-4" />
                            <span className="text-sm font-medium hidden sm:inline">login</span>
                        </NavLink>
                    </li>

                </ul>

            </div>

        </nav>
    );
}
