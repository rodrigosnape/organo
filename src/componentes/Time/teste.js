import React from 'react';
import './Time.css';

interface TimeProps {
    corPrimaria: string;
    corSecundaria: string;
    nome: string;
}

const Time: React.FC<TimeProps> = (props) => {
    const css = {
        backgroundColor: props.corSecundaria
    };

    return (
        <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    );
}

export default Time;
