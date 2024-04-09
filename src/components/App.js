import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Media from 'react-media';

import '../resources/css/slideShow.css';

import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Header from './Header.js';
import Footer from './Footer.js'
import Project from './Project.js';
import Slideshow from './fragments/Slideshow';

import MobileHeader from './mobileComponents/MobileHeader';
import MobileAbout from './mobileComponents/MobileAbout';
import MobileProject from './mobileComponents/MobileProject';
import MobileFooter from './mobileComponents/MobileFooter';
import MobileContact from './mobileComponents/MobileContact';


class App extends Component {
    canUseWebP() {
        var elem = document.createElement('canvas');

        if (!!(elem.getContext && elem.getContext('2d'))) {
            // was able or not to get WebP representation
            return true;
        }

        // very old browser like IE 8, canvas not supported
        return false;
    }
    constructor(props) {
        super(props);

        this.state = {
            language: props.cookie.get('language') || 'swe',
            fadeProperties: {
                duration: 7000,
                transitionDuration: 2000,
                infinite: true,
                indicators: false,
                arrows: false
            },
            images: [
                {
                    imgWebP: require("../resources/img/homePhotos/2.WebP"),
                    img: require("../resources/img/homePhotos/2.jpg"),
                    alt: "Stockholm night"
                },
                {
                    imgWebP: require("../resources/img/homePhotos/3.WebP"),
                    img: require("../resources/img/homePhotos/3.jpg"),
                    alt: "Stockholm sunset"
                },
                {
                    imgWebP: require("../resources/img/homePhotos/1.WebP"),
                    img: require("../resources/img/homePhotos/1.jpg"),
                    alt: "Cranes"
                },


            ],
            mobileImages: [
                {
                    imgWebP: require("../resources/img/homePhotos/mobile2.WebP"),
                    img: require("../resources/img/homePhotos/mobile2.jpg"),
                    alt: "Stockholm night"
                },
                {
                    imgWebP: require("../resources/img/homePhotos/mobile3.WebP"),
                    img: require("../resources/img/homePhotos/mobile3.jpg"),
                    alt: "Stockholm sunset"
                },
                {
                    imgWebP: require("../resources/img/homePhotos/mobile1.WebP"),
                    img: require("../resources/img/homePhotos/mobile1.jpg"),
                    alt: "Cranes"
                },

            ],
            swe: {
                sigil: {
                    title: "Sigillet är utfärdat av UC AB. Klicka på bilden för information om UC:s Riskklasser.",
                    src: "https://www.uc.se/ucsigill2/sigill?org=556886-4622&language=swe&product=lsa&fontcolor=b&type=svg",
                    href: "https://www.uc.se/risksigill2?showorg=556886-4622&language=swe",
                },
                header: {
                    listLinks: [
                        "Hem",
                        "Om oss",
                        "Projekt",
                        "Kontakt"
                    ]
                },
                footer: {
                    info: [
                        "Kontakta oss",
                        "Telefon",
                        "Hitta hit"
                    ]
                },
                aboutText: {

                    listFactsTitle: "Om oss",
                    listFacts: [
                        "Projektledning, projekteringsledning och byggledning av mark- och infrastrukturprojekt.",
                        "Verksamhet sedan 2012.",
                        "Teoretisk och praktisk projektledningskompetens hos samtliga medarbetare.",
                        "Företag med stark likviditet. Högsta kreditvärdighet enligt UC."
                    ],

                    listValuesTitle: "Värderingar",
                    listValues: ["Lösningsinriktat, kundfokuserat och projektfokuserat tjänsteföretag.",
                        "Kunden och projektets mål värnas alltid.",
                        "Människorna i projekt är individer som skapar team.  Professionella, nyfikna och lärande.",
                        "Företag som alltid tar ansvar för utfört arbete."],

                    listIdeaTitle: "Affärsidé",
                    listIdea: ["Starkt varumärke i branschen med kvalificerade resurser för ledning av mark- och infrastrukturprojekt.",
                        "Kundfokuserat tjänsteföretag som arbetar för långsiktiga affärsrelationer."],

                    listSystemTitle: "Verksamhetssystem KMA",
                    listSystem: ["Långsiktiga affärsrelationer kräver kännedom och kunskap hur rätt kvalitet uppnås. Rätt kvalitet uppnås genom utförande av rätt arbetsuppgifter. Vårt verksamhetssystem hjälper oss i arbetet med att göra rätt arbetsuppgifter och att få långsiktiga affärsrelationer.",
                        "Vårt företagsinterna verksamhetssystem är uppbyggt för att uppfylla krav i SS-EN ISO 9001, 14001 samt 45001. I verksamhetssystemet ingår fungerande stödprocesser upprättade med stöd utifrån SS-ISO 21500 för uppdragsledning, projektledning, projekteringsledning och byggledning."],
                },
                projectText: {
                    imgText: [
                        "Foto: Sweco/Stockholms stad",
                        "Foto: Stockholms stad"
                    ],
                    vasagatanTitle: "Projekt Vasagatan",
                    vasagatanText: "Vasagatan mellan Tegelbacken och Norra Bantorget byggs om för att möta dagens och framtidens behov. Nya Vasagatan blir en välkomnande,"
                        + "tryggare och mer levande stadsgata med människorna i centrum. Projektvolym ca 300 Mkr. Projektledningsbyråns uppdrag är projekt- och projekteringsledning." +
                        "Uppdraget påbörjades 2019 och är pågående.",

                    westBridgeTitle: "Projekt Västerbron",
                    westBridgeText: "Västerbron färdigställdes 1935 och består av två broar, bro över Riddarfjärden och bro över Pålsundet.  Projektet omfattar utredning av Västerbrons" +
                        " konstruktiva tillstånd samt framtagande av förslag till åtgärder för att säkra framtida funktion. Projektvolym ca 15 Mkr. Projektledningsbyråns uppdrag är projektledning" +
                        " och projekteringsledning. Uppdraget påbörjades 2018 och är pågående.",

                    vasaBridgeTitle: "Projekt Vasabron",
                    vasaBridgeText: "Vasabron färdigställdes 1878 och består av sju stycken bågbroar som sammanbinder Gamla Stan med Norrmalm. Projektet omfattar utredning av Vasabrons " +
                        "konstruktiva tillstånd samt framtagande av förslag till åtgärder för att säkra framtida funktion. Projektvolym ca 15 Mkr. Projektledningsbyråns uppdrag är projektledning " +
                        "och projekteringsledning. Uppdraget påbörjades 2019 och är pågående.",

                    slussenTitle: "Projekt Slussen",
                    slussenText: "Slussen är efter över 80 år utsliten och byggs därför upp från grunden. Området anpassas för att möta behoven hos dagens och morgondagens stockholmare och" +
                        " framtidens Slussen blir en effektiv och trygg knutpunkt för gående, cyklister och kollektivtrafik. " +
                        "Projektvolym ca 12 000 Mkr. Projektledningsbyråns uppdrag har varit projektledning av ett av tre delområden i utrednings- projekterings- och genomförandeskedet. Uppdraget påbörjades 2012 och avslutades 2018."

                },
                contactText: {
                    mainTitle: "Våra medarbetare",
                    mapsTitle: "Hitta till oss"
                }
            },
            eng: {
                sigil: {
                    title: "The seal is issued by UC AB. The image is linked to information about UC's Credit Rating.",
                    src: "https://www.uc.se/ucsigill2/sigill?org=556886-4622&language=eng&product=lsa&fontcolor=b&type=svg",
                    href: "https://www.uc.se/en/risksigill2?showorg=556886-4622&language=eng"
                },
                header: {
                    listLinks: [
                        "Home",
                        "About",
                        "Project",
                        "Contact"
                    ]
                },
                footer: {
                    info: [
                        "Contact",
                        "Phone",
                        "Find us"
                    ]
                },
                aboutText: {
                    listFactsTitle: "In brief",
                    listFacts: [
                        "Project management, project design management and construction management for land and infrastructure projects.",
                        "Active since 2012.",
                        "Company with strong liquidity. Highest credit rating provided by UC.",
                    ],

                    listValuesTitle: "Values",
                    listValues: [
                        "Solution-oriented, customer-focused and project-focused service company.",
                        "Customer and project goals always comes first.",
                        "Projects are driven by individuals who come together to form a team. Professional, curious and always learning.",
                        "Company that always take responsibility for the work we do."
                    ],

                    listIdeaTitle: "Business Concept",
                    listIdea: [
                        "Strong brand in the industry with qualified resources for the management of land and infrastructure projects.",
                        "Customer-focused service company that works to build and nurture long-term business relationships."
                    ],

                    listSystemTitle: "Business system – KMA",
                    listSystem: [
                        "Long-term business relationships require knowledge and an understanding of how to achieve the right results. The right results are obtained by performing the right tasks. Our business system helps us in our work to perform the right tasks and to secure long-term business relationships.",
                        "Our internal business system has been designed to comply with the requirements set out in SS-EN ISO 9001, 14001 and 45001. The business system incorporates functioning support processes which have been established with support from SS-ISO 21500 for task management, project management, project design management and construction management."
                    ],
                },
                projectText: {
                    imgText: [
                        "Photo: Sweco/Stockholms stad",
                        "Photo: Stockholms stad",
                    ],
                    vasagatanTitle: "Vasagatan Project",
                    vasagatanText: "The central Stockholm street of Vasagatan between Tegelbacken and Norra Bantorget is being rebuilt to meet the needs of today and the future. The new Vasagatan area will be a welcoming, safer and more lively urban street that puts people in the centre. The project volume is approximately SEK 300 million. The task of the project management agency is to undertake project and project design management. The task began in 2019 and is ongoing.",

                    westBridgeTitle: "Västerbron Project",
                    westBridgeText: "Västerbron was completed in 1935 and consists of two bridges, one over the bay of Riddarfjärden and another over the strait of Pålsundet. The project comprises a study into the structural condition of Västerbron and to put forward proposals as to how its functionality can be safeguarded for the future. The project volume is approximately SEK 15 million. The task of the project management agency is to undertake project management and project design management. The task began in 2018 and is ongoing.",

                    vasaBridgeTitle: "Vasabron Project",
                    vasaBridgeText: "Vasabron was completed in 1878 and consists of seven arch bridges which connect the Stockholm island of Gamla Stan to Norrmalm. The project comprises a study into the structural condition of Vasabron and to put forward proposals as to how its functionality can be safeguarded for the future. The project volume is approximately SEK 15 million. The task of the project management agency is to undertake project management and project design management. The task began in 2019 and is ongoing.",

                    slussenTitle: "Slussen Project",
                    slussenText: "After over eighty years, the central commuter hub of Slussen is no longer fit for purpose and is being rebuilt from scratch. The area is being adapted to meet the needs of Stockholmers both today and tomorrow. The Slussen of the future will be an efficient and secure hub for pedestrians, cyclists and public transport. The project volume is approximately SEK 12,000 million. The task of the project management agency was to provide project management for one of the three sub-areas in the study, design, planning and implementation phases. The task began in 2012 and was completed in 2018."
                },
                contactText: {
                    mainTitle: "Our coworkers",
                    mapsTitle: "Find us"
                }
            },

        }
    }
    setLanguage = (lang) => {
        this.props.cookie.set('language', lang);
        this.setState({ language: lang });
        this.forceUpdate();
    }
    checkLanguage = () => {
        if (this.state.language == 'swe') {
            return true;
        } else if (this.state.language == 'eng') {
            return false;
        }
        return true;
    }
    render() {
        return (<div style={{ height: "100vh", width: "100vw" }}>
            <Media queries={{
                small: "(max-width: 1025px)",
                medium: "(min-width: 1024px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small &&
                            <Fragment>
                                {/* <MobileHeaderBar content={this.checkLanguage() ? this.state.swe.header : this.state.eng.header} setLanguage={this.setLanguage}/> */}
                                <MobileHeader content={this.checkLanguage() ? this.state.swe.header : this.state.eng.header} setLanguage={this.setLanguage} />
                                <BrowserRouter>
                                    <Route exact path="/"
                                        render={(props) => <Home fadeProperties={this.state.fadeProperties} fadeImages={this.state.mobileImages} />}
                                    />
                                    <Route exact path="/about"
                                        render={(props) => <MobileAbout content={this.checkLanguage() ? this.state.swe.aboutText : this.state.eng.aboutText} sigil={this.checkLanguage() ? this.state.swe.sigil : this.state.eng.sigil} />}
                                    />
                                    <Route exact path="/contact"
                                        render={(props) => <MobileContact content={this.checkLanguage() ? this.state.swe.contactText : this.state.eng.contactText} />}
                                    />
                                    <Route exact path="/project"
                                        render={(props) => <MobileProject content={this.checkLanguage() ? this.state.swe.projectText : this.state.eng.projectText} />}
                                    />
                                </BrowserRouter>
                                <MobileFooter content={this.checkLanguage() ? this.state.swe.footer : this.state.eng.footer} />
                            </Fragment>
                        }
                        {matches.medium &&
                            <Fragment>
                                <Header content={this.checkLanguage() ? this.state.swe.header : this.state.eng.header} setLanguage={this.setLanguage} />
                                <Slideshow fadeProperties={this.state.fadeProperties} fadeImages={this.state.images} />
                                <BrowserRouter>
                                    <Route exact path="/" />
                                    <Route exact path="/about"
                                        render={(props) => <About content={this.checkLanguage() ? this.state.swe.aboutText : this.state.eng.aboutText} sigil={this.checkLanguage() ? this.state.swe.sigil : this.state.eng.sigil} />}
                                    />
                                    <Route exact path="/contact"
                                        render={(props) => <Contact content={this.checkLanguage() ? this.state.swe.contactText : this.state.eng.contactText} />}
                                    />
                                    <Route exact path="/project"
                                        render={(props) => <Project content={this.checkLanguage() ? this.state.swe.projectText : this.state.eng.projectText} />}
                                    />
                                </BrowserRouter>
                                <Footer content={this.checkLanguage() ? this.state.swe.footer : this.state.eng.footer} />
                            </Fragment>}
                    </Fragment>
                )}
            </Media>

        </div>);
    };

}

export default App;