import React from "react"
import { Row } from "reactstrap"
import "./AboutUs.scss"

import imgExcel from "./image/excel-1.jpg"
import imgTeam from "./image/team-1.jpg"
import teamwork5 from "./image/teamwork5-1.jpg"

const AboutUs = () => {
  return (
    <div className="about-us" id="about-us">
      <h1 className="aboutUs__headline">Om oss</h1>
      <Row>
        <div>
          <p className="about-us__content">
            OHPO Konsult drivs sedan 2013 av Ola Olsson och har Öresundsregionen
            som bas. Ola är utbildad ekonom från Lunds universitet och har innan
            han startade företaget varit verksam i finansbranschen.
          </p>
          <img alt="imgExcel" className="about-us__imgs" src={imgTeam} />
          <p className="about-us__content">
            OHPO Konsult har som syfte att hjälpa er företagare att utnyttja
            potentialen i Excel och resten av Officepaketet så att ni kan få tid
            över till att göra det ni är bra på. Kanske kan den där extra timmen
            leda till att ni når den där drömkunden som är så svår att få tag
            på.
          </p>
          <p className="about-us__content mt-5">
            Inget uppdrag är för litet eller obetydligt. Vi hjälper alla från
            egenföretagare till multinationella koncerner och uppdragens storlek
            varierar från några timmar till några månader.
          </p>
          <h2 className="aboutUs__headline--service" id="excel">
            Våra tjänster
          </h2>
          <h4 className="aboutUs__subHeadline">Excel</h4>
          <p className="about-us__content">
            Microsoft Excel är ett av världens mest använda program och väldigt
            många har en relation till det. Vid anställning av kontorspersonal
            förutsätts ofta att kandidaterna är erfarna inom Excel. Fördelarna
            med Excel är många. Programmet är flexibelt, kraftfullt och
            användarvänligt. Det är egentligen bara fantasin som sätter gränsen
            för vad man kan använda Excel till.
          </p>
          <p className="about-us__content">
            De många inbyggda funktionerna gör det enkelt att manipulera sin
            data.
          </p>
          <p className="about-us__content">
            Man får också snabbt en överblick över datan och med hjälp av
            diagram och pivottabeller kan man se viktiga trender. Med hjälp av
            villkorsstyrd formatering kan man hålla koll på viktiga nyckeltal.
          </p>
          <p className="about-us__content">
            Eftersom Excel är en del Microsofts ekosystem öppnar sig en hel
            värld av möjligheteter om man lyfter blicken mot horisonten. Mer av
            detta kan ni läsa om senare.
          </p>
          <p className="about-us__content-text">
            I stort sett allt du gör i Excel för hand kan automatiseras och det
            är här vi på OHPO Konsult kommer in.
          </p>
        </div>
        <div>
          <div className="aboutUs__subHeadline--margin">
            <h4 className="aboutUs__subHeadline-image">
              Automatisering av manuella processer
            </h4>
            <p className="about-us__content">
              Data från databaser och andra filer som används till analyser
              kommer ofta i ett format som kräver handpåläggning innan själva
              analysen kan påbörjas. Om denna handpåläggning är densamma för
              varje gång kan vi automatisera den genom att skapa ett program i
              Excels egna programmeringsspråk Visual Basic for Applications
              (VBA).
            </p>

            <img alt="imgTeam" className="about-us__imgs" src={imgExcel} />

            <p className="about-us__content">
              Även där man i första hand inte tänker på Excel kan vi hjälpa
              till. Ett viktigt arbetsmoment för ekonomer eller annan
              administrativ personal är ofta att föra över data från ett system
              till ett annat, som t ex från ett affärssystem till ett
              lönehanteringssystem.
            </p>

            <p className="about-us__content">
              {" "}
              I den bästa av världar är dessa system fullt integrerade men ofta
              är så inte fallet. Då återstår vanligen ett mödosamt manuellt
              arbete med att knappa in alla siffor för hand. Detta tar både lång
              tid och riskerar att bli en stor felkälla. Här kan man med fördel
              använda sig av filerna som systemen skapar och läser in.
            </p>
            <p className="about-us__content mt-4">
              En fil som exporteras från det ena systemet i t ex XML-format kan
              automatiskt byggas om i Excel till t ex en CSV-fil som kan
              importeras i det andra. På så sätt kan man spara värdefull tid som
              t ex kan användas till att möta nya kunder. Att bygga dessa små
              program är vår specialitet.
            </p>
          </div>
          {/* <Dots /> */}
          <div>
            <h4 className="aboutUs__subHeadline aboutUs__subHeadline--margin">
              Bygga bort sårbarheter
            </h4>
            <p className="about-us__content">
              De stora fördelarna med Excel för med sig en del sårbarheter. Det
              är ganska lätt att göra bort sig, t ex ta radera viktiga formler.
              Formler kan även ändras utan att man märker det och det kan leda
              till stora konsekvenser om beräkningen man har gjort ligger som
              grund till viktiga beslut. Vi kan framtidssäkra era formler så att
              de på regelbunden basis uppdateras till aktuella data.
            </p>
            <p className="about-us__content">
              Excel lämpar sig dåligt till att spara större mängder data. Din
              Excelfil blir långsam och oregerlig och risken är stor att din
              data går förlorad. Ett bra alternativ är då att använda sig av
              databaser. Microsoft erbjuder flera olika databaser som smidigt
              kan användas tillsammans med Excel. Microsoft Access är en
              användarvänlig databas för det mindre företaget och ingår i en del
              av Office-paketen, Microsoft SQL Server är en kraftfull och
              mångsidig databas för det större företaget och Microsoft Azure SQL
              Database är en professionell databas för företag som väljer att
              lägga sin data i molnet. Vi på OHPO Konsult bygger ihop era
              Excellösningar med databaserna.
            </p>
            <p className="about-us__content">
              Om det är flera personer som använder och har tillgång till samma
              Excelfil kan det lätt blir komplicerat. Ibland kan det vara svårt
              att härleda ändringar du och dina kollegor har gjort i filen och
              för att förebygga dessa problem kan vi bygga en dold eller synlig
              logg där man kan se vem som har gjort vilka ändringar, de nya och
              de gamla värdena och när ändringarna är gjorda.
            </p>
          </div>
          <div>
            <img
              alt="teamwork"
              className="about-us__lastImgs"
              src={teamwork5}
            />
            <h4 className="aboutUs__subHeadline">Prototyper</h4>
            <p className="about-us__content">
              En vanlig orsak till att IT-projekt misslyckas är att kunden inte
              har klart för sig vad den vill ha eller behöver. Excel,
              tillsammans med Microsoft Access, kan här med fördel användas till
              att bygga prototyper till mjukvarulösningar. Tillsammans med er
              kan vi leka oss fram till en funktionalitet som fungerar och
              passar ert tänk. Genom att arbeta direkt med er användare kan vi
              på ett tids- och kostnadseffektivt sätt bygga ett fullt fungerande
              verktyg som kan tjäna som prototyp åt en mer permanent lösning.
            </p>
          </div>
          <div className="aboutUs__subHeadline--margin">
            <h4 className="aboutUs__subHeadline">
              Integration av Excel och resten av programmen i Officepaketet
            </h4>
            <p className="about-us__content">
              Förutom att bygga ihop Excel med Access kan man bygga ihop Excel
              med de andra programmen i Officepaketet. För Word-dokument av
              liknande sort, t ex offerter, är det en god ide att skapa mallar
              där all individuell information hämtas från Excel. Genom att bygga
              ihop Excel och Outlook kan man ge Excel tillgång till alla email
              och även instruera Outlook att skicka automatiska email om något
              viktigt händer i Excel. Om t ex din kollega ska använda en
              Excelfil efter dig kan han därför automatiskt få reda på att du är
              klar.
            </p>
          </div>
        </div>
      </Row>
    </div>
  )
}

export default AboutUs
