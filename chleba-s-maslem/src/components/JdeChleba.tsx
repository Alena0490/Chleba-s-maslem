import {pecivo, stavy, dialogy, type Pecivo} from "../pecivo" 
import { ImLinkedin, ImFacebook2, ImGithub  } from "react-icons/im";

interface GroupItem {
  pecivo: Pecivo
  stav: string
}

const JdeChleba = () => {
  let finalText = ""
  const group: GroupItem[] = []

const createList = (
  group: GroupItem[], 
  grammaticalCase: 'nazev' | 'akuzativ' | 'vokativ' 
) => {
  let list = ""
  
  for (let k = 0; k < group.length; k++) {
    const item = group[k]
    const stav = item.stav
    
    list += item.pecivo[grammaticalCase] + (stav ? " " + stav : "")
    if (k < group.length - 1) {
        list += ", "
    }
  }
  
  return list
}

const answer = (nazev: string): string => {
    if (nazev === 'rajče') {
        return dialogy.ne 
    } else {
        return dialogy.ano
    }
}

  // Outer for - peciva
    for (let i = 0; i < pecivo.length; i++) {
        const pecivoType = pecivo[i]
        const {nazev, akuzativ} = pecivoType
        
        // Rajče
        if (nazev === 'rajče') {
            group.push({ pecivo: pecivoType, stav: '' })
            
            const text = `${dialogy.jde} ${createList(group.slice(0, -1), 'nazev')} ${dialogy.potka} ${akuzativ} a ${nazev} ${dialogy.povida} ${createList(group.slice(0, -1), 'vokativ')}, ${dialogy.otazka} ${dialogy.pricemz} ${createList(group.slice(0, -1), 'nazev')} ${dialogy.odpovi} ${answer(nazev)}`
            
            console.log(text)
            finalText += text + " "
            break;  // Stop the whole cyclus
        }
        
        // Pečivo
        for (let j = 0; j < stavy.length; j++) {
            const stav = stavy[j]
            group.push({ pecivo: pecivoType, stav: stav })
            
            if (group.length > 1) {
                const start = group.length === 2 ? dialogy.jde : dialogy.takJde
                const text = `${start} ${createList(group.slice(0, -1), 'nazev')} ${dialogy.potka} ${akuzativ} ${stav}. a ${nazev} ${stav} ${dialogy.povida} „${createList(group.slice(0, -1), 'vokativ')}, ${dialogy.otazka} ${dialogy.pricemz} ${createList(group.slice(0, -1), 'nazev')} ${dialogy.odpovi} ${answer(nazev)}`
                
                finalText += text + "\n\n" 
            }
        }       
    }

    return (
        <>
        <header>
            <h1>Breadtime Stories</h1>
        </header>
        <main>
            <section className="story">
                <h2>Jde chleba a potká chleba s máslem</h2>
                {finalText.split('\n\n').map((odstavec, index) => (
                <p key={index}>{odstavec}</p>
                ))}
                <p>Čas na smích.</p>
            </section>
        </main>
        <footer>
            <p>The bread is still walking...</p>
            <div className="socials">
                <a href="https://www.linkedin.com/in/alena-pumprova/" title="LinekedIn"><ImLinkedin /></a>
                <a href="https://www.facebook.com/alena.pumprova/" title="Facebook"><ImFacebook2 /></a>
                <a href="https://github.com/Alena0490" title="GitHub"><ImGithub /></a>
            </div>
        </footer>
        </>
    )
}

export default JdeChleba