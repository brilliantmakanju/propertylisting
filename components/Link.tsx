import Link from "next/link";

interface LinkProps {
  link?: string;
  title?: string;
  style?: string;
}

const Links: React.FC<LinkProps> = ({ link, title, style }) => {
    return(
        <Link className={`${style}`} href={`${link}`} >
            {title}
        </Link>
    )
}

export default Links
