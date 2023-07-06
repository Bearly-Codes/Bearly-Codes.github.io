import './App.css';
import React from 'react';
import './Resources/Bootstrap/bootstrap-5.3.0-dist/css/bootstrap.css';

const Footer = ({isLit}) => {
    return (
        <div className="footer">
            <h2 className={isLit ? 'footer-header light-up' : 'footer-header'}>I'd Love To Connect</h2>
            <div>
                <p className="footer-description">Emails regarding internships, opportunities, questions, or Nigerian princes
                    willing to transfer large amounts of money are welcome at&nbsp;
                    <a className="inline-link" href="mailto:bogann@purdue.edu">bogann@purdue.edu</a>
                    &nbsp;or&nbsp;
                    <a className="inline-link" href="mailto:nickabogan@gmail.com">nickabogan@gmail.com</a>.</p>

            </div>
        </div>
    );
}

export default Footer;