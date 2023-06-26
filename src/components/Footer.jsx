import React from 'react'

const Footer = () => {
    const footerLinks = (element) => {
        const allfooter = document.querySelectorAll(".footerLinks");
        console.log(allfooter);
        switch (element) {
            case 0:
                allfooter.forEach((item, index) => (index === 0) ? (item.style.opacity = 1) : (item.style.opacity = 0.2));
                break;
            case 1:
                allfooter.forEach((item, index) => (index == 1) ? (item.style.opacity = 1) : (item.style.opacity = 0.2));
                break;
            case 2:
                allfooter.forEach((item, index) => (index === 2) ? (item.style.opacity = 1) : (item.style.opacity = 0.2));
                break;
            case 3:
                allfooter.forEach((item, index) => (index === 3) ? (item.style.opacity = 1) : (item.style.opacity = 0.2));
                break;
            case 4:
                allfooter.forEach((item, index) => (index === 4) ? (item.style.opacity = 1) : (item.style.opacity = 0.2));
                break;
            case 5:
                allfooter.forEach((item, index) => (index === 5) ? (item.style.opacity = 1) : (item.style.opacity = 0.2));
                break;
            default:
                allfooter.forEach((item, index) => (item.style.opacity = 1));
                break;
        }
    }
    const linksNormal = () => {
        const allfooter = document.querySelectorAll(".footerLinks");
        allfooter.forEach((item, index) => (item.style.opacity = 1));
    }
    return (
        <>
            <footer>
                <h1>
                    let's
                    <br />
                    #connectOnCutting?
                </h1>
                <aside onMouseLeave={linksNormal}>
                    <a href="/" className='footerLinks' onMouseOver={() => footerLinks(0)} data-cursorpointermini={true}>Home</a>
                    <a href="/story" className='footerLinks' onMouseOver={() => footerLinks(1)} data-cursorpointermini={true}>story</a>
                    <a href="/media" className='footerLinks' onMouseOver={() => footerLinks(2)} data-cursorpointermini={true}>Media</a>
                    <a href="/franchise" className='footerLinks' onMouseOver={() => footerLinks(3)} data-cursorpointermini={true}>Franchise</a>
                    <a href="/event" className='footerLinks' onMouseOver={() => footerLinks(4)} data-cursorpointermini={true}>Event</a>
                    <a href="/chaiwalacares" className='footerLinks' onMouseOver={() => footerLinks(5)} data-cursorpointermini={true}>ChaiWalacares</a>
                </aside>
                <div>
                    <h5>Email</h5>
                    <a href=" mailto: info@mbachaiwala.com">Info@mbachaiwala.com</a>
                    <a href=" mailto: franchise@mbachaiwala.com">franchise@mbachaiwala.com</a>
                </div>
                <div>
                    <h5>Phone</h5>
                    <a href=" tel: +91722905222">+91722905222</a>

                </div>
                <p>© COPYRIGHT 2023 MBA CHAIWALA.MADE BY </p>
            </footer>
            <div className='Footer'></div>
        </>
    )
}

export default Footer