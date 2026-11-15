const levelInfo = {
  A1: { label: 'Getting started', goal: 'Introduce yourself, ask simple questions, and handle familiar everyday situations.' },
  A2: { label: 'Everyday basics', goal: 'Manage routine exchanges, make plans, and describe your immediate world.' },
  B1: { label: 'Independent', goal: 'Explain experiences, give reasons, and keep a conversation moving.' },
  B2: { label: 'Confident', goal: 'Make a clear case, weigh options, and follow more nuanced conversation.' },
  C1: { label: 'Fluent & flexible', goal: 'Speak precisely, adapt your tone, and connect ideas with ease.' },
  C2: { label: 'Near-native range', goal: 'Handle subtle meanings, regional flavor, and complex discussion.' }
};

const levelGuides = {
  A1: {
    title: 'A1 · Start Deutsch 1',
    link: 'https://www.goethe.de/en/spr/prf/ueb/pa1.html',
    hasOfficialWordList: true,
    vocabulary: ['Personal details: name, Herkunft, address, phone number', 'Numbers, weekdays, time, dates, and prices', 'Family, home, food, and shopping: Semmel, Marille, Sackerl', 'Greetings, common classroom language, and everyday requests'],
    grammar: ['Present tense of common regular and irregular verbs', 'Personal pronouns, W-questions, and yes/no questions', 'Noun gender, singular/plural, and nominative articles', 'Accusative articles in common direct-object phrases', 'Basic main-clause word order and separable verbs', 'Modal verbs können and möchten in everyday requests'],
    goals: ['Introduce yourself and spell key details', 'Ask and answer simple questions about familiar topics', 'Understand short signs, forms, messages, and announcements'],
    exam: ['Listening: short everyday conversations and announcements', 'Reading: signs, lists, and short messages', 'Writing: complete a simple form and write a short message', 'Speaking: introduce yourself, ask questions, and make a simple request']
  },
  A2: {
    title: 'A2 · Goethe-Zertifikat A2',
    link: 'https://www.goethe.de/en/spr/prf/ueb/pa2.html',
    hasOfficialWordList: true,
    vocabulary: ['Work, school, daily routine, free time, and travel', 'Food, health, clothes, housing, and local services', 'Appointments, directions, weather, and transport', 'Austrian everyday expressions: sich ausgehen, heuer, Jänner'],
    grammar: ['Perfekt with haben and sein; common participles', 'Dative articles and frequent dative verbs and prepositions', 'Two-way prepositions for place and direction', 'Comparative and superlative forms', 'Subordinate clauses with weil, dass, and wenn', 'Polite requests and suggestions with Konjunktiv II'],
    goals: ['Manage routine exchanges at work, shops, and appointments', 'Describe your background, routine, and immediate needs', 'Understand the main point of short, clear everyday texts'],
    exam: ['Listening: short dialogues, announcements, and messages', 'Reading: emails, notices, and short informational texts', 'Writing: brief practical messages', 'Speaking: ask about familiar matters and make simple plans']
  },
  B1: {
    title: 'B1 · Goethe-Zertifikat B1',
    link: 'https://www.goethe.de/en/spr/prf/ueb/pb1.html',
    hasOfficialWordList: true,
    vocabulary: ['Work, education, travel, media, and community life', 'Experiences, plans, opinions, and everyday problems', 'Environment, health, relationships, and public services', 'News vocabulary: Bericht, Meldung, laut, angekündigt'],
    grammar: ['Relative clauses and relative pronouns in all cases', 'Konjunktiv II for advice, wishes, and hypothetical situations', 'Passive voice in common present and past forms', 'Subordinate clauses with obwohl, damit, während, and indirect questions', 'Adjective endings and adjective-noun collocations', 'Connectors for reasons, results, contrasts, and sequence'],
    goals: ['Understand the main points of clear standard speech on familiar topics', 'Describe experiences and explain opinions with reasons', 'Write connected texts and take part in conversations about familiar subjects'],
    exam: ['Listening: announcements, conversations, and discussions', 'Reading: emails, articles, advertisements, and practical texts', 'Writing: a personal message and a short opinion text', 'Speaking: plan something together and present or discuss a topic']
  },
  B2: {
    title: 'B2 · Goethe-Zertifikat B2',
    link: 'https://www.goethe.de/en/spr/prf/ueb/pb2.html',
    vocabulary: ['Current affairs, society, work, science, culture, and the environment', 'Abstract concepts, evidence, causes, consequences, and proposals', 'Formal and informal register; collocations and precise paraphrase', 'News language: Stellungnahme, Maßnahme, zufolge, hingegen'],
    grammar: ['Advanced subordinate clauses and complex word order', 'Passive alternatives and passive with modal verbs', 'Konjunktiv II for proposals, conditions, and reported distance', 'Adjective declension, participial modifiers, and nominal phrases', 'Paired connectors: nicht nur … sondern auch; sowohl … als auch', 'Prepositions and case in formal written constructions'],
    goals: ['Follow the main ideas of complex texts and discussions', 'Explain a position, weigh alternatives, and respond to counterarguments', 'Write clear, structured texts with supporting detail'],
    exam: ['Listening: interviews, presentations, and discussions', 'Reading: articles, commentary, and other complex texts', 'Writing: a structured argument or formal response', 'Speaking: present a topic and discuss viewpoints']
  },
  C1: {
    title: 'C1 · Goethe-Zertifikat C1',
    link: 'https://www.goethe.de/en/spr/prf/ueb/pc1.html',
    vocabulary: ['Academic, professional, cultural, political, and social topics', 'Precise synonyms, register, idioms, and abstract word formation', 'Stance and attribution: demnach, hingegen, zufolge, allerdings', 'News and commentary phrases for inference, qualification, and emphasis'],
    grammar: ['Konjunktiv I and II in reported speech and formal writing', 'Nominalization and complex noun phrases', 'Participial clauses and expanded participial attributes', 'Subjunctive and modal forms for stance and reported inference', 'Advanced connectors and reference across long texts', 'Word order and information structure for emphasis'],
    goals: ['Understand long, demanding texts and implicit meaning', 'Express ideas fluently and adapt language to purpose and audience', 'Develop a clear, detailed argument on complex topics'],
    exam: ['Listening: longer interviews, lectures, and broadcasts', 'Reading: demanding factual and literary-style texts', 'Writing: a structured, detailed response to a complex prompt', 'Speaking: give a presentation and discuss a question in depth']
  },
  C2: {
    title: 'C2 · Goethe-Zertifikat C2: GDS',
    link: 'https://www.goethe.de/en/spr/prf/ueb/pc2.html',
    vocabulary: ['Nuanced vocabulary across academic, literary, cultural, and specialist themes', 'Idiomatic expressions, connotation, wordplay, and precise collocations', 'Regional variation and shifts between Austrian colloquial speech and standard German', 'Subtle stance markers: wohl, eben, immerhin, keineswegs, nichtsdestotrotz'],
    grammar: ['Flexible control of complex syntax and information structure', 'Subtle distinctions in tense, aspect, mood, and modal particles', 'Reported speech, evidential distance, and nuanced Konjunktiv use', 'Ellipsis, inversion, and stylistic variation across registers', 'Idiomatic preposition-verb patterns and fine-grained case choices', 'Cohesion, reference, and rhetorical emphasis in extended discourse'],
    goals: ['Understand virtually everything heard or read with ease', 'Summarize and reconstruct complex arguments coherently', 'Express fine shades of meaning fluently and precisely'],
    exam: ['Listening: demanding spoken material and varied accents', 'Reading: complex literary and factual texts', 'Writing: synthesize sources and produce a precise, coherent text', 'Speaking: express and defend nuanced positions with flexible language']
  }
};

const topicUnits = {
  A1: [
    { title: 'Home & furniture', vocabulary: ['das Zimmer — room', 'der Tisch — table', 'der Kasten — wardrobe (Austria)', 'das Fenster — window'], grammar: 'Nominative articles; sein/stehen; location phrases with neben.', distractor: 'The shop closes at five.', examples: [{ german: 'Das Sofa steht neben dem Fenster.', english: 'The sofa is next to the window.' }, { german: 'In meinem Zimmer steht ein großer Tisch.', english: 'There is a large table in my room.' }] },
    { title: 'Daily routine', vocabulary: ['aufstehen — get up', 'frühstücken — have breakfast', 'die Bim — tram (Austria)', 'um sieben Uhr — at seven o’clock'], grammar: 'Present tense; separable verbs; time phrase in first position, verb in position two.', distractor: 'The wardrobe is next to the window.', examples: [{ german: 'Ich stehe um sieben Uhr auf.', english: 'I get up at seven o’clock.' }, { german: 'Nach dem Frühstück fahre ich mit der Bim zur Arbeit.', english: 'After breakfast I take the tram to work.' }] },
    { title: 'Shopping & food', vocabulary: ['das Sackerl — bag (Austria)', 'die Erdäpfel — potatoes (Austria)', 'die Marille — apricot (Austria)', 'Wie viel kostet …? — How much does … cost?'], grammar: 'Polite requests with möchte/hätte gern; accusative articles; plural nouns.', distractor: 'I get up at seven o’clock.', examples: [{ german: 'Ich hätte gern ein Kilo Erdäpfel.', english: 'I would like a kilo of potatoes.' }, { german: 'Wie viel kosten die Marillen?', english: 'How much are the apricots?' }] }
  ],
  A2: [
    { title: 'Housing & neighborhood', vocabulary: ['die Altbauwohnung — older apartment', 'das Stiegenhaus — stairwell (Austria)', 'der Lift — elevator (Austria)', 'die Hausverwaltung — property management'], grammar: 'Dative after gegenüber; two-way prepositions for location; Perfekt for changes.', distractor: 'The clinic is open until noon.', examples: [{ german: 'Seit einem Jahr wohne ich in einer Altbauwohnung.', english: 'I have lived in an older apartment for a year.' }, { german: 'Die Apotheke ist gegenüber dem Bahnhof.', english: 'The pharmacy is opposite the station.' }] },
    { title: 'Health & appointments', vocabulary: ['die Ordination — doctor’s office (Austria)', 'der Termin — appointment', 'die Halsschmerzen — sore throat', 'seit gestern — since yesterday'], grammar: 'Seit with the present tense; dative pronouns; polite requests with könnten.', distractor: 'The train leaves from platform three.', examples: [{ german: 'Ich habe seit gestern Halsschmerzen.', english: 'I have had a sore throat since yesterday.' }, { german: 'Könnten Sie mir für Donnerstag einen Termin geben?', english: 'Could you give me an appointment for Thursday?' }] },
    { title: 'Travel & transport', vocabulary: ['das Gleis — platform', 'der Fahrschein — ticket (Austria)', 'die Verspätung — delay', 'umsteigen — change trains'], grammar: 'Subordinate clauses with wenn; comparative forms; time and place expressions.', distractor: 'The apartment is opposite the station.', examples: [{ german: 'Der Zug nach Graz fährt heute von Gleis drei.', english: 'The train to Graz leaves from platform three today.' }, { german: 'Wenn wir die Bim nehmen, sind wir schneller.', english: 'If we take the tram, we will be faster.' }] }
  ],
  B1: [
    { title: 'Work & education', vocabulary: ['die Bewerbung — application', 'die Lehrstelle — apprenticeship (Austria)', 'die Erfahrung — experience', 'sich bewerben — apply'], grammar: 'Relative clauses; weil/dass clauses; Perfekt for work experience.', distractor: 'The hike was cancelled because of fog.', examples: [{ german: 'Ich suche eine Lehrstelle, bei der ich viel lernen kann.', english: 'I am looking for an apprenticeship where I can learn a lot.' }, { german: 'Ich habe mich beworben, weil die Stelle gut zu meiner Erfahrung passt.', english: 'I applied because the position suits my experience well.' }] },
    { title: 'Travel & local events', vocabulary: ['das Dorffest — village festival', 'die Jause — snack or light meal (Austria)', 'die Öffnungszeiten — opening hours', 'wegen — because of'], grammar: 'Subordinate clauses with obwohl/weil; past narration; temporal connectors.', distractor: 'The applicant has an interview at the office.', examples: [{ german: 'Obwohl es geregnet hat, ist das Dorffest gut besucht gewesen.', english: 'Although it rained, the village festival was well attended.' }, { german: 'Vor dem Ausflug haben wir noch eine Jause eingepackt.', english: 'Before the trip, we packed a snack.' }] },
    { title: 'Community & news', vocabulary: ['laut — according to', 'die Meldung — news item', 'die Gemeinde — municipality', 'mitteilen — announce'], grammar: 'Reported speech with Konjunktiv I; passive voice; source attribution with laut.', distractor: 'The festival starts after the rain stops.', examples: [{ german: 'Laut der Gemeinde bleibt die Straße bis Freitag gesperrt.', english: 'According to the municipality, the road remains closed until Friday.' }, { german: 'Die Sprecherin teilte mit, der Zug habe Verspätung.', english: 'The spokesperson announced that the train was delayed.' }] }
  ],
  B2: [
    { title: 'Consumer choices', vocabulary: ['die Herkunft — origin', 'die Nachfrage — demand', 'die Kassa — checkout (Austria)', 'das Einkaufssackerl — shopping bag (Austria)'], grammar: 'Comparisons; causal clauses; Konjunktiv II for recommendations.', distractor: 'The council has postponed the meeting.', examples: [{ german: 'Regionale Produkte sind nicht immer günstiger, bieten aber oft nachvollziehbare Herkunft.', english: 'Regional products are not always cheaper, but often have a traceable origin.' }, { german: 'An der Kassa frage ich, ob ich ein Sackerl brauche.', english: 'At the checkout, I ask whether I need a bag.' }] },
    { title: 'Mobility & environment', vocabulary: ['der Anschluss — connection', 'der Rufbus — on-demand bus', 'die Auslastung — occupancy', 'zur Verfügung stehen — be available'], grammar: 'Passive alternatives; conditional clauses; paired connectors and concession.', distractor: 'The report was published in several newspapers.', examples: [{ german: 'Ein Rufbus ist sinnvoll, sofern er an verlässliche Anschlüsse angebunden wird.', english: 'An on-demand bus is useful provided it is connected to reliable services.' }, { german: 'Die Verbindung ist nicht nur für Pendler wichtig, sondern auch für ältere Menschen.', english: 'The connection matters not only to commuters but also to older people.' }] },
    { title: 'Work & public debate', vocabulary: ['die Stellungnahme — statement', 'der Einwand — objection', 'abwägen — weigh up', 'folglich — consequently'], grammar: 'Argument structure; Konjunktiv II for proposals; connectors for counterarguments.', distractor: 'The market sells fresh apricots every Sunday.', examples: [{ german: 'Einerseits würde ein späterer Bus vielen Beschäftigten helfen, andererseits steigen dadurch die Kosten.', english: 'On the one hand, a later bus would help many workers; on the other, it would increase costs.' }, { german: 'Der Einwand ist nachvollziehbar; folglich sollte die Stadt Alternativen prüfen.', english: 'The objection is understandable; consequently, the city should examine alternatives.' }] }
  ],
  C1: [
    { title: 'Culture & identity', vocabulary: ['die Zugehörigkeit — belonging', 'die Wahrnehmung — perception', 'aushandeln — negotiate', 'vielschichtig — multifaceted'], grammar: 'Nominalization; nuanced concessions; reference across complex clauses.', distractor: 'The train is delayed by exactly ten minutes.', examples: [{ german: 'Sprachliche Zugehörigkeit wird nicht allein durch den Dialekt ausgehandelt.', english: 'Linguistic belonging is negotiated through more than dialect alone.' }, { german: 'Wenngleich Traditionen weitergegeben werden, verändern sie sich im Alltag.', english: 'Although traditions are passed on, they change in everyday life.' }] },
    { title: 'Institutions & public policy', vocabulary: ['der Gemeinderat — municipal council (Austria)', 'das Bundesland — federal state', 'die Landesregierung — state government (Austria)', 'die Umsetzung — implementation'], grammar: 'Passive and nominal style; Konjunktiv I for attribution; condition and consequence.', distractor: 'The audience preferred the shorter performance.', examples: [{ german: 'Der Gemeinderat soll laut Landesregierung im Herbst über die Maßnahme entscheiden.', english: 'According to the state government, the municipal council is to decide on the measure in autumn.' }, { german: 'Eine Wirkung lässt sich nur insofern beurteilen, als verlässliche Daten vorliegen.', english: 'An effect can only be assessed to the extent that reliable data are available.' }] },
    { title: 'Media & evidence', vocabulary: ['die Quelle — source', 'die Erhebung — survey/data collection', 'die Einordnung — contextualization', 'der Befund — finding'], grammar: 'Reported claims; participial modifiers; cautious inference and attribution.', distractor: 'The museum closes every Monday.', examples: [{ german: 'Die gestern veröffentlichten Daten lassen noch keine eindeutige Schlussfolgerung zu.', english: 'The data published yesterday do not yet allow a clear conclusion.' }, { german: 'Demnach dürfte sich die Lage stabilisieren, sofern sich der Trend bestätigt.', english: 'Accordingly, the situation is likely to stabilize if the trend is confirmed.' }] }
  ],
  C2: [
    { title: 'Language & belonging', vocabulary: ['die Sprachvarietät — language variety', 'das Sackerl — bag (common Austrian form)', 'die Zuschreibung — attribution', 'die Selbstverständlichkeit — taken-for-granted quality'], grammar: 'Modal particles; register shifts; flexible subordinate-clause and information structure.', distractor: 'The office is closed for renovations this week.', examples: [{ german: 'Was als selbstverständlich gilt, hängt nicht zuletzt vom jeweiligen sprachlichen Umfeld ab.', english: 'What is taken for granted depends, not least, on the linguistic environment.' }, { german: 'Der Ausdruck Sackerl ist in Österreich geläufig und trägt regionale Zugehörigkeit mit.', english: 'The word Sackerl is common in Austria and carries a sense of regional belonging.' }] },
    { title: 'Media & interpretation', vocabulary: ['die Deutung — interpretation', 'die Aussagekraft — significance', 'die Verzerrung — distortion', 'gleichwohl — nevertheless'], grammar: 'Evidential distance; concessive syntax; precise qualification of claims.', distractor: 'The shop sells its products only online.', examples: [{ german: 'Die Zahlen sind für sich genommen wenig aussagekräftig; gleichwohl weisen sie auf eine Verschiebung hin.', english: 'The figures are not very meaningful on their own; nevertheless, they point to a shift.' }, { german: 'So plausibel die Deutung erscheint, sie lässt eine alternative Erklärung außer Acht.', english: 'As plausible as the interpretation seems, it overlooks an alternative explanation.' }] },
    { title: 'Public debate & compromise', vocabulary: ['der Zielkonflikt — conflicting aims', 'die Tragweite — significance', 'einräumen — concede', 'nichtsdestotrotz — nonetheless'], grammar: 'Concessive inversion; Konjunktiv II for hypothetical outcomes; rhetorical emphasis.', distractor: 'The festival was moved indoors because of rain.', examples: [{ german: 'Räumt man den Zielkonflikt ein, wird die Tragweite der Entscheidung umso deutlicher.', english: 'Once the conflict of aims is acknowledged, the significance of the decision becomes all the clearer.' }, { german: 'Nichtsdestotrotz wäre ein tragfähiger Kompromiss denkbar, sofern beide Seiten Spielraum lassen.', english: 'Nonetheless, a workable compromise would be conceivable if both sides allowed room to manoeuvre.' }] }
  ]
};

const extraTopicUnits = {
  A1: [
    { title: 'Family & friends', vocabulary: ['die Geschwister — siblings', 'der Freund / die Freundin — friend', 'verheiratet — married', 'gernhaben — like / care about'], grammar: 'Possessive articles; haben/sein; simple questions with wer and wie.', distractor: 'The tram leaves from platform four.', examples: [{ german: 'Meine Schwester wohnt in Graz.', english: 'My sister lives in Graz.' }, { german: 'Hast du Geschwister?', english: 'Do you have siblings?' }] },
    { title: 'Around town & directions', vocabulary: ['die Bim — tram (Austria)', 'die Haltestelle — stop', 'die Trafik — tobacconist (Austria)', 'geradeaus — straight ahead'], grammar: 'Imperatives; direction phrases; dative location phrases.', distractor: 'My sister lives in Graz.', examples: [{ german: 'Gehen Sie geradeaus bis zur Haltestelle.', english: 'Go straight ahead to the stop.' }, { german: 'Die Trafik ist neben der Bäckerei.', english: 'The tobacconist is next to the bakery.' }] }
  ],
  A2: [
    { title: 'Free time & invitations', vocabulary: ['das Wochenende — weekend', 'der Ausflug — outing', 'sich ausmachen — arrange (Austria)', 'Lust haben auf — feel like'], grammar: 'Modal verbs; reflexive verbs; suggestions with könnten and wie wär’s.', distractor: 'The doctor’s office opens at eight.', examples: [{ german: 'Wir könnten am Wochenende einen Ausflug machen.', english: 'We could go on an outing at the weekend.' }, { german: 'Machen wir uns für Samstag einen Treffpunkt aus?', english: 'Shall we arrange a meeting place for Saturday?' }] },
    { title: 'At home & cooking', vocabulary: ['der Herd — cooker', 'der Mistkübel — rubbish bin (Austria)', 'die Küchenrolle — kitchen roll', 'umrühren — stir'], grammar: 'Accusative objects; separable verbs; sequencing with zuerst/dann/danach.', distractor: 'The train is delayed by ten minutes.', examples: [{ german: 'Stell den Topf auf den Herd und rühr die Suppe um.', english: 'Put the pot on the cooker and stir the soup.' }, { german: 'Danach räume ich die Küche auf.', english: 'After that I tidy the kitchen.' }] }
  ],
  B1: [
    { title: 'Housing & shared living', vocabulary: ['die Genossenschaftswohnung — cooperative apartment (Austria)', 'die Betriebskosten — operating costs', 'die Hausordnung — house rules', 'sich beschweren — complain'], grammar: 'Relative clauses; passive voice; polite indirect complaints.', distractor: 'The apprenticeship starts in September.', examples: [{ german: 'Die Genossenschaftswohnung, in der wir wohnen, hat einen Innenhof.', english: 'The cooperative apartment we live in has a courtyard.' }, { german: 'Es wurde eine Nachricht aufgehängt, weil die Waschküche gesperrt ist.', english: 'A notice was posted because the laundry room is closed.' }] },
    { title: 'Money & everyday services', vocabulary: ['das Konto — bank account', 'die Überweisung — transfer', 'die e-card — Austrian health insurance card', 'die Gebühr — fee'], grammar: 'Indirect questions; subordinate clause word order; verbs with dative objects.', distractor: 'The new route is expensive but popular.', examples: [{ german: 'Könnten Sie mir sagen, ob die Überweisung schon angekommen ist?', english: 'Could you tell me whether the transfer has arrived yet?' }, { german: 'Mit der e-card kann ich in der Ordination bezahlen.', english: 'I can pay at the doctor’s office with my e-card.' }] }
  ],
  B2: [
    { title: 'Culture & media', vocabulary: ['der Beitrag — report / feature', 'die Berichterstattung — coverage', 'die Förderung — funding', 'die Reichweite — reach'], grammar: 'Passive and nominal style; contrastive connectors; reported statements.', distractor: 'The kitchen bin is beside the fridge.', examples: [{ german: 'Der Beitrag beleuchtet, wie regionale Kulturinitiativen gefördert werden.', english: 'The report examines how regional cultural initiatives are funded.' }, { german: 'Einerseits erreicht die Sendung ein großes Publikum, andererseits bleibt wenig Zeit für Einordnung.', english: 'On the one hand, the programme reaches a large audience; on the other, there is little time for context.' }] },
    { title: 'Education & social change', vocabulary: ['die Lehre — apprenticeship (Austria)', 'der Fachkräftemangel — skills shortage', 'die Weiterbildung — continuing education', 'der Zugang — access'], grammar: 'Infinitive clauses with zu; causal and concessive clauses; adjective endings.', distractor: 'Regional programmes often have small audiences.', examples: [{ german: 'Um dem Fachkräftemangel entgegenzuwirken, wird die Weiterbildung ausgebaut.', english: 'To counter the skills shortage, continuing education is being expanded.' }, { german: 'Obwohl viele eine Lehre beginnen, ist der Zugang zu manchen Berufen schwierig.', english: 'Although many start an apprenticeship, access to some occupations is difficult.' }] }
  ],
  C1: [
    { title: 'Research & public understanding', vocabulary: ['die Studie — study', 'die Stichprobe — sample', 'die Aussagekraft — explanatory value', 'einordnen — contextualize'], grammar: 'Participial attributes; cautious inference; nominalization and source attribution.', distractor: 'The municipal council meets on Thursday.', examples: [{ german: 'Die in mehreren Bundesländern erhobenen Daten lassen nur bedingt Rückschlüsse zu.', english: 'The data collected in several federal states allow only limited conclusions.' }, { german: 'Die Ergebnisse sind einzuordnen, bevor daraus politische Forderungen abgeleitet werden.', english: 'The results need to be put into context before political demands are derived from them.' }] },
    { title: 'Energy & regional planning', vocabulary: ['die Energiewende — energy transition', 'der Netzausbau — grid expansion', 'die Versorgungssicherheit — security of supply', 'abwägen — weigh up'], grammar: 'Concessive clauses; Konjunktiv II for policy options; complex noun phrases.', distractor: 'The study did not include any regional data.', examples: [{ german: 'Der Netzausbau wäre notwendig, sofern die Versorgungssicherheit gewährleistet bleibt.', english: 'Grid expansion would be necessary provided security of supply is maintained.' }, { german: 'Wenngleich die Energiewende breite Zustimmung findet, müssen lokale Folgen abgewogen werden.', english: 'Although the energy transition has broad support, local impacts must be weighed.' }] }
  ],
  C2: [
    { title: 'Regional speech & public life', vocabulary: ['die Sprachlandschaft — linguistic landscape', 'die Varietät — variety', 'die Verständlichkeit — intelligibility', 'die Zuschreibung — attribution'], grammar: 'Register shifts; modal particles; pragmatic meaning and syntactic compression.', distractor: 'The office closes at five each day.', examples: [{ german: 'Regionale Varietäten sind nicht bloß eine Frage des Wortschatzes, sondern prägen auch Nähe und Haltung.', english: 'Regional varieties are not merely a matter of vocabulary; they also shape closeness and stance.' }, { german: 'Was im Rundfunk als verständlich gilt, hängt nicht zuletzt vom Publikum ab.', english: 'What counts as intelligible in broadcasting depends, not least, on the audience.' }] },
    { title: 'Negotiation & compromise', vocabulary: ['der Interessenausgleich — balancing of interests', 'die Tragweite — significance', 'der Spielraum — room for manoeuvre', 'zugestehen — concede'], grammar: 'Concessive inversion; Konjunktiv II; rhetorical emphasis and parallel structure.', distractor: 'The apartment is next to the station.', examples: [{ german: 'So berechtigt einzelne Einwände sein mögen, sie entheben die Beteiligten nicht der Pflicht zum Interessenausgleich.', english: 'However justified individual objections may be, they do not relieve those involved of the duty to balance interests.' }, { german: 'Ein tragfähiger Kompromiss wäre denkbar, räumten beide Seiten ein, dass ihr Spielraum begrenzt ist.', english: 'A workable compromise would be conceivable if both sides acknowledged that their room for manoeuvre is limited.' }] }
  ]
};

Object.keys(topicUnits).forEach((level) => topicUnits[level].push(...extraTopicUnits[level]));

const topicReadingPacks = {
  A1: [
    { type: 'A short message', text: 'Hallo Lea! Am Samstag helfe ich meiner Schwester beim Umzug. Ihr neues Zimmer ist im zweiten Stock. Das Sofa kommt ans Fenster und der Tisch neben die Tür. Um zwölf machen wir eine Pause. Kannst du danach noch zum Hauptplatz kommen? Dort gibt es ein kleines Fest. Liebe Grüße, Mia', questions: [{ prompt: 'Who is moving?', options: ['Mia’s sister', 'Lea’s brother', 'Mia’s friend'], answer: 0 }, { prompt: 'Where will the table go?', options: ['Beside the door', 'By the window', 'In the kitchen'], answer: 0 }, { prompt: 'When does Mia take a break?', options: ['At twelve', 'At two', 'In the evening'], answer: 0 }] },
    { type: 'A daily schedule', text: 'Am Montag steht Lukas um halb sieben auf. Zuerst frühstückt er zu Hause. Um Viertel nach sieben fährt er mit der Bim zur Arbeit. Die Fahrt dauert ungefähr zwanzig Minuten. In der Mittagspause geht er mit einer Kollegin zum Würstelstand. Nach der Arbeit kauft er noch Milch und Brot. Um sechs ist er wieder daheim.', questions: [{ prompt: 'How does Lukas travel to work?', options: ['By tram', 'By bicycle', 'On foot'], answer: 0 }, { prompt: 'Where does he eat at lunchtime?', options: ['At a Würstelstand', 'At home', 'At the station'], answer: 0 }, { prompt: 'What time is he home?', options: ['Six o’clock', 'Seven o’clock', 'Half past seven'], answer: 0 }] },
    { type: 'A shopping note', text: 'Liebe Papa! Ich gehe nach der Schule zum Markt. Bitte kauf dort ein Kilo Erdäpfel und ein Sackerl Äpfel. Die Marillen sind für den Kuchen, aber davon brauchen wir nur sechs. Das Brot hole ich beim Bäcker ums Eck. Ich bin um fünf wieder zu Hause. Danke! Anna', questions: [{ prompt: 'How many apricots does the family need?', options: ['Six', 'Five', 'Ten'], answer: 0 }, { prompt: 'Where will Anna buy the bread?', options: ['At the bakery nearby', 'At the market', 'At the station'], answer: 0 }, { prompt: 'When will Anna be home?', options: ['At five', 'At four', 'At six'], answer: 0 }] },
    { type: 'A family invitation', text: 'Servus zusammen! Am Sonntag feiern wir den Geburtstag von Oma. Wir treffen uns um elf bei ihr in der Wohnung. Ihr wohnt im dritten Stock; der Lift ist rechts neben der Stiege. Zum Essen gibt es Suppe und Kuchen. Bringt bitte keine Geschenke mit. Wenn das Wetter schön ist, gehen wir nach dem Essen noch in den Park. Bis Sonntag! Paul', questions: [{ prompt: 'Where does the family meet?', options: ['At Oma’s apartment', 'At a restaurant', 'In the park'], answer: 0 }, { prompt: 'Which floor is Oma’s apartment on?', options: ['The third floor', 'The second floor', 'The ground floor'], answer: 0 }, { prompt: 'What should guests bring?', options: ['No presents', 'A cake', 'A soup'], answer: 0 }] },
    { type: 'A notice in town', text: 'Liebe Besucherinnen und Besucher! Der Bauernmarkt am Hauptplatz ist diesen Freitag nicht wie üblich am Vormittag geöffnet. Wegen einer Veranstaltung beginnt der Verkauf erst um 14 Uhr. Obst, Gemüse und Käse gibt es wie immer bei den Ständen rund um den Brunnen. Die Bäckerei bleibt geschlossen. Danke für Ihr Verständnis!', questions: [{ prompt: 'When does the market open on Friday?', options: ['At 2 p.m.', 'In the morning', 'At noon'], answer: 0 }, { prompt: 'Where are the market stalls?', options: ['Around the fountain', 'Inside the bakery', 'By the station'], answer: 0 }, { prompt: 'Which shop is closed?', options: ['The bakery', 'The cheese stand', 'The fruit stand'], answer: 0 }] }
  ],
  A2: [
    { type: 'A message to the Hausverwaltung', text: 'Guten Tag! Seit letzter Woche funktioniert das Licht im Stiegenhaus nicht mehr. Besonders am Abend ist es sehr dunkel. Könnten Sie bitte jemanden schicken, der die Lampe repariert? Ich wohne im zweiten Stock, Tür 8. Am Donnerstag bin ich ab 16 Uhr zu Hause. Vielen Dank und freundliche Grüße, Nora Berger', questions: [{ prompt: 'What needs to be repaired?', options: ['The stairwell light', 'The lift', 'The apartment door'], answer: 0 }, { prompt: 'Where does Nora live?', options: ['On the second floor', 'On the first floor', 'On the ground floor'], answer: 0 }, { prompt: 'When is she home on Thursday?', options: ['After 4 p.m.', 'Before noon', 'After 8 p.m.'], answer: 0 }] },
    { type: 'A weekend plan', text: 'Servus Daniel! Am Samstag soll es in Graz sonnig werden. Ich würde gern mit der S-Bahn nach Bruck fahren und dort eine kleine Wanderung machen. Der Zug fährt um 9.12 Uhr ab. Nimm bitte eine Trinkflasche und eine leichte Jacke mit. Für eine Jause ist gesorgt. Wenn du mitkommen möchtest, schreib mir bis Freitagabend. Liebe Grüße, Eva', questions: [{ prompt: 'Where do Eva and Daniel plan to hike?', options: ['Near Bruck', 'In Graz city centre', 'Near Salzburg'], answer: 0 }, { prompt: 'What should Daniel bring?', options: ['A bottle and a light jacket', 'A tent and a sleeping bag', 'A bicycle helmet'], answer: 0 }, { prompt: 'By when should Daniel reply?', options: ['Friday evening', 'Saturday morning', 'Thursday afternoon'], answer: 0 }] },
    { type: 'A notice from the Ordination', text: 'Liebe Patientinnen und Patienten! Wegen einer Fortbildung bleibt unsere Ordination am kommenden Mittwoch geschlossen. Vereinbarte Termine finden wie geplant statt; bitte läuten Sie bei der Seitentür. Für dringende Anliegen wenden Sie sich an die Vertretung in der Mariahilfer Straße. Ab Donnerstag sind wir wieder zu den üblichen Öffnungszeiten erreichbar. Ihre Ordination Dr. Huber', questions: [{ prompt: 'Why is the office closed on Wednesday?', options: ['The staff are at a training course', 'The doctor is on holiday', 'The building is being repaired'], answer: 0 }, { prompt: 'Where should patients go for urgent matters?', options: ['To the substitute practice', 'To the hospital entrance', 'To the pharmacy'], answer: 0 }, { prompt: 'When does the office reopen normally?', options: ['Thursday', 'Wednesday', 'Friday'], answer: 0 }] },
    { type: 'A market recipe', text: 'Für die Marillenknödel brauchst du acht reife Marillen, Topfen, Mehl und ein Ei. Zuerst mischst du Topfen, Ei und Mehl in einer Schüssel. Dann wickelst du den Teig um jede Marille. Die Knödel kommen ungefähr zwölf Minuten in leicht kochendes Wasser. Zum Schluss wälzt du sie in Butterbröseln. Serviere sie warm.', questions: [{ prompt: 'What is mixed first?', options: ['Topfen, egg and flour', 'Butter, sugar and milk', 'Apples and cinnamon'], answer: 0 }, { prompt: 'How long are the dumplings cooked?', options: ['About twelve minutes', 'About eight minutes', 'About twenty minutes'], answer: 0 }, { prompt: 'How are they finished?', options: ['Rolled in buttery breadcrumbs', 'Covered with chocolate', 'Fried with onions'], answer: 0 }] },
    { type: 'A public transport update', text: 'Ab Montag fährt die Buslinie 4 wegen Bauarbeiten eine andere Strecke. Die Haltestellen Rathaus und Museum werden nicht angefahren. Bitte benutzen Sie stattdessen die Haltestelle Stadtpark. Die Fahrzeiten bleiben gleich. Die Bauarbeiten dauern voraussichtlich bis Ende des Monats. Aktuelle Informationen finden Sie auf der Website der Stadt.', questions: [{ prompt: 'Which stop should passengers use instead?', options: ['Stadtpark', 'Rathaus', 'Museum'], answer: 0 }, { prompt: 'What changes about the timetable?', options: ['Nothing; times stay the same', 'Buses run every hour', 'The first bus leaves earlier'], answer: 0 }, { prompt: 'How long are the works expected to last?', options: ['Until the end of the month', 'One week', 'Until next year'], answer: 0 }] }
  ],
  B1: [
    { type: 'An apprenticeship email', text: 'Betreff: Schnuppertag in der Tischlerei. Grüß dich, Jonas! Danke für deine Bewerbung. Wir möchten dich am 18. Juni zu einem Schnuppertag einladen. Du kannst ab 8 Uhr mit unserem Team arbeiten und dir die Werkstatt anschauen. Bitte bring feste Schuhe und, wenn vorhanden, deine Mappe mit. Am Nachmittag sprechen wir über die Berufsschule und den Ablauf der Lehre. Gib uns bis Freitag Bescheid, ob du kommen kannst. Freundliche Grüße, Martina Hofer, Tischlerei Leitner', questions: [{ prompt: 'What is Jonas invited to do?', options: ['Spend a trial day at the workshop', 'Start work immediately', 'Attend a written exam'], answer: 0 }, { prompt: 'What should he bring?', options: ['Sturdy shoes and, if available, his portfolio', 'A uniform and a bicycle', 'His school certificate only'], answer: 0 }, { prompt: 'What will they discuss in the afternoon?', options: ['Vocational school and the apprenticeship', 'His holiday plans', 'The workshop rent'], answer: 0 }] },
    { type: 'A village newsletter', text: 'Das Dorffest findet heuer am 14. und 15. September statt. Weil der Hauptplatz renoviert wird, stehen die Stände diesmal beim Sportplatz. Am Samstag spielen drei Musikgruppen aus dem Bezirk; am Sonntag gibt es einen Frühschoppen und ein Kinderprogramm. Die Gemeinde bittet Besucherinnen und Besucher, wenn möglich mit dem Bus anzureisen. Die Linie 6 fährt an beiden Tagen bis Mitternacht. Helferinnen und Helfer können sich bis Ende August im Gemeindeamt melden.', questions: [{ prompt: 'Why has the location changed?', options: ['The main square is being renovated', 'The sports ground is closed', 'There is no bus service'], answer: 0 }, { prompt: 'What is available on Sunday?', options: ['A Frühschoppen and children’s programme', 'Three evening concerts', 'A job fair'], answer: 0 }, { prompt: 'How late does bus 6 run?', options: ['Until midnight', 'Until 10 p.m.', 'Until 2 a.m.'], answer: 0 }] },
    { type: 'A local news report', text: 'Die Gemeinde hat am Dienstag ein neues Beratungsangebot für ältere Menschen vorgestellt. Ehrenamtliche helfen künftig einmal pro Woche bei Fragen zu digitalen Amtswegen, Fahrkarten und der e-card. Das Angebot findet im Bürgerservice statt und ist kostenlos. Laut Bürgermeisterin habe man auf mehrere Rückmeldungen aus den Ortsteilen reagiert. Wer Unterstützung benötigt, soll sich telefonisch anmelden. Nach drei Monaten will die Gemeinde prüfen, ob zusätzliche Termine notwendig sind.', questions: [{ prompt: 'Who is the new service for?', options: ['Older residents', 'Newly arrived students', 'Local businesses'], answer: 0 }, { prompt: 'What kinds of questions can volunteers help with?', options: ['Online public services and everyday cards', 'Legal representation in court', 'Finding a new apartment'], answer: 0 }, { prompt: 'When will the municipality review the service?', options: ['After three months', 'After one year', 'Next Tuesday'], answer: 0 }] },
    { type: 'A residents’ notice', text: 'Liebe Hausbewohnerinnen und Hausbewohner! Bei der letzten Besprechung wurde beschlossen, den Innenhof neu zu gestalten. Die Arbeiten beginnen am 3. Oktober und dauern voraussichtlich zwei Wochen. In dieser Zeit können Fahrräder nicht im Hof abgestellt werden; bitte verwenden Sie den Fahrradraum im Keller. Über die neuen Sitzgelegenheiten und Pflanzen wird beim nächsten Treffen abgestimmt. Vorschläge können bis 20. September in den Briefkasten der Hausverwaltung geworfen werden.', questions: [{ prompt: 'How long will the work probably take?', options: ['About two weeks', 'Three days', 'One month'], answer: 0 }, { prompt: 'Where should residents keep their bicycles?', options: ['In the basement bicycle room', 'On the street', 'In the stairwell'], answer: 0 }, { prompt: 'How can residents submit suggestions?', options: ['Put them in the management mailbox', 'Call the mayor', 'Post them on the courtyard gate'], answer: 0 }] },
    { type: 'A community service email', text: 'Guten Tag, Frau Mayr! Ihre Überweisung für den neuen Wasserzähler ist bei uns eingelangt. Für den Einbau brauchen wir noch einen Termin, an dem jemand Zugang zum Keller hat. Unsere Techniker sind am 7. oder 9. November zwischen 8 und 12 Uhr verfügbar. Bitte teilen Sie uns mit, welcher Vormittag für Sie passt. Die e-card ist für diesen Termin nicht erforderlich. Mit freundlichen Grüßen, Stadtwerke Graz', questions: [{ prompt: 'What has already arrived?', options: ['The payment', 'The water meter', 'The appointment confirmation'], answer: 0 }, { prompt: 'Why is access to the cellar needed?', options: ['For the meter installation', 'For a public meeting', 'For a health examination'], answer: 0 }, { prompt: 'When are technicians available?', options: ['On two mornings in November', 'Every afternoon in December', 'Only on weekends'], answer: 0 }] }
  ],
  B2: [
    { type: 'A regional mobility proposal', text: 'Ein neues Mobilitätskonzept soll die Wege zwischen mehreren Gemeinden verbessern. Vorgesehen sind abgestimmte Busanschlüsse, ein Rufbus am Abend und sichere Abstellplätze für Fahrräder an den Bahnhöfen. Die Gemeinden betonen, dass das Angebot nur dann angenommen werde, wenn Fahrpläne verlässlich und Informationen leicht auffindbar seien. Vertreterinnen des Handels begrüßen die bessere Erreichbarkeit, weisen jedoch auf mögliche Engpässe bei Lieferzonen hin. Vor einer dauerhaften Umsetzung ist ein sechsmonatiger Versuch geplant. Danach sollen Fahrgastzahlen und Rückmeldungen ausgewertet werden. Erst auf dieser Grundlage wird über zusätzliche Verbindungen entschieden.', questions: [{ prompt: 'What is planned for evenings?', options: ['An on-demand bus', 'A night train', 'A pedestrian-only road'], answer: 0 }, { prompt: 'What concern do retailers raise?', options: ['Possible delivery-zone shortages', 'Too many bicycle spaces', 'A lack of online information'], answer: 0 }, { prompt: 'What happens after the trial?', options: ['Usage and feedback are evaluated', 'The service automatically becomes permanent', 'All bus routes are cancelled'], answer: 0 }] },
    { type: 'A cultural funding call', text: 'Das Land schreibt eine Förderung für Kulturprojekte außerhalb der Landeshauptstadt aus. Unterstützt werden Vorhaben, die lokale Vereine und neue Zielgruppen zusammenbringen. Die Auswahl erfolgt nicht allein nach der erwarteten Besucherzahl: Auch Kooperationen, Zugänglichkeit und ein nachvollziehbarer Kostenplan werden berücksichtigt. Anträge müssen bis 30. April eingereicht werden. Eine Fachjury entscheidet im Juni; die Ergebnisse werden anschließend veröffentlicht. Veranstalterinnen und Veranstalter, deren Projekt nicht berücksichtigt wird, können im folgenden Jahr erneut einreichen. Die Förderung deckt höchstens 60 Prozent der Gesamtkosten ab.', questions: [{ prompt: 'Which projects are eligible?', options: ['Projects outside the regional capital linking associations and new audiences', 'Only large events in the capital', 'Private renovations of cultural buildings'], answer: 0 }, { prompt: 'What is considered besides expected attendance?', options: ['Partnerships, accessibility and budget clarity', 'The age of the venue only', 'Media coverage from abroad'], answer: 0 }, { prompt: 'What is the maximum share of costs covered?', options: ['60 percent', '80 percent', 'The full amount'], answer: 0 }] },
    { type: 'A workplace discussion', text: 'In einer Befragung unter Beschäftigten sprachen sich viele für mehr zeitliche Flexibilität aus. Die Ergebnisse zeigen jedoch Unterschiede zwischen Branchen: Während ein Teil der Büroangestellten regelmäßig im Homeoffice arbeitet, ist dies in Pflege, Handel und Produktion nur eingeschränkt möglich. Die Autorinnen der Studie warnen daher davor, flexible Arbeit ausschließlich mit dem Arbeitsort gleichzusetzen. Auch verlässliche Dienstpläne, Mitsprache bei Schichttausch und ausreichend Erholungszeit seien entscheidend. Unternehmen, die solche Maßnahmen erprobt haben, berichten von weniger kurzfristigen Ausfällen, weisen aber zugleich auf den zusätzlichen Abstimmungsbedarf hin.', questions: [{ prompt: 'What limitation does the study point out?', options: ['Remote work is not equally possible in all sectors', 'Employees do not want schedule flexibility', 'Homeoffice eliminates the need for coordination'], answer: 0 }, { prompt: 'What does the article say flexibility can also include?', options: ['Reliable schedules and input on shift changes', 'Shorter contracts for all staff', 'Fewer rest periods'], answer: 0 }, { prompt: 'What challenge do companies mention?', options: ['More coordination is required', 'Staff refuse to change shifts', 'The measures increase absences'], answer: 0 }] },
    { type: 'A public consultation', text: 'Die Stadt lädt zur Diskussion über die Umgestaltung einer stark befahrenen Straße ein. Der Entwurf sieht breitere Gehsteige, zusätzliche Bäume und eine eigene Spur für öffentliche Verkehrsmittel vor. Anrainerinnen begrüßen die bessere Aufenthaltsqualität, verlangen aber Lösungen für Zufahrten und Lieferverkehr. Der Verkehrsclub hält die geplante Busspur für sinnvoll, sofern sie nicht an den wichtigsten Kreuzungen endet. Bis Ende Mai können Stellungnahmen online oder bei einer Veranstaltung im Bezirksamt eingebracht werden. Die Stadt verspricht, alle Rückmeldungen zu veröffentlichen und zu begründen, welche Vorschläge übernommen werden.', questions: [{ prompt: 'What is one feature of the draft?', options: ['A dedicated public transport lane', 'Fewer trees and narrower pavements', 'A permanent ban on deliveries'], answer: 0 }, { prompt: 'What condition does the transport club emphasize?', options: ['The bus lane should continue through key intersections', 'The street should close at night', 'All deliveries should move to the motorway'], answer: 0 }, { prompt: 'What will the city do with feedback?', options: ['Publish it and explain its decisions', 'Accept every suggestion automatically', 'Keep it confidential'], answer: 0 }] },
    { type: 'A consumer information article', text: 'Beim Einkauf wird Regionalität oft als eindeutiges Qualitätsmerkmal verstanden. Tatsächlich sagt die Herkunft allein wenig darüber aus, unter welchen Bedingungen ein Produkt hergestellt wurde. Fachleute empfehlen deshalb, zusätzlich auf Saison, Verarbeitung und Transport zu achten. Ein regionales Produkt kann eine sinnvolle Wahl sein, wenn es gerade Saison hat; außerhalb der Saison können Lagerung oder beheizte Gewächshäuser die Umweltbilanz verändern. Für Konsumentinnen ist die Kennzeichnung allerdings nicht immer leicht zu vergleichen. Der Beitrag fordert daher einheitliche und verständliche Angaben statt vereinfachender Werbeversprechen.', questions: [{ prompt: 'What does the article say regional origin alone does not show?', options: ['The conditions under which a product was made', 'The shop’s opening hours', 'Whether the label is printed locally'], answer: 0 }, { prompt: 'What additional factors are suggested?', options: ['Season, processing and transport', 'Packaging colour and brand size', 'Price and shop location only'], answer: 0 }, { prompt: 'What does the article call for?', options: ['Clearer, more consistent labels', 'Less information for shoppers', 'A ban on seasonal products'], answer: 0 }] }
  ],
  C1: [
    { type: 'A report on regional language', text: 'Eine neue Untersuchung zur österreichischen Medienlandschaft geht der Frage nach, wie regionale Sprachformen im Rundfunk wahrgenommen werden. Die Befragten verbinden Dialekt häufig mit Nähe und Glaubwürdigkeit, weisen zugleich aber auf mögliche Verständnishürden hin. Entscheidend sei weniger, ob eine Sendung Dialekt zulasse, als in welchem Format und mit welcher Funktion dies geschehe. In Interviews könne die unveränderte Sprechweise soziale und biografische Information vermitteln; bei redaktionellen Zusammenfassungen werde dagegen oft ein überregional verständlicher Standard erwartet. Die Autorinnen warnen davor, diese Unterscheidung als starre Norm zu behandeln. Hörgewohnheiten, Publikum und regionale Identität wirkten zusammen und veränderten sich laufend.', questions: [{ prompt: 'What distinction does the study make?', options: ['The role of dialect may differ between interviews and editorial summaries', 'Dialect is always clearer than standard German', 'Regional speech has no effect on credibility'], answer: 0 }, { prompt: 'What do respondents often associate with dialect?', options: ['Closeness and credibility', 'Official authority only', 'A lack of personal identity'], answer: 0 }, { prompt: 'Why do the authors resist a rigid rule?', options: ['Language use depends on changing audiences and contexts', 'All broadcasters use the same dialect', 'The study included no interviews'], answer: 0 }] },
    { type: 'A policy analysis on housing', text: 'Die Debatte um leistbaren Wohnraum wird häufig auf die Zahl neu errichteter Wohnungen verkürzt. Eine Analyse mehrerer österreichischer Städte legt nahe, dass auch Lage, Verkehrsanbindung und langfristige Mietbedingungen berücksichtigt werden müssen. Verdichtung entlang bestehender öffentlicher Verkehrsachsen könne zusätzlichen Wohnraum schaffen, ohne Grünflächen pauschal als ungenutzte Reserve zu behandeln. Zugleich seien Widmungsentscheidungen allein kein Garant für leistbares Wohnen: Fördermodelle, gemeinnütziger Wohnbau und die Verfügbarkeit kommunaler Grundstücke beeinflussten, wer tatsächlich Zugang erhalte. Die Autorinnen plädieren deshalb für eine Verbindung baulicher Maßnahmen mit sozialpolitischen Instrumenten. Welche Kombination wirkt, müsse jedoch anhand lokaler Daten überprüft werden.', questions: [{ prompt: 'What does the analysis say should be considered besides the number of new homes?', options: ['Location, transport access and long-term rent conditions', 'Building height alone', 'The number of private parking spaces'], answer: 0 }, { prompt: 'Why are zoning decisions insufficient by themselves?', options: ['They do not guarantee who can afford the housing', 'They automatically remove green space', 'They prevent public transport expansion'], answer: 0 }, { prompt: 'What do the authors recommend?', options: ['Combine construction with social policy measures', 'Use only one national building model', 'Stop collecting local data'], answer: 0 }] },
    { type: 'A research summary', text: 'Eine Langzeitstudie zur Energieversorgung vergleicht Gemeinden, die früh in erneuerbare Energie investiert haben, mit solchen, die ihre Infrastruktur erst später umgestellt haben. Die Ergebnisse sprechen dafür, dass lokale Beteiligung die Akzeptanz erhöht; ein direkter Zusammenhang mit niedrigeren Kosten lässt sich jedoch nicht für alle Fälle nachweisen. Unterschiede bei Netzausbau, Förderbedingungen und Verbrauch seien zu groß, um einfache Schlussfolgerungen zuzulassen. Die Forschenden betonen außerdem, dass einzelne Erfolgsbeispiele nicht unverändert auf andere Regionen übertragbar sind. Für künftige Planungen empfehlen sie daher, technische Kennzahlen mit sozialen Faktoren zu verbinden und Unsicherheiten ausdrücklich auszuweisen.', questions: [{ prompt: 'What finding is supported by the study?', options: ['Local participation can increase acceptance', 'Renewable projects always lower costs', 'All regions can copy the same model'], answer: 0 }, { prompt: 'Why are costs difficult to compare?', options: ['Infrastructure and local conditions differ', 'No communities have changed their systems', 'The study did not record energy use'], answer: 0 }, { prompt: 'What do researchers recommend for future planning?', options: ['Combine technical and social factors and report uncertainty', 'Use success stories without adaptation', 'Ignore local conditions'], answer: 0 }] },
    { type: 'A cultural funding notice', text: 'Das Land plant, die Kulturförderung neu auszurichten. Künftig sollen nicht nur einzelne Veranstaltungen, sondern auch längerfristige Kooperationen zwischen etablierten Häusern und regionalen Initiativen berücksichtigt werden. Befürworterinnen sehen darin die Möglichkeit, bestehende Infrastruktur besser zu nutzen. Kleinere Vereine befürchten hingegen, dass zusätzliche Anforderungen an Dokumentation und Eigenmittel ihre Teilnahme erschweren könnten. Im Entwurf ist deshalb ein vereinfachtes Verfahren für Vorhaben mit geringem Budget vorgesehen. Eine endgültige Entscheidung steht noch aus; die zuständige Abteilung will zunächst Rückmeldungen aus allen Bezirken sammeln und die Kriterien überarbeiten.', questions: [{ prompt: 'What would the new policy additionally support?', options: ['Long-term partnerships between institutions and local initiatives', 'Only single large festivals', 'Building projects without public programming'], answer: 0 }, { prompt: 'What concern do smaller associations raise?', options: ['Documentation and matching-fund requirements may exclude them', 'They will have too many venues', 'The policy removes all local funding'], answer: 0 }, { prompt: 'What happens before a final decision?', options: ['Feedback is gathered and criteria revised', 'The proposal takes effect immediately', 'All applications are rejected'], answer: 0 }] },
    { type: 'A media literacy feature', text: 'Der Beitrag über den Umgang mit Daten in Nachrichten hebt hervor, dass Transparenz nicht allein durch die Veröffentlichung eines Datensatzes entsteht. Leserinnen müssen nachvollziehen können, wer die Erhebung durchgeführt hat, welche Gruppen erfasst wurden und welche Unsicherheiten bestehen. Fehlen diese Angaben, kann eine präzise wirkende Zahl mehr Sicherheit vermitteln, als die zugrunde liegende Methode erlaubt. Gleichzeitig wäre es verfehlt, komplexe Ergebnisse so stark zu vereinfachen, dass relevante Einschränkungen verschwinden. Der Beitrag schlägt vor, Quellen und Methode knapp, aber sichtbar zu erläutern und bei Bedarf auf ausführlichere Hintergrundinformationen zu verweisen.', questions: [{ prompt: 'What does the feature say is needed in addition to publishing data?', options: ['Context about method, sample and uncertainty', 'A single definitive interpretation', 'More decimal places in every statistic'], answer: 0 }, { prompt: 'What risk do missing details create?', options: ['Numbers may appear more certain than they are', 'Readers stop using all statistics', 'Reports become too short'], answer: 0 }, { prompt: 'What solution is proposed?', options: ['Brief visible method notes with links to more detail', 'Remove all qualifications', 'Publish only summaries'], answer: 0 }] }
  ],
  C2: [
    { type: 'A commentary on dialect and access', text: 'Die Forderung, Nachrichtensendungen müssten entweder konsequent im Dialekt oder ausschließlich in einer normierten Standardsprache moderiert werden, setzt eine Eindeutigkeit voraus, die der Sprachgebrauch kaum hergibt. Verständlichkeit ist kein unveränderliches Merkmal einzelner Wörter, sondern entsteht im Zusammenspiel von Vorwissen, Kontext und Sprechsituation. Gerade deshalb wäre es verkürzt, regionale Formen als bloße Ausschmückung abzutun. Sie können Zugehörigkeit markieren, Haltungen nuancieren und Erfahrung sichtbar machen. Zugleich bleibt die öffentliche Verantwortung bestehen, Informationen möglichst vielen Menschen zugänglich zu vermitteln. Eine reflektierte Praxis hätte folglich nicht die Tilgung von Variation, sondern deren bewusste und transparente Einbettung zum Ziel.', questions: [{ prompt: 'What assumption does the author challenge?', options: ['That broadcast language must be either wholly dialect or wholly standardized', 'That audiences use context to understand speech', 'That broadcasters have a public responsibility'], answer: 0 }, { prompt: 'What can regional language forms communicate?', options: ['Belonging, stance and lived experience', 'Only decorative local colour', 'A guarantee of universal comprehension'], answer: 0 }, { prompt: 'What approach does the author favour?', options: ['Integrating variation deliberately and transparently', 'Removing all regional features', 'Using only spontaneous dialect'], answer: 0 }] },
    { type: 'A review of a public consultation', text: 'Die Auswertung der Bürgerbeteiligung zur Neugestaltung des Bahnhofsviertels wird als Beleg für ein offenes Verfahren angeführt. Dass mehrere tausend Rückmeldungen eingelangt sind, sagt für sich genommen jedoch wenig darüber aus, wessen Interessen darin tatsächlich abgebildet wurden. Menschen mit wenig Zeit, eingeschränktem Internetzugang oder geringen Deutschkenntnissen dürften seltener teilgenommen haben. Die veröffentlichte Zusammenfassung legt zwar Themenfelder offen, macht aber nicht ausreichend sichtbar, wie widersprüchliche Positionen gewichtet wurden. Das Verfahren ist damit keineswegs wertlos; seine Legitimität hängt allerdings davon ab, dass Auswahl und Auswertung nachvollziehbar bleiben und nicht als unmittelbarer Ausdruck eines einheitlichen Volkswillens missverstanden werden.', questions: [{ prompt: 'What limitation does the reviewer identify?', options: ['Participation may not represent all affected groups equally', 'Too few responses were received', 'The city did not publish any summary'], answer: 0 }, { prompt: 'What remains unclear in the summary?', options: ['How conflicting positions were weighted', 'Where the station is located', 'When construction begins'], answer: 0 }, { prompt: 'What condition does the reviewer attach to legitimacy?', options: ['The selection and analysis must be transparent', 'Every response must receive equal funding', 'The city must avoid public consultation'], answer: 0 }] },
    { type: 'A feature on regional energy planning', text: 'Regionale Energieplanung bewegt sich in einem Spannungsfeld, das sich nicht durch den Verweis auf nationale Ausbauziele auflösen lässt. Gemeinden sollen Flächen für Netze und Erzeugungsanlagen bereitstellen, während die konkreten Auswirkungen – Landschaftsbild, Verkehr, lokale Wertschöpfung – vor Ort spürbar werden. Beteiligungsverfahren können die Akzeptanz erhöhen, sofern sie nicht erst beginnen, wenn die zentralen Entscheidungen faktisch gefallen sind. Gleichwohl lässt sich aus Beteiligung allein kein Konsens ableiten. Wo Interessen dauerhaft auseinandergehen, muss Politik Prioritäten begründen und offenlegen, welche Belastungen sie wem zumutet. Gerade diese Begründung, nicht die bloße Zahl der Gesprächstermine, bildet die Grundlage für Vertrauen.', questions: [{ prompt: 'When are participation processes most meaningful?', options: ['Before key decisions are effectively settled', 'Only after construction is complete', 'When they replace political decisions entirely'], answer: 0 }, { prompt: 'What does the author say participation cannot guarantee?', options: ['Consensus', 'Public information', 'Local discussion'], answer: 0 }, { prompt: 'What underpins trust according to the passage?', options: ['Explaining priorities and who bears the costs', 'Holding as many meetings as possible', 'Meeting national targets without discussion'], answer: 0 }] },
    { type: 'A policy analysis of language education', text: 'Mehrsprachigkeit wird in bildungspolitischen Debatten abwechselnd als Ressource und als Hindernis gerahmt. Beide Deutungen greifen zu kurz, wenn sie die konkreten Bedingungen des Lernens ausblenden. Ob ein Kind seine Familiensprache im Unterricht sichtbar einbringen kann, entscheidet nicht allein über den Erwerb des Deutschen; es beeinflusst aber, ob sprachliches Wissen als Kompetenz oder als Defizit behandelt wird. Eine tragfähige Förderung müsste daher gemeinsame Ziele im Deutschen verfolgen, ohne andere Sprachen aus dem schulischen Alltag zu verbannen. Dafür braucht es nicht nur passende Materialien, sondern auch institutionelle Routinen, die Lehrkräfte bei heterogenen Gruppen unterstützen.', questions: [{ prompt: 'What does the author find insufficient?', options: ['Framing multilingualism only as a resource or only as a problem', 'Setting shared goals for German learning', 'Supporting teachers with suitable materials'], answer: 0 }, { prompt: 'What can visibility of a family language affect?', options: ['Whether linguistic knowledge is treated as a competence or deficit', 'Whether a child learns any German at all', 'How many hours the school building is open'], answer: 0 }, { prompt: 'What does the author recommend?', options: ['Combine shared German goals with recognition of other languages', 'Remove all common language goals', 'Leave multilingual support to families alone'], answer: 0 }] },
    { type: 'A cultural review', text: 'Die Ausstellung vermeidet es, regionale Tradition als geschlossenes Erbe zu inszenieren. Stattdessen stellt sie Arbeitsmigration, Dialektaufnahmen und private Erinnerungen nebeneinander, ohne sie zu einer einzigen Herkunftserzählung zu glätten. Diese Entscheidung ist produktiv, setzt aber ein Publikum voraus, das mit offenen Übergängen umgehen kann. Wo die Beschriftungen knapp bleiben, verliert die Mehrdeutigkeit an Reiz und droht bloß unaufgelöst zu wirken. Die Stärke der Schau liegt somit nicht in der Behauptung, alle Stimmen gleichermaßen abzubilden, sondern in der Sichtbarmachung der Bedingungen, unter denen Zeugnisse gesammelt, übersetzt und ausgestellt werden.', questions: [{ prompt: 'What is the exhibition’s approach to regional tradition?', options: ['It presents varied evidence without reducing it to one origin story', 'It reconstructs a single uncontested history', 'It excludes private memories'], answer: 0 }, { prompt: 'What risk does the reviewer mention?', options: ['Sparse labels may make ambiguity feel unresolved', 'The exhibition contains too many translations', 'The audience cannot access the recordings'], answer: 0 }, { prompt: 'Where does the reviewer locate the exhibition’s strength?', options: ['In showing how evidence is collected and presented', 'In claiming to represent every voice equally', 'In removing curatorial choices'], answer: 0 }] }
  ]
};

const topicGrammarChecks = {
  A1: [
    { prompt: 'Ich sehe ___ Kasten im Zimmer.', options: ['der', 'den', 'dem'], answer: 1, explanation: 'Kasten is masculine. As the direct object of sehen it takes the accusative form den.' },
    { prompt: 'Morgen ___ die Bim um acht.', options: ['kommt', 'die Bim kommt', 'kommen'], answer: 0, explanation: 'A main clause keeps the conjugated verb in position two: Morgen kommt die Bim …' },
    { prompt: 'Mia ___ um sechs ___.', options: ['steht … auf', 'aufsteht … um sechs', 'steht … um sechs'], answer: 0, explanation: 'Aufstehen is separable. In a main clause the conjugated part steht is in position two and auf moves to the end.' },
    { prompt: 'Das ist ___ Schwester.', options: ['mein', 'meine', 'meinen'], answer: 1, explanation: 'Schwester is feminine, so the possessive article in the nominative is meine.' },
    { prompt: 'Gehen Sie ___ bis zur Trafik.', options: ['geradeaus', 'geradeausgehen', 'geht geradeaus'], answer: 0, explanation: 'Gehen Sie is the formal imperative. The direction adverb geradeaus follows it.' }
  ],
  A2: [
    { prompt: 'Ich wohne ___ drei Jahren in Graz.', options: ['vor', 'seit', 'ab'], answer: 1, explanation: 'Seit describes an action or state that began in the past and continues now; it is used with the present tense.' },
    { prompt: 'Ich fahre mit ___ Bim zum Markt.', options: ['die', 'der', 'den'], answer: 1, explanation: 'Mit always takes the dative. Bim is feminine, so use der Bim.' },
    { prompt: 'Ich bleibe daheim, weil ich keine Zeit ___.', options: ['habe', 'ich habe', 'haben'], answer: 0, explanation: 'Weil introduces a subordinate clause, so the conjugated verb goes to the end: weil ich keine Zeit habe.' },
    { prompt: 'Wir ___ mit dem Zug nach Linz gefahren.', options: ['haben', 'sind', 'werden'], answer: 1, explanation: 'Fahren describing movement to a destination commonly forms the Perfekt with sein: wir sind gefahren.' },
    { prompt: 'Die Tasche liegt auf ___ Tisch.', options: ['den', 'dem', 'der'], answer: 1, explanation: 'The bag is located on the table, so auf takes the dative: auf dem Tisch.' }
  ],
  B1: [
    { prompt: 'Der Lehrling, ___ heute beginnt, kommt aus Tirol.', options: ['der', 'den', 'dem'], answer: 0, explanation: 'Lehrling is masculine, and the relative pronoun is the subject of beginnt: der Lehrling, der …' },
    { prompt: 'Obwohl es geregnet ___, ist das Fest gut besucht gewesen.', options: ['hat', 'haben', 'ist'], answer: 0, explanation: 'The Perfekt with haben is hat geregnet. In an obwohl-clause, the conjugated auxiliary goes to the end.' },
    { prompt: 'Die neuen Fahrpläne ___ morgen veröffentlicht.', options: ['werden', 'haben', 'sind'], answer: 0, explanation: 'The present passive uses werden plus the past participle: werden veröffentlicht.' },
    { prompt: 'Die Sprecherin sagt, der Zug ___ Verspätung.', options: ['hat', 'habe', 'hatte'], answer: 1, explanation: 'Habe is Konjunktiv I and marks the information as reported speech.' },
    { prompt: 'Wenn ich mehr Zeit ___, würde ich öfter mit der Bim fahren.', options: ['habe', 'hätte', 'hatte'], answer: 1, explanation: 'A hypothetical condition uses Konjunktiv II: wenn ich mehr Zeit hätte …' }
  ],
  B2: [
    { prompt: 'Die verlässlich___ Daten wurden veröffentlicht.', options: ['-e', '-en', '-er'], answer: 1, explanation: 'After the definite article die in the plural, the adjective ending is -en: die verlässlichen Daten.' },
    { prompt: 'Trotz ___ Regens fand das Dorffest statt.', options: ['dem', 'des', 'den'], answer: 1, explanation: 'Formal standard German commonly uses the genitive after trotz: trotz des Regens.' },
    { prompt: 'Die Verbindung ist nicht nur schnell, ___ auch verlässlich.', options: ['sondern', 'obwohl', 'damit'], answer: 0, explanation: 'The paired connector is nicht nur … sondern auch.' },
    { prompt: 'Die Nachfrage ___ sich im Herbst erholen.', options: ['dürfte', 'muss', 'hat'], answer: 0, explanation: 'Dürfte expresses a cautious prediction or inference: the demand is likely to recover.' },
    { prompt: 'Die Stadt baut neue Wohnungen, ___ mehr Menschen leistbar wohnen können.', options: ['damit', 'obwohl', 'während'], answer: 0, explanation: 'Damit introduces a purpose clause: the city builds apartments so that more people can find affordable housing.' }
  ],
  C1: [
    { prompt: 'Die gestern veröffentlicht___ Zahlen zeigen einen leichten Anstieg.', options: ['-e', '-en', '-er'], answer: 1, explanation: 'The plural noun Zahlen follows the definite article die; the participial adjective takes -en.' },
    { prompt: 'Nach der ___ des Berichts wurden Fragen gestellt.', options: ['veröffentlichen', 'Veröffentlichung', 'veröffentlicht'], answer: 1, explanation: 'Veröffentlichung is the nominalized form. Nach der Veröffentlichung is a concise formal construction.' },
    { prompt: 'Die Sprecherin erklärt, die Lage ___ sich verbessert.', options: ['hat', 'habe', 'hatte'], answer: 1, explanation: 'Habe is Konjunktiv I, conventionally used to mark reported speech.' },
    { prompt: '___ die Daten lückenhaft sind, zeigt sich ein klarer Trend.', options: ['Wenngleich', 'Damit', 'Sobald'], answer: 0, explanation: 'Wenngleich introduces a formal concessive clause, similar to obwohl.' },
    { prompt: 'Der Bericht, ___ gestern veröffentlicht wurde, ist online verfügbar.', options: ['der', 'den', 'dem'], answer: 0, explanation: 'Bericht is masculine and is the subject of wurde veröffentlicht, so the relative pronoun is der.' }
  ],
  C2: [
    { prompt: 'So berechtigt der Einwand ___, er greift dennoch zu kurz.', options: ['sein mag', 'ist', 'wäre'], answer: 0, explanation: 'The concessive pattern so … auch … mag uses subjunctive syntax to acknowledge a point before qualifying it.' },
    { prompt: 'Die Maßnahme ___ im Frühjahr wirksam werden.', options: ['dürfte', 'muss', 'hat'], answer: 0, explanation: 'Dürfte marks a cautious inference, not an obligation or a confirmed fact.' },
    { prompt: 'Die Beteiligten räumten ein, sie ___ den Zeitplan unterschätzt.', options: ['haben', 'hätten', 'werden'], answer: 1, explanation: 'Konjunktiv II can replace an indistinguishable Konjunktiv I form in reported speech: sie hätten …' },
    { prompt: '___ man die regionalen Unterschiede berücksichtigt, wird das Ergebnis verständlicher.', options: ['Berücksichtigt', 'Berücksichtigen', 'Berücksichtigend'], answer: 0, explanation: 'This is an elliptical conditional with an inverted finite verb: Berücksichtigt man …, wird …' },
    { prompt: 'Die Entscheidung ist nicht zuletzt ___ ihrer langfristigen Folgen umstritten.', options: ['wegen', 'trotzdem', 'während'], answer: 0, explanation: 'Nicht zuletzt wegen introduces an especially relevant cause among several possible factors.' }
  ]
};

const activities = {
  A1: {
    speaking: [
      { title: 'At the bakery', description: 'You’re at a Bäckerei in Vienna. Read the situation, then answer out loud in German.', prompt: 'Grüß Gott! Was darf’s denn sein?', support: 'Order two bread rolls and ask how much they cost.', model: 'Grüß Gott! Ich hätte gern zwei Semmeln, bitte. Was macht das?' },
      { title: 'Meeting a neighbor', description: 'Say your name, where you’re from, and ask your neighbor’s name.', prompt: 'Servus! Ich bin Lukas. Wie heißt du?', support: 'Answer with your name and one simple detail about yourself.', model: 'Grüß dich, ich heiße Maya. Ich komme aus Kanada. Und du?' },
      { title: 'Asking about the tram', description: 'You are at a tram stop and want to get to the main station.', prompt: 'Entschuldigung, fährt diese Straßenbahn zum Hauptbahnhof?', support: 'Say where you want to go and ask which stop you need.', model: 'Ja, ich möchte zum Hauptbahnhof. Muss ich am Karlsplatz aussteigen?' }
    ],
    listening: [
      { title: 'A quick order', description: 'Listen to this original café exchange. First listen without reading, then choose what the guest orders.', text: 'Grüß Gott. Einen Verlängerten und ein Kipferl, bitte. Zum Hiertrinken? Ja, danke.', question: 'What does the guest order?', options: ['A coffee and a croissant-shaped roll', 'A tea and a slice of cake', 'Two coffees to take away'], answer: 0 },
      { title: 'Closing announcement', description: 'Listen to a short announcement in a shop and catch the key detail.', text: 'Achtung, liebe Kundinnen und Kunden. Unser Geschäft schließt heute in fünf Minuten. Wir bitten Sie, zur Kassa zu kommen. Danke und einen schönen Abend!', question: 'What should customers do?', options: ['Go to the checkout', 'Come back in five minutes', 'Wait at the entrance'], answer: 0 }
    ],
    reading: [
      { title: 'A note on the fridge', description: 'Read this short everyday message and check the main detail.', text: 'Hallo Anna! Ich bin beim Bäcker. Bin um zehn wieder da. Das Sackerl mit den Äpfeln steht in der Küche. Bis gleich, Mama', question: 'Where is the bag of apples?', options: ['At the bakery', 'In the kitchen', 'In Anna’s room'], answer: 1 },
      { title: 'Meeting after work', description: 'Read a short message and find the meeting place.', text: 'Servus, Leon! Treffen wir uns heute um halb vier beim Brunnen am Hauptplatz? Ich komme mit dem Bus. Bis später! Lea', question: 'Where should Leon meet Lea?', options: ['At the bus station', 'By the fountain in the main square', 'At the bakery'], answer: 1 }
    ],
    writing: [{ title: 'A friendly introduction', description: 'Write a few simple sentences to introduce yourself to a new neighbor.', prompt: 'Wie heißt du? Woher kommst du? Was machst du gern?', minWords: 12, focus: ['Ich heiße …', 'Ich komme aus …'], sample: 'Grüß dich! Ich heiße Maya und komme aus Kanada. Ich wohne seit einem Monat in Wien. In meiner Freizeit gehe ich gern spazieren.' }]
  },
  A2: {
    speaking: [
      { title: 'Making weekend plans', description: 'Your friend asks what you’d like to do. Suggest a plan and agree on a time.', prompt: 'Hast du am Samstag schon was vor? Wie wär’s mit einem Spaziergang?', support: 'Say whether you’re free, suggest a place, and ask when to meet.', model: 'Nein, ich hab noch nichts vor. Wir könnten an der Donau spazieren gehen. Passt dir der Vormittag?' },
      { title: 'At the market', description: 'You want fruit at a market stand. Ask for a quantity and the price.', prompt: 'Grüß Sie! Was darf’s sein? Die Marillen sind heute besonders gut.', support: 'Ask for half a kilo and whether you can taste one.', model: 'Grüß Sie! Ich hätte gern ein halbes Kilo Marillen. Darf ich eine kosten?' },
      { title: 'Calling the doctor', description: 'Call a local doctor’s office to ask for an appointment.', prompt: 'Ordination Dr. Leitner, grüß Gott. Was kann ich für Sie tun?', support: 'Briefly describe how you feel and ask if there is an appointment tomorrow.', model: 'Guten Tag. Ich habe seit gestern Halsschmerzen. Hätten Sie morgen einen Termin frei?' }
    ],
    listening: [
      { title: 'Changing the plan', description: 'Listen to this original voice message. What change does the speaker suggest?', text: 'Servus, ich schaff’s heute leider nicht um sechs. Können wir uns eine halbe Stunde später treffen? Beim Würstelstand neben der U-Bahn wär’s gemütlicher.', question: 'What does the speaker suggest?', options: ['Meet 30 minutes later by the underground station', 'Cancel and meet another day', 'Meet at the same time at the station'], answer: 0 },
      { title: 'Platform change', description: 'Listen to a station announcement and note the new platform and departure time.', text: 'Eine Information für Reisende nach Graz: Der Zug fährt heute von Gleis drei statt von Gleis zwei. Abfahrt ist um 10 Uhr 17. Bitte beachten Sie die Änderung.', question: 'Where does the train leave from today?', options: ['Platform two at 10:17', 'Platform three at 10:17', 'Platform three at 10:07'], answer: 1 }
    ],
    reading: [
      { title: 'A notice in the stairwell', description: 'Read the building notice and find out what residents need to do.', text: 'Liebe Hausbewohnerinnen und Hausbewohner! Am Donnerstag wird zwischen 8 und 12 Uhr das Wasser abgedreht. Bitte füllen Sie vorher genug Wasser ab. Die Hausverwaltung ist bei Fragen unter der bekannten Nummer erreichbar. Danke für Ihr Verständnis!', question: 'When will the water be turned off?', options: ['Wednesday morning', 'Thursday between 8 and 12', 'All day Thursday'], answer: 1 },
      { title: 'A change at the swimming pool', description: 'Read the public notice and identify the new entry point.', text: 'Liebe Badegäste! Wegen Bauarbeiten ist der Haupteingang diese Woche geschlossen. Bitte benutzen Sie den Eingang auf der Rückseite beim Parkplatz. Die Öffnungszeiten bleiben unverändert.', question: 'Which entrance should visitors use?', options: ['The main entrance', 'The entrance by the car park', 'The staff entrance'], answer: 1 }
    ],
    writing: [{ title: 'A message to a friend', description: 'Write a short message to suggest a weekend activity and arrange the details.', prompt: 'Schlag etwas für Samstag vor. Frag nach Zeit und Treffpunkt.', minWords: 25, focus: ['Wir könnten …', 'Passt dir …?'], sample: 'Servus Lena! Hast du am Samstag Zeit? Wir könnten auf den Kahlenberg fahren und dort spazieren gehen. Passt dir der Vormittag? Wir können uns um zehn bei der U-Bahn treffen. Schreib mir, was du meinst!' }]
  },
  B1: {
    speaking: [
      { title: 'A new colleague', description: 'A colleague asks about your first weeks in Austria. Describe one surprise and explain how you adapted.', prompt: 'Was war für dich am Anfang in Österreich am ungewohntesten?', support: 'Give an example, explain how you felt, and say what helped.', model: 'Am Anfang war für mich ungewohnt, dass viele Leute im Alltag Dialekt sprechen. Ich habe oft nachgefragt, und meine Kolleginnen haben mir die Ausdrücke erklärt. Mittlerweile verstehe ich viel mehr.' },
      { title: 'Sorting out a delivery', description: 'A parcel was left with a neighbor, but you can’t find it. Explain the problem and ask for help.', prompt: 'Laut Benachrichtigung wurde das Paket bei einer Nachbarin abgegeben. Was ist passiert?', support: 'Explain what you have already tried and ask what to do next.', model: 'Ich habe schon bei den Nachbarn im ersten Stock gefragt, aber dort ist kein Paket. Könnten Sie bitte nachsehen, bei wem es abgegeben wurde?' },
      { title: 'A local radio interview', description: 'A radio host asks about a community event you attended. Tell the story in sequence and include your opinion.', prompt: 'Was hat dir beim Stadtfest am besten gefallen?', support: 'Say what happened first, describe one highlight, and explain why you liked it.', model: 'Zuerst habe ich mir die Stände am Hauptplatz angeschaut. Besonders gut hat mir die Musik gefallen, weil mehrere Gruppen aus der Region gespielt haben. Obwohl es später geregnet hat, sind viele Leute geblieben.' }
    ],
    listening: [
      { title: 'A village festival', description: 'Listen to this original radio-style announcement. Why is the event starting later?', text: 'Wegen des starken Regens beginnt das Dorffest heuer eine Stunde später. Die Musik spielt ab 15 Uhr im Gemeindesaal. Für Speis und Trank ist natürlich gesorgt. Wir freuen uns auf euch!', question: 'Why does the village festival start later?', options: ['The musicians are delayed', 'Heavy rain changed the plan', 'The community hall opens later'], answer: 1 },
      { title: 'A hiking group changes its route', description: 'Listen to a short local radio report and identify why the group turned back.', text: 'Die Wandergruppe ist am Samstag wegen des dichten Nebels früher umgekehrt. Laut Bergrettung war der Weg zum Gipfel nicht sicher genug. Alle Teilnehmerinnen und Teilnehmer sind wohlbehalten im Tal angekommen.', question: 'Why did the group turn back?', options: ['The path was unsafe in the fog', 'Someone in the group was injured', 'The bus to the valley had stopped running'], answer: 0 }
    ],
    reading: [
      { title: 'A local newsletter', description: 'Read the excerpt and identify the reason for the new bus service.', text: 'Ab September fährt der Gemeindebus auch am Samstag. Die Gemeinde reagiert damit auf den Wunsch vieler Bewohnerinnen und Bewohner, die bisher ohne Auto nur schwer zum Wochenmarkt gekommen sind. Der Bus hält künftig auch beim Bahnhof und beim Gesundheitszentrum. Die genauen Fahrzeiten werden im August veröffentlicht.', question: 'Why is the Saturday bus service being added?', options: ['To connect residents with the weekly market', 'To replace the train to the city', 'To take people to a new school'], answer: 0 },
      { title: 'A weekend invitation', description: 'Read the email and identify what the group should bring.', text: 'Hallo zusammen! Am Sonntag treffen wir uns um elf beim Schutzhaus. Wenn das Wetter hält, gehen wir danach noch ein Stück weiter. Nehmt bitte eine Trinkflasche und eine leichte Jacke mit. Für eine Jause ist gesorgt. Liebe Grüße, Martin', question: 'What should people bring?', options: ['A drink bottle and a light jacket', 'Food for everyone', 'A map of the whole region'], answer: 0 }
    ],
    writing: [{ title: 'Share an experience', description: 'Write a short post about a local event you attended. Explain what happened and what you thought of it.', prompt: 'Berichte von einem Fest, Markt oder Ausflug. Was ist passiert? Was hat dir gefallen?', minWords: 55, focus: ['weil / obwohl', 'meiner Meinung nach'], sample: 'Am Samstag war ich zum ersten Mal auf einem Dorffest in der Steiermark. Obwohl es am Vormittag geregnet hat, war am Nachmittag viel los. Besonders gut hat mir die Musik gefallen, weil die Band bekannte österreichische Lieder gespielt hat. Ich habe auch neue Leute kennengelernt. Meiner Meinung nach sind solche Veranstaltungen eine gute Gelegenheit, die Nachbarschaft besser kennenzulernen.' }]
  },
  B2: {
    speaking: [
      { title: 'A fairer commute', description: 'Discuss a proposal at a team meeting. Present your view and respond to a possible objection.', prompt: 'Sollte unser Team an zwei Tagen pro Woche im Homeoffice arbeiten?', support: 'State your position, give two reasons, and acknowledge a downside.', model: 'Ich wäre dafür, weil wir uns den Arbeitsweg an zwei Tagen sparen und konzentrierter arbeiten könnten. Gleichzeitig ist mir wichtig, dass der Austausch im Team nicht zu kurz kommt. Ein gemeinsamer Bürotag pro Woche wäre daher sinnvoll.' },
      { title: 'The neighborhood meeting', description: 'Residents disagree about turning a parking lane into a small green space. Make a balanced argument.', prompt: 'Was spricht dafür oder dagegen, hier einen kleinen Park anzulegen?', support: 'Consider different residents’ needs and suggest a compromise.', model: 'Einerseits würde ein kleiner Park die Aufenthaltsqualität verbessern. Andererseits sind manche Bewohner auf Parkplätze angewiesen. Ein Kompromiss könnte sein, zuerst einen Teil der Fläche umzuwidmen und die Nutzung ein Jahr lang zu beobachten.' },
      { title: 'Responding to a news interview', description: 'A local reporter asks whether a new bus route is worth the cost. Give a clear, balanced answer.', prompt: 'Die neue Buslinie kostet viel Geld. Ist sie trotzdem sinnvoll?', support: 'State your view, refer to one benefit and one concern, and suggest how success could be measured.', model: 'Grundsätzlich halte ich die Verbindung für sinnvoll, weil sie mehrere Ortsteile besser an den Bahnhof anbindet. Allerdings sollte man nach einem Jahr überprüfen, wie viele Menschen sie nutzen. Falls die Nachfrage gering bleibt, müsste der Fahrplan angepasst werden.' }
    ],
    listening: [
      { title: 'An interview on regional food', description: 'Listen to this original interview excerpt. What is the speaker’s main argument?', text: 'Regional einzukaufen bedeutet nicht automatisch, dass jedes Produkt günstiger ist. Für mich zählt aber auch, dass ich weiß, wer es produziert hat. Wenn die Nachfrage verlässlich ist, können kleinere Betriebe besser planen. Das kommt letztlich der ganzen Region zugute.', question: 'What is the speaker mainly arguing?', options: ['Regional products are always cheaper', 'Reliable local demand can support small producers', 'Small producers should sell only at markets'], answer: 1 },
      { title: 'A transport proposal', description: 'Listen to a short interview and identify the speaker’s main reservation.', text: 'Die neue Verbindung ist ein wichtiger erster Schritt. Allerdings fährt der letzte Bus derzeit schon um halb acht. Wer später arbeitet, kann ihn kaum nutzen. Bevor wir weitere Strecken planen, sollten wir deshalb prüfen, ob der Fahrplan zu den tatsächlichen Arbeitszeiten passt.', question: 'What is the speaker’s main concern?', options: ['The route serves too many villages', 'The last bus runs too early for some workers', 'The service is difficult to find online'], answer: 1 }
    ],
    reading: [
      { title: 'A newspaper commentary', description: 'Read the argument and identify the author’s proposed solution.', text: 'Wer den öffentlichen Verkehr am Land stärken will, muss mehr anbieten als einzelne zusätzliche Busse. Entscheidend ist, dass Anschlüsse verlässlich funktionieren und Informationen leicht zugänglich sind. Ein Rufbus kann dabei eine sinnvolle Ergänzung sein, sofern er in das bestehende Netz eingebunden wird. Die Verantwortung darf jedoch nicht allein bei den Gemeinden liegen: Bund und Länder müssen langfristig mitfinanzieren.', question: 'What does the author see as necessary for a successful call bus?', options: ['It should replace all regular buses', 'It should connect reliably to the wider network', 'It should be managed only by municipalities'], answer: 1 },
      { title: 'A proposal for the town centre', description: 'Read the excerpt and distinguish the proposal from the objection.', text: 'Die Stadt prüft, die Fußgängerzone bis zum Fluss zu verlängern. Befürworterinnen erwarten mehr Platz für Gastgärten und weniger Durchzugsverkehr. Geschäftsleute weisen hingegen darauf hin, dass Lieferzonen fehlen könnten. Laut Verkehrsstadtrat soll zunächst ein dreimonatiger Versuch zeigen, welche Auswirkungen die Änderung hat.', question: 'What is planned before a final decision?', options: ['A three-month trial', 'A permanent closure next week', 'A new delivery route outside town'], answer: 0 }
    ],
    writing: [{ title: 'Make a case', description: 'Write a balanced opinion piece for a community newsletter about improving rural transport.', prompt: 'Welche Maßnahme würde den öffentlichen Verkehr am Land verbessern? Begründe deinen Vorschlag und geh auf einen Einwand ein.', minWords: 80, focus: ['Einerseits … andererseits …', 'daher / folglich'], sample: 'Um den öffentlichen Verkehr am Land attraktiver zu machen, sollte das Angebot besser auf Anschlüsse abgestimmt werden. Viele Menschen würden den Bus nutzen, wenn sie sich darauf verlassen könnten, den Zug rechtzeitig zu erreichen. Einerseits verursacht ein dichterer Takt höhere Kosten, andererseits könnten dadurch mehr Fahrgäste gewonnen werden. Sinnvoll wäre zunächst ein Pilotprojekt, dessen Nutzung nach einem Jahr ausgewertet wird.' }]
  },
  C1: {
    speaking: [
      { title: 'Who gets to define a place?', description: 'Give a short, structured response to a radio host. Distinguish your own experience from a broader claim.', prompt: 'Verändert der Tourismus den Charakter einer österreichischen Stadt zwangsläufig?', support: 'Qualify your claim, use an example, and address one counterargument.', model: 'Nicht zwangsläufig, aber die Entwicklung hängt davon ab, wer von den Veränderungen profitiert. In manchen Vierteln ermöglicht der Tourismus Investitionen in die Infrastruktur; zugleich kann der Wohnraum für die ansässige Bevölkerung knapper werden. Entscheidend ist daher weniger die Zahl der Gäste als die Frage, wie die Stadt Wachstum gestaltet.' },
      { title: 'Explaining a misunderstanding', description: 'Describe a moment when tone or regional wording caused confusion, and suggest how you cleared it up.', prompt: 'Kann ein Dialekt-Ausdruck im Berufsalltag zu Missverständnissen führen?', support: 'Use a concrete example and compare formal and informal settings.', model: 'Das kann vorkommen, besonders wenn ein Ausdruck außerhalb der Region eine andere Bedeutung hat. In einem informellen Gespräch lässt sich vieles aus dem Zusammenhang erschließen. Bei wichtigen Absprachen würde ich jedoch nachfragen oder die Aussage in neutralerem Standarddeutsch wiederholen.' },
      { title: 'A studio discussion on housing', description: 'Give a concise contribution to a discussion about housing in Austrian cities.', prompt: 'Wie kann eine Stadt leistbaren Wohnraum schaffen, ohne wichtige Grünflächen zu verlieren?', support: 'Distinguish short-term and long-term measures and acknowledge competing interests.', model: 'Kurzfristig könnten bestehende Gebäude besser genutzt werden, während langfristig dichter an gut angebundenen öffentlichen Verkehrsachsen gebaut werden sollte. Dabei darf die Lebensqualität nicht ausschließlich an der Zahl neuer Wohnungen gemessen werden. Grünräume sind ebenfalls Teil einer funktionierenden Stadt.' }
    ],
    listening: [
      { title: 'A curator on living heritage', description: 'Listen to this original cultural-program excerpt. What distinction does the curator make?', text: 'Wenn wir von lebendigem Kulturerbe sprechen, meinen wir keine Sammlung unveränderlicher Bräuche. Traditionen werden weitergegeben, aber sie verändern sich dabei. Gerade diese Aushandlung zwischen Bewahren und Erneuern macht sie für die Gegenwart relevant. Museen können Räume dafür schaffen, sollten aber nicht so tun, als gäbe es nur eine gültige Version.', question: 'What is the curator’s central distinction?', options: ['Traditions can be transmitted while also changing', 'Museums should select one authentic version', 'Living heritage should remain outside museums'], answer: 0 },
      { title: 'A city planning interview', description: 'Listen to an original interview excerpt and identify the condition attached to the proposal.', text: 'Eine Begrünung der Straße wäre grundsätzlich sinnvoll, sofern die Erreichbarkeit für Einsatzfahrzeuge gewährleistet bleibt. Die Stadt will deshalb zuerst die Zufahrten prüfen. Erst danach wird entschieden, welche Parkplätze dauerhaft wegfallen können.', question: 'What must happen before the parking changes are decided?', options: ['Emergency vehicle access must be checked', 'Residents must choose new parking permits', 'The street must be closed for a year'], answer: 0 }
    ],
    reading: [
      { title: 'On dialect and belonging', description: 'Read the essay excerpt and infer the author’s view of dialect.', text: 'Dialekt wird gern als unmittelbarer Ausdruck von Zugehörigkeit beschrieben. Das greift zu kurz: Wer welchen Dialekt spricht, wann er ihn ablegt und wie andere darauf reagieren, ist auch eine Frage sozialer Erwartungen. In Österreich kann ein Wechsel ins Standarddeutsche Nähe schaffen oder Distanz markieren. Entscheidend ist nicht allein die Form, sondern die Situation, in der sie verwendet wird.', question: 'What does the author suggest about switching to standard German?', options: ['It always signals a desire for distance', 'Its meaning depends on the social situation', 'It removes regional identity from speech'], answer: 1 },
      { title: 'An analysis of city green space', description: 'Read the argument and identify the author’s main qualification.', text: 'Neue Grünflächen gelten häufig als unkomplizierte Antwort auf sommerliche Hitze. Ihre Wirkung hängt jedoch davon ab, wo sie entstehen und wie sie gepflegt werden. Ein kleiner Park kann für die unmittelbare Umgebung viel bewirken, ersetzt aber keine stadtweite Strategie. Die Autorin plädiert deshalb dafür, einzelne Projekte mit langfristiger Planung zu verbinden.', question: 'What does the author argue?', options: ['Small parks are ineffective and should be avoided', 'Local projects should form part of a broader plan', 'Maintenance matters less than the number of parks'], answer: 1 }
    ],
    writing: [{ title: 'A nuanced argument', description: 'Write a short essay on whether dialect should have a place in public broadcasting.', prompt: 'Berücksichtige Verständlichkeit, regionale Identität und unterschiedliche Zielgruppen.', minWords: 100, focus: ['qualified claims', 'clear paragraph structure'], sample: 'Dialekt im Rundfunk kann regionale Perspektiven hörbar machen, sollte jedoch nicht als Selbstzweck eingesetzt werden. In Interviews trägt die natürliche Sprechweise oft zur Glaubwürdigkeit bei. Bei Informationen, die ein möglichst breites Publikum erreichen müssen, ist größere sprachliche Zugänglichkeit wichtig. Daraus folgt kein Entweder-oder: Eine bewusste Mischung kann sowohl Vielfalt als auch Verständlichkeit fördern.' }]
  },
  C2: {
    speaking: [
      { title: 'The language of belonging', description: 'Present a careful position on language, identity, and inclusion. Make room for competing interpretations.', prompt: 'Ist sprachliche Anpassung eine Form der Zugehörigkeit oder eine Erwartung an Zugewanderte?', support: 'Define what you mean, examine both sides, and end with a qualified conclusion.', model: 'Beides ist möglich, und genau darin liegt die Spannung. Sprachliche Anpassung kann den Zugang zu Beziehungen und Institutionen erleichtern; sie wird problematisch, wenn Zugehörigkeit an die Aufgabe der eigenen sprachlichen Identität geknüpft wird. Eine inklusive Gesellschaft sollte Mehrsprachigkeit als Ressource behandeln, ohne den praktischen Wert gemeinsamer Verständigung zu leugnen.' },
      { title: 'Reading between the lines', description: 'Respond diplomatically to a sweeping claim in a panel discussion.', prompt: '„Am Land kennt jeder jeden, dort gibt es keine Anonymität.“ Würdest du dem zustimmen?', support: 'Challenge the generalization tactfully and introduce a more precise distinction.', model: 'Das mag für bestimmte Situationen zutreffen, wäre mir als allgemeine Beschreibung aber zu pauschal. In kleineren Gemeinden sind soziale Beziehungen oft sichtbarer; daraus folgt jedoch nicht, dass alle Menschen eng miteinander verbunden sind. Vielleicht sollte man eher zwischen öffentlicher Sichtbarkeit und tatsächlicher Nähe unterscheiden.' },
      { title: 'A panel on regional media', description: 'Respond to a nuanced question about dialect on national television.', prompt: 'Sollten Nachrichtensendungen mehr regionale Sprachformen zulassen?', support: 'Distinguish presenter language from interview voices and balance access with representation.', model: 'Eine pauschale Antwort würde der unterschiedlichen Funktion der Sendung nicht gerecht. Bei der Moderation ist überregionale Verständlichkeit zentral; in Interviews kann die regionale Sprechweise dagegen wichtige soziale Information vermitteln. Entscheidend wäre, nicht jede Abweichung zu glätten und zugleich den Inhalt für ein breites Publikum zugänglich zu halten.' }
    ],
    listening: [
      { title: 'A conversation about memory', description: 'Listen to this original discussion excerpt. What tension does the speaker identify?', text: 'Erinnerungsorte werden oft so gestaltet, als ließe sich eine eindeutige Erzählung aus der Vergangenheit ableiten. Dabei ist schon die Auswahl dessen, was gezeigt wird, eine gegenwärtige Entscheidung. Das macht solche Orte nicht beliebig; es verlangt vielmehr, dass sie ihre Perspektive offenlegen und Widersprüche nicht vorschnell glätten.', question: 'What does the speaker argue memory sites should do?', options: ['Present one definitive account of the past', 'Acknowledge their perspective and preserve tensions', 'Avoid making choices about what to display'], answer: 1 },
      { title: 'An economic outlook', description: 'Listen to an original analysis and identify how certain the forecast is.', text: 'Die jüngsten Zahlen sprechen für eine vorsichtige Erholung. Von einer nachhaltigen Trendwende kann allerdings noch keine Rede sein, zumal die Nachfrage in mehreren Bereichen schwach bleibt. Entscheidend wird sein, ob sich die Entwicklung im nächsten Quartal bestätigt.', question: 'How does the speaker characterize the outlook?', options: ['A confirmed long-term recovery', 'A possible recovery that still needs confirmation', 'A sharp decline across all sectors'], answer: 1 }
    ],
    reading: [
      { title: 'A review of a regional archive', description: 'Read the review and identify its main reservation.', text: 'Das neue digitale Archiv überzeugt weniger durch seine Benutzeroberfläche als durch die Entscheidung, den Quellen ihre Uneindeutigkeit zu lassen. Ein privater Brief, ein Behördenvermerk und eine spätere Erinnerung stehen nebeneinander, ohne dass eine Stimme zur abschließenden Instanz erklärt wird. Diese Offenheit ist produktiv, setzt allerdings voraus, dass Nutzerinnen und Nutzer Herkunft und Entstehung der Dokumente nachvollziehen können. Gerade hier bleiben die Erläuterungen stellenweise zu knapp.', question: 'What is the reviewer’s main reservation?', options: ['The archive excludes private documents', 'The interface makes sources too difficult to access', 'The context provided for some sources is insufficient'], answer: 2 },
      { title: 'A commentary on public data', description: 'Read the argument and infer why the author supports publishing methods as well as results.', text: 'Offene Datensätze erhöhen nicht automatisch die Nachvollziehbarkeit politischer Entscheidungen. Ohne Angaben zu Erhebung, Auswahl und Unsicherheit können Zahlen sogar einen falschen Eindruck von Eindeutigkeit erzeugen. Transparenz entsteht demnach nicht allein durch Zugang, sondern auch durch verständliche Dokumentation der Methode.', question: 'What does the author say is needed in addition to data access?', options: ['A clear explanation of how the data were produced', 'A single official interpretation of every result', 'A ban on using uncertain figures'], answer: 0 }
    ],
    writing: [{ title: 'A precise position', description: 'Develop a nuanced argument for a cultural journal. Distinguish evidence from interpretation.', prompt: 'Wie sollten öffentliche Institutionen mit regionalen Sprachformen umgehen, ohne sie zu folklorisieren?', minWords: 120, focus: ['distinguish evidence from interpretation', 'acknowledge a counterargument'], sample: 'Öffentliche Institutionen sollten regionale Sprachformen weder als bloße Folklore ausstellen noch ihre Bedeutung romantisieren. Dazu gehört zunächst, sie in ihren jeweiligen sozialen Zusammenhängen zu dokumentieren: Wer verwendet eine Form, in welcher Situation und mit welcher Wirkung? Eine solche Kontextualisierung verhindert zwar nicht jede Vereinfachung, macht sie aber sichtbar. Zugleich muss bedacht werden, dass Dokumentation selbst auswählt und ordnet. Entscheidend ist daher nicht die Illusion vollständiger Neutralität, sondern ein transparenter Umgang mit Perspektive und Auswahl.' }]
  }
};

const examReadingPacks = {
  A1: [{ title: 'The tram to the market', description: 'Read the message and answer three practical questions.', text: 'Hallo Sophie! Am Samstag fahre ich mit der Bim zum Markt am Hauptplatz. Ich möchte Erdäpfel, Äpfel und ein Sackerl Marillen kaufen. Danach gehe ich in die Bäckerei neben der Trafik. Um halb zwölf treffe ich meinen Bruder beim Brunnen. Wenn du Zeit hast, komm bitte mit. Schreib mir am Freitag. Liebe Grüße, Nina', questions: [{ question: 'Where do Nina and her brother meet?', options: ['At the fountain', 'At the bakery', 'At the tram stop'], answer: 0 }, { question: 'What does Nina want to buy?', options: ['Potatoes, apples and apricots', 'Bread and cheese only', 'A new ticket and a bag'], answer: 0 }, { question: 'When should Sophie reply?', options: ['On Friday', 'On Saturday morning', 'At half past eleven'], answer: 0 }] }],
  A2: [{ title: 'A new library programme', description: 'Read the library notice and identify its dates, audience, and booking requirement.', text: 'Die Stadtbibliothek startet im März eine neue Veranstaltungsreihe für Erwachsene, die besser Deutsch lesen möchten. Jeden Dienstag gibt es von 18 bis 19.30 Uhr eine offene Leserunde. Die Teilnahme ist kostenlos; ein Buch muss nicht mitgebracht werden. Am ersten Abend wird gemeinsam ein kurzer österreichischer Text gelesen, danach wählen die Teilnehmenden die nächsten Bücher aus. Wer dabei sein möchte, soll sich bis spätestens Montag telefonisch anmelden, damit genügend Plätze vorbereitet werden können. Die Bibliothek ist mit der Straßenbahnlinie 2 erreichbar; die Haltestelle befindet sich direkt vor dem Eingang. Während der Osterwoche findet keine Leserunde statt.', questions: [{ question: 'When does the reading group meet?', options: ['Tuesday evenings', 'Monday afternoons', 'Every day in March'], answer: 0 }, { question: 'What should participants do before attending?', options: ['Register by Monday', 'Bring a book from home', 'Pay for the first session'], answer: 0 }, { question: 'How do participants reach the library?', options: ['By tram line 2', 'By bus line 5 only', 'On foot from the station'], answer: 0 }] }],
  B1: [{ title: 'A notice about the courtyard', description: 'Read the residents’ notice and distinguish the schedule, reason, and requested action.', text: 'Liebe Hausbewohnerinnen und Hausbewohner! Ab 6. Mai wird unser Innenhof neu gestaltet. Zuerst werden die alten Fahrradständer entfernt; danach kommen zusätzliche Bäume und Sitzbänke dazu. Die Arbeiten dauern voraussichtlich drei Wochen. In dieser Zeit können Fahrräder nicht im Hof abgestellt werden. Bitte verwenden Sie den Fahrradraum im Keller und halten Sie den Zugang zur Müllinsel frei. Am Samstag, dem 4. Mai, können Bewohnerinnen bei einer kurzen Besprechung noch Vorschläge für die neuen Pflanzen einbringen. Die Hausverwaltung hat sich für heimische Arten entschieden, weil sie besser mit den heißen Sommern zurechtkommen. Die Arbeiten beginnen täglich um 8 Uhr. Bei Fragen erreichen Sie Herrn Auer telefonisch am Nachmittag.', questions: [{ question: 'Why were native plants chosen?', options: ['They cope better with hot summers', 'They need no water at all', 'They grow faster in the cellar'], answer: 0 }, { question: 'Where should residents keep their bicycles during construction?', options: ['In the basement bicycle room', 'In the courtyard beside the bins', 'In the stairwell'], answer: 0 }, { question: 'When can residents suggest plants?', options: ['At the meeting on 4 May', 'After the work is finished', 'Every weekday at 8 a.m.'], answer: 0 }] }],
  B2: [{ title: 'Rethinking the commute', description: 'Read the commentary and identify its proposal, evidence, and qualification.', text: 'Die Diskussion über den Pendelverkehr wird oft auf die Frage verkürzt, ob eine zusätzliche Buslinie wirtschaftlich sei. Dabei bleibt unberücksichtigt, dass ein verlässlicher Anschluss an die Bahn auch jenen zugutekommt, die heute gar nicht mit öffentlichen Verkehrsmitteln fahren. Eine gemeinsame Untersuchung mehrerer Gemeinden zeigt, dass besonders frühe und späte Verbindungen fehlen. Der Vorschlag, zunächst an Werktagen einen dichteren Takt einzuführen, ist daher nachvollziehbar. Allerdings sollte die Erweiterung nicht als fertige Lösung präsentiert werden: Ohne sichere Umsteigezeiten und verständliche Fahrgastinformation könnten selbst zusätzliche Kurse wenig bewirken. Sinnvoll wäre ein befristeter Versuch, dessen Auslastung ebenso ausgewertet wird wie Rückmeldungen von Beschäftigten, älteren Menschen und Jugendlichen. Erst danach ließe sich entscheiden, ob ein Rufbus am Abend oder eine weitere reguläre Verbindung den größeren Nutzen bringt.', questions: [{ question: 'What is the main weakness in the current debate?', options: ['It focuses too narrowly on the cost of one route', 'It gives commuters too much information', 'It ignores the railway entirely'], answer: 0 }, { question: 'What does the author recommend before a permanent decision?', options: ['A limited trial with usage and feedback evaluation', 'An immediate evening bus replacement', 'A complete redesign of all fares'], answer: 0 }, { question: 'What conditions could limit the value of more buses?', options: ['Poor transfers and unclear passenger information', 'Too many bicycle racks', 'Shorter travel distances'], answer: 0 }] }],
  C1: [{ title: 'When local data shape policy', description: 'Read the analysis and infer the author’s position on using municipal data.', text: 'Gemeinden verfügen heute über mehr Daten zu Verkehr, Energieverbrauch und Wohnraum als je zuvor. Daraus folgt jedoch nicht automatisch, dass politische Entscheidungen nachvollziehbarer werden. Eine Zahl kann präzise erscheinen und dennoch eine unvollständige Wirklichkeit abbilden, etwa wenn saisonale Schwankungen oder unterschiedliche Lebenslagen nicht berücksichtigt werden. Besonders problematisch wird es, wenn Vergleiche zwischen Gemeinden ohne Erklärung der Erhebungsmethoden veröffentlicht werden. Der Beitrag plädiert deshalb nicht für weniger Datennutzung, sondern für eine sorgfältigere Einordnung: Herkunft, Zeitraum und Unsicherheit sollen gemeinsam mit den Ergebnissen sichtbar sein. Zugleich müsse geklärt werden, wer Zugang zu den Daten hat und welche Gruppen in ihnen kaum vorkommen. Transparenz sei demnach keine technische Eigenschaft eines Portals, sondern eine fortlaufende öffentliche Praxis. Sie verlangt verständliche Erläuterungen, Möglichkeiten zur Rückfrage und die Bereitschaft, Entscheidungen bei neuen Erkenntnissen zu überarbeiten.', questions: [{ question: 'What is the author’s central qualification?', options: ['More data do not automatically make policy more transparent', 'Municipalities should stop collecting data', 'Numbers are too imprecise to be useful'], answer: 0 }, { question: 'What should be published alongside results?', options: ['Origin, time period and uncertainty', 'Only a final ranking of municipalities', 'The names of all survey participants'], answer: 0 }, { question: 'How does the author define transparency?', options: ['As an ongoing public practice, not just a technical portal', 'As unrestricted data publication alone', 'As a one-time audit'], answer: 0 }] }],
  C2: [{ title: 'The limits of participation', description: 'Read the commentary and evaluate the author’s distinction between participation and representation.', text: 'Bürgerbeteiligung wird häufig als Gegenmittel zu politischer Entfremdung angeführt. Dass ein Verfahren offensteht, beantwortet jedoch noch nicht die Frage, wessen Erfahrungen in ihm tatsächlich Gewicht erhalten. Teilnahme setzt Zeit, Zugang zu Informationen und mitunter eine sprachliche Sicherheit voraus, über die nicht alle gleichermaßen verfügen. Selbst hohe Rücklaufquoten können daher eine soziale Schieflage verdecken. Daraus wäre freilich nicht zu folgern, Beteiligung sei bloß symbolisch; vielmehr müssten ihre Bedingungen mitverhandelt werden. Ein Verfahren gewinnt an Legitimität, wenn es unterschiedliche Zugänge ermöglicht, die Auswahl seiner Teilnehmenden offenlegt und nachvollziehbar macht, wie widersprüchliche Einwände in die Entscheidung einfließen. Ebenso wichtig bleibt die Rechenschaftspflicht jener, die am Ende entscheiden: Sie sollten erläutern, welche Vorschläge übernommen wurden und aus welchen Gründen andere unberücksichtigt blieben. Beteiligung ersetzt politische Verantwortung nicht; sie macht deren Ausübung überprüfbarer.', questions: [{ question: 'What distinction does the author make?', options: ['An open process does not guarantee that all experiences carry equal weight', 'Participation and representation are identical', 'High response rates prove a process is fair'], answer: 0 }, { question: 'What does the author say should be made transparent?', options: ['How different objections affected the final decision', 'The private identities of all participants', 'Only the number of submitted forms'], answer: 0 }, { question: 'What does participation not replace?', options: ['The responsibility of decision-makers', 'Public access to information', 'The need for differing viewpoints'], answer: 0 }] }]
};

const videoExercises = {
  A1: [
    { title: 'Choose a greeting', description: 'Austrian greetings change with the situation. Pick the more polite choice for greeting a shopkeeper.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Grüß Gott!', meaning: 'A polite, widely used hello.', example: 'Grüß Gott, Frau Huber!', question: 'Which greeting is more casual with a friend?', options: ['Grüß Gott', 'Servus', 'Guten Tag, Frau Huber'], answer: 1, explanation: 'Servus is informal and can mean hello or goodbye. Grüß Gott is a common polite greeting across much of Austria.' },
    { title: 'The verb stays in second position', description: 'In a German main clause, the conjugated verb takes position two, even when another phrase comes first.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Heute beginnt die Sendung um acht.', meaning: 'Today the programme starts at eight.', example: 'Morgen beginnt die Übertragung früher.', question: 'Which word is in the second position in the example?', options: ['Morgen', 'beginnt', 'die'], answer: 1, explanation: 'Morgen is the first element; beginnt is the conjugated verb in position two; die Übertragung follows it.' },
    { title: 'A phrase at the bakery', description: 'Recognize a friendly Austrian service phrase and choose a natural reply.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Was darf’s denn sein?', meaning: 'What can I get for you?', example: 'Was darf’s denn sein? – Zwei Semmeln, bitte.', question: 'What is a natural answer?', options: ['Zwei Semmeln, bitte.', 'Es ist halb neun.', 'Ich komme aus Graz.'], answer: 0, explanation: 'Was darf’s denn sein? is a common informal service question. Answer with what you would like; bitte keeps the request polite.' },
    { title: 'A separable verb', description: 'Many everyday verbs split in a main clause: the prefix moves to the end.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Ich schalte die ZIB um acht ein.', meaning: 'I switch on the news at eight.', example: 'Wir schalten später wieder ein.', question: 'Which sentence has the correct word order?', options: ['Ich einschalte die Sendung um acht.', 'Ich schalte die Sendung um acht ein.', 'Ich die Sendung schalte ein um acht.'], answer: 1, explanation: 'The verb is einschalten. In a main clause, the conjugated part schalte is in position two and ein goes to the end.' }
  ],
  A2: [
    { title: 'A phrase that “works out”', description: 'This common Austrian expression is useful when checking time, space, or whether a plan is feasible.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Das geht sich aus.', meaning: 'That works out / there is enough time or space.', example: 'Wenn wir jetzt losfahren, geht sich der Zug noch aus.', question: 'What does sich ausgehen mean here?', options: ['To get lost on the way', 'To be feasible or leave enough time', 'To go out for the evening'], answer: 1, explanation: 'Sich ausgehen is a characteristic Austrian expression for something being possible, fitting, or working out.' },
    { title: 'Spoken Perfekt', description: 'In casual speech, speakers often shorten habe to hab. The full form is common in careful writing.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Ich hab mir die Sendung angeschaut.', meaning: 'I watched the programme.', example: 'Careful form: Ich habe mir die Sendung angeschaut.', question: 'Which is the full written form?', options: ['Ich bin mir die Sendung angeschaut.', 'Ich habe mir die Sendung angeschaut.', 'Ich hatte mir die Sendung anschauen.'], answer: 1, explanation: 'The Perfekt uses haben plus the past participle angeschaut. Hab is a common spoken contraction of habe.' },
    { title: 'The verb after obwohl', description: 'Obwohl introduces a contrast. In its subordinate clause, the conjugated verb goes to the end.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Obwohl der Beitrag kurz ist, erklärt er viel.', meaning: 'Although the report is short, it explains a lot.', example: 'Obwohl es spät ist, sehen wir noch die Nachrichten.', question: 'Where does ist go in the obwohl-clause?', options: ['Directly after obwohl', 'At the end of the clause', 'Before the subject'], answer: 1, explanation: 'Subordinating conjunctions such as obwohl send the conjugated verb to the end: Obwohl der Beitrag kurz ist.' },
    { title: 'A polite request', description: 'Use the Konjunktiv II form könnten to make a request sound more courteous.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Könnten Sie das bitte wiederholen?', meaning: 'Could you please repeat that?', example: 'Könnten Sie mir die Meldung bitte erklären?', question: 'What does könnten do in this sentence?', options: ['Makes the request more polite', 'Changes it into the past tense', 'Makes it an order'], answer: 0, explanation: 'Könnten is the polite Konjunktiv II form of können. Pair it with Sie and bitte for a courteous request.' }
  ],
  B1: [
    { title: 'A reason with weil', description: 'Give a reason with weil and move the conjugated verb to the end of that clause.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Die Straße bleibt gesperrt, weil Bauarbeiten stattfinden.', meaning: 'The road remains closed because construction work is taking place.', example: 'Wir nehmen den Bus, weil die Straßenbahn heute nicht fährt.', question: 'Where does fährt belong in the weil-clause?', options: ['Immediately after weil', 'At the end of the clause', 'Before heute'], answer: 1, explanation: 'Weil is a subordinating conjunction, so the conjugated verb moves to the end: weil die Straßenbahn heute nicht fährt.' },
    { title: 'Put the focus on an event', description: 'The passive is useful in news when the action matters more than who performs it.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Die Straße wird wegen der Bauarbeiten gesperrt.', meaning: 'The road is being closed because of construction work.', example: 'Die Ergebnisse werden am Montag veröffentlicht.', question: 'How is the present passive formed here?', options: ['werden + past participle', 'haben + infinitive', 'sein + adjective'], answer: 0, explanation: 'The present passive uses werden plus the past participle: wird gesperrt, werden veröffentlicht. It foregrounds the event.' },
    { title: 'Report what someone said', description: 'News reports often use Konjunktiv I to distinguish an attributed statement from a confirmed fact.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Die Sprecherin sagt, der Zug habe Verspätung.', meaning: 'The spokesperson says that the train is delayed.', example: 'Die Gemeinde teilt mit, die Straße bleibe bis Freitag gesperrt.', question: 'Which form marks indirect speech?', options: ['sagt', 'habe', 'Verspätung'], answer: 1, explanation: 'Habe is Konjunktiv I of haben. In formal reporting, it attributes the information to the speaker rather than stating it directly as the reporter’s own claim.' },
    { title: 'Attribute a source', description: 'Laut is a compact way to say where a statement or information comes from.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Laut der Gemeinde bleibt die Straße bis Freitag gesperrt.', meaning: 'According to the municipality, the road remains closed until Friday.', example: 'Laut Polizei wurde niemand verletzt.', question: 'What does laut tell the reader?', options: ['Who the information is attributed to', 'When the road will reopen for certain', 'Why the municipality issued the notice'], answer: 0, explanation: 'Laut introduces the source of a claim. It signals attribution; it does not by itself prove or guarantee the information.' },
    { title: 'Use eh for shared context', description: 'In Austrian conversation, eh can signal that something is already understood or true anyway.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Das war eh nur ein Vorschlag.', meaning: 'That was only a suggestion anyway.', example: 'Wir können eh morgen noch darüber reden.', question: 'What does eh add in this context?', options: ['A sense of “anyway” or shared knowledge', 'A question about the past', 'A formal source attribution'], answer: 0, explanation: 'Eh is a frequent Austrian discourse particle. Its exact nuance depends on context; here it presents the point as already understood or unsurprising.' },
    { title: 'Talk about a hypothetical plan', description: 'Use Konjunktiv II to make a suggestion or describe a situation that is not currently real.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Wenn ich Zeit hätte, würde ich beim Hoffest helfen.', meaning: 'If I had time, würde ich beim Hoffest helfen.', example: 'Wenn das Wetter besser wäre, würden wir draußen feiern.', question: 'Which forms mark the hypothetical situation?', options: ['hätte and würde', 'habe and wird', 'hatte and ist'], answer: 0, explanation: 'Hätte and würde are Konjunktiv II forms. Together they describe an imagined condition and its possible result.' }
  ],
  B2: [
    { title: 'A conditional proposal', description: 'Use würde plus an infinitive to describe a hypothetical policy or possible outcome.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Die Gemeinde würde die Busverbindung ausbauen.', meaning: 'The municipality would expand the bus service.', example: 'Mit zusätzlicher Förderung würde das Angebot häufiger fahren.', question: 'Which meaning does würde express here?', options: ['A reported past event', 'A hypothetical possibility or proposal', 'A completed action'], answer: 1, explanation: 'Würde plus infinitive commonly expresses a hypothetical or conditional action: würde ausbauen, würde fahren.' },
    { title: 'Concession with trotz', description: 'Trotz introduces a circumstance that does not prevent the main event. Formal standard German commonly uses the genitive.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Trotz des Regens findet der Markt statt.', meaning: 'Despite the rain, the market is taking place.', example: 'Trotz der Kritik bleibt der Plan bestehen.', question: 'Which case follows trotz in this formal example?', options: ['Nominative', 'Accusative', 'Genitive'], answer: 2, explanation: 'In formal standard German, trotz commonly takes the genitive: trotz des Regens, trotz der Kritik. Dative also occurs in everyday speech.' },
    { title: 'Link two equal points', description: 'The paired connector nicht nur … sondern auch adds a second point with emphasis.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Der Bericht ist nicht nur informativ, sondern auch verständlich.', meaning: 'The report is not only informative, but also easy to understand.', example: 'Die Maßnahme hilft nicht nur Pendlern, sondern auch Anwohnern.', question: 'What does sondern auch do?', options: ['Adds an emphasized second point', 'Introduces a reason', 'Marks a condition'], answer: 0, explanation: 'Nicht nur … sondern auch links two parallel elements and emphasizes that both apply.' },
    { title: 'Read compressed headlines', description: 'Headlines often omit articles or a form of sein to stay brief. Restore the full sentence.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Neue ZIB-Sendung am Sonntag geplant.', meaning: 'A new ZIB programme is planned for Sunday.', example: 'Full sentence: Eine neue ZIB-Sendung ist am Sonntag geplant.', question: 'Which words are supplied in the full sentence?', options: ['Eine and ist', 'wird and haben', 'dass and war'], answer: 0, explanation: 'Headlines use compressed syntax. In ordinary prose, restore the article and finite verb: Eine neue ZIB-Sendung ist … geplant.' },
    { title: 'Soften an opinion with wär', description: 'In casual speech, wär is a common shortened form of wäre. Pair it with a suggestion to sound conversational.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Wär schon gut, wenn wir vorher Bescheid wüssten.', meaning: 'It would be good if we knew in advance.', example: 'Wär vielleicht besser, wenn wir erst morgen losfahren.', question: 'What is wär short for?', options: ['war', 'wäre', 'wird'], answer: 1, explanation: 'Wär is a spoken contraction of wäre, the Konjunktiv II form of sein. The wenn-clause uses wüssten, another Konjunktiv II form.' },
    { title: 'Agree with a conversational phrase', description: 'Use a natural spoken phrase to show strong agreement in a group conversation.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Da bin ich ganz bei dir.', meaning: 'I completely agree with you.', example: 'Bei dem Vorschlag bin ich ganz bei euch.', question: 'What does ganz bei dir mean here?', options: ['I agree with your point', 'I am physically beside you', 'I have a different suggestion'], answer: 0, explanation: 'Bei jemandem sein is used idiomatically to express agreement or support. Ganz strengthens the agreement.' }
  ],
  C1: [
    { title: 'Konjunktiv I in a report', description: 'Formal reporting uses Konjunktiv I to keep a source’s claim distinct from the journalist’s own voice.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Der Minister sagt, die Lage habe sich verbessert.', meaning: 'The minister says the situation has improved.', example: 'Die Sprecherin erklärte, man prüfe derzeit alle Hinweise.', question: 'Why is habe used instead of hat?', options: ['It marks reported speech', 'It signals a future event', 'It is the passive voice'], answer: 0, explanation: 'Habe is Konjunktiv I. It conventionally marks indirect speech in formal reporting and maintains distance from the attributed claim.' },
    { title: 'Contrast with während', description: 'Während can connect two contrasting developments. Its subordinate clause sends the verb to the end.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Während die Preise sinken, bleibt die Nachfrage hoch.', meaning: 'While prices are falling, demand remains high.', example: 'Während die Stadt wächst, verändert sich auch ihr Umland.', question: 'What is während doing here?', options: ['Showing a contrast between two developments', 'Giving a direct cause', 'Quoting a source'], answer: 0, explanation: 'Here während highlights simultaneous but contrasting trends. The finite verb closes its subordinate clause: während die Preise sinken.' },
    { title: 'Turn an action into a noun', description: 'Nominalization creates a compact, formal style often found in reports and official language.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Nach der Veröffentlichung des Berichts gab es Fragen.', meaning: 'After the report was published, questions arose.', example: 'Verb clause: Nachdem der Bericht veröffentlicht worden war, gab es Fragen.', question: 'Which word is the nominalized action?', options: ['Nach', 'Veröffentlichung', 'Fragen'], answer: 1, explanation: 'Veröffentlichung is formed from veröffentlichen. The nominal phrase nach der Veröffentlichung is compact and formal; the verb-clause version is more explicit.' },
    { title: 'Signal a reported inference', description: 'Demnach points to a conclusion drawn from previously mentioned information, not necessarily direct observation.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Demnach sollen die Gespräche am Montag weitergehen.', meaning: 'According to that information, the talks are expected to continue Monday.', example: 'Die Unterlagen wurden geprüft. Demnach fehlen noch zwei Nachweise.', question: 'What does demnach signal?', options: ['A conclusion based on information already mentioned', 'A promise made by the speaker', 'A direct quotation'], answer: 0, explanation: 'Demnach means “accordingly” or “according to that.” Sollen can further mark the continuation as reported rather than independently confirmed.' },
    { title: 'Qualify disagreement with na ja', description: 'A short conversational phrase can soften disagreement before you explain your position.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Na ja, ganz so einfach ist das nicht.', meaning: 'Well, it is not quite that simple.', example: 'Na ja, ich seh das ein bissl anders.', question: 'What does na ja do at the start?', options: ['Signals a qualified or hesitant response', 'Introduces a direct quotation', 'Marks a firm command'], answer: 0, explanation: 'Na ja gives the speaker room to qualify a response. The phrase ganz so … nicht also softens a direct contradiction.' },
    { title: 'Use schon as a conversational marker', description: 'In spoken Austrian German, schon can add reassurance or acknowledge a point before introducing a contrast.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Das ist schon verständlich, aber es dauert halt länger.', meaning: 'That is understandable, but it does take longer.', example: 'Das kann schon sein, trotzdem sollten wir nachfragen.', question: 'What does schon do in the first clause?', options: ['Acknowledges or concedes a point', 'Places the event in the past', 'Turns the phrase into a question'], answer: 0, explanation: 'Here schon is a modal particle, not the adverb “already.” It acknowledges the point; aber then introduces a qualification.' }
  ],
  C2: [
    { title: 'Hedge an inference with dürfte', description: 'A modal verb can express a careful estimate rather than certainty.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Die Maßnahme dürfte im Frühjahr beginnen.', meaning: 'The measure is likely to begin in spring.', example: 'Die Verzögerung dürfte mehrere Gründe haben.', question: 'What nuance does dürfte carry here?', options: ['A cautious likelihood or inference', 'A strict obligation', 'A past habit'], answer: 0, explanation: 'Dürfte is Konjunktiv II of dürfen, but here it softens a prediction: the event is likely, not guaranteed.' },
    { title: 'A formal concession with wenngleich', description: 'Wenngleich introduces a concession similar to obwohl, often with a more formal register.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Wenngleich die Daten lückenhaft sind, zeigt sich ein klarer Trend.', meaning: 'Although the data are incomplete, a clear trend is apparent.', example: 'Wenngleich die Lösung teuer ist, könnte sie langfristig helfen.', question: 'Which connector has a similar meaning?', options: ['obwohl', 'damit', 'sobald'], answer: 0, explanation: 'Wenngleich means “although/even though.” Like obwohl, it introduces a concessive subordinate clause with the verb at the end.' },
    { title: 'Read the phrase nicht zuletzt', description: 'This phrase highlights one important factor among several; it is not simply a marker of sequence.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Der Umbau ist nicht zuletzt wegen der hohen Kosten umstritten.', meaning: 'The redesign is controversial, not least because of its high cost.', example: 'Die Debatte betrifft nicht zuletzt viele Pendlerinnen und Pendler.', question: 'What does nicht zuletzt emphasize?', options: ['An especially relevant factor among others', 'The final event in a sequence', 'A reason that has been ruled out'], answer: 0, explanation: 'Nicht zuletzt draws attention to a particularly important consideration while implying there may be other factors too.' },
    { title: 'A collocation: eine Frage aufwerfen', description: 'German often pairs nouns with specific verbs. Learn the phrase as a unit rather than translating each word.', source: 'ORF-STYLE · FORMAL AUSTRIAN GERMAN · ORIGINAL EXAMPLE', phrase: 'Der Bericht wirft eine wichtige Frage auf.', meaning: 'The report raises an important question.', example: 'Die Entscheidung wirft Fragen zur Finanzierung auf.', question: 'What does eine Frage aufwerfen mean?', options: ['To raise or prompt a question', 'To answer a question completely', 'To avoid discussing a question'], answer: 0, explanation: 'Eine Frage aufwerfen is a fixed collocation meaning “to raise a question.” Learning the noun-verb pairing makes formal German sound more natural.' },
    { title: 'Hear the nuance in halt', description: 'Austrian speakers often use modal particles to frame a statement as obvious, resigned, or accepted.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Das ist halt so eine Sache.', meaning: 'That is just one of those things.', example: 'Das lässt sich halt nicht von heute auf morgen ändern.', question: 'What nuance does halt add here?', options: ['Matter-of-fact acceptance or resignation', 'A precise time in the past', 'A question about permission'], answer: 0, explanation: 'Halt is a modal particle that can present something as accepted or difficult to change. Its force depends on intonation and context.' },
    { title: 'An Austrian spoken form: tät', description: 'In some Austrian speech, tät plus an infinitive is used for a tentative suggestion. The standard alternative is würde.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Ich tät sagen, wir warten noch ein bissl.', meaning: 'I would say we should wait a little longer.', example: 'Standard alternative: Ich würde sagen, wir warten noch ein bisschen.', question: 'Which form is the standard alternative to tät sagen?', options: ['würde sagen', 'werde gesagt', 'habe gesagt'], answer: 0, explanation: 'Tät sagen is a regional spoken Konjunktiv II form. Würde sagen is the broadly standard equivalent; a bissl is a colloquial Austrian form of ein bisschen.' }
  ]
};

const grammarActivities = {
  A1: [
    { title: 'Main clause word order', description: 'A1 grammar · Build a simple sentence with the conjugated verb in second position.', source: 'A1 · CORE GRAMMAR', phrase: 'Heute beginnt die Sendung um acht.', meaning: 'Today the programme starts at eight.', example: 'Am Abend beginnt der Film.', question: 'Which sentence has correct verb-second order?', options: ['Heute die Sendung beginnt um acht.', 'Heute beginnt die Sendung um acht.', 'Heute um acht die Sendung beginnt.'], answer: 1, explanation: 'In a main clause the conjugated verb is in position two. The first position can be a time phrase: Heute beginnt …' },
    { title: 'Present-tense verb endings', description: 'A1 grammar · Match the verb ending to the subject.', source: 'A1 · CORE GRAMMAR', phrase: 'Ich hör__ die Nachrichten.', meaning: 'I listen to the news.', example: 'Du hörst die Nachrichten.', question: 'Which ending completes the sentence?', options: ['-e: höre', '-st: hörst', '-t: hört'], answer: 0, explanation: 'Regular verbs usually take -e with ich: ich höre. The common endings are ich -e, du -st, er/sie/es -t.' },
    { title: 'Accusative articles', description: 'A1 grammar · Recognize the direct object after a common verb.', source: 'A1 · CORE GRAMMAR', phrase: 'Ich lese ___ Bericht.', meaning: 'I am reading the report.', example: 'Ich lese den Bericht und höre die Nachrichten.', question: 'Which article completes the sentence?', options: ['der', 'den', 'dem'], answer: 1, explanation: 'Bericht is masculine. As the direct object of lesen it takes the accusative article den.' }
  ],
  A2: [
    { title: 'Perfekt with haben or sein', description: 'A2 grammar · Choose the auxiliary for a change of place.', source: 'A2 · CORE GRAMMAR', phrase: 'Wir ___ nach Salzburg gefahren.', meaning: 'We travelled to Salzburg.', example: 'Wir sind mit dem Zug gefahren.', question: 'Which auxiliary completes this sentence?', options: ['haben', 'sind', 'werden'], answer: 1, explanation: 'Many verbs describing movement from one place to another form the Perfekt with sein: wir sind gefahren.' },
    { title: 'Dative after mit', description: 'A2 grammar · Mit is followed by the dative case.', source: 'A2 · CORE GRAMMAR', phrase: 'Ich fahre mit ___ Bus zur Arbeit.', meaning: 'I take the bus to work.', example: 'Sie fährt mit der Straßenbahn.', question: 'Which article completes the sentence?', options: ['der', 'den', 'dem'], answer: 2, explanation: 'Mit always takes the dative. Bus is masculine, so the dative form is dem Bus.' },
    { title: 'Verb position in a weil-clause', description: 'A2 grammar · A subordinating conjunction sends the conjugated verb to the end.', source: 'A2 · CORE GRAMMAR', phrase: 'Ich bleibe zu Hause, weil es heute ___.', meaning: 'I am staying home because it is raining today.', example: '…weil die Straßenbahn heute nicht fährt.', question: 'Which word order is correct?', options: ['regnet', 'regnet es', 'es regnet'], answer: 0, explanation: 'Weil introduces a subordinate clause. The conjugated verb goes to the end: weil es heute regnet.' }
  ],
  B1: [
    { title: 'Relative clauses', description: 'B1 grammar · Add information about a person or thing with a relative clause.', source: 'B1 · CORE GRAMMAR', phrase: 'Die Frau, ___ den Bericht vorstellt, arbeitet beim ORF.', meaning: 'The woman who is presenting the report works at ORF.', example: 'Der Beitrag, den wir gestern gesehen haben, war interessant.', question: 'Which relative pronoun fits the subject of the clause?', options: ['der', 'die', 'das'], answer: 1, explanation: 'The antecedent Frau is feminine, and the pronoun is the subject of vorstellt, so use die. Relative clauses place the verb at the end.' },
    { title: 'Konjunktiv II for advice', description: 'B1 grammar · Use a conditional form to make advice less direct.', source: 'B1 · CORE GRAMMAR', phrase: 'An Ihrer Stelle ___ ich noch einmal nachfragen.', meaning: 'In your position, I would ask again.', example: 'An deiner Stelle würde ich den Termin verschieben.', question: 'Which form makes the advice appropriately tentative?', options: ['frage', 'würde', 'werde'], answer: 1, explanation: 'Würde plus infinitive expresses a hypothetical suggestion. The full sentence is: An Ihrer Stelle würde ich … nachfragen.' },
    { title: 'Present passive', description: 'B1 grammar · Form the passive to emphasize an action rather than its actor.', source: 'B1 · CORE GRAMMAR', phrase: 'Die Ergebnisse ___ morgen veröffentlicht.', meaning: 'The results will be published tomorrow.', example: 'Die Straße wird bis Freitag gesperrt.', question: 'Which auxiliary forms the present passive?', options: ['werden', 'haben', 'sein'], answer: 0, explanation: 'The present passive is formed with werden plus the past participle: Die Ergebnisse werden veröffentlicht.' }
  ],
  B2: [
    { title: 'Adjective endings after a definite article', description: 'B2 grammar · Choose the adjective ending after a plural definite article.', source: 'B2 · CORE GRAMMAR', phrase: 'Die verlässlich___ Daten wurden heute veröffentlicht.', meaning: 'The reliable data were published today.', example: 'Die neuen Zahlen liegen jetzt vor.', question: 'Which ending is correct?', options: ['-e', '-en', '-er'], answer: 1, explanation: 'After the definite article die in the plural, the adjective ending is -en: die verlässlichen Daten.' },
    { title: 'Paired conjunctions', description: 'B2 grammar · Keep the two parts of a paired connector parallel.', source: 'B2 · CORE GRAMMAR', phrase: 'Die Maßnahme ist nicht nur teuer, ___ auch aufwendig.', meaning: 'The measure is not only expensive but also complex.', example: 'Der Bericht ist sowohl informativ als auch verständlich.', question: 'Which word completes the connector?', options: ['sondern', 'obwohl', 'damit'], answer: 0, explanation: 'The paired connector is nicht nur … sondern auch. It links equivalent sentence elements.' },
    { title: 'Past counterfactuals', description: 'B2 grammar · Describe a past situation that did not happen and its imagined result.', source: 'B2 · CORE GRAMMAR', phrase: 'Wenn die Behörde früher informiert ___, hätten alle besser planen können.', meaning: 'If the authority had informed people earlier, everyone could have planned better.', example: 'Wenn wir früher losgefahren wären, hätten wir den Zug erreicht.', question: 'Which form completes the past condition?', options: ['hat', 'hätte', 'haben würde'], answer: 1, explanation: 'A past counterfactual uses hätte or wäre plus the past participle in the condition: wenn … informiert hätte.' }
  ],
  C1: [
    { title: 'Konjunktiv I in reported speech', description: 'C1 grammar · Mark attributed statements without presenting them as the reporter’s own claim.', source: 'C1 · CORE GRAMMAR', phrase: 'Die Sprecherin sagt, die Lage ___ sich verbessert.', meaning: 'The spokesperson says that the situation has improved.', example: 'Der Minister erklärte, man prüfe alle Hinweise.', question: 'Which form marks indirect speech?', options: ['hat', 'habe', 'hatte'], answer: 1, explanation: 'Habe is Konjunktiv I. It is the standard formal choice for reported speech when it is distinct from the indicative.' },
    { title: 'Nominalization in formal writing', description: 'C1 grammar · Replace a subordinate verb clause with a concise noun phrase.', source: 'C1 · CORE GRAMMAR', phrase: 'Nachdem der Bericht veröffentlicht worden war, gab es Fragen.', meaning: 'After the report had been published, questions arose.', example: 'Nach der Veröffentlichung des Berichts gab es Fragen.', question: 'Which phrase nominalizes the action?', options: ['Nach der Veröffentlichung', 'Nachdem der Bericht', 'gab es Fragen'], answer: 0, explanation: 'Veröffentlichung is a noun formed from veröffentlichen. Nach der Veröffentlichung is a compact formal alternative to nachdem … veröffentlicht worden war.' },
    { title: 'Participial adjectives', description: 'C1 grammar · Use a participle as a concise modifier before a noun.', source: 'C1 · CORE GRAMMAR', phrase: 'Die gestern veröffentlicht___ Daten sind frei zugänglich.', meaning: 'The data published yesterday are freely available.', example: 'Die am Freitag angekündigte Änderung tritt bald in Kraft.', question: 'Which adjective ending completes the sentence?', options: ['-e', '-en', '-er'], answer: 1, explanation: 'Daten is plural and follows the definite article die, so the participial adjective takes -en: die veröffentlichten Daten.' }
  ],
  C2: [
    { title: 'Concessive subordinate clauses', description: 'C2 grammar · Express a concession while maintaining subordinate-clause word order.', source: 'C2 · CORE GRAMMAR', phrase: 'Wenngleich der Einwand berechtigt ___, bleibt die Frage offen.', meaning: 'Although the objection is justified, the question remains open.', example: 'Obgleich die Daten lückenhaft sind, zeigt sich ein Trend.', question: 'Which form completes the subordinate clause?', options: ['ist', 'sein', 'wäre'], answer: 0, explanation: 'The subject Einwand is singular, so the verb is ist. In a wenngleich-clause, the conjugated verb goes to the end.' },
    { title: 'Modal verbs for cautious inference', description: 'C2 grammar · Distinguish an inferred likelihood from obligation.', source: 'C2 · CORE GRAMMAR', phrase: 'Die Lage ___ sich im Frühjahr beruhigen.', meaning: 'The situation is likely to calm down in spring.', example: 'Die Verzögerung dürfte mehrere Gründe haben.', question: 'Which modal expresses a cautious prediction?', options: ['muss', 'dürfte', 'soll'], answer: 1, explanation: 'Dürfte is Konjunktiv II of dürfen and often marks a careful inference: likely, but not certain.' },
    { title: 'Reported speech when Konjunktiv I matches', description: 'C2 grammar · Use a substitute form when Konjunktiv I is identical to the indicative.', source: 'C2 · CORE GRAMMAR', phrase: 'Die Sprecher teilten mit, sie ___ alle Unterlagen geprüft.', meaning: 'The spokespersons said they had checked all the documents.', example: 'Sie erklärten, sie hätten den Bericht bereits gelesen.', question: 'Why is hätten used here?', options: ['Konjunktiv I would look like the indicative', 'It marks a future action', 'It turns the clause into the passive'], answer: 0, explanation: 'For plural subjects, Konjunktiv I haben is haben, identical to the indicative. Konjunktiv II hätten is often used to keep reported speech distinct.' }
  ]
};

const skillLabels = {
  speaking: 'SPEAKING · ROLE PLAY',
  listening: 'LISTENING · COMPREHENSION',
  reading: 'READING · COMPREHENSION',
  writing: 'WRITING · COMPOSE',
  vocabulary: 'VOCABULARY · FLASHCARDS',
  grammar: 'GRAMMAR · CEFR PRACTICE'
};

const skillIcons = {
  speaking: '↗',
  listening: '♫',
  reading: '▤',
  writing: '✎',
  vocabulary: '▣',
  grammar: '§'
};

const levelCaption = document.querySelector('#level-caption');
const activityLevel = document.querySelector('#activity-level');
const activityTag = document.querySelector('#activity-tag');
const activityIcon = document.querySelector('#activity-icon');
const levelGoal = document.querySelector('#level-goal');
const panelSectionTitle = document.querySelector('#panel-section-title');
const panelSectionCount = document.querySelector('#panel-section-count');
const panelTopicSelect = document.querySelector('#panel-topic-select');
const activityContent = document.querySelector('#activity-content');
const labChoices = document.querySelector('#lab-choices');
const labStatus = document.querySelector('#lab-status');
const labExplanation = document.querySelector('#lab-explanation');

let currentLevel = 'A1';
let currentSkill = 'speaking';
let currentTopic = 'quick'; // 'quick' or index number (0, 1, 2)
let currentActivityIndex = 0;
let currentVideoSource = 'orf';
let currentVideoExerciseIndex = 0;
let currentVocabularyIndex = 0;
let vocabularyMeaningVisible = false;
let recognition = null;
let activeSpeakButton = null;

function syncTopicSelectors() {
  const units = topicUnits[currentLevel];

  // Update panel section title
  if (panelSectionTitle) {
    if (currentTopic === 'quick') {
      panelSectionTitle.textContent = currentSkill === 'grammar' ? 'Quick practice & Checklist' : 'Quick practice';
    } else if (typeof currentTopic === 'number' && units[currentTopic]) {
      panelSectionTitle.textContent = units[currentTopic].title;
    }
  }

  if (panelSectionCount) {
    const activeCount = currentTopic === 'quick'
      ? getQuickActivityList(currentLevel, currentSkill).length
      : getTopicExerciseCount(currentLevel, currentSkill, currentTopic);
    panelSectionCount.textContent = ``;
  }

  // Build options HTML
  const optionsHtml = [
    '<option value="quick">⚡ Quick practice</option>',
    '<optgroup label="Topics">',
    ...units.map((unit, i) => `<option value="${i}">Topic ${i + 1} · ${unit.title}</option>`),
    '</optgroup>'
  ].join('');

  // Update panel topic select
  if (panelTopicSelect) {
    panelTopicSelect.innerHTML = optionsHtml;
    panelTopicSelect.value = String(currentTopic);
  }

  // Update left sidebar topic selects
  document.querySelectorAll('.skill-dropdown-select').forEach((select) => {
    select.innerHTML = optionsHtml;
    select.value = String(currentTopic);
  });
}

function renderTopicExercise(skill, unit, example, unitIndex, exerciseIndex) {
  const choices = exerciseIndex === 0
    ? [example.english, unit.examples[1].english, unit.distractor]
    : [unit.examples[0].english, unit.distractor, example.english];
  const exerciseId = `${currentLevel.toLowerCase()}-${unitIndex}-${exerciseIndex}`;

  if (skill === 'speaking') {
    return `
      <article class="course-exercise" data-course-card data-unit="${unitIndex}" data-exercise="${exerciseIndex}">
        <p class="exercise-label">EXERCISE ${exerciseIndex + 1} · SAY IT</p>
        <p class="exercise-prompt">Say this idea in Austrian German: <strong>${example.english}</strong></p>
        <textarea class="answer-field course-response" data-topic-response lang="de-AT" placeholder="Speak, or jot down your response…"></textarea>
        <div class="activity-actions">
          <button class="primary-action" type="button" data-course-action="speak" data-unit="${unitIndex}" data-exercise="${exerciseIndex}"><span aria-hidden="true">◉</span> Start speaking</button>
          <button class="secondary-action" type="button" data-course-action="hear-model" data-unit="${unitIndex}" data-exercise="${exerciseIndex}">Hear model</button>
        </div>
        <details class="course-model">
          <summary>Show model response</summary>
          <p lang="de-AT">${example.german}</p>
        </details>
      </article>`;
  }

  if (skill === 'listening' || skill === 'reading') {
    const material = skill === 'reading'
      ? `<p class="course-reading-text" lang="de-AT">${example.german}</p>`
      : `<div class="activity-actions"><button class="primary-action" type="button" data-course-action="hear" data-unit="${unitIndex}" data-exercise="${exerciseIndex}"><span aria-hidden="true">▶</span> Play audio</button></div>`;
    return `
      <article class="course-exercise" data-course-card data-unit="${unitIndex}" data-exercise="${exerciseIndex}">
        <p class="exercise-label">EXERCISE ${exerciseIndex + 1} · ${skill.toUpperCase()}</p>
        ${material}
        <fieldset class="choice-list">
          <legend>Choose the closest meaning:</legend>
          ${choices.map((choice, index) => `<label class="choice-option"><input type="radio" name="course-${skill}-${exerciseId}" value="${index}"><span>${choice}</span></label>`).join('')}
        </fieldset>
        <div class="activity-actions">
          <button class="secondary-action" type="button" data-course-action="check">Check answer</button>
        </div>
        <p class="activity-status course-status" role="status"></p>
      </article>`;
  }

  if (skill === 'grammar') {
    return `
      <article class="course-exercise" data-course-card data-unit="${unitIndex}" data-exercise="${exerciseIndex}">
        <p class="exercise-label">EXERCISE ${exerciseIndex + 1} · GRAMMAR &amp; STRUCTURE</p>
        <p class="course-reading-text" lang="de-AT">${example.german}</p>
        <fieldset class="choice-list">
          <legend>Select the matching English meaning:</legend>
          ${choices.map((choice, index) => `<label class="choice-option"><input type="radio" name="course-${skill}-${exerciseId}" value="${index}"><span>${choice}</span></label>`).join('')}
        </fieldset>
        <div class="activity-actions">
          <button class="secondary-action" type="button" data-course-action="check">Check answer</button>
          <button class="secondary-action" type="button" data-course-action="hear">Hear sentence</button>
        </div>
        <p class="activity-status course-status" role="status"></p>
      </article>`;
  }

  // Writing
  const suggestedWords = { A1: 4, A2: 6, B1: 8, B2: 10, C1: 12, C2: 14 }[currentLevel] || 8;
  return `
    <article class="course-exercise" data-course-card data-unit="${unitIndex}" data-exercise="${exerciseIndex}">
      <p class="exercise-label">EXERCISE ${exerciseIndex + 1} · WRITE IT</p>
      <label class="field-label">Write this idea in German: ${example.english}<span>Try to include the vocabulary and grammar focus above.</span></label>
      <textarea class="answer-field course-response" data-topic-response lang="de-AT" placeholder="Dein Text beginnt hier …"></textarea>
      <p class="writing-meta"><span data-course-word-count>0 words</span><span>Suggested: ${suggestedWords} words</span></p>
      <div class="activity-actions">
        <button class="secondary-action" type="button" data-course-action="check-writing">Check length</button>
      </div>
      <details class="course-model">
        <summary>Show sample response</summary>
        <p lang="de-AT">${example.german}</p>
      </details>
      <p class="activity-status course-status" role="status"></p>
    </article>`;
}

  function rotateChoices(options, correctIndex, salt) {
    const offset = salt % options.length;
    const order = options.map((_, index) => (index + offset) % options.length);
    return {
      options: order.map((index) => options[index]),
      answer: order.indexOf(correctIndex)
    };
  }

  function renderTopicReading(unit, unitIndex) {
    const pack = topicReadingPacks[currentLevel][unitIndex];
    return `<article class="topic-reading-pack course-exercise" data-course-card data-unit="${unitIndex}" data-exercise="0">
      <div class="reading-passage">
        <p class="exercise-label">READING · ${pack.type.toUpperCase()}</p>
        <p class="reading-passage-text" lang="de-AT">${pack.text}</p>
      </div>
      <div class="reading-task-list">${pack.questions.map((question, questionIndex) => {
        const options = rotateChoices(question.options, question.answer, unitIndex + questionIndex);
        return `<div class="reading-task" data-reading-question="${questionIndex}" data-answer="${options.answer}">
          <fieldset class="choice-list"><legend>${question.prompt}</legend>
            ${options.options.map((option, optionIndex) => `<label class="choice-option"><input type="radio" name="read-${currentLevel}-${unitIndex}-${questionIndex}" value="${optionIndex}"><span>${option}</span></label>`).join('')}
          </fieldset>
          <div class="activity-actions"><button class="secondary-action" type="button" data-course-action="check-reading" data-question="${questionIndex}">Check answer</button></div>
          <p class="activity-status course-status" role="status"></p>
        </div>`;
      }).join('')}</div>
    </article>`;
  }

  function renderTopicGrammar(unit, unitIndex) {
    const check = topicGrammarChecks[currentLevel][unitIndex];
    const options = rotateChoices(check.options, check.answer, unitIndex);
    return `<article class="course-exercise grammar-topic-check" data-course-card data-unit="${unitIndex}" data-exercise="0" data-answer="${options.answer}">
      <p class="exercise-label">GRAMMAR CHECK · ${currentLevel}</p>
      <p class="exercise-prompt">${check.prompt}</p>
      <fieldset class="choice-list"><legend>Choose the correct form:</legend>
        ${options.options.map((option, optionIndex) => `<label class="choice-option"><input type="radio" name="grammar-${currentLevel}-${unitIndex}" value="${optionIndex}"><span>${option}</span></label>`).join('')}
      </fieldset>
      <div class="activity-actions"><button class="secondary-action" type="button" data-course-action="check-grammar">Check answer</button></div>
      <p class="activity-status course-status" role="status"></p>
      <details class="course-model"><summary>Grammar note</summary><p>${check.explanation}</p></details>
    </article>`;
  }

  function getTopicExerciseCount(level, skill, topicIndex) {
    if (typeof topicIndex === 'number' && topicUnits[level][topicIndex]) {
      const unit = topicUnits[level][topicIndex];
      if (skill === 'reading') return topicReadingPacks[level][topicIndex].questions.length;
      if (skill === 'grammar') return 1;
      if (skill === 'vocabulary') return unit.vocabulary.length;
      return unit.examples.length;
    }
    return topicUnits[level].reduce((total, unit, index) => {
      if (skill === 'reading') return total + topicReadingPacks[level][index].questions.length;
      if (skill === 'grammar') return total + 1;
      if (skill === 'vocabulary') return total + unit.vocabulary.length;
      return total + unit.examples.length;
    }, 0);
  }

  function getFullCourseExerciseCount() {
    return Object.keys(topicUnits).reduce((total, level) => total + ['speaking', 'listening', 'reading', 'writing', 'vocabulary', 'grammar'].reduce((skillTotal, skill) => skillTotal + getTopicExerciseCount(level, skill), 0), 0);
  }

function getQuickActivityList(level, skill) {
  if (skill === 'grammar') return grammarActivities[level];
  if (skill === 'reading') return [...activities[level].reading, ...examReadingPacks[level]];
  if (skill === 'vocabulary') return getVocabularyCards(level, 'quick');
  return activities[level][skill];
}

const knownVocabularyStorageKey = 'servus-deutsch-known-vocabulary';

function getKnownVocabulary() {
  try {
    const saved = JSON.parse(localStorage.getItem(knownVocabularyStorageKey) || '[]');
    return new Set(Array.isArray(saved) ? saved : []);
  } catch {
    return new Set();
  }
}

function setVocabularyKnown(id, isKnown) {
  const known = getKnownVocabulary();
  if (isKnown) known.add(id);
  else known.delete(id);
  try {
    localStorage.setItem(knownVocabularyStorageKey, JSON.stringify([...known]));
  } catch {
    return;
  }
}

function getVocabularyCards(level, topic) {
  const units = topic === 'quick'
    ? topicUnits[level]
    : [topicUnits[level][topic]];
  return units.flatMap((unit, unitIndex) => unit.vocabulary.map((entry, wordIndex) => {
    const separator = entry.indexOf(' — ');
    return {
      id: `${level}-${unitIndex}-${wordIndex}`,
      term: separator < 0 ? entry : entry.slice(0, separator),
      meaning: separator < 0 ? '' : entry.slice(separator + 3),
      topic: unit.title
    };
  }));
}

function renderVocabularyActivity() {
  const cards = getVocabularyCards(currentLevel, currentTopic);
  currentVocabularyIndex %= cards.length;
  const card = cards[currentVocabularyIndex];
  const known = getKnownVocabulary();
  const knownCount = cards.filter((word) => known.has(word.id)).length;

  activityContent.innerHTML = `
    <article class="vocabulary-flashcard" data-vocab-id="${card.id}">
      <div class="flashcard-topline"><span class="exercise-label">AUSTRIAN GERMAN · ${card.topic.toUpperCase()}</span><span class="flashcard-count">${currentVocabularyIndex + 1} / ${cards.length}</span></div>
      <p class="flashcard-term" lang="de-AT">${card.term}</p>
      <div class="flashcard-meaning" data-vocab-meaning ${vocabularyMeaningVisible ? '' : 'hidden'}><p>${card.meaning}</p></div>
      <div class="flashcard-actions"><button class="secondary-action" type="button" data-vocab-action="reveal">${vocabularyMeaningVisible ? 'Hide meaning' : 'Show meaning'}</button></div>
      <label class="vocabulary-known"><input type="checkbox" data-vocab-known ${known.has(card.id) ? 'checked' : ''}><span>I know this word</span></label>
      <div class="flashcard-footer"><span class="flashcard-progress">${knownCount} of ${cards.length} known</span><button class="primary-action" type="button" data-vocab-action="next">Next card <span aria-hidden="true">→</span></button></div>
    </article>`;
}

function renderTopicUnit(unit, unitIndex, skill) {
  let exercises;
  if (skill === 'reading') exercises = renderTopicReading(unit, unitIndex);
  else if (skill === 'grammar') exercises = renderTopicGrammar(unit, unitIndex);
  else exercises = unit.examples.map((example, exerciseIndex) => renderTopicExercise(skill, unit, example, unitIndex, exerciseIndex)).join('');

  return `
    <div>
      <div class="course-focus">
        <div><strong>WORDS</strong><p>${unit.vocabulary.join(' · ')}</p></div>
        <div><strong>GRAMMAR</strong><p>${unit.grammar}</p></div>
      </div>
      <div class="course-exercises ${skill === 'reading' ? 'reading-course-exercises' : ''} ${skill === 'grammar' ? 'grammar-course-exercises' : ''}">${exercises}</div>
    </div>`;
}

function renderActivity() {
  const units = topicUnits[currentLevel];
  activityLevel.textContent = currentLevel;
  activityTag.textContent = currentTopic === 'quick' ? skillLabels[currentSkill] : `${currentSkill.toUpperCase()} · TOPIC PRACTICE`;
  if (activityIcon) activityIcon.textContent = skillIcons[currentSkill] || '↗';
  levelGoal.textContent = levelInfo[currentLevel].goal;
  activityContent.className = 'activity-enter';

  // Keep sidebar items synced
  document.querySelectorAll('.skill-item').forEach((item) => {
    const isCurrent = item.dataset.skillItem === currentSkill;
    item.classList.toggle('is-active', isCurrent);
    const btn = item.querySelector('.skill-tab');
    if (btn) {
      btn.classList.toggle('is-active', isCurrent);
      btn.setAttribute('aria-pressed', String(isCurrent));
    }
  });

  syncTopicSelectors();

  if (currentSkill === 'vocabulary') {
    renderVocabularyActivity();
    return;
  }

  // Mode: Single topic
  if (typeof currentTopic === 'number' && units[currentTopic]) {
    activityContent.innerHTML = renderTopicUnit(units[currentTopic], currentTopic, currentSkill);
    return;
  }

  // Mode: Quick practice (default)
  const activityList = getQuickActivityList(currentLevel, currentSkill);
  const item = activityList[currentActivityIndex % activityList.length];

  if (currentSkill === 'speaking') {
    activityContent.innerHTML = `
      <h2 class="activity-title">${item.title}</h2>
      <p class="activity-description">${item.description}</p>
      <div class="prompt-card">
        <p class="prompt-overline">YOUR PART</p>
        <p class="prompt-text" lang="de-AT">${item.prompt}</p>
        <p class="prompt-support">${item.support}</p>
      </div>
      <label class="field-label" for="spoken-response">Your spoken response <span>Transcript appears here when speech recognition is available.</span></label>
      <textarea class="answer-field" id="spoken-response" lang="de-AT" placeholder="Speak, or type what you would say…"></textarea>
      <div class="activity-actions">
        <button class="primary-action" type="button" data-action="speak"><span aria-hidden="true">◉</span> Start speaking</button>
        <button class="secondary-action" type="button" data-action="model">Show model answer</button>
        <button class="secondary-action" type="button" data-action="next">New scenario <span aria-hidden="true">→</span></button>
      </div>
      <p class="activity-status" id="activity-status" role="status">Speech recognition depends on browser support and microphone permission. This app does not score accent or pronunciation.</p>
      <div class="model-answer" id="model-answer" hidden>
        <strong>A possible answer · not the only answer</strong>
        <p lang="de-AT">${item.model}</p>
      </div>`;
    return;
  }

  if (currentSkill === 'listening') {
    activityContent.innerHTML = `
      <h2 class="activity-title">${item.title}</h2>
      <p class="activity-description">${item.description}</p>
      <div class="prompt-card">
        <p class="prompt-overline">AUDIO PRACTICE · AUSTRIAN GERMAN</p>
        <p class="prompt-text">Listen for the key detail.</p>
        <p class="prompt-support">Audio is generated with your browser’s German voice. Voice availability varies by device.</p>
      </div>
      <div class="activity-actions">
        <button class="primary-action" type="button" data-action="listen"><span aria-hidden="true">▶</span> Play audio</button>
        <button class="secondary-action" type="button" data-action="transcript">Show transcript</button>
      </div>
      <div class="transcript-box" id="transcript-box" hidden>
        <strong>Original practice dialogue</strong>
        <p lang="de-AT">${item.text}</p>
      </div>
      ${renderChoices(item)}
      <div class="activity-actions">
        <button class="secondary-action" type="button" data-action="check">Check answer</button>
        <button class="secondary-action" type="button" data-action="next">Another listening <span aria-hidden="true">→</span></button>
      </div>
      <p class="activity-status" id="activity-status" role="status"></p>`;
    return;
  }

  if (currentSkill === 'reading') {
    activityContent.innerHTML = `
      <h2 class="activity-title">${item.title}</h2>
      <p class="activity-description">${item.description}</p>
      <div class="prompt-card reading-text">
        <p class="prompt-overline">${item.questions ? `GOETHE-STYLE READING · ${item.type.toUpperCase()}` : 'READ THE ORIGINAL TEXT'}</p>
        <p class="reading-copy" lang="de-AT">${item.text}</p>
      </div>
      ${renderReadingQuestions(item)}
      <div class="activity-actions">
        <button class="primary-action" type="button" data-action="check">Check answer</button>
        <button class="secondary-action" type="button" data-action="next">Another reading <span aria-hidden="true">→</span></button>
      </div>
      <p class="activity-status" id="activity-status" role="status"></p>`;
    return;
  }

  if (currentSkill === 'grammar') {
    activityContent.innerHTML = `
      <h2 class="activity-title">${item.title}</h2>
      <p class="activity-description">${item.description}</p>
      <p class="bank-note">Original practice organized by CEFR grammar progression; not official Goethe exam material.</p>
      <section class="level-guide grammar-guide" aria-labelledby="level-guide-title">
        <div class="level-guide-heading">
          <div><p class="section-kicker">LEVEL CHECKLIST</p><h3 class="level-guide-title" id="level-guide-title"></h3></div>
          <a class="guide-link" id="goethe-training-link" target="_blank" rel="noopener noreferrer">Official Goethe practice <span aria-hidden="true">↗</span></a>
        </div>
        <div class="level-guide-sections" id="level-guide-sections"></div>
        <p class="guide-note">Topic and grammar checklists are study guides, not exhaustive official syllabuses. Goethe’s linked exam training provides level-specific tasks and materials.</p>
      </section>
      <div class="prompt-card grammar-card">
        <p class="prompt-overline">${item.source}</p>
        <p class="prompt-text" lang="de-AT">${item.phrase}</p>
        <p class="prompt-support">${item.meaning}</p>
        <div class="grammar-example"><strong>Example</strong><span lang="de-AT">${item.example}</span></div>
      </div>
      ${renderChoices(item)}
      <div class="activity-actions">
        <button class="primary-action" type="button" data-action="check">Check answer</button>
        <button class="secondary-action" type="button" data-action="next">Next phrase <span aria-hidden="true">→</span></button>
      </div>
      <p class="activity-status" id="activity-status" role="status"></p>
      <div class="grammar-explanation" id="grammar-explanation" hidden>
        <strong>Why it works</strong>
        <p>${item.explanation}</p>
      </div>`;
    renderLevelGuide();
    return;
  }

  // Writing
  activityContent.innerHTML = `
    <h2 class="activity-title">${item.title}</h2>
    <p class="activity-description">${item.description}</p>
    <div class="prompt-card">
      <p class="prompt-overline">YOUR WRITING PROMPT</p>
      <p class="prompt-text" lang="de-AT">${item.prompt}</p>
    </div>
    <label class="field-label" for="writing-response">Write in German <span>Drafts stay in this page and are not saved.</span></label>
    <textarea class="answer-field writing-field" id="writing-response" lang="de-AT" placeholder="Dein Text beginnt hier …"></textarea>
    <div class="writing-meta"><span id="word-count">0 words</span><span>Suggested minimum: ${item.minWords} words</span></div>
    <div class="writing-checklist">${item.focus.map((focus) => `<span class="writing-chip">${focus}</span>`).join('')}</div>
    <div class="activity-actions">
      <button class="primary-action" type="button" data-action="writing-check">Check writing goals</button>
      <button class="secondary-action" type="button" data-action="sample">Show sample</button>
      <button class="secondary-action" type="button" data-action="next">New prompt <span aria-hidden="true">→</span></button>
    </div>
    <p class="activity-status" id="activity-status" role="status">Checks length only; it does not automatically grade grammar or style.</p>
    <div class="sample-answer" id="sample-answer" hidden>
      <strong>Original sample answer</strong>
      <p lang="de-AT">${item.sample}</p>
    </div>`;
}

function renderChoices(item, groupName = 'choice') {
  return `
    <fieldset class="choice-list">
      <legend>${item.question}</legend>
      ${item.options.map((option, index) => `<label class="choice-option"><input type="radio" name="${groupName}" value="${index}"><span>${option}</span></label>`).join('')}
    </fieldset>`;
}

function renderReadingQuestions(item) {
  if (!item.questions) return renderChoices(item);
  return `<div class="exam-question-list">${item.questions.map((question, questionIndex) => `
    <fieldset class="choice-list">
      <legend>${questionIndex + 1}. ${question.question}</legend>
      ${question.options.map((option, optionIndex) => `<label class="choice-option"><input type="radio" name="exam-reading-${currentLevel}-${currentActivityIndex}-${questionIndex}" value="${optionIndex}"><span>${option}</span></label>`).join('')}
    </fieldset>`).join('')}</div>`;
}

function renderLevelGuide() {
  const levelGuideTitle = document.querySelector('#level-guide-title');
  const levelGuideSections = document.querySelector('#level-guide-sections');
  const goetheTrainingLink = document.querySelector('#goethe-training-link');
  if (!levelGuideTitle || !levelGuideSections || !goetheTrainingLink) return;
  const guide = levelGuides[currentLevel];
  levelGuideTitle.textContent = `${guide.title} study guide`;
  goetheTrainingLink.href = guide.link;
  goetheTrainingLink.innerHTML = `${guide.hasOfficialWordList ? 'Goethe word list + exam practice' : 'Official Goethe exam practice'} <span aria-hidden="true">↗</span>`;
  const sections = [
    ['Vocabulary & themes', guide.vocabulary],
    ['Grammar checklist', guide.grammar],
    ['Communication goals', guide.goals],
    ['Goethe exam modules', guide.exam]
  ];
  levelGuideSections.innerHTML = sections.map(([title, items]) => `
    <details class="guide-item">
      <summary><span>${title}</span><span class="guide-count">${items.length} topics</span></summary>
      <ul class="guide-list">${items.map((it) => `<li>${it}</li>`).join('')}</ul>
    </details>`).join('');
}

function renderVideoExercise() {
  const exercises = videoExercises[currentLevel].filter((exercise) => currentVideoSource === 'bauer'
    ? exercise.source.startsWith('EVERYDAY AUSTRIAN')
    : !exercise.source.startsWith('EVERYDAY AUSTRIAN'));
  const exercise = exercises[currentVideoExerciseIndex % exercises.length];
  document.querySelector('#lab-level').textContent = currentLevel;
  document.querySelector('#lab-level-badge').textContent = currentLevel;
  document.querySelector('#lab-count').textContent = `${currentVideoExerciseIndex + 1} / ${exercises.length}`;
  document.querySelector('#lab-register').textContent = exercise.source;
  document.querySelector('#lab-title').textContent = exercise.title;
  document.querySelector('#lab-description').textContent = exercise.description;
  document.querySelector('#lab-phrase').textContent = exercise.phrase;
  document.querySelector('#lab-meaning').textContent = exercise.meaning;
  document.querySelector('#lab-example').textContent = exercise.example;
  document.querySelector('#lab-explanation-text').textContent = exercise.explanation;
  labChoices.innerHTML = renderChoices(exercise, 'lab-choice');
  labStatus.textContent = '';
  labStatus.className = 'activity-status';
  labExplanation.hidden = true;
}

function setStatus(message, kind = '') {
  const status = document.querySelector('#activity-status');
  if (!status) return;
  status.textContent = message;
  status.className = `activity-status${kind ? ` is-${kind}` : ''}`;
}

function stopRecognition() {
  if (!recognition) return;
  const activeRecognition = recognition;
  recognition = null;
  activeRecognition.stop();
  if (activeSpeakButton) {
    activeSpeakButton.innerHTML = '<span aria-hidden="true">◉</span> Start speaking';
    activeSpeakButton = null;
  }
}

function startSpeaking(responseTarget = null, triggerBtn = null) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const responseField = responseTarget || document.querySelector('#spoken-response');
  const btn = triggerBtn || activityContent.querySelector('[data-action="speak"]');

  if (!SpeechRecognition) {
    setStatus('Speech-to-text is not supported in this browser. You can still answer aloud and type a reflection.', 'warning');
    return;
  }
  if (recognition) {
    stopRecognition();
    setStatus('Speaking stopped. Review your transcript, then compare with the model answer.');
    return;
  }

  const activeRecognition = new SpeechRecognition();
  recognition = activeRecognition;
  activeSpeakButton = btn;
  activeRecognition.lang = 'de-AT';
  activeRecognition.interimResults = true;
  activeRecognition.continuous = true;
  activeRecognition.onresult = (event) => {
    if (!responseField || !responseField.isConnected || recognition !== activeRecognition) return;
    const transcript = Array.from(event.results).map((result) => result[0].transcript).join(' ');
    responseField.value = transcript;
  };
  activeRecognition.onerror = () => {
    if (recognition === activeRecognition) {
      recognition = null;
      if (activeSpeakButton) {
        activeSpeakButton.innerHTML = '<span aria-hidden="true">◉</span> Start speaking';
        activeSpeakButton = null;
      }
      setStatus('Microphone access or speech recognition failed. Check browser permission and try again.', 'warning');
    }
  };
  activeRecognition.onend = () => {
    if (recognition === activeRecognition) {
      recognition = null;
      if (activeSpeakButton) {
        activeSpeakButton.innerHTML = '<span aria-hidden="true">◉</span> Start speaking';
        activeSpeakButton = null;
      }
      setStatus('Speaking stopped. Review your transcript, then compare with the model answer.');
    }
  };
  try {
    activeRecognition.start();
    setStatus('Listening… speak in Austrian German. Select “Stop speaking” when you’re done.');
    if (activeSpeakButton) activeSpeakButton.innerHTML = '<span aria-hidden="true">■</span> Stop speaking';
  } catch {
    recognition = null;
    if (activeSpeakButton) {
      activeSpeakButton.innerHTML = '<span aria-hidden="true">◉</span> Start speaking';
      activeSpeakButton = null;
    }
    setStatus('Could not start the microphone. Check browser permission and try again.', 'warning');
  }
}

function playAudio() {
  if (!('speechSynthesis' in window)) {
    setStatus('Audio playback is not available in this browser.', 'warning');
    return;
  }
  const item = activities[currentLevel].listening[currentActivityIndex % activities[currentLevel].listening.length];
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(item.text);
  const voices = window.speechSynthesis.getVoices();
  utterance.lang = 'de-AT';
  utterance.voice = voices.find((voice) => voice.lang.toLowerCase() === 'de-at') || voices.find((voice) => voice.lang.toLowerCase().startsWith('de')) || null;
  utterance.onend = () => setStatus('Audio finished. Choose the answer that best matches what you heard.');
  window.speechSynthesis.speak(utterance);
  setStatus('Playing audio… listen for the key detail.');
}

function speakGerman(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  utterance.lang = 'de-AT';
  utterance.voice = voices.find((voice) => voice.lang.toLowerCase() === 'de-at') || voices.find((voice) => voice.lang.toLowerCase().startsWith('de')) || null;
  window.speechSynthesis.speak(utterance);
}

// Level switcher
document.querySelectorAll('[data-level]').forEach((button) => {
  button.addEventListener('click', () => {
    stopRecognition();
    currentLevel = button.dataset.level;
    currentTopic = 'quick';
    currentActivityIndex = 0;
    currentVocabularyIndex = 0;
    vocabularyMeaningVisible = false;
    document.querySelectorAll('[data-level]').forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-pressed', String(active));
    });
    levelCaption.textContent = levelInfo[currentLevel].label;
    renderActivity();
    currentVideoExerciseIndex = 0;
    renderVideoExercise();
  });
});

// Skill switcher (left tabs)
document.querySelectorAll('[data-skill]').forEach((button) => {
  button.addEventListener('click', () => {
    stopRecognition();
    currentSkill = button.dataset.skill;
    currentTopic = 'quick';
    currentActivityIndex = 0;
    currentVocabularyIndex = 0;
    vocabularyMeaningVisible = false;
    renderActivity();
  });
});

// Topic / Section switcher (from left sidebar tab dropdowns)
document.querySelectorAll('.skill-dropdown-select').forEach((select) => {
  select.addEventListener('change', (event) => {
    stopRecognition();
    const val = event.target.value;
    if (select.dataset.tabSelect) {
      currentSkill = select.dataset.tabSelect;
    }
    currentTopic = val === 'quick' ? 'quick' : Number(val);
    currentActivityIndex = 0;
    currentVocabularyIndex = 0;
    vocabularyMeaningVisible = false;
    renderActivity();
  });
});

// Topic / Section switcher (from panel bar dropdown)
if (panelTopicSelect) {
  panelTopicSelect.addEventListener('change', (event) => {
    stopRecognition();
    const val = event.target.value;
    currentTopic = val === 'quick' ? 'quick' : Number(val);
    currentActivityIndex = 0;
    currentVocabularyIndex = 0;
    vocabularyMeaningVisible = false;
    renderActivity();
  });
}

// Activity content interaction events
activityContent.addEventListener('input', (event) => {
  if (event.target.matches('[data-topic-response]')) {
    const count = event.target.value.trim().split(/\s+/).filter(Boolean).length;
    const counter = event.target.closest('[data-course-card]').querySelector('[data-course-word-count]');
    if (counter) counter.textContent = `${count} ${count === 1 ? 'word' : 'words'}`;
    return;
  }
  if (event.target.id === 'writing-response') {
    const count = event.target.value.trim().split(/\s+/).filter(Boolean).length;
    const wordCountEl = document.querySelector('#word-count');
    if (wordCountEl) wordCountEl.textContent = `${count} ${count === 1 ? 'word' : 'words'}`;
  }
});

activityContent.addEventListener('change', (event) => {
  if (!event.target.matches('[data-vocab-known]')) return;
  const card = event.target.closest('.vocabulary-flashcard');
  setVocabularyKnown(card.dataset.vocabId, event.target.checked);
  const cards = getVocabularyCards(currentLevel, currentTopic);
  const known = getKnownVocabulary();
  card.querySelector('.flashcard-progress').textContent = `${cards.filter((word) => known.has(word.id)).length} of ${cards.length} known`;
});

activityContent.addEventListener('click', (event) => {
  const vocabularyButton = event.target.closest('[data-vocab-action]');
  if (vocabularyButton) {
    if (vocabularyButton.dataset.vocabAction === 'reveal') {
      vocabularyMeaningVisible = !vocabularyMeaningVisible;
      activityContent.querySelector('[data-vocab-meaning]').hidden = !vocabularyMeaningVisible;
      vocabularyButton.textContent = vocabularyMeaningVisible ? 'Hide meaning' : 'Show meaning';
    }
    if (vocabularyButton.dataset.vocabAction === 'next') {
      const cards = getVocabularyCards(currentLevel, currentTopic);
      currentVocabularyIndex = (currentVocabularyIndex + 1) % cards.length;
      vocabularyMeaningVisible = false;
      renderActivity();
    }
    return;
  }

  // Topic exercise action buttons
  const courseBtn = event.target.closest('[data-course-action]');
  if (courseBtn) {
    const card = courseBtn.closest('[data-course-card]');
    const unit = topicUnits[currentLevel][Number(card.dataset.unit)];
    const status = card.querySelector('.course-status');

    if (courseBtn.dataset.courseAction === 'check-reading') {
      const task = courseBtn.closest('[data-reading-question]');
      const taskStatus = task ? task.querySelector('.course-status') : status;
      const questionIndex = Number(courseBtn.dataset.question);
      const question = topicReadingPacks[currentLevel][Number(card.dataset.unit)].questions[questionIndex];
      const selected = task.querySelector('input[type="radio"]:checked');
      if (!selected) {
        taskStatus.textContent = 'Choose an answer first.';
        taskStatus.className = 'activity-status course-status is-warning';
      } else if (Number(selected.value) === Number(task.dataset.answer)) {
        taskStatus.textContent = 'Correct. Nice work.';
        taskStatus.className = 'activity-status course-status is-success';
      } else {
        taskStatus.textContent = `Not quite. Correct: ${question.options[question.answer]}`;
        taskStatus.className = 'activity-status course-status is-warning';
      }
      return;
    }

    if (courseBtn.dataset.courseAction === 'check-grammar') {
      const check = topicGrammarChecks[currentLevel][Number(card.dataset.unit)];
      const selected = card.querySelector('input[type="radio"]:checked');
      if (!selected) {
        status.textContent = 'Choose an answer first.';
        status.className = 'activity-status course-status is-warning';
      } else if (Number(selected.value) === Number(card.dataset.answer)) {
        status.textContent = 'Correct. Nice work.';
        status.className = 'activity-status course-status is-success';
      } else {
        status.textContent = `Not quite. Correct: ${check.options[check.answer]}`;
        status.className = 'activity-status course-status is-warning';
      }
      return;
    }

    const example = unit.examples[Number(card.dataset.exercise)];

    if (courseBtn.dataset.courseAction === 'speak') {
      startSpeaking(card.querySelector('[data-topic-response]'), courseBtn);
    }
    if (courseBtn.dataset.courseAction === 'hear-model' || courseBtn.dataset.courseAction === 'hear') {
      speakGerman(example.german);
    }
    if (courseBtn.dataset.courseAction === 'check') {
      const selected = card.querySelector('input[type="radio"]:checked');
      const correct = Array.from(card.querySelectorAll('input[type="radio"]')).find((opt) => opt.nextElementSibling.textContent.trim() === example.english);
      if (!selected) {
        status.textContent = 'Choose an answer first.';
        status.className = 'activity-status course-status is-warning';
      } else if (selected === correct) {
        status.textContent = 'Correct. Nice work.';
        status.className = 'activity-status course-status is-success';
      } else {
        status.textContent = `Not quite. Correct: ${example.english}`;
        status.className = 'activity-status course-status is-warning';
      }
    }
    if (courseBtn.dataset.courseAction === 'check-writing') {
      const text = card.querySelector('[data-topic-response]').value.trim();
      const count = text.split(/\s+/).filter(Boolean).length;
      const minimum = { A1: 4, A2: 6, B1: 8, B2: 10, C1: 12, C2: 14 }[currentLevel] || 8;
      status.textContent = count >= minimum
        ? `Good length: ${count} words. Review the grammar focus and compare with the sample.`
        : `${count} words so far. Add ${minimum - count} more to reach the suggested length.`;
      status.className = `activity-status course-status${count >= minimum ? ' is-success' : ' is-warning'}`;
    }
    return;
  }

  // Quick practice action buttons
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const action = button.dataset.action;
  const activityList = getQuickActivityList(currentLevel, currentSkill);
  const item = activityList[currentActivityIndex % activityList.length];

  if (action === 'speak') startSpeaking();
  if (action === 'model') {
    const model = document.querySelector('#model-answer');
    if (model) {
      model.hidden = !model.hidden;
      button.textContent = model.hidden ? 'Show model answer' : 'Hide model answer';
    }
  }
  if (action === 'listen') playAudio();
  if (action === 'transcript') {
    const transcript = document.querySelector('#transcript-box');
    if (transcript) {
      transcript.hidden = !transcript.hidden;
      button.textContent = transcript.hidden ? 'Show transcript' : 'Hide transcript';
    }
  }
  if (action === 'check') {
    const selected = activityContent.querySelector('input[name="choice"]:checked');
    if (!selected) {
      setStatus('Choose an answer first.', 'warning');
      return;
    }
    const isCorrect = Number(selected.value) === item.answer;
    setStatus(isCorrect ? 'Correct. Nice work.' : `Not quite. ${item.options[item.answer]}.`, isCorrect ? 'success' : 'warning');
    if (currentSkill === 'grammar') {
      const exp = document.querySelector('#grammar-explanation');
      if (exp) exp.hidden = false;
    }
  }
  if (action === 'writing-check') {
    const text = (document.querySelector('#writing-response')?.value || '').trim();
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const minimum = item.minWords;
    setStatus(wordCount >= minimum
      ? `Good length: ${wordCount} words. Now check your grammar, word order, and the focus points above.`
      : `${wordCount} words so far. Add ${minimum - wordCount} more to reach the suggested length, then review the focus points.`,
      wordCount >= minimum ? 'success' : 'warning');
  }
  if (action === 'sample') {
    const sample = document.querySelector('#sample-answer');
    if (sample) {
      sample.hidden = !sample.hidden;
      button.textContent = sample.hidden ? 'Show sample' : 'Hide sample';
    }
  }
  if (action === 'next') {
    stopRecognition();
    currentActivityIndex += 1;
    renderActivity();
  }
});

// Video section events
document.querySelectorAll('[data-lab-source]').forEach((button) => {
  button.addEventListener('click', () => {
    currentVideoSource = button.dataset.labSource;
    currentVideoExerciseIndex = 0;
    document.querySelectorAll('[data-lab-source]').forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-pressed', String(active));
    });
    renderVideoExercise();
  });
});

document.querySelector('#video-lab')?.addEventListener('click', (event) => {
  const button = event.target.closest('[data-lab-action]');
  if (!button) return;
  const exercises = videoExercises[currentLevel].filter((exercise) => currentVideoSource === 'bauer'
    ? exercise.source.startsWith('EVERYDAY AUSTRIAN')
    : !exercise.source.startsWith('EVERYDAY AUSTRIAN'));
  const exercise = exercises[currentVideoExerciseIndex % exercises.length];

  if (button.dataset.labAction === 'next') {
    currentVideoExerciseIndex = (currentVideoExerciseIndex + 1) % exercises.length;
    renderVideoExercise();
    return;
  }

  const selected = labChoices.querySelector('input[name="lab-choice"]:checked');
  if (!selected) {
    labStatus.textContent = 'Choose an answer first.';
    labStatus.className = 'activity-status is-warning';
    return;
  }
  const isCorrect = Number(selected.value) === exercise.answer;
  labStatus.textContent = isCorrect ? 'Correct. Nice work.' : `Not quite. ${exercise.options[exercise.answer]}.`;
  labStatus.className = `activity-status is-${isCorrect ? 'success' : 'warning'}`;
  labExplanation.hidden = false;
});

// Initial boot
levelCaption.textContent = levelInfo[currentLevel].label;
renderActivity();
renderVideoExercise();
