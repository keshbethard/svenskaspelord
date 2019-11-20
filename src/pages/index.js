import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import alcasino from "../images/alcasino.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Casino och betting termer" />

    <div className="letters">
      <Link to="/#0">0</Link>
      <Link to="/#a">A</Link>
      <Link to="/#b">B</Link>
      <Link to="/#c">C</Link>
      <Link to="/#d">D</Link>
      <Link to="/#e">E</Link>
      <Link to="/#f">F</Link>
      <Link to="/#g">G</Link>
      <Link to="/#h">H</Link>
      <Link to="/#i">I</Link>
      <Link to="/#j">J</Link>
      <Link to="/#k">K</Link>
      <Link to="/#l">L</Link>
      <Link to="/#m">M</Link>
      <Link to="/#n">N</Link>
      <Link to="/#o">O</Link>
      <Link to="/#p">P</Link>
      <Link to="/#q">Q</Link>
      <Link to="/#r">R</Link>
      <Link to="/#s">S</Link>
      <Link to="/#t">T</Link>
      <Link to="/#v">V</Link>
      <Link to="/#w">W</Link>
      <Link to="/#x">X</Link>
      <Link to="/#y">Y</Link>
      <Link to="/#oa">Ö</Link>
    </div>

    <div className="landing-content-header">
      <div>
        <h1>Casino och betting termer</h1>
        <h3>Vi förklarar alla casino och betting ord, termer, begrepp och slangord.</h3>
      </div>
    </div>

    <div className="words">
      {/* 0-9 */}
      <div className="word-category" id="0">
        <div className="word-letter">0</div>
        <Link to="/1x2/">1x2</Link>
        <Link to="/18/">18+</Link>
      </div>

      {/* A */}
      <div className="word-category" id="a">
        <div className="word-letter">A</div>
        <Link to="/alcasino/">Alcasino.se</Link>
        <Link to="/alias/">Alias</Link>
        <Link to="/all-in/">All in</Link>
        <Link to="/android-casino/">Android casino</Link>
        <Link to="/ansvarsfullt-spelande/">Ansvarsfullt spelande</Link>
        <Link to="/arabian-nights/">Arabian Nights</Link>
        <Link to="/authentic-gaming/">Authentic Gaming</Link>
        <Link to="/autospel/">Autospel</Link>
      </div>

      {/* B */}
      <div className="word-category" id="b">
        <div className="word-letter">B</div>
        <Link to="/baccarat/">Baccarat</Link>
        <Link to="/balans/">Balans</Link>
        <Link to="/bankid/">BankID</Link>
        <Link to="/bankroll/">Bankroll</Link>
        <Link to="/betsoft/">Betsoft</Link>
        <Link to="/betting/">Betting</Link>
        <Link to="/betting-bonus/">Betting bonus</Link>
        <Link to="/betting-online/">Betting online</Link>
        <Link to="/big-time-gaming/">Big Time Gaming</Link>
        <Link to="/bingo/">Bingo</Link>
        <Link to="/bingo-online/">Bingo online</Link>
        <Link to="/bj/">BJ</Link>
        <Link to="/blackjack/">Blackjack</Link>
        <Link to="/blueprint/">Blueprint Gaming</Link>
        <Link to="/bonanza/">Bonanza</Link>
      </div>

      {/* C */}
      <div className="word-category" id="c">
        <div className="word-letter">C</div>
        <Link to="/cash-back/">Cash back</Link>
        <Link to="/cash-drop/">Cash drop</Link>
        <Link to="/cash-out/">Cash out</Link>
        <Link to="/casino/">Casino</Link>
        <Link to="/casino-bonus/">Casino bonus</Link>
        <Link to="/casino-cosmopol/">Casino Cosmopol</Link>
        <Link to="/casino-holdem/">Casino Hold'Em</Link>
        <Link to="/casino-med-swish/">Casino med Swish</Link>
        <Link to="/casino-online/">Casino online</Link>
        <Link to="/casino-utan-konto/">Casino utan konto</Link>
        <Link to="/casino-utan-registrering/">Casino utan registrering</Link>
        <Link to="/craps/">Craps</Link>
      </div>

      {/* D */}
      <div className="word-category" id="d">
        <div className="word-letter">D</div>
        <Link to="/dalembert-system/">D´Alembert system</Link>
        <Link to="/dealer/">Dealer</Link>
        <Link to="/dice/">Dice</Link>
        <Link to="/dime-bet/">Dime bet</Link>
        <Link to="/dream-catcher/">Dream Catcher</Link>
        <Link to="/dubbla/">Dubbla</Link>
      </div>

      {/* E */}
      <div className="word-category" id="e">
        <div className="word-letter">E</div>
        <Link to="/elk/">ELK Studios</Link>
        <Link to="/esport-betting/">Esport betting</Link>
        <Link to="/evolution-gaming/">Evolution Gaming</Link>
        <Link to="/extra-spins/">Extra spins</Link>
        <Link to="/extreme-live-gaming/">Extreme Live Gaming</Link>
        <Link to="/europatipset/">Europatipset</Link>
        <Link to="/eye-in-the-sky/">Eye in the sky</Link>
        <Link to="/ezugi/">Ezugi</Link>
      </div>

      {/* F */}
      <div className="word-category" id="f">
        <div className="word-letter">F</div>
        <Link to="/free-bets/">Free bets</Link>
        <Link to="/freespins/">Freespins</Link>
        <Link to="/freespins-bonus/">Freespins bonus</Link>
        <Link to="/freespins-med-insattning/">Freespins med insättning</Link>
        <Link to="/freespins-utan-insattning/">Freespins utan insättning</Link>
        <Link to="/freespins-utan-omsattning/">Freespins utan omsättning</Link>
      </div>

      {/* G */}
      <div className="word-category" id="g">
        <div className="word-letter">G</div>
        <Link to="/gonzos-quest/">Gonzo's Quest</Link>
        <Link to="/gratis-bonus/">Gratis bonus</Link>
        <Link to="/gratis-freespins/">Gratis freespins</Link>
        <Link to="/gratis-gavor/">Gratis gåvor</Link>
      </div>

      {/* H */}
      <div className="word-category" id="h">
        <div className="word-letter">H</div>
        <Link to="/handikapp/">Handikapp</Link>
        <Link to="/hasardspel/">Hasardspel</Link>
        <Link to="/hasardspelsyndrom/">Hasardspelsyndrom</Link>
        <Link to="/high-rollers/">High rollers</Link>
        <Link to="/high-stakes/">High stakes</Link>
        <Link to="/hit/">Hit</Link>
        <Link to="/hoga-odds/">Höga odds</Link>
        <Link to="/house-edge/">House edge</Link>
        <Link to="/huset/">Huset</Link>
      </div>

      {/* I */}
      <div className="word-category" id="i">
        <div className="word-letter">I</div>
        <Link to="/igt/">IGT</Link>
        <Link to="/imperial-riches/">Imprerial Riches</Link>
        <Link to="/insattsniva/">Insattsnivå</Link>
        <Link to="/insattningsbonus/">Insättningsbonus</Link>
        <Link to="/insattningskrav/">Insättningskrav</Link>
        <Link to="/inspired-gaming/">Inspired Gaming</Link>
        <Link to="/iron-dog/">Iron Dog</Link>
        <Link to="/isoftbet/">iSoftBet</Link>
      </div>

      {/* J */}
      <div className="word-category" id="j">
        <div className="word-letter">J</div>
        <Link to="/jack-and-the-beanstalk/">Jack and the Beanstalk</Link>
        <Link to="/jack-hammer-2/">Jack Hammer 2</Link>
        <Link to="/jack-vegas/">Jack Vegas</Link>
        <Link to="/jackpot/">Jackpot</Link>
        <Link to="/jackpotslot/">Jackpotslot</Link>
        <Link to="/jammin-jars/">Jammin Jars</Link>
        <Link to="/jftw/">JFTW</Link>
        <Link to="/jumanji/">Jumanji</Link>
      </div>

      {/* K */}
      <div className="word-category" id="k">
        <div className="word-letter">K</div>
        <Link to="/kalamba/">Kalamba</Link>
        <Link to="/kambi/">Kambi</Link>
        <Link to="/kasino/">Kasino</Link>
        <Link to="/keno/">Keno</Link>
        <Link to="/klassiska-slots/">Klassiska slots</Link>
        <Link to="/kuperingskort/">Kuperingskort</Link>
      </div>

      {/* L */}
      <div className="word-category" id="l">
        <div className="word-letter">L</div>
        <Link to="/leovegas/">LeoVegas</Link>
        <Link to="/live-casino/">Live casino</Link>
        <Link to="/live-game-show/">Live game show</Link>
        <Link to="/liveodds/">Liveodds</Link>
        <Link to="/live-streaming/">Live streaming</Link>
        <Link to="/lojalitetsbonus/">Lojalitetsbonus</Link>
        <Link to="/lojalitetspoang/">Lojalitetspoäng</Link>
        <Link to="/lojalitetsprogram/">Lojalitetsprogram</Link>
        <Link to="/laga-odds/">Låga odds</Link>
      </div>

      {/* M */}
      <div className="word-category" id="m">
        <div className="word-letter">M</div>
        <Link to="/matchningsbonus/">Matchningsbonus</Link>
        <Link to="/mega-fortune">Mega Fortune</Link>
        <Link to="/mega-moolah/">Mega Moolah</Link>
        <Link to="/microgaming/">Microgaming</Link>
        <Link to="/mobilcasino/">Mobilcasino</Link>
        <Link to="/mr-green/">Mr Green</Link>
        <Link to="/mynt/">Mynt</Link>
      </div>

      {/* N */}
      <div className="word-category" id="n">
        <div className="word-letter">N</div>
        <Link to="/netent/">NetEnt</Link>
        <Link to="/netent-live/">NetEnt Live</Link>
        <Link to="/neteller/">Neteller</Link>
        <Link to="/nextgen">NextGen</Link>
        <Link to="/nolimit-city/">Nolimit City</Link>
        <Link to="/natcasino/">Nätcasino</Link>
      </div>

      {/* O */}
      <div className="word-category" id="o">
        <div className="word-letter">O</div>
        <Link to="/odds/">Odds</Link>
        <Link to="/oddsspel/">Oddsspel</Link>
        <Link to="/oddsraknare/">Oddsräknare</Link>
        <Link to="/oktoberfest/">Oktoberfest</Link>
        <Link to="/omsattningskrav/">Omsättningskrav</Link>
        <Link to="/owls/">Owls</Link>
      </div>

      {/* P */}
      <div className="word-category" id="p">
        <div className="word-letter">P</div>
        <Link to="/playn-go/">Play'n Go</Link>
        <Link to="/playtech/">Playtech</Link>
        <Link to="/playtech-live/">Playtech Live</Link>
        <Link to="/pugglepay/">PugglePay</Link>
        <Link to="/push-gaming/">Push Gaming</Link>
      </div>

      {/* Q */}
      <div className="word-category" id="q">
        <div className="word-letter">Q</div>
        <Link to="/quads/">Quads</Link>
        <Link to="/quickfire/">Quickfire</Link>
        <Link to="/quickspin/">Quickspin</Link>
      </div>

      {/* R */}
      <div className="word-category" id="r">
        <div className="word-letter">R</div>
        <Link to="/re-spin/">Re-spin</Link>
        <Link to="/re-trigger/">Re-trigger</Link>
        <Link to="/reel-spins/">Reel spins</Link>
        <Link to="/relax-gaming/">Relax Gaming</Link>
        <Link to="/roulette/">Roulette</Link>
        <Link to="/roulette-satsningar/">Roulette satsningar</Link>
        <Link to="/roulette-system/">Roulette system</Link>
        <Link to="/rng/">RNG</Link>
        <Link to="/roi/">ROI</Link>
        <Link to="/rtp/">RTP</Link>
      </div>

      {/* S */}
      <div className="word-category" id="s">
        <div className="word-letter">S</div>
        <Link to="/saldo/">Saldo</Link>
        <Link to="/sbtech/">SBTech</Link>
        <Link to="/scatter/">Scatter</Link>
        <Link to="/slots/">Slots</Link>
        <Link to="/spelbolag/">Spelbolag</Link>
        <Link to="/spelinspektionen/">Spelinspektionen</Link>
        <Link to="/spelleverantor/">Spelleverantör</Link>
        <Link to="/spelpaus/">Spelpaus</Link>
        <Link to="/sportsbook/">Sportsbook</Link>
        <Link to="/spreading-wild/">Spreading wild</Link>
        <Link to="/starburst/">Starburst</Link>
        <Link to="/sthlm-gaming/">Sthlm Gaming</Link>
        <Link to="/sticky-wild/">Sticky wild</Link>
        <Link to="/stodlinjen/">Stödlinjen.se</Link>
        <Link to="/sure-bets/">Sure bets</Link>
        <Link to="/svensk-spellicens/">Svensk spellicens</Link>
        <Link to="/svenska-casino/">Svenska casino</Link>
        <Link to="/sv-spel/">Sv Spel</Link>
        <Link to="/svenska-spel/">Svenska Spel</Link>
        <Link to="/svenska-spel-casino/">Svenska Spel casino</Link>
        <Link to="/swish/">Swish</Link>
      </div>

      {/* T */}
      <div className="word-category" id="t">
        <div className="word-letter">T</div>
        <Link to="/tc/">T&C</Link>
        <Link to="/trustly-casino/">Trustly casino</Link>
        <Link to="/three-card-poker/">Three Card Poker</Link>
        <Link to="/turbo-spins/">Turbo spins</Link>
        <Link to="/turnering/">Turnering</Link>
      </div>

      {/* V */}
      <div className="word-category" id="v">
        <div className="word-letter">V</div>
        <Link to="/valkomstbonus/">Välkomstbonus</Link>
        <Link to="/videopoker/">Videopoker</Link>
        <Link to="/videoslots/">Videoslots</Link>
        <Link to="/vinstlinje/">Vinstlinje</Link>
        <Link to="/vip/">VIP</Link>
        <Link to="/vip-klubb/">VIP-klubb</Link>
        <Link to="/virtuell-sport/">Virtuell sport</Link>
      </div>

      {/* W */}
      <div className="word-category" id="w">
        <div className="word-letter">W</div>
        <Link to="/walking-wild/">Walking wild</Link>
        <Link to="/wild/">Wild</Link>
        <Link to="/wild-tome-of-the-woods/">Wild Tome of the Woods</Link>
        <Link to="/win-both-ways/">Win both ways</Link>
        <Link to="/wixx/">Wixx</Link>
      </div>

      {/* X */}
      <div className="word-category" id="x">
        <div className="word-letter">X</div>
        <Link to="/xpro-gaming/">Xpro Gaming</Link>
      </div>

      {/* Y */}
      <div className="word-category" id="y">
        <div className="word-letter">Y</div>
        <Link to="/yggdrasil-gaming/">Yggdrasil Gaming</Link>
      </div>

      {/* Ö */}
      <div className="word-category" id="oa">
        <div className="word-letter">Ö</div>
        <Link to="/over-under/">Över/under</Link>
      </div>
    </div>

    <div className="information">
      <div className="block one">
        <h2>Vad är Svenska Spel Ord?</h2>
        <p>Svenska Spel Ord är Sveriges största ordlista för casino och betting. Vi listar kända spel termer och begrepp. Alla orden vi listar används både på landbaserade casinon och på nätet.</p>
      </div>

      <div className="block two">
        <h2>Varför Svenska Spel Ord?</h2>
        <p>Sidan skapades av en enkel anledning, att hjälpa dig som spelar eller vill komma igång och börja spela till att bli mer bekant med orden och begrepp som används inom spelvärlden. För alla har vi varit färskingar någon gång och allt inom casino och betting är inte självklart. Utan ibland kan det vara rätt så kostsamt ifall man råkar använda Max bet knappen eller liknande utan att riktigt veta vad man trycker på.</p>
      </div>

      <div className="block three">
        <h2>Casino termer</h2>
        <p>Det finns en uppsjö av olika ord och termer som används inom casinon. Vissa ord är betydelsen självklar och andra är inte lika självklara. Hos oss hittar du förklaringar på ord som till exempel sticky wild, casino bonusar, bonusspel, freespins och annat som kan förekomma ofta inom casino. Kommer du över något casino ord du inte riktigt förstår så hoppas vi du finner det i vår ordlista. Skulle det vara så att det inte finns med får du mer än gärna kontakta oss så lägger vi till det.</p>
      </div>

      <div className="block four">
        <h2>Betting begrepp</h2>
        <p>Om man är nybörjare när det kommer till betting kan det ibland vara svårt att hänga med och förstå sig på alla svenska betting ord. Det finns en hel djungel av olika sidospel och bets man kan göra som inte alltid är lätt att förstå sig på. Men med hjälp av våran ordlista så får man en skjuts i rätt riktning.</p>
      </div>

      <div className="block five">
        <h2>Samarbete med Alcasino.se™</h2>
        <div className="wrapper">
          <p>Många spelare vänder sig till oss för att få hjälp med deras spel för det är inte alltid lätt att förstå alla ord och termer som används på ett casino eller bettingsajt. Vi har valt att samarbete med <a href="https://alcasino.se" target="_blank">Alcasino</a> på grund av att vi tycker de levererar en hög standard på information om <strong><i>online casino</i></strong>, <strong><i>casino bonusar</i></strong>, <strong><i>freespins</i></strong> och <strong><i>betting</i></strong>. Du hittar snabb information om vilka online casino och casino bonusar som är bäst och framför allt är de väldigt duktiga på just esport betting då vi vet att de har ett före detta esport proffs som är involverad. Deras kunskap inom just esport är av absoluta toppklass.</p>
          <div className="image">
          <a href="https://alcasino.se" target="_blank"><img src={alcasino} alt="Alcasino" title="Svenska Spel Ord rekommenderar Alcasino.se" /></a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
