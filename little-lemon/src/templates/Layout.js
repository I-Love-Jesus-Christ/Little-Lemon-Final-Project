import Navigation from '../components/Navigation';
import Main from '../components/Main';
import Footer from '../components/Footer';

function Layout({children}){
    return (<>
        <Navigation />
        <Main>{children}</Main>
        <Footer />
    </>)

}
export default Layout;