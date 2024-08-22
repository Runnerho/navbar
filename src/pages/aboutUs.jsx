import Header from "../components/header";
import TitlePage from "../components/titlePage";
import TitleImg from '../assets/images/Hamed.jpg';
import ComunityImg from '../assets/images/community.jpg'
import SupportedBy from "../components/supported";
import Footer from "../components/footer";

export default function AboutUs(){
    return(
        <>
            <Header/>
            <TitlePage imageSource={TitleImg} dir={'row'} bgcolor={'rgb(3, 6, 54)'} highlightColor={'rgb(6, 12, 101)'} height={'450px'} Children={
                <>
                    <h1>About Us page</h1>
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
            <TitlePage imageSource={TitleImg} dir={'row'} bgcolor={'transparent'} highlightColor={'rgb(111 111 111 / 27%)'} height={'350px'} Children={
                <>
                    <h1>We are making living easy!</h1>
                    <div>In publishing and graphic design, Lorem ipsumis a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.</div>
                </>
            }/>
            <TitlePage imageSource={TitleImg} dir={'row-reverse'} bgcolor={'transparent'} highlightColor={'rgb(111 111 111 / 27%)'} height={'350px'} Children={
                <>
                    <h1>We are making living easy!</h1>
                    <div>In publishing and graphic design, Lorem ipsumis a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.</div>
                </>
            }/>
            <TitlePage imageSource={ComunityImg} dir={'row'} bgcolor={'rgb(3, 6, 54)'} highlightColor={'rgb(6, 12, 101)'} height={'350px'} Children={
                <>
                    <h1>Join Our Community</h1>
                    <p>We reduce cost of living and help you meet your most important living expectations by increasing izy access to all the necessary resources needed to improve living standards.</p>
                </>
            }/>
            <Footer/>
        </>
    )
}