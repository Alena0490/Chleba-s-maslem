export interface Pecivo {
  id: number
  nazev: string
  akuzativ: string
  vokativ: string
}

export const pecivo: Pecivo[] = [
    { 
        id: 1, 
        nazev: 'chleba',
        akuzativ: 'chleba',
        vokativ: 'chlebe' 
    },

    { 
        id: 2, 
        nazev: 'rohlík', 
        akuzativ: 'rohlík',
        vokativ: 'rohlíku' 
    },

    { 
        id: 3, 
        nazev: 'houska', 
        akuzativ: 'housku',
        vokativ: 'housko' 
    },

    { 
        id: 4, 
        nazev: 'veka', 
        akuzativ: 'veku',
        vokativ: 'veko' 
    },

    { 
        id: 5, 
        nazev: 'loupák', 
        akuzativ: 'loupák',
        vokativ: 'loupáku' 
    },

    { 
        id: 6, 
        nazev: 'dalamánek',
        akuzativ: 'dalamánek', 
        vokativ: 'dalamánku' 
    },

    { 
        id: 7, 
        nazev: 'mazanec', 
        akuzativ: 'mazanec',
        vokativ: 'mazanče' 
    },

    { 
        id: 8, 
        nazev: 'vánočka',
        akuzativ: 'vánočku', 
        vokativ: 'vánočko' 
    },

    { 
        id: 9, 
        nazev: 'pletýnka', 
        akuzativ: 'pletýnku',
        vokativ: 'pletýnko' 
    },

    { 
        id: 10, 
        nazev: 'toast', 
        akuzativ: 'toast',
        vokativ: 'toaste' 
    },

    { 
        id: 11, 
        nazev: 'rajče', 
        akuzativ: 'rajče',
        vokativ: 'rajče' 
    }
]

export const stavy = ['','s máslem','s máslem a se salámem']

export const dialogy = {
  jde: 'Jde',
  takJde: 'A tak jde',
  potka: 'a potká',
  povida: 'povídá:',
  otazka: 'můžu jít s tebou?"',
  pricemz: 'Přičemž',
  odpovi: 'odpoví:',
  ano: '„Jo, můžeš."',
  ne: '„Ne."', 
  konec: 'Čas na smích.'
}