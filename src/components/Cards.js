import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import carddata from '../components/cards-data'
import './styles/Cards.css'

function GridExample() {
    const {id , Text}=carddata;
    return (
        <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 8}).map((item, idx) => (
                <Col>
                
                    <Card className='cards'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title className='heading'>Card title{item}</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default GridExample;