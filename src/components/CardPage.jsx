import React from 'react';
import { Card } from 'react-bootstrap';

const CardPage = () => {
    return (
        <Card>
            <Card.Header>Visit More LinkedIn Products</Card.Header>
            <Card.Body className='d-flex align-items-center justify-content-between'>
                <Card.Link href="https://www.linkedin.com/learning/?trk=nav_neptune_learning&" className="work-link text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-supported-dps="40x40" width="40" height="40" focusable="false">
                        <defs>
                            <linearGradient id="app-learning-@1-a" x1="7.18" y1="6.98" x2="13.8" y2="20.22" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#33aada"></stop>
                                <stop offset="1" stopColor="#0091ca"></stop>
                            </linearGradient>
                            <linearGradient id="app-learning-@1-b" x1="12.96" y1="-17.55" x2="27.9" y2="24.33" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#665ed0"></stop>
                                <stop offset="1" stopColor="#0073b1"></stop>
                            </linearGradient>
                        </defs>
                        <path d="M20 30H8a1 1 0 01-1-1V11a1 1 0 011-1h12v20z" fill="url(#app-learning-@1-a)"></path>
                        <path d="M20 10h12a1 1 0 011 1v18a1 1 0 01-1 1H20V10z" fill="url(#app-learning-@1-b)"></path>
                        <path fill="#33aada" d="M9 19h8v2H9zM9 23h8v2H9zM9 15h8v2H9z"></path>
                        <path fill="#006097" d="M23 19h8v2h-8zM23 23h8v2h-8zM23 15h8v2h-8z"></path>
                        <path d="M17.41 15.25l7.46 4.52a.27.27 0 010 .46l-7.46 4.52a.27.27 0 01-.41-.23v-9a.27.27 0 01.41-.27z" fill="#fff"></path>
                    </svg>
                    <p>Learning</p>
                </Card.Link>
                <Card.Link href="https://business.linkedin.com/talent-solutions/talent-insights" className="work-link text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-supported-dps="40x40" width="40" height="40" focusable="false">
                        <defs>
                        <linearGradient id="app-talent-insights-medium-a" x1="34.05" y1="44.47" x2="13.67" y2="19.5" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#665ed0"></stop>
                            <stop offset="1" stopColor="#0073b1"></stop>
                        </linearGradient>
                        </defs>
                        <path d="M25 6H10a1 1 0 00-1 1v25a1 1 0 001 1h20a1 1 0 001-1V12z" fill="#caedff"></path>
                        <path fill="#65c3e8" d="M25 6v6h6l-6-6z"></path>
                        <path d="M20 19a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v12h6zm8 11v-8h-5v9h4a1 1 0 001-1zm-17-5H9v5a1 1 0 001 1h4z" fill="url(#app-talent-insights-medium-a)"></path>
                    </svg>
                    <p>Insights</p>
                </Card.Link>
                <Card.Link href="https://www.linkedin.com/talent/post-a-job?trk=nav_app_launcher_job_post_nept&" className="work-link text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-supported-dps="40x40" width="40" height="40" focusable="false">
                        <defs>
                            <linearGradient id="app-jobs-posting-@1-a" x1="-6.68" y1="-1" x2="25.05" y2="26.36" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#665ed0"></stop>
                                <stop offset="1" stopColor="#0073b1"></stop>
                            </linearGradient>
                        </defs>
                        <path fill="none" stroke="#caedff" strokeMiterlimit="10" strokeWidth="2" d="M20 8.67l-4 6.66M20 8.67l4 6.66"></path>
                        <rect x="8" y="14" width="24" height="16" rx="1" ry="1" fill="url(#app-jobs-posting-@1-a)"></rect>
                        <path fill="#65c3e8" d="M12 18h16v3H12z"></path>
                        <path fill="#33aada" d="M15 23h10v3H15z"></path>
                        <circle cx="20" cy="9" r="2" fill="#65c3e8"></circle>
                    </svg>
                    <p>Post a job</p>
                </Card.Link>
                <Card.Link href="https://www.linkedin.com/campaignmanager/new-advertiser" className="work-link text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-supported-dps="40x40" width="40" height="40" focusable="false">
                        <defs>
                            <linearGradient id="app-ads-@1-a" x1="34.78" y1="3.84" x2="14.66" y2="25.84" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#665ed0"></stop>
                                <stop offset="1" stopColor="#0073b1"></stop>
                            </linearGradient>
                        </defs>
                        <g fill="url(#app-ads-@1-a)">
                        <path d="M20 11.88A8.13 8.13 0 1111.88 20 8.13 8.13 0 0120 11.88M20 9a11 11 0 1011 11A11 11 0 0020 9z"></path>
                        <circle cx="20" cy="20" r="4"></circle>
                        </g>
                        <circle cx="20" cy="20" r="2" transform="rotate(-45 20.002 19.995)" fill="#33aada"></circle>
                        <path fill="#33aada" d="M24.246 12.932l2.829 2.828-5.657 5.657-2.828-2.829z"></path>
                        <path fill="#33aada" d="M29.19 16.46l-4.95-.7-.7-4.95 4.94-4.95L29 11l5.14.52-4.95 4.94z"></path>
                    </svg>
                    <p>Advertise</p>
                </Card.Link>
            </Card.Body>
        </Card>
    );
}

export default CardPage;
