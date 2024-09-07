import { Footer, FooterCopyright, FooterLinkGroup } from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

export function MyFooter() {
    return (
        <Footer container className="mt-12">
            <FooterCopyright href="/" by="Vincent Liu" year={2023} />
            <FooterLinkGroup className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="mailto:usmrbug@gmail.com" icon={BiLogoGmail} target="_blank"/>
                <Footer.Icon href="https://www.linkedin.com/in/vincent6l56/" icon={BsLinkedin} target="_blank"/>
                <Footer.Icon href="https://github.com/GitBugKing" icon={BsGithub} target="_blank" />
            </FooterLinkGroup>
        </Footer>
    );
}
