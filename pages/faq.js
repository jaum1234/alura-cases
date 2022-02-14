import FAQScreen from "../src/components/screens/FAQScreen";

export default FAQScreen;

/**
 *  getStaticProps: Roda somente em build time -- SSG - Static Site Generation
 *  getServerSideProps: Roda a cada acesso que voce recebe -- SSR - Server Side Redner
 * 
 *  Em modo dev, ambas sempre rodam.
 */

export async function getStaticProps() {
    console.log('rodando no build')
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

