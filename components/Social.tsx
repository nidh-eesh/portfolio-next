import Link from "next/link"
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"

type SocialLink = {
    icon: React.ReactElement;
    path: string;
};

type SocialProps = {
    containerStyles?: string;
    iconStyles?: string;
};

const socials:SocialLink[] = [
    { icon: <FaGithub />, path:"https://github.com/nidh-eesh" },
    { icon: <FaLinkedin />, path:"https://www.linkedin.com/in/nidheesh-p/" },
    { icon: <FaTwitter />, path:"https://x.com/nidh_eesh_" },
];

const Social: React.FC<SocialProps> = ({containerStyles, iconStyles}) => {
    return(
        <div className={containerStyles}>
            {socials.map((item, index)=> {
                return(
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social