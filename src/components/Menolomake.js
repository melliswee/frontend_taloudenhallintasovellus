import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Menolomake(props) {

    const [meno, setValues] = useState( { id: '0', maara: '', kohde: {menotyyppiId: '0', menotyyppiNimi: '', tarkennus: ''}, pvm: '' } );


    const muuta = (e) => {
        setValues( {
            ...meno, [e.target.name]: e.target.value
        });
    }

    const lisaaSuoritus = (e) => {
        e.preventDefault();
        setValues({id: '0', maara: '', kohde: {menotyyppiId: '0', menotyyppiNimi: '', tarkennus: ''}, pvm: '' });
    }

    return (
        <div>
        <Form >
            <Form.Group controlId='formBasicMaara'>
                <Form.Label htmlFor='maara'>Määrä </Form.Label>
                <input type='text' name='maara' value = { meno.maara }
                    onChange={ (e) => muuta(e)} /><br />
            </Form.Group>
            <Form.Group controlId='formBasicMenotyyppiNimi'>
                <Form.Label htmlFor='menotyyppiNimi'>Menotyyppi </Form.Label>
                <input type='text' name='menotyyppiNimi' value = { meno.kohde.menotyyppiNimi }
                    onChange={ (e) => muuta(e)} /><br />
            </Form.Group>
            <Form.Group controlId='formBasicTarkennus'>
                <Form.Label htmlFor='tarkennus'>Tarkennus </Form.Label>
                <input type='text' name='tarkennus' value = { meno.kohde.tarkennus }
                    onChange={ (e) => muuta(e)} /><br />
            </Form.Group>
            <Form.Group controlId='formBasicPvm'>
                <Form.Label htmlFor='pvm'>Päivämäärä </Form.Label>
                <input type='text' name='pvm' value = { meno.pvm }
                    onChange={ (e) => muuta(e)} /><br />
            </Form.Group>
            <input type='submit' value='Lisää' onClick={ (e) => lisaaSuoritus(e) }/>
        </Form>
        <p></p>
        </div>
    );
}

export default Menolomake;