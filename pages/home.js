import Link from "../src/components/Link";


const Title = ({children, as}) => {
    const Tag = as;
    return(
        <>
            <Tag>    
                { children }
            </Tag>
            <style jsx>{`
                ${Tag} {
                    color: red;
                    font-weight: bold;
                }
            `}</style>
        </>
    );
}

const HomePage = () => {
    return(
        <div>
            <Title as='h1'>Alura Cases</Title>
            <Link url='/faq'>
                Ir para o FAQ
            </Link>
        </div>
    )
}

export default HomePage;