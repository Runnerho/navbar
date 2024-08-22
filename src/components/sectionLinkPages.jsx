import { Link } from 'react-router-dom';
import imageRent from '../assets/images/apartment.jpg';
import imageFood from '../assets/images/food.jpg';
import imagePay from '../assets/images/pay.jpg';
import imagePro from '../assets/images/proman.jpg';
import styles from './sectionLinkPages.module.css';

const pageListDetail = [
    {title:'izyRent', paragraph: 'Search for a home to rent, pay for your rent in installment. Easily make maintenance reports, give feedbacks, rate your property manager and landlord. Enjoy installment payment on products and services.',image:imageRent , id:1},
    {title: 'izyFood' , paragraph: 'In publishing and graphic design, Lorem ipsumis a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.', image: imageFood , id:2},
    {title: 'izyProman' , paragraph: 'List your residential rentals, advertise, accept payments and automatically generate and track Tenants payment. Manage tenants screening, agreements and Legal notices.',image: imagePro , id:3},
    {title: 'izyPay' , paragraph: 'In publishing and graphic design, Lorem ipsumis a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.', image: imagePay , id:4}
]

export default function LinkPages(){
    return(
        <>
            <h2>Your Peace Of Mind, Our Priority</h2>
            <section className={styles.section_link_page}>
            {pageListDetail.map(item => (
                <div className={styles.detail_link_page} key={item.id}>
                    <img src={item.image}/>
                    <h3>{item.title}</h3>
                    <p>{item.paragraph}</p>
                    <Link to={`/${item.title}`} className={styles.link}>learn more</Link>
                </div>
            ))}
            </section>
        </>
    )
}