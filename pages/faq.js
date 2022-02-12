//import { useEffect, useState } from "react";
import Link from "../src/components/Link";

export async function getStaticProps() {
    const apiUrl = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
        
    const faq = await fetch(apiUrl)
        .then(res => res.json())
        .then(res => res);

    return {
      props: {
        faq
      }, 
    }
  }

const FAQ = ({ faq }) => {

    //const [faq, setFaq] = useState([]);
//
    //useEffect(() => {
    //    const apiUrl = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    //    
    //    fetch(apiUrl)
    //        .then(res => res.json())
    //        .then(res => setFaq(res));
    //}, []);
    
    console.log(faq);
    return(
        <div>
            <h1>Alura Cases - Pagina de Perguntas FAQ</h1>
            <Link url='/home'>
                Ir para a Home
            </Link>
            <ul>
                { faq.map(item => (
                    <li>
                        <article>
                            <h2>{ item.question }</h2>
                            <p>{ item.answer }</p>
                        </article>
                    </li>
                )) }
            </ul>
        </div>
    );
}

export default FAQ;