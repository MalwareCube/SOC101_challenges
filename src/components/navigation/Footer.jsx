const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="container">
                <p className="footer_info">This website is part of the <b>SOC 101</b> training course at <a href="https://academy.tcm-sec.com/" rel="noreferrer" target="_blank">TCM Academy</a>.</p>
                <p className="footer_copyright">&copy; <a href="https://tcm-sec.com/" rel="noreferrer" target="_blank">TCM Security</a>, Inc. {currentYear}</p>
            </div>
        </div>
    );
};

export default Footer;
