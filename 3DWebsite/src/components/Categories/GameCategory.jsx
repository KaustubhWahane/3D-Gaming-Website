import { gameCategories } from './gameData';
import { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="d-flex">
      <div className="w-25 pt-20 mt-20">
        {Object.keys(gameCategories).map(category => (
          <div key={category} className="mb-4">
            <h3
              className="font-bold cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </h3>
          </div>
        ))}
      </div>
      <div className="w-75 pt-20 mt-20">
        {selectedCategory && (
          <div>
            <h3>{selectedCategory}</h3>
            <Row>
              {gameCategories[selectedCategory].map(game => (
                <Col key={game} md={4} className="mb-4">
                 <Card className="w-100" style={{ height: '300px' }}>
              <Card.Body className="d-flex align-items-center justify-content-center">
                <Card.Title>{game}</Card.Title>
              </Card.Body>
            </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
    </div>
  );
}
