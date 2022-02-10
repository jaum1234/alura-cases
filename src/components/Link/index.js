import NextLink from 'next/link';

const Link = ({ children, url, ...props }) => {
    return(
        <NextLink href={ url } passHref>
            <a {...props}>{ children }</a>
        </NextLink>
    );
}

export default Link;