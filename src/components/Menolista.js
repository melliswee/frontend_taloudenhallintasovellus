import React from 'react';
import Table from 'react-bootstrap/Table';
import Summaaja from './Summaaja';

//TODO mappaus-key: vaihda key:ksi tapahtumaId lopullisessa versiossa
//Voisiko listaan lisätä rivin joka toimisi lomakkeena

function Menolista(props) {
    return (

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Menotyyppi</th>
                    <th>Tarkennus</th>
                    <th>Määrä</th>
                    <th>Päivämäärä</th>
                </tr>
            </thead>
            <tbody>

            { props.menot.map( tapahtuma => {
                return (
                    
                        <tr>
                            <td key = { tapahtuma.kohde.menotyyppiNimi }>{ tapahtuma.kohde.menotyyppiNimi} </td>
                            <td>{tapahtuma.kohde.tarkennus}</td> 
                            <td>{ tapahtuma.maara } </td>
                            <td>{ tapahtuma.pvm}</td>
                        </tr>
                );
            })
            }
            <tr>
                <td>Yhteensä</td>
                <td></td>
                <td> { <Summaaja summa = { props.menot}/>}</td>
                <td></td>
            </tr>
            </tbody>
        </Table>
    );
}


export default Menolista;