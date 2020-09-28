import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

//lomakkeessa pitäisi olla syötteen tarkistus jotta saadaan vain oikeanlaisia tietoja lisättyä
//pitää keksiä tapa saada seuraava uniikki id lisättävälle riville

function Menolomake() {

    const [meno, setValues] = useState( { id: '0', maara: '', kohde: {menotyyppiId: '0', menotyyppiNimi: '', tarkennus: ''}, pvm: '' } );


    const muuta = (e) => {
        setValues( {
            ...meno, [e.target.name]: e.target.value
        });
    }

    const muutaKohdeNimi = (e) => {
        var uusiKohde = { menotyyppiNimi: e.target.value, tarkennus: meno.kohde.tarkennus }
        setValues( {
            ...meno,  kohde: uusiKohde
        });
    }

    const muutaKohdeTarkennus = (e) => {
        var uusiKohde = { menotyyppiNimi: meno.kohde.menotyyppiNimi, tarkennus: e.target.value }
        setValues( {
            ...meno,  kohde: uusiKohde
        });
       
    }

    const lisaaMeno = (e) => {
        e.preventDefault();
        //tässä vain tyhjennetään lomake
        setValues({id: '0', maara: '', kohde: {menotyyppiId: '0', menotyyppiNimi: '', tarkennus: ''}, pvm: '' });
    }

    return (
        <div>
        <Form >
            <Form.Group controlId='formBasicMaara'>
                <Form.Label htmlFor='maara'>Määrä </Form.Label><br/>
                <input type='text' name='maara' value = { meno.maara }
                    onChange={ (e) => muuta(e)} /><br />
            </Form.Group>
            <Form.Group controlId='formBasicMenotyyppiNimi'>
                <Form.Label htmlFor='menotyyppiNimi'>Menotyyppi </Form.Label><br/>
                <input type='text' name='menotyyppiNimi' value = { meno.kohde.menotyyppiNimi }
                    onChange={ (e) => muutaKohdeNimi(e)} /><br />
            </Form.Group>
            <Form.Group controlId='formBasicTarkennus'>
                <Form.Label htmlFor='tarkennus'>Tarkennus </Form.Label><br/>
                <input type='text' name='tarkennus' value = { meno.kohde.tarkennus }
                    onChange={ (e) => muutaKohdeTarkennus(e)} /><br />
            </Form.Group>
            <Form.Group controlId='formBasicPvm'>
                <Form.Label htmlFor='pvm'>Päivämäärä </Form.Label><br/>
                <input type='text' name='pvm' value = { meno.pvm }
                    onChange={ (e) => muuta(e)} /><br />
            </Form.Group>
            <input type='submit' value='Lisää' onClick={ (e) => lisaaMeno(e) }/>
        </Form>
        </div>
    );
}

export default Menolomake;