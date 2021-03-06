import { Grid } from "@material-ui/core";
import React from "react";
import "./footer.scss";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import CodeIcon from "@material-ui/icons/Code";
import MyButton from "../Buttons/Button";
const Footer = () => {
    return (
        <>
            <Grid container>
                <div className="footer-container">
                    <div className="footer-social-wrapper">
                        {Data.map((item) => {
                            return (
                                <a
                                    key={item.id}
                                    href={item.src}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="footer-social-icon"
                                >
                                    {item.icon}
                                </a>
                            );
                        })}
                    </div>
                    <h1 className="saysomthing">-let's be in touch-</h1>
                    <div className="footer-email-subscribe">
                        <form method="post" id="footer-form">
                            <label htmlFor="email" id="footer-email-label">
                                Email
                            </label>
                            <input
                                maxLength="50"
                                autoComplete="false"
                                type="email"
                                id="footer-email-input"
                                name="email"
                                placeholder="subscribe for latest collections"
                            />
                            <div className="submit-footer-form-btn">
                                <MyButton mySize="0.8" color="red">
                                    subscribe
                                </MyButton>
                            </div>
                        </form>
                    </div>
                    <div className="footer-contact-info">
                        <span>
                            <h5>Phone : </h5>
                            <p>0123456789</p>
                        </span>
                        <span>
                            <h5>Address : </h5> <p>London - 22 Bake Street</p>
                        </span>
                        <span>
                            <h5>Email : </h5> <p>contact@f&co.com</p>
                        </span>
                    </div>
                    <div className="footer-outro">
                        <span>&lt; &gt;</span>
                        <p>
                            &copy; 2021-
                            <a
                                href="https://www.faeztgh.github.io"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Faez Tgh
                            </a>
                        </p>
                        <span>&lt; / &gt;</span>
                    </div>
                </div>
            </Grid>
        </>
    );
};

export default Footer;

export const Data = [
    {
        id: 0,
        name: "facebook",
        src: "https://www.facebook.com",
        icon: <FacebookIcon fontSize="large" color="primary" />,
    },
    {
        id: 2,
        name: "youtube",
        src: "https://www.youtube.com",
        icon: <YouTubeIcon fontSize="large" color="secondary" />,
    },
    {
        id: 1,
        name: "instagram",
        src: "https://www.instagram.com",
        icon: <InstagramIcon fontSize="large" color="inherit" />,
    },
    {
        id: 3,
        name: "pinterest",
        src: "https://www.pinterest.com",
        icon: <PinterestIcon fontSize="large" color="secondary" />,
    },
    {
        id: 4,
        name: "twitter",
        src: "https://www.twitter.com",
        icon: <TwitterIcon fontSize="large" color="primary" />,
    },
];
