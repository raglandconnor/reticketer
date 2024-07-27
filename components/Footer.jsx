import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center pt-96 pb-12">
      <div className="flex-col justify-center items-center">
        <div className="flex-row justify-between items-center md:w-[720px] lg:w-[860px] xl:w-[920px] border-t-2 pt-10">
          <div className="flex flex-row items-center justify-between mb-2">
            <Link
              href="/"
              className="text-lg font-semibold text-foreground mr-4"
            >
              Reticketer
            </Link>
            <div>
              <ul className="flex flex-row items-center text-sm text-muted-foreground">
                <li className="mr-6 scale-150 hover:text-black cursor-pointer">
                  {/* Place repo link once public */}
                  <a href="" target="_blank">
                    <FaGithub />
                  </a>
                </li>
                <li className="mr-4">Created by:</li>
                <li className="mr-4">
                  <a
                    href=""
                    target="_blank"
                    className="hover:underline hover:text-black"
                  >
                    Adithya
                  </a>
                </li>
                <li className="mr-4">
                  <a
                    href=""
                    target="_blank"
                    className="hover:underline hover:text-black"
                  >
                    Angelina
                  </a>
                </li>
                <li className="mr-4">
                  <a
                    href="https://www.raglandconnor.com/"
                    target="_blank"
                    className="hover:underline hover:text-black"
                  >
                    Connor
                  </a>
                </li>
                <li className="mr-4">
                  <a
                    href=""
                    target="_blank"
                    className="hover:underline hover:text-black"
                  >
                    Jorge
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-muted-foreground">
            © All rights reserved. 2024-present.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
