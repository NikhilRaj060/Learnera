import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ChatBot from "./ChatBot";
import Whatsapp from "./Whatsapp";
import LINKS from '../../Utils/footer'

const currentYear = new Date().getFullYear();

function Footer() {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);

  const openChatBot = () => {
    setIsChatBotOpen(true);
  };

  const closeChatBot = () => {
    setIsChatBotOpen(false);
  };

  return (
    <>
      <footer className="relative w-full bg-black pt-12 pb-6 text-white">
        <div className="mx-auto w-full px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-sm:px-8">
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <img alt="logo" src="/Image/logo.png" className="w-12" />
                <Typography variant="h2">Learnera</Typography>
              </div>
              <Typography variant="paragraph" className="mt-4 text-sm">
                Learnera offers you the opportunity to learn without limits -
                all the Upskilling Courses, Placement Preparation, and Various
                Certification Courses on a single platform. Our Platform
                includes Video-based learning, Practice Exercises, and a
                personalized learning module that empowers learners with the
                ability to study at their own pace without any limitations. We
                offer 20+ Upskilling Courses, 200+ Placement Preparation
                materials, and 20+ Certification Courses.
              </Typography>
            </div>

            <div className="grid grid-cols-1 max-sm:justify-center sm:grid-cols-2 md:grid-cols-3 text-white gap-4">
              {LINKS.map(({ title, items }) => (
                <div key={title} className="text-center">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-3 text-white text-lg uppercase font-semibold"
                  >
                    {title}
                  </Typography>
                  <ul>
                    {items.map(({ label, url }) => (
                      <li key={label}>
                        <NavLink
                          to={url}
                          className="py-1.5 font-normal text-white transition-colors hover:text-blue-gray-600"
                        >
                          {label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <Whatsapp onOpenChatBot={openChatBot} />
            {isChatBotOpen && <ChatBot onClose={closeChatBot} />}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography
              variant="small"
              className="mb-4 text-center text-white font-normal md:mb-0"
            >
              &copy; {currentYear}{" "}
              <Link to="/">Learnera Tech (OPC) Private Limited</Link>. All
              Rights Reserved.
            </Typography>

            <div className="flex gap-4 sm:justify-center">
              <Typography as="a" href="https://www.linkedin.com/company/Learnera" target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                <svg className="h-5 w-5 hover:opacity-100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M20.447 20.452H16.905V15.84c0-1.1-.023-2.515-1.535-2.515-1.536 0-1.772 1.2-1.772 2.438v4.69H9.087V9h3.404v1.56h.049c.475-.901 1.633-1.85 3.358-1.85 3.594 0 4.256 2.364 4.256 5.448v6.295zM5.337 7.433c-1.097 0-1.987-.889-1.987-1.986 0-1.097.89-1.986 1.987-1.986 1.097 0 1.987.89 1.987 1.986 0 1.097-.89 1.986-1.987 1.986zm1.785 13.019H3.552V9h3.57v11.452H7.122zM22.225 0H1.771C.791 0 0 .79 0 1.771v20.456C0 23.209.791 24 1.771 24h20.454C23.209 24 24 23.209 24 22.227V1.771C24 .79 23.209 0 22.225 0z"
                  />
                </svg>
              </Typography>
              <Typography as="a" href="https://instagram.com/Learnera" target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                <svg className="h-5 w-5 hover:opacity-100" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 186.4c-39.6 0-71.6-32-71.6-71.6s32-71.6 71.6-71.6 71.6 32 71.6 71.6-32 71.6-71.6 71.6zm146.4-194.3c0 14.9-12.1 27-27 27-14.9 0-27-12.1-27-27s12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-1.7-35.7-9.9-67.4-36.2-93.7s-58-34.5-93.7-36.2c-37.1-2.1-148.4-2.1-185.5 0-35.7 1.7-67.4 9.9-93.7 36.2s-34.5 58-36.2 93.7c-2.1 37.1-2.1 148.4 0 185.5 1.7 35.7 9.9 67.4 36.2 93.7s58 34.5 93.7 36.2c37.1 2.1 148.4 2.1 185.5 0 35.7-1.7 67.4-9.9 93.7-36.2s34.5-58 36.2-93.7c2.1-37.1 2.1-148.4 0-185.5zM398.8 388c-7.8 19.7-23.1 35-42.9 42.9-29.7 11.8-100.2 9-133.9 9s-104.2 2.7-133.9-9c-19.7-7.8-35-23.1-42.9-42.9-11.8-29.7-9-100.2-9-133.9s-2.7-104.2 9-133.9c7.8-19.7 23.1-35 42.9-42.9 29.7-11.8 100.2-9 133.9-9s104.2-2.7 133.9 9c19.7 7.8 35 23.1 42.9 42.9 11.8 29.7 9 100.2 9 133.9s2.7 104.2-9 133.9z"
                  />
                </svg>
              </Typography>
              <Typography as="a" href="https://twitter.com/Learnera" target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                <svg className="h-5 w-5 hover:opacity-100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
