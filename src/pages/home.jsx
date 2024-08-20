import Header from "../components/header";
import TitlePage from "../components/titlePage";
import TitleImg from '../assets/images/hamed (2).jpg'
import SupportedBy from "../components/supported";

export default function Home(){
    return(
        <>
            <Header/>
            <TitlePage imageSource={TitleImg} bgcolor={'rgb(3, 6, 54)'} highlightColor={'rgb(6, 12, 101)'} height={'350px'} Children={
                <>
                    <h1>Home page</h1>
                    <div>In publishing and graphic design, Lorem ipsumis a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.</div>
                </>
            }/>
            <SupportedBy/>
            <TitlePage imageSource={TitleImg} dir={'row-reverse'} bgcolor={'transparent'} highlightColor={'rgb(111 111 111 / 27%)'} height={'350px'} Children={
                <>
                    <h1>We are making living easy!</h1>
                    <div>In publishing and graphic design, Lorem ipsumis a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.</div>
                </>
            }/>
        </>
    )
}