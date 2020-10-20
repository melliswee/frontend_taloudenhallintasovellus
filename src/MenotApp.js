import React from 'react';
import Menolista from './components/Menolista';
import Menolomake from './components/Menolomake'
import { Container, Jumbotron } from 'react-bootstrap';


const menot = [{tapahtuma_id: '1', maara: '50', kohde: {menotyyppiId: '1', menotyyppiNimi: 'Ruoka ja juoma kotona', tarkennus: 'Alepa'}, pvm: '25.9.2020'},
               {tapahtuma_id: '2', maara: '650', kohde: {menotyyppiId: '3', menotyyppiNimi: 'Asuminen', tarkennus: 'vuokra/vastike'}, pvm: '02.9.2020'}, 
               {tapahtuma_id: '3', maara: '19', kohde: {menotyyppiId: '3', menotyyppiNimi: 'Asuminen', tarkennus: 'vesimaksu'}, pvm: '2.9.2020'},
               {tapahtuma_id: '4', maara: '25', kohde: {menotyyppiId: '7', menotyyppiNimi: 'Tietoliikenne ja viestintä', tarkennus: 'puhelinlasku'}, pvm: '15.9.2020'},
               {tapahtuma_id: '5', maara: '10', kohde: {menotyyppiId: '7', menotyyppiNimi: 'Tietoliikenne ja viestintä', tarkennus:'laajakaistalasku'}, pvm: '16.9.2020'},
               {tapahtuma_id: '6', maara: '45', kohde: {menotyyppiId: '2', menotyyppiNimi: 'Ruoka ja juoma ulkona', tarkennus: 'ravintola Saba'}, pvm: '4.9.2020'},
               {tapahtuma_id: '7', maara: '8', kohde: {menotyyppiId: '3', menotyyppiNimi: 'Asuminen', tarkennus: 'lämmitys'}, pvm: '14.9.2020'},
               {tapahtuma_id: '8', maara: '45', kohde: {menotyyppiId: '4', menotyyppiNimi: 'Vaatteet', tarkennus: ''}, pvm: '4.9.2020'},
               {tapahtuma_id: '9', maara: '10', kohde: {menotyyppiId: '5', menotyyppiNimi: 'Terveys', tarkennus: 'lääkkeet'}, pvm: '4.9.2020'},
               {tapahtuma_id: '10', maara: '50', kohde: {menotyyppiId: '6', menotyyppiNimi: 'Liikenne', tarkennus: 'auto'}, pvm: '2.9.2020'},
               {tapahtuma_id: '11', maara: '45', kohde: {menotyyppiId: '6', menotyyppiNimi: 'Liikenne', tarkennus: 'julkinen liikenne'}, pvm: '11.9.2020'},
               {tapahtuma_id: '12', maara: '160', kohde: {menotyyppiId: '9', menotyyppiNimi: 'Vakuutukset', tarkennus: 'kotivakuutus'}, pvm: '1.9.2020'},
               {tapahtuma_id: '13', maara: '70', kohde: {menotyyppiId: '10', menotyyppiNimi: 'Kodin hankinnat', tarkennus: 'matto'}, pvm: '4.9.2020'},
               {tapahtuma_id: '14', maara: '30', kohde: {menotyyppiId: '11', menotyyppiNimi: 'Virkistys ja vapaa-aika', tarkennus: 'elokuvaliput'}, pvm: '5.9.2020'},
               {tapahtuma_id: '15', maara: '50', kohde: {menotyyppiId: '12', menotyyppiNimi: 'Oma säästökohde', tarkennus: 'matkakassa'}, pvm: '1.9.2020'},
               {tapahtuma_id: '16', maara: '60', kohde: {menotyyppiId: '13', menotyyppiNimi: 'Lainanhoito', tarkennus: 'opintolaina'}, pvm: '1.9.2020'},
               {tapahtuma_id: '17', maara: '20', kohde: {menotyyppiId: '14', menotyyppiNimi: 'Muut menot', tarkennus: 'kukkia äidille'}, pvm: '30.9.2020'},
            ];


function MenotApp() {
    return(
        <div>
            
            <Jumbotron>
            <Container>
                <h1>Taloudenhallintasovellus</h1>
                <p>Tämä on yksinkertainen taloudenhallintasovellus, johon voit kirjata menojasi.</p>
            </Container>
            </Jumbotron>
            <Container>
                <h3>Lisää meno</h3>
                <Menolomake />
            </Container>
            <p></p>
            <Container>
                <h3>Menot</h3>
                <Menolista menot = { menot } />
            </Container>
        </div>
    );
}


export default MenotApp;