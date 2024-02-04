import ProfileImg from './assets/images/profil.webp';
import CodeTalenta from './assets/images/codetalenta.webp';
import HybridImg from './assets/images/hybrid.webp';
import Button from "./components/Button.jsx";
import {BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoReact} from "react-icons/bi";
import {DiCodeigniter, DiMysql} from "react-icons/di";
import {FaLaravel, FaPhp} from "react-icons/fa";
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from "react-icons/ai";
import Typewritter from "./components/Typewritter.jsx";
import {useEffect, useRef, useState} from "react";
import rgbaToHex from "./utils/RgbaToHex.jsx";
import {IoMdClose, IoMdMenu} from "react-icons/io";
import {FaArrowRightLong} from "react-icons/fa6";

function App() {

    const recentWorks = [{
        "id": 1,
        "title": 'Hybrid Karisma Academy',
        "description": "This is a web application about learning management system that is created using a technology stack in the form of codeigniter 3 and bootstrap.",
        "image": HybridImg,
        "url": "https://hybrid.karismaacademy.com/"
    }, {
        "id": 2,
        "title": 'Portofolio Codetalenta',
        "description": "This is a portfolio website that is used to show the results of the application website of the bootcamp students, this website is made using html, css, and bootstrap framework technology.",
        "image": CodeTalenta,
        "url": "https://portofolio.codetalenta.com/"
    },];

    const [navbarClass, setNavbarClass] = useState('ease-in duration-300 py-6 lg:py-10');
    const [activeSection, setActiveSection] = useState('bg-[#EEEEEE] text-[#303841]')
    const [activeNavMobile, setActiveNavMobile] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const recentWorksRef = useRef(null);

    useEffect(() => {
            const sections = document.querySelectorAll('section');
            const handleScroll = () => {
                const verticalScrollPx = window.scrollY || window.pageYOffset;
                sections.forEach(sec => {
                        const offset = sec.offsetTop - 120;
                        const height = sec.offsetHeight;
                        const backgroundColor = rgbaToHex(getComputedStyle(sec).backgroundColor).toUpperCase();
                        if (verticalScrollPx >= offset && verticalScrollPx < offset + height) {
                            if (backgroundColor !== '#F6C90E') {
                                setActiveSection('bg-[#EEEEEE] text-[#303841]');
                            } else {
                                setActiveSection('bg-[#303841] text-[#EEEEEE]');
                            }
                        }
                    }
                )
                ;
                if (verticalScrollPx < 100) {
                    setNavbarClass('py-4 lg:py-2 ease-in duration-300 ');
                }
                if (verticalScrollPx === 0) {
                    setNavbarClass('py-6 ease-out duration-300 ');
                }
            }
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
        }
        , []);

    const scrollSection = (event, ref, mobile = false) => {
        event.preventDefault();
        if (mobile) setActiveNavMobile(!activeNavMobile)
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    }

    const handleNavMobile = () => {
        setActiveNavMobile(!activeNavMobile)
    }

    useEffect(() => {
        setIsOpen(true)
    }, []);

    return (<>
        {/* Body Nav Mobile */}
        <div
            className={`bg-[#303841] z-10 fixed top-0 w-screen h-screen opacity-0 transition-opacity ease-in-out duration-500 ${!isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            {'\u00A0'}
        </div>

        <nav
            className={`${activeNavMobile ? 'translate-y-0' : 'translate-y-[-120%]'} transition-transform ease-in-out duration-500 z-2 w-full h-full fixed ${activeSection}`}>
            <ul className={'h-full flex flex-col justify-center items-center text-xl text-center font-bold gap-5'}>
                <li onClick={(event) => scrollSection(event, aboutRef, true)}>About me</li>
                <li onClick={(event) => scrollSection(event, recentWorksRef, true)}>Recent works</li>
                <li onClick={(event) => scrollSection(event, contactRef, true)}>Contact</li>
            </ul>
        </nav>

        {/* Header Nav */}
        <nav
            className={`sticky top-0 lg:shadow-lg ${activeSection} ${navbarClass}`}>
            <div className={'container hidden lg:flex flex-row items-center justify-between tracking-tighter'}>
                <h1 className={'text-2xl w-full'}>Bariq Firjatullah</h1>
                <ul className={'w-full flex flex-row gap-5 justify-end text-2xl '}>
                    <li className={'hover:text-[#F6C90E]'}>
                        <a href={'#'} onClick={(event) => scrollSection(event, aboutRef)}>About me</a>
                    </li>
                    <li className={'hover:text-[#F6C90E]'}>
                        <a href={'#'} onClick={(event) => scrollSection(event, recentWorksRef)}>Recent works</a>
                    </li>
                    <li className={'hover:text-[#F6C90E]'}>
                        <a href={'#'} onClick={(event) => scrollSection(event, contactRef)}>Contact</a>
                    </li>
                </ul>
            </div>
            <div className={'flex flex-row justify-between lg:hidden container'}>
                <h1 className={'text-xl font-bold'}>Bariq Firjatullah</h1>
                <button
                    className={`text-2xl font-bold transition-transform ease-in-out duration-500 transform ${activeNavMobile ? 'rotate-0' : 'rotate-180'}`}
                    onClick={handleNavMobile}>
                    {activeNavMobile
                        ?
                        <IoMdClose/>
                        :
                        <IoMdMenu/>
                    }
                </button>
            </div>
        </nav>

        <section ref={aboutRef} id={'about'}
                 className={'container bg-[#EEEEEE] flex flex-col md:flex-row-reverse py-5 mb-3 gap-3 md:gap-10 lg:gap-14 lg:items-center'}>
            <img src={ProfileImg} alt={'Profile Image'}
                 className={'rounded-xl h-72 object-cover lg:w-3/5 md:h-[20rem] lg:h-[32rem]'}/>
            <div className={'flex flex-col gap-1 lg:gap-3'}>
                <h1 className={'text-3xl lg:text-5xl font-bold leading-1 text-[#303841] text-justify'}>Hello, I'm <br
                    className={'lg:hidden'}/><Typewritter text={'Bariq Firjatullah'} delay={100} infinite/>
                </h1>
                <p className={'text-lg lg:text-3xl font-light leading-1 text-[#3A4750] text-justify'}>I am a web
                    developer with a
                    keen interest in app development. I am excited to utilize my skills and experience to develop
                    innovative applications.</p>
                <div className={'flex flex-col gap-5'}>
                    <div className={'flex flex-row gap-3'}>
                        <Button variant={'primary'}>My Works</Button>
                        <Button variant={'outline'}>More About Me</Button>
                    </div>
                    <div className={'flex flex-row flex-wrap gap-3 justify-around lg:justify-start'}>
                        <div className={'flex flex-row items-center gap-2'}>
                            <BiLogoHtml5 className={'text-4xl text-[#303841]'}/>
                            <span className={'font-semibold text-[#303841] text-md lg:text-xl'}>HTML</span>
                        </div>
                        <div className={'flex flex-row items-center gap-2'}>
                            <BiLogoCss3 className={'text-4xl text-[#303841]'}/>
                            <span className={'font-semibold text-[#303841] text-md lg:text-xl'}>CSS</span>
                        </div>
                        <div className={'flex flex-row items-center gap-2'}>
                            <BiLogoJavascript className={'text-4xl text-[#303841]'}/>
                            <span className={'font-semibold text-[#303841] text-md lg:text-xl'}>Javascript</span>
                        </div>
                        <div className={'flex flex-row items-center gap-2'}>
                            <FaPhp className={'text-4xl text-[#303841]'}/>
                            <span className={'font-semibold text-[#303841] text-md lg:text-xl'}>PHP</span>
                        </div>
                        <div className={'flex flex-row items-center gap-2'}>
                            <DiMysql className={'text-4xl text-[#303841]'}/>
                            <span className={'font-semibold text-[#303841] text-md lg:text-xl'}>MySQL</span>
                        </div>
                        <div className={'flex flex-row items-center gap-2'}>
                            <FaLaravel className={'text-4xl text-[#303841]'}/>
                            <span className={'font-semibold text-[#303841] text-md lg:text-xl'}>Laravel</span>
                        </div>
                        <div className={'flex flex-row items-center gap-2'}>
                            <DiCodeigniter className={'text-3xl text-[#303841]'}/>
                            <span className={'font-semibold text-[#303841] text-md lg:text-xl'}>Codeigniter</span>
                        </div>
                        <div className={'flex flex-row items-center gap-2'}>
                            <BiLogoReact className={'text-4xl text-[#303841]'}/>
                            <span className={'font-semibold text-[#303841] text-md lg:text-xl'}>React</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section ref={recentWorksRef} id={'recent-works'}
                 className={'container bg-[#F6C90E] flex flex-col gap-4 py-5 mb-3 rounded-xl'}>
            <h1 className={'text-4xl lg:text-6xl font-extrabold lg:font-bold leading-1 text-[#303841] text-justify'}>Recent
                works</h1>
            <div className={'flex flex-col gap-5 lg:gap-10'}>
                {recentWorks.map((item => {
                    const isReverse = (item.id % 2 === 0) ? 'lg:flex-row-reverse' : 'lg:flex-row';
                    return (
                        <div key={item.id}
                             className={`w-full flex flex-col ${isReverse} lg:items-top gap-2 lg:gap-10`}>
                            <img src={item.image} alt={item.title}
                                 className={'rounded-xl w-full lg:w-1/2 object-cover object-top shadow-xl'}/>
                            <div className={'flex flex-col gap-4'}>
                                <div className={'flex flex-col gap-1'}>
                                    <h1 className={'text-3xl lg:text-5xl font-semibold text-[#303841]'}>{item.title}</h1>
                                    <p className={'font-normal text-[#3A4750] lg:text-xl leading-tight text-justify'}>{item.description}</p>
                                </div>
                                <a href={item.url}>
                                    <Button variant={'outline'} className={'lg:w-52'}>View Project</Button>
                                </a>
                            </div>
                        </div>
                    );
                }))}
                <div className={'text-center font-bold flex flex-row justify-center items-center gap-3'}>
                    <p>View more</p>
                    <FaArrowRightLong/></div>
            </div>
        </section>
        <section ref={contactRef} id={'contact'}
                 className={'container bg-[#EEEEEE] flex flex-col lg:flex-row gap-3 lg:gap-10 mb-3 py-4 '}>
            <div className={'flex flex-col gap-2 lg:w-1/2'}>
                <h1 className={'font-extrabold lg:font-bold text-3xl lg:text-4xl text-[#303841]'}>Contact</h1>
                <p className={'font-normal leading-tight text-lg lg:text-xl text-justify text-[#3A4750]'}>Thank you for
                    visiting my
                    site. If
                    you have any further questions, please feel free to contact
                    me, I will reply as soon as possible</p>
                <div className={'flex flex-col gap-1'}>
                    <a href={'mailto:bariqfirjatullah1803@gmail.com'} target={'_blank'}
                       className={'flex flex-row gap-2 items-center'} rel="noreferrer">
                        <AiOutlineMail className={'text-2xl text-[#303841]'}/>
                        <span className={'font-semibold text-lg text-[#303841]'}>bariqfirjatullah1803@gmail.com</span>
                    </a>
                    <a href={'https://github.com/bariqfirjatullah1803'} target={"_blank"}
                       className={'flex flex-row gap-2 items-center'} rel="noreferrer">
                        <AiFillGithub className={'text-2xl text-[#303841]'}/>
                        <span className={'font-semibold text-lg text-[#303841]'}>bariqfirjatullah1803</span>
                    </a>
                    <a href={'https://www.linkedin.com/in/bariq-firjatullah-726976212/'} target={'_blank'}
                       className={'flex flex-row gap-2 items-center'} rel="noreferrer">
                        <AiFillLinkedin className={'text-2xl text-[#303841]'}/>
                        <span className={'font-semibold text-lg text-[#303841]'}>Bariq Firjatullah</span>
                    </a>
                </div>
            </div>
            <div className={'flex flex-col gap-3 lg:w-1/2'}>
                <h1 className={'font-bold text-3xl text-[#303841]'}>Notify me,</h1>
                <form className={'flex flex-col gap-3 w-full'}>
                    <div className={'flex flex-row gap-3'}>
                        <input type={'text'} className={'w-full rounded-xl px-3 py-2'} placeholder={'Name'}/>
                        <input type={'text'} className={'w-full rounded-xl px-3 py-2'} placeholder={'Email'}/>
                    </div>
                    <textarea className={'w-full rounded-xl px-3 py-2'} rows={5} placeholder={'Messages'}></textarea>
                    <Button variant={'primary'}>Send Message</Button>
                </form>
            </div>
        </section>
        <div className={'container my-3 border-t-[1px] border-t-[#3A4750]'}>
            <p className={'text-[#3A4750]'}>Copyright © 2023 Bariq Firjatullah. All rights reserved.</p>
        </div>
    </>)
}

export default App
