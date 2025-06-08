import Layout from '../templates/Layout';
import Reservation_Form from '../components/Reservation_Form';
import Container from 'react-bootstrap/Container';
import "../assets/css/pages/Reservation.css";


function Reservation(){
    return (
        <Layout>
            <Container className="reservation-container">
                <h1>Reserve a table</h1>
                <p>Please fill the form below to reserve a table.</p>
                <Reservation_Form />
            </Container>

        </Layout>
    );
}

export default Reservation;