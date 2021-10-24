import React from 'react';
import { Card } from 'antd';
import './Card.css';

const { Meta } = Card;

function CardCmp(props) {
    return (
        <div className='CardCmp'>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </div>

    );
}

export default CardCmp;
