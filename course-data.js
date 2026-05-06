// ============================================
// NIHONGO - Données du cours
// ============================================

const COURSE = [
  {
    id: "ch1",
    title: "Premiers pas",
    subtitle: "Sons, syllabes et politesse",
    color: "#C73E3A",
    lessons: [
      {
        id: "ch1-l1",
        title: "Comment se prononce le japonais",
        teaching: [
          { type: "intro", text: "Bonne nouvelle : la prononciation japonaise est régulière et proche du français. Pas de pièges comme l'anglais. Une fois 5 règles assimilées, tu peux lire tout ce qui est écrit en romaji." },
          { type: "rule", title: "Les 5 voyelles", content: "a, i, u, e, o se lisent comme en français — sauf u qui se prononce \"ou\", et e qui se prononce \"é\" (jamais \"eu\")." },
          { type: "examples", items: [
            { jp: "arigatou", fr: "merci", note: "a-ri-ga-tô" },
            { jp: "sushi", fr: "sushi", note: "sou-chi" },
            { jp: "sake", fr: "saké", note: "sa-ké, jamais \"sake\" anglais" },
            { jp: "konnichiwa", fr: "bonjour", note: "kon-ni-tchi-wa" }
          ]},
          { type: "rule", title: "Les sons piégeux", content: "chi = tchi · shi = chi · tsu = tsou · ji = dji · r = entre R et L (roulé léger)." },
          { type: "rule", title: "Voyelles longues", content: "Quand tu vois ô, û, ou \"ou\" / \"uu\", tiens la voyelle deux fois plus longtemps. Tôkyô = To-o-kyo-o." },
          { type: "tip", text: "Rythme : chaque syllabe a la même intensité. Pas d'accent tonique. Pense à un métronome plutôt qu'à une mélodie." }
        ],
        exercises: [
          { type: "mcq", question: "Comment se prononce \"sushi\" ?", options: ["sou-shi", "sou-chi", "sou-si", "su-shi"], answer: 1, explanation: "shi se prononce \"chi\" en français. Donc su-shi = sou-chi." },
          { type: "mcq", question: "Comment se prononce \"sake\" (l'alcool) ?", options: ["sèke", "sak", "sa-ké", "sak-e"], answer: 2, explanation: "Le e japonais est toujours \"é\". Et chaque syllabe se prononce." },
          { type: "mcq", question: "Que veut dire l'allongement ô (ou ou) ?", options: ["On prononce un \"w\"", "On tient la voyelle plus longtemps", "On accentue plus fort", "C'est silencieux"], answer: 1, explanation: "Une voyelle longue dure deux fois plus qu'une voyelle courte. C'est crucial : kuso (merde) ≠ kuusou (rêverie) !" },
          { type: "mcq", question: "\"chi\" se prononce :", options: ["chi", "ki", "tchi", "shi"], answer: 2, explanation: "chi en romaji = tchi en français. Comme dans ichi (un) → i-tchi." }
        ]
      },
      {
        id: "ch1-l2",
        title: "Salutations essentielles",
        teaching: [
          { type: "intro", text: "Les salutations changent selon l'heure. C'est un peu comme \"bonjour/bonsoir\" mais plus fin." },
          { type: "vocab", items: [
            { jp: "Ohayou gozaimasu", fr: "Bonjour", note: "Le matin, jusqu'à 10-11h" },
            { jp: "Konnichiwa", fr: "Bonjour", note: "En journée, 11h-17h" },
            { jp: "Konbanwa", fr: "Bonsoir", note: "Le soir" },
            { jp: "Oyasumi nasai", fr: "Bonne nuit", note: "Avant de dormir" },
            { jp: "Sayounara", fr: "Au revoir", note: "Pour une longue durée. Pas en quittant un collègue !" },
            { jp: "Mata ashita", fr: "À demain", note: "Plus naturel au bureau" },
            { jp: "Ja, mata", fr: "À plus", note: "Familier, entre amis" }
          ]},
          { type: "tip", text: "Sayounara a une connotation de séparation longue. Au labo de Misasa, dis plutôt \"Otsukaresama desu\" (formule de fin de journée au travail) ou \"Mata ashita\"." }
        ],
        exercises: [
          { type: "mcq", question: "Tu arrives au bureau à 9h. Tu dis :", options: ["Konbanwa", "Ohayou gozaimasu", "Sayounara", "Oyasumi"], answer: 1, explanation: "Ohayou gozaimasu = bonjour le matin. Konnichiwa, c'est plutôt à partir de 11h." },
          { type: "match", question: "Associe la salutation au moment :", pairs: [
            { jp: "Konbanwa", fr: "Le soir" },
            { jp: "Ohayou", fr: "Le matin" },
            { jp: "Oyasumi nasai", fr: "Avant de dormir" },
            { jp: "Mata ashita", fr: "À demain" }
          ]},
          { type: "mcq", question: "Tu quittes ton collègue le soir, sachant que tu le revois demain. Tu dis :", options: ["Sayounara", "Mata ashita", "Konnichiwa", "Hajimemashite"], answer: 1, explanation: "Sayounara serait étrange (sépare longtemps). Mata ashita = à demain, parfait." },
          { type: "translate", question: "Comment dit-on \"Bonne nuit\" ?", answers: ["oyasumi nasai", "oyasumi", "oyasuminasai"], hint: "Commence par \"oyasumi\"" }
        ]
      },
      {
        id: "ch1-l3",
        title: "Les mots magiques",
        teaching: [
          { type: "intro", text: "5 mots à maîtriser absolument. Avec eux, tu peux survivre 24h au Japon, même en silence pour le reste." },
          { type: "vocab", items: [
            { jp: "Sumimasen", fr: "Pardon / Excusez-moi / Merci", note: "LE mot magique. S'utilise pour s'excuser, appeler, ou remercier d'un dérangement." },
            { jp: "Arigatou gozaimasu", fr: "Merci (poli)", note: "Standard, partout. Doumo arigatou = merci bien." },
            { jp: "Onegaishimasu", fr: "S'il vous plaît", note: "Quand tu demandes un service ou un objet." },
            { jp: "Kudasai", fr: "Donnez-moi (svp)", note: "Pour demander un objet précis : Mizu wo kudasai = de l'eau svp." },
            { jp: "Daijoubu desu", fr: "Ça va / Pas de souci / Non merci", note: "Polyvalent. Dit non poliment, ou rassure." }
          ]},
          { type: "rule", title: "Onegaishimasu vs Kudasai", content: "Onegaishimasu = demande générale, plus poli. Kudasai = je veux cet objet précis. \"Mizu wo kudasai\" et \"Mizu wo onegaishimasu\" sont tous deux corrects, le second est plus formel." },
          { type: "tip", text: "Quand on te bouscule dans le métro et que tu n'es pas sûr de qui doit s'excuser : sumimasen. Quand le serveur t'apporte un plat : sumimasen. Quand quelqu'un te tient la porte : sumimasen ou arigatou. Tu vois l'idée." }
        ],
        exercises: [
          { type: "mcq", question: "Le serveur t'apporte ton plat. Tu peux dire :", options: ["Sayounara", "Sumimasen", "Konbanwa", "Daijoubu"], answer: 1, explanation: "Sumimasen sert aussi à remercier pour un dérangement causé. Arigatou marche aussi." },
          { type: "mcq", question: "Quelqu'un te propose un sac plastique au konbini. Tu n'en veux pas. Tu dis :", options: ["Hai onegaishimasu", "Sumimasen", "Daijoubu desu", "Sayounara"], answer: 2, explanation: "Daijoubu desu = \"ça va, pas besoin\". C'est la façon polie de dire non sans dire iie (qui peut paraître brusque)." },
          { type: "translate", question: "Comment dit-on \"Merci\" (forme polie standard) ?", answers: ["arigatou gozaimasu", "arigato gozaimasu", "arigatou"], hint: "Commence par arigatou..." },
          { type: "mcq", question: "Pour appeler le serveur dans un restaurant :", options: ["Kudasai!", "Sumimasen!", "Onegaishimasu!", "Hai!"], answer: 1, explanation: "Sumimasen, lancé fort mais poliment, est LA façon d'appeler le staff au Japon." }
        ]
      }
    ]
  },
  {
    id: "ch2",
    title: "Construire une phrase",
    subtitle: "Ordre des mots et particules",
    color: "#1B4965",
    lessons: [
      {
        id: "ch2-l1",
        title: "Le verbe à la fin",
        teaching: [
          { type: "intro", text: "C'est LA grosse différence avec le français. En japonais, le verbe arrive toujours en dernier. Tu poses le décor, puis tu agis." },
          { type: "rule", title: "Ordre japonais", content: "Sujet → Objet → Verbe (S-O-V). Le français est S-V-O." },
          { type: "examples", items: [
            { jp: "Watashi wa sushi wo tabemasu.", fr: "Je mange du sushi.", note: "Litt: Moi, sushi, mange." },
            { jp: "Nico wa Tottori ni ikimasu.", fr: "Nico va à Tottori.", note: "Litt: Nico, à Tottori, va." },
            { jp: "Sensei wa hon wo yomimasu.", fr: "Le prof lit un livre.", note: "Litt: Prof, livre, lit." }
          ]},
          { type: "rule", title: "On omet ce qui est évident", content: "Si le contexte est clair, on enlève le sujet. \"Tabemasu\" peut signifier \"je mange\", \"tu manges\", \"il mange\" selon la situation. Le japonais préfère le silence aux répétitions." },
          { type: "tip", text: "Au début, force-toi à mettre le verbe à la fin, même mentalement. Cette gymnastique est la plus dure du japonais. Une fois acquise, tout devient plus simple." }
        ],
        exercises: [
          { type: "order", question: "Reconstitue : \"Je mange du sushi\"", words: ["Watashi", "wa", "sushi", "wo", "tabemasu"], answer: ["Watashi", "wa", "sushi", "wo", "tabemasu"] },
          { type: "order", question: "Reconstitue : \"Nico va à Tottori\"", words: ["Nico", "wa", "Tottori", "ni", "ikimasu"], answer: ["Nico", "wa", "Tottori", "ni", "ikimasu"] },
          { type: "mcq", question: "Dans une phrase japonaise, le verbe est :", options: ["Au début", "Au milieu (après le sujet)", "À la fin", "N'importe où"], answer: 2, explanation: "Toujours à la fin. C'est la règle d'or de la grammaire japonaise." },
          { type: "mcq", question: "\"Tabemasu\" tout seul peut vouloir dire :", options: ["Uniquement \"je mange\"", "Uniquement \"manger\" (infinitif)", "Je/tu/il/elle mange, selon le contexte", "Le sujet est interdit"], answer: 2, explanation: "L'omission du sujet est normale. Le contexte indique de qui on parle." }
        ]
      },
      {
        id: "ch2-l2",
        title: "Les particules wa, wo, ni",
        teaching: [
          { type: "intro", text: "Les particules sont de petits mots collés après chaque élément pour préciser son rôle. Ce sont elles qui font le travail de la grammaire. Voici les 3 plus essentielles." },
          { type: "rule", title: "は (wa) — le thème", content: "Marque ce dont on parle. Souvent traduit par le sujet. S'écrit ha mais se prononce wa." },
          { type: "examples", items: [
            { jp: "Watashi wa Nico desu.", fr: "Je suis Nico.", note: "Le thème : moi." },
            { jp: "Kyou wa atsui desu.", fr: "Aujourd'hui, il fait chaud.", note: "Le thème : aujourd'hui." }
          ]},
          { type: "rule", title: "を (wo) — l'objet direct", content: "Marque ce sur quoi porte l'action : ce qu'on mange, achète, lit, regarde." },
          { type: "examples", items: [
            { jp: "Mizu wo kudasai.", fr: "De l'eau svp.", note: "Mizu = objet de la demande." },
            { jp: "Hon wo yomimasu.", fr: "Je lis un livre.", note: "Hon = objet de la lecture." }
          ]},
          { type: "rule", title: "に (ni) — destination, lieu, heure", content: "Marque où on va, où on est, ou quand quelque chose se passe." },
          { type: "examples", items: [
            { jp: "Tottori ni ikimasu.", fr: "Je vais à Tottori.", note: "Destination." },
            { jp: "Uchi ni imasu.", fr: "Je suis à la maison.", note: "Lieu d'existence." },
            { jp: "Shichi-ji ni okimasu.", fr: "Je me lève à 7h.", note: "Heure." }
          ]}
        ],
        exercises: [
          { type: "mcq", question: "Quelle particule pour : \"Je mange ___ sushi\" ?", options: ["wa", "wo", "ni", "no"], answer: 1, explanation: "wo marque l'objet direct (ce qu'on mange). Sushi wo tabemasu." },
          { type: "mcq", question: "Quelle particule pour : \"Je vais ___ Tottori\" ?", options: ["wa", "wo", "ni", "ka"], answer: 2, explanation: "ni indique la destination. Tottori ni ikimasu." },
          { type: "fill", question: "Complète : \"Watashi ___ Nico desu.\" (Je suis Nico)", answers: ["wa"], hint: "Particule pour marquer le thème" },
          { type: "fill", question: "Complète : \"Mizu ___ kudasai.\" (De l'eau svp)", answers: ["wo", "o"], hint: "Particule pour l'objet de la demande" },
          { type: "match", question: "Associe la particule à son rôle :", pairs: [
            { jp: "wa (は)", fr: "Thème de la phrase" },
            { jp: "wo (を)", fr: "Objet direct" },
            { jp: "ni (に)", fr: "Destination / lieu" }
          ]},
          { type: "order", question: "Reconstitue : \"Je vais à Tokyo\"", words: ["Watashi", "wa", "Tokyo", "ni", "ikimasu"], answer: ["Watashi", "wa", "Tokyo", "ni", "ikimasu"] }
        ]
      },
      {
        id: "ch2-l3",
        title: "Les particules de, no, ka",
        teaching: [
          { type: "intro", text: "Trois particules de plus pour compléter ta boîte à outils. Avec ces 6 particules (wa, wo, ni + de, no, ka), tu peux former 90% des phrases du quotidien." },
          { type: "rule", title: "で (de) — lieu de l'action, moyen", content: "Là où une action active se passe, ou le moyen utilisé. Différent de ni qui indique simplement où on est." },
          { type: "examples", items: [
            { jp: "Resutoran de tabemasu.", fr: "Je mange AU restaurant.", note: "L'action a lieu là." },
            { jp: "Densha de ikimasu.", fr: "J'y vais EN train.", note: "Moyen de transport." },
            { jp: "Hashi de tabemasu.", fr: "Je mange AVEC des baguettes.", note: "Moyen / outil." }
          ]},
          { type: "rule", title: "ni vs de — la confusion classique", content: "ni = je suis là, ou je vais là (destination/présence). de = je fais quelque chose là (lieu d'action). Resutoran ni imasu = je suis au resto. Resutoran de tabemasu = je mange au resto." },
          { type: "rule", title: "の (no) — possession et lien", content: "Comme \"de\" en français possessif, mais à l'envers. A no B = B de A." },
          { type: "examples", items: [
            { jp: "Watashi no namae", fr: "Mon nom", note: "Litt: \"de moi le nom\"." },
            { jp: "Nihon no biiru", fr: "De la bière japonaise", note: "Litt: \"du Japon la bière\"." },
            { jp: "Tottori no daigaku", fr: "L'université de Tottori", note: "Logique inversée." }
          ]},
          { type: "rule", title: "か (ka) — la question", content: "À la fin d'une phrase, transforme l'affirmation en question. Pas besoin de point d'interrogation oral marqué." },
          { type: "examples", items: [
            { jp: "Genki desu.", fr: "Je vais bien.", note: "Affirmation." },
            { jp: "Genki desu ka?", fr: "Tu vas bien ?", note: "Question." },
            { jp: "Sushi wo tabemasu ka?", fr: "Tu manges du sushi ?", note: "Pareil." }
          ]}
        ],
        exercises: [
          { type: "mcq", question: "\"Je mange AU restaurant\". Quelle particule après resutoran ?", options: ["wa", "ni", "de", "no"], answer: 2, explanation: "de = lieu où l'action se passe. ni indiquerait juste \"être à\"." },
          { type: "mcq", question: "\"Je suis à la maison\" = Uchi ___ imasu", options: ["de", "ni", "wa", "wo"], answer: 1, explanation: "ni pour la simple présence/existence à un endroit." },
          { type: "fill", question: "Complète : \"Watashi ___ namae wa Nico desu.\" (Mon nom est Nico)", answers: ["no"], hint: "Particule de possession" },
          { type: "translate", question: "Comment transforme-t-on une phrase affirmative en question ?", answers: ["en ajoutant ka", "ka", "ajouter ka à la fin", "on ajoute ka"], hint: "Une seule particule à la fin" },
          { type: "order", question: "Reconstitue : \"Tu manges du sushi ?\"", words: ["Sushi", "wo", "tabemasu", "ka"], answer: ["Sushi", "wo", "tabemasu", "ka"] },
          { type: "mcq", question: "\"L'université de Tottori\" se dit :", options: ["Daigaku no Tottori", "Tottori no daigaku", "Tottori wa daigaku", "Daigaku ni Tottori"], answer: 1, explanation: "no inverse l'ordre français. A no B = B de A. Tottori no daigaku = université de Tottori." }
        ]
      }
    ]
  },
  {
    id: "ch3",
    title: "Les verbes",
    subtitle: "Forme polie -masu",
    color: "#2D5F3F",
    lessons: [
      {
        id: "ch3-l1",
        title: "La forme -masu",
        teaching: [
          { type: "intro", text: "La forme polie -masu est ton meilleur ami. Utilisable partout, avec n'importe qui, sans risque d'impolitesse. Tous les verbes japonais peuvent prendre cette forme." },
          { type: "rule", title: "Pas de différence présent/futur", content: "Tabemasu = \"je mange\" OU \"je mangerai\". Le contexte tranche. Pour préciser, on ajoute des mots de temps : kyou (aujourd'hui), ashita (demain)." },
          { type: "vocab", items: [
            { jp: "tabemasu", fr: "manger", note: "Sushi wo tabemasu." },
            { jp: "nomimasu", fr: "boire", note: "Mizu wo nomimasu." },
            { jp: "ikimasu", fr: "aller", note: "Tottori ni ikimasu." },
            { jp: "kimasu", fr: "venir", note: "Asu kimasu." },
            { jp: "mimasu", fr: "voir, regarder", note: "Eiga wo mimasu." },
            { jp: "yomimasu", fr: "lire", note: "Hon wo yomimasu." },
            { jp: "kakimasu", fr: "écrire", note: "Tegami wo kakimasu." },
            { jp: "shimasu", fr: "faire", note: "Benkyou wo shimasu (j'étudie)." },
            { jp: "wakarimasu", fr: "comprendre", note: "Wakarimasu / Wakarimasen." },
            { jp: "hanashimasu", fr: "parler", note: "Eigo wo hanashimasu." }
          ]}
        ],
        exercises: [
          { type: "mcq", question: "\"Manger\" en japonais (forme polie) :", options: ["nomimasu", "tabemasu", "mimasu", "ikimasu"], answer: 1, explanation: "tabemasu = manger. nomimasu = boire." },
          { type: "mcq", question: "\"Tabemasu\" peut signifier :", options: ["Seulement \"je mange\"", "Seulement \"je mangerai\"", "Les deux selon le contexte", "Manger (infinitif uniquement)"], answer: 2, explanation: "Pas de distinction présent/futur en japonais." },
          { type: "match", question: "Associe le verbe à son sens :", pairs: [
            { jp: "ikimasu", fr: "aller" },
            { jp: "yomimasu", fr: "lire" },
            { jp: "nomimasu", fr: "boire" },
            { jp: "mimasu", fr: "regarder" }
          ]},
          { type: "translate", question: "Comment dit-on \"comprendre\" ?", answers: ["wakarimasu"], hint: "Commence par \"waka...\"" }
        ]
      },
      {
        id: "ch3-l2",
        title: "Les 4 formes d'un verbe",
        teaching: [
          { type: "intro", text: "À partir de tabemasu, tu peux faire 4 phrases différentes en changeant juste la fin. C'est tout — pas de conjugaison à 6 personnes comme en français." },
          { type: "rule", title: "Les 4 terminaisons", content: "-masu = présent/futur affirmatif · -masen = négatif · -mashita = passé · -masen deshita = passé négatif." },
          { type: "examples", items: [
            { jp: "Tabemasu.", fr: "Je mange.", note: "Présent / futur." },
            { jp: "Tabemasen.", fr: "Je ne mange pas.", note: "Négatif." },
            { jp: "Tabemashita.", fr: "J'ai mangé.", note: "Passé." },
            { jp: "Tabemasen deshita.", fr: "Je n'ai pas mangé.", note: "Passé négatif." }
          ]},
          { type: "tip", text: "Cette régularité est un cadeau du japonais. Apprendre un verbe = apprendre 4 temps d'un coup. Pas d'irrégulier sauf une poignée d'exceptions." }
        ],
        exercises: [
          { type: "mcq", question: "\"Je n'ai pas mangé\" se dit :", options: ["Tabemasen", "Tabemashita", "Tabemasen deshita", "Tabemasu"], answer: 2, explanation: "Passé négatif = -masen deshita." },
          { type: "mcq", question: "\"Ikimashita\" signifie :", options: ["Je vais", "Je suis allé", "Je n'irai pas", "Aller"], answer: 1, explanation: "-mashita marque le passé. Ikimashita = je suis allé." },
          { type: "fill", question: "Comment dit-on \"je ne bois pas\" ? Nomi___", answers: ["masen"], hint: "Terminaison du négatif présent" },
          { type: "translate", question: "Mets \"yomimasu\" (lire) au passé :", answers: ["yomimashita"], hint: "-masu devient -mashita" },
          { type: "order", question: "Reconstitue : \"Je n'ai pas compris\"", words: ["Wakarimasen", "deshita"], answer: ["Wakarimasen", "deshita"] }
        ]
      },
      {
        id: "ch3-l3",
        title: "Le verbe \"être\" : desu",
        teaching: [
          { type: "intro", text: "desu (prononcé \"dèss\", le u final est presque muet) signifie \"être\" dans les phrases descriptives. Il se met à la fin, comme tous les verbes." },
          { type: "examples", items: [
            { jp: "Watashi wa Nico desu.", fr: "Je suis Nico.", note: "Identité." },
            { jp: "Kore wa sushi desu.", fr: "Ceci est du sushi.", note: "Description." },
            { jp: "Takai desu.", fr: "C'est cher.", note: "Avec un adjectif." }
          ]},
          { type: "rule", title: "Les formes de desu", content: "desu (est) · ja arimasen (n'est pas) · deshita (était) · ja arimasen deshita (n'était pas). Forme orale courante : ja nai (n'est pas, familier)." },
          { type: "examples", items: [
            { jp: "Gakusei desu.", fr: "Je suis étudiant.", note: "" },
            { jp: "Gakusei ja arimasen.", fr: "Je ne suis pas étudiant.", note: "" },
            { jp: "Gakusei deshita.", fr: "J'étais étudiant.", note: "" }
          ]},
          { type: "tip", text: "Astuce : pour les présentations \"Hajimemashite, [ton nom] desu\" est une formule passe-partout très utilisée." }
        ],
        exercises: [
          { type: "mcq", question: "\"Je suis Nico\" se dit :", options: ["Nico wa watashi desu", "Watashi wa Nico desu", "Nico desu wa watashi", "Watashi desu Nico"], answer: 1, explanation: "Sujet/thème + wa + identité + desu. desu toujours à la fin." },
          { type: "mcq", question: "\"Je ne suis pas étudiant\" se dit :", options: ["Gakusei desu", "Gakusei deshita", "Gakusei ja arimasen", "Gakusei masen"], answer: 2, explanation: "Le négatif de desu est ja arimasen (poli) ou ja nai (familier)." },
          { type: "fill", question: "Complète : \"Kore wa sushi ___.\" (Ceci est du sushi)", answers: ["desu"], hint: "Le \"être\" japonais" },
          { type: "translate", question: "\"C'est cher\" en japonais ?", answers: ["takai desu"], hint: "takai = cher. Plus desu." }
        ]
      }
    ]
  },
  {
    id: "ch4",
    title: "Au restaurant",
    subtitle: "Commander, payer, remercier",
    color: "#B8590B",
    lessons: [
      {
        id: "ch4-l1",
        title: "Entrer et s'installer",
        teaching: [
          { type: "intro", text: "Au Japon, le rituel d'entrée est très codifié. Le staff te crie \"Irasshaimase!\" (bienvenue) — tu n'as pas besoin de répondre, juste sourire ou hocher la tête." },
          { type: "rule", title: "Combien êtes-vous ?", content: "On te demande \"Nan-mei sama desu ka?\". Réponds avec le nombre de personnes." },
          { type: "vocab", items: [
            { jp: "Hitori desu", fr: "Une personne", note: "Solo. Très accepté au Japon." },
            { jp: "Futari desu", fr: "Deux personnes", note: "" },
            { jp: "San-nin desu", fr: "Trois personnes", note: "À partir de 3, c'est nombre + nin." },
            { jp: "Yo-nin desu", fr: "Quatre personnes", note: "Attention : yo-nin, pas yon-nin." }
          ]},
          { type: "rule", title: "Demander la carte / le menu", content: "Si on ne te le donne pas spontanément, attire l'attention avec sumimasen et demande poliment." },
          { type: "vocab", items: [
            { jp: "Sumimasen!", fr: "Excusez-moi !", note: "Pour appeler le serveur." },
            { jp: "Menyuu wo kudasai", fr: "Le menu svp", note: "" },
            { jp: "Eigo no menyuu wa arimasu ka?", fr: "Avez-vous un menu en anglais ?", note: "Souvent oui dans les villes." }
          ]}
        ],
        exercises: [
          { type: "mcq", question: "Tu entres seul au restaurant. \"Nan-mei sama?\" Tu réponds :", options: ["Hitori desu", "Futari desu", "San-nin desu", "Daijoubu"], answer: 0, explanation: "Hitori = une personne. Pas de honte à manger seul au Japon, c'est culturel." },
          { type: "mcq", question: "Vous êtes 3. Tu réponds :", options: ["San desu", "San-mei", "San-nin desu", "San-tori"], answer: 2, explanation: "À partir de 3 : nombre + nin. San-nin desu." },
          { type: "translate", question: "Comment demandes-tu le menu ?", answers: ["menyuu wo kudasai", "menyuu o kudasai", "menyuu wo onegaishimasu", "menyuu o onegaishimasu"], hint: "Menyuu + particule + kudasai" },
          { type: "fill", question: "Complète l'appel du serveur : \"___, menyuu wo kudasai !\"", answers: ["sumimasen"], hint: "Le mot magique pour interpeller poliment" }
        ]
      },
      {
        id: "ch4-l2",
        title: "Commander",
        teaching: [
          { type: "intro", text: "La structure de base : [plat] wo kudasai. Ou bien tu pointes la carte et tu dis kore wo kudasai (ceci svp). Imparable même sans connaître le nom du plat." },
          { type: "vocab", items: [
            { jp: "Kore wo kudasai", fr: "Ceci svp", note: "En pointant la carte. La phrase la plus utile." },
            { jp: "X wo onegaishimasu", fr: "X svp", note: "Plus poli que kudasai." },
            { jp: "Osusume wa nan desu ka?", fr: "Quelle est votre recommandation ?", note: "Hyper utile au izakaya !" },
            { jp: "X wa arimasu ka?", fr: "Avez-vous du X ?", note: "Pour vérifier la disponibilité." },
            { jp: "Mizu wo onegaishimasu", fr: "De l'eau svp", note: "L'eau est gratuite partout." },
            { jp: "Nama biiru wo kudasai", fr: "Une bière pression svp", note: "Nama = pression." },
            { jp: "Mou ippai kudasai", fr: "Encore un (verre) svp", note: "Pour resservir." }
          ]},
          { type: "rule", title: "Plats à connaître", content: "ramen (nouilles dans bouillon), soba (sarrasin), udon (épaisses), sushi, sashimi (poisson cru), tempura (frit), yakitori (brochettes), donburi (bol de riz garni), gyoza (raviolis)." },
          { type: "tip", text: "Au izakaya (bar à tapas japonais), \"osusume wa?\" te servira tous les soirs : tu laisses le chef choisir la spécialité. Toujours une bonne surprise." }
        ],
        exercises: [
          { type: "mcq", question: "Tu pointes la carte. Comment commander ?", options: ["Are desu", "Kore wo kudasai", "Sumimasen kore", "Kore desu ka"], answer: 1, explanation: "Kore wo kudasai = ceci svp. Imparable et toujours correct." },
          { type: "translate", question: "Comment demandes-tu de l'eau ?", answers: ["mizu wo onegaishimasu", "mizu wo kudasai", "mizu o kudasai", "mizu o onegaishimasu"], hint: "Mizu + wo + formule de politesse" },
          { type: "mcq", question: "Pour demander la recommandation du chef :", options: ["Oishii desu ka?", "Osusume wa nan desu ka?", "Nani desu ka?", "Tabemasu ka?"], answer: 1, explanation: "Osusume = recommandation. Phrase magique au izakaya." },
          { type: "order", question: "Reconstitue : \"Une bière pression svp\"", words: ["Nama", "biiru", "wo", "kudasai"], answer: ["Nama", "biiru", "wo", "kudasai"] },
          { type: "mcq", question: "Tu veux savoir si le restaurant a du saké. Tu dis :", options: ["Nihonshu desu ka?", "Nihonshu wa arimasu ka?", "Nihonshu wo kudasai", "Nihonshu wa nan desu ka?"], answer: 1, explanation: "X wa arimasu ka? = avez-vous du X ? Formule de vérification standard." }
        ]
      },
      {
        id: "ch4-l3",
        title: "Payer et partir",
        teaching: [
          { type: "intro", text: "Au Japon, on paie souvent à la caisse en sortant, pas à table. Pas de pourboire — c'est même considéré comme bizarre voire insultant." },
          { type: "vocab", items: [
            { jp: "Okaikei onegaishimasu", fr: "L'addition svp", note: "Au izakaya où on paie à table." },
            { jp: "Kaado tsukaemasu ka?", fr: "Acceptez-vous la carte ?", note: "Crucial en zone rurale : souvent cash uniquement !" },
            { jp: "Genkin de", fr: "En cash", note: "" },
            { jp: "Reshiito onegaishimasu", fr: "Le ticket svp", note: "Si tu en as besoin." },
            { jp: "Oishikatta desu!", fr: "C'était délicieux !", note: "Phrase qui fait toujours plaisir." },
            { jp: "Gochisousama deshita", fr: "Merci pour le repas", note: "À dire en partant. Rituel quasi-obligatoire." }
          ]},
          { type: "rule", title: "Comprendre les prix annoncés", content: "Les prix sont en yens (en). 1000 yens = sen-en. 2500 yens = ni-sen go-hyaku en. Si tu n'as pas compris, dis \"Mou ichido onegaishimasu\" (encore une fois svp)." },
          { type: "tip", text: "Gochisousama deshita est plus qu'un \"merci\". Ça signifie quelque chose comme \"merci pour ce festin que vous m'avez offert\". Le staff apprécie énormément quand un étranger le dit correctement." }
        ],
        exercises: [
          { type: "mcq", question: "\"L'addition svp\" se dit :", options: ["Mizu onegaishimasu", "Okaikei onegaishimasu", "Menyuu kudasai", "Reshiito kudasai"], answer: 1, explanation: "Okaikei = l'addition. Formule standard." },
          { type: "mcq", question: "Tu sors du restaurant. Que dis-tu au staff ?", options: ["Sayounara", "Konbanwa", "Gochisousama deshita", "Sumimasen"], answer: 2, explanation: "Phrase rituelle de fin de repas. Indispensable au Japon." },
          { type: "translate", question: "Comment vérifier que la carte bancaire est acceptée ?", answers: ["kaado tsukaemasu ka", "kaado tsukaemasu ka?", "card tsukaemasu ka"], hint: "Kaado + tsukaemasu + ka" },
          { type: "mcq", question: "Au Japon, le pourboire :", options: ["Est obligatoire (15%)", "Est apprécié (10%)", "Est mal vu, ne le fais pas", "Dépend du restaurant"], answer: 2, explanation: "Le service est inclus et le pourboire peut même offenser. La qualité du service est considérée comme due." },
          { type: "match", question: "Associe la phrase à son sens :", pairs: [
            { jp: "Okaikei onegaishimasu", fr: "L'addition svp" },
            { jp: "Gochisousama deshita", fr: "Merci pour le repas" },
            { jp: "Oishikatta desu", fr: "C'était délicieux" },
            { jp: "Genkin de", fr: "En cash" }
          ]}
        ]
      }
    ]
  },
  {
    id: "ch5",
    title: "Au quotidien",
    subtitle: "Konbini, train, chemin",
    color: "#6B4E71",
    lessons: [
      {
        id: "ch5-l1",
        title: "Au konbini",
        teaching: [
          { type: "intro", text: "Les konbini (7-Eleven, FamilyMart, Lawson) sont sacrés au Japon. Ouverts 24/7, ils proposent nourriture, billets de train, paiement de factures, photocopieuses, ATM. Le personnel parle peu anglais mais les interactions sont scriptées — tu peux survivre sans rien dire." },
          { type: "rule", title: "Phrases qu'on te dira (à reconnaître)", content: "Ces phrases sont prononcées vite. Tu n'as qu'à dire hai (oui) ou daijoubu desu (non merci) :" },
          { type: "vocab", items: [
            { jp: "Fukuro wa irimasu ka?", fr: "Voulez-vous un sac ?", note: "Réponse : Hai onegaishimasu / Daijoubu desu." },
            { jp: "Atatamemasu ka?", fr: "Je le réchauffe ?", note: "Pour les bento. Réponse : Hai / Daijoubu." },
            { jp: "Otemoto wa goissho ni?", fr: "Mettre les baguettes ensemble ?", note: "Si plusieurs plats. Hai." },
            { jp: "Pointo kaado wa?", fr: "Carte de fidélité ?", note: "Réponse : Daijoubu desu (= je n'en ai pas)." },
            { jp: "X-en desu", fr: "Ça fait X yens", note: "Le prix annoncé." }
          ]},
          { type: "rule", title: "Phrases utiles à dire", content: "Pour interagir activement :" },
          { type: "vocab", items: [
            { jp: "Kore wa ikura desu ka?", fr: "Combien ça coûte ?", note: "Pour les produits non étiquetés." },
            { jp: "Reshiito onegaishimasu", fr: "Le ticket svp", note: "Si tu veux te le faire rembourser." },
            { jp: "Hashi wo kudasai", fr: "Des baguettes svp", note: "Si oubliées dans le sac." }
          ]}
        ],
        exercises: [
          { type: "mcq", question: "La caissière demande \"Fukuro wa irimasu ka?\". Tu n'as pas besoin de sac. Tu dis :", options: ["Hai onegaishimasu", "Daijoubu desu", "Sayounara", "Okaikei"], answer: 1, explanation: "Daijoubu desu = \"ça va, pas besoin\". C'est le \"non poli\" universel." },
          { type: "mcq", question: "Tu achètes un bento (plat préparé). On te demande \"Atatamemasu ka?\". On te demande :", options: ["Avez-vous une carte ?", "Voulez-vous un sac ?", "Je le réchauffe ?", "C'est pour ici ?"], answer: 2, explanation: "Atatamemasu = réchauffer. Ils te le passent au micro-ondes gratuitement." },
          { type: "translate", question: "Comment demandes-tu \"Combien ça coûte ?\"", answers: ["kore wa ikura desu ka", "ikura desu ka", "kore wa ikura desu ka?", "ikura desu ka?"], hint: "Kore wa + ikura + desu + ka" },
          { type: "mcq", question: "Le caissier te demande \"Pointo kaado wa?\" (carte de fidélité). Tu n'en as pas. Tu dis :", options: ["Hai", "Sayounara", "Daijoubu desu", "Sumimasen"], answer: 2, explanation: "Daijoubu desu refuse poliment sans dire iie." }
        ]
      },
      {
        id: "ch5-l2",
        title: "Demander son chemin",
        teaching: [
          { type: "intro", text: "Phrase universelle : \"X wa doko desu ka?\" (Où est X ?). Avec ça plus quelques mots de direction, tu retrouves toujours ton chemin." },
          { type: "vocab", items: [
            { jp: "Eki wa doko desu ka?", fr: "Où est la gare ?", note: "" },
            { jp: "Toire wa doko desu ka?", fr: "Où sont les toilettes ?", note: "Mot vital." },
            { jp: "Konbini wa doko desu ka?", fr: "Où est la supérette ?", note: "" },
            { jp: "Daigaku wa doko desu ka?", fr: "Où est l'université ?", note: "Pour ton labo à Misasa." },
            { jp: "Eki made dou ikimasu ka?", fr: "Comment va-t-on à la gare ?", note: "Plus précis." }
          ]},
          { type: "rule", title: "Réponses à reconnaître", content: "Les Japonais aiment indiquer le chemin avec des gestes — même si tu ne comprends pas, regarde leurs mains." },
          { type: "vocab", items: [
            { jp: "Massugu", fr: "Tout droit", note: "" },
            { jp: "Migi", fr: "Droite", note: "Migi ni magatte = tournez à droite." },
            { jp: "Hidari", fr: "Gauche", note: "Hidari ni magatte = tournez à gauche." },
            { jp: "Soko", fr: "Là", note: "Près de la personne à qui on parle." },
            { jp: "Asoko", fr: "Là-bas", note: "Loin des deux." },
            { jp: "Chikai desu", fr: "C'est près", note: "" },
            { jp: "Tooi desu", fr: "C'est loin", note: "" }
          ]}
        ],
        exercises: [
          { type: "mcq", question: "Comment demandes-tu \"Où sont les toilettes ?\"", options: ["Toire desu ka?", "Toire wa doko desu ka?", "Toire ni ikimasu", "Doko toire?"], answer: 1, explanation: "Structure : [chose] wa doko desu ka?" },
          { type: "match", question: "Associe le mot à son sens :", pairs: [
            { jp: "Migi", fr: "Droite" },
            { jp: "Hidari", fr: "Gauche" },
            { jp: "Massugu", fr: "Tout droit" },
            { jp: "Asoko", fr: "Là-bas" }
          ]},
          { type: "translate", question: "Comment dit-on \"C'est près\" ?", answers: ["chikai desu"], hint: "Chikai + desu" },
          { type: "fill", question: "Complète : \"Eki wa ___ desu ka?\" (Où est la gare ?)", answers: ["doko"], hint: "Mot interrogatif pour le lieu" },
          { type: "order", question: "Reconstitue : \"Où est l'université ?\"", words: ["Daigaku", "wa", "doko", "desu", "ka"], answer: ["Daigaku", "wa", "doko", "desu", "ka"] }
        ]
      },
      {
        id: "ch5-l3",
        title: "À la gare",
        teaching: [
          { type: "intro", text: "Le système ferroviaire japonais est complexe mais ultra-efficace. Pour ton trajet Tottori-Misasa, tu utiliseras la JR San'in Line. Quelques phrases t'éviteront bien des galères." },
          { type: "vocab", items: [
            { jp: "Tottori made ikura desu ka?", fr: "Combien jusqu'à Tottori ?", note: "Made = jusqu'à." },
            { jp: "X yuki no kippu, kudasai", fr: "Un billet pour X svp", note: "Yuki = à destination de." },
            { jp: "Katamichi", fr: "Aller simple", note: "" },
            { jp: "Oufuku", fr: "Aller-retour", note: "" },
            { jp: "Kono densha wa X ni ikimasu ka?", fr: "Ce train va-t-il à X ?", note: "Vérification cruciale avant de monter." },
            { jp: "X-bansen wa doko desu ka?", fr: "Où est la voie X ?", note: "Ban-sen = quai numéro." },
            { jp: "Tsugi wa nan-eki desu ka?", fr: "Quelle est la prochaine gare ?", note: "Si tu doutes." }
          ]},
          { type: "rule", title: "Vocabulaire des trains", content: "kakueki / futsuu = train local (s'arrête partout) · kaisoku = rapide · tokkyuu = express limité · shinkansen = TGV. Pour Misasa depuis Tottori, c'est principalement du kakueki." },
          { type: "tip", text: "Astuce pratique : avant de monter, montre ton billet ou la station d'arrivée écrite sur ton téléphone au personnel. Ils sont incroyablement serviables et te confirmeront le bon train." }
        ],
        exercises: [
          { type: "translate", question: "Comment demander un billet pour Tottori ?", answers: ["tottori yuki no kippu kudasai", "tottori yuki no kippu wo kudasai", "tottori yuki no kippu, kudasai"], hint: "Tottori + yuki + no + kippu + kudasai" },
          { type: "mcq", question: "\"Aller-retour\" en japonais :", options: ["Katamichi", "Oufuku", "Kippu", "Densha"], answer: 1, explanation: "Oufuku = aller-retour. Katamichi = aller simple." },
          { type: "mcq", question: "Tu vérifies que le train va bien à Misasa. Tu demandes :", options: ["Misasa wa doko desu ka?", "Kono densha wa Misasa ni ikimasu ka?", "Misasa made ikura desu ka?", "Misasa no kippu kudasai"], answer: 1, explanation: "Kono densha wa X ni ikimasu ka? = ce train va-t-il à X ? Phrase de vérification." },
          { type: "fill", question: "Complète : \"Tottori ___ ikura desu ka?\" (Combien jusqu'à Tottori)", answers: ["made"], hint: "Particule signifiant \"jusqu'à\"" },
          { type: "match", question: "Associe le type de train :", pairs: [
            { jp: "Shinkansen", fr: "TGV japonais" },
            { jp: "Tokkyuu", fr: "Express limité" },
            { jp: "Kakueki", fr: "Train local (toutes gares)" },
            { jp: "Kaisoku", fr: "Rapide" }
          ]}
        ]
      }
    ]
  }
];
