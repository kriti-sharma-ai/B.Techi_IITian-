import type { QualifierMock, QualifierQuestion } from "../types";

// English I previous-year qualifier papers (IIT Madras BS, Foundation).
// Questions, options and answer keys are reproduced as they appear in the official
// question papers. Listening (audio) questions are left out because the papers do not
// include the audio clips. Generated from the paper PDFs; edit with care.

const q = (id: string, marks: number, prompt: string, options: string[], answer: number | number[], extra?: Partial<QualifierQuestion>): QualifierQuestion => ({
  id, type: Array.isArray(answer) ? "multi" : "mcq", marks, prompt, options, answer, explanation: "", ...extra,
});

const MAY23_P1 = "Read the following passage and answer the given subquestions.\nWe all seek happiness but few, very few, indeed, get it. We are unhappy partly because we desire much more than what we can hope to attain. Our countless desires are hard to satisfy. And that is what makes us so sad in life.\nThe secret of happiness lies in the simplification of life. Simple living encourages high thinking. It leads to contentment. Contentment gives us inner wealth, the wealth of the mind and of the soul. A contented man devotes himself to virtues like truth, beauty, love, goodness, kindness, and charity. By pursuing and inculcating their virtues, a man can feel true happiness.\nI do not mean that for simplification of life, a man should become an ascetic. The happiness of sadhu is of a negative kind. I want a positive kind of happiness. For this, I must live in the midst of life, faithfully carrying out my responsibilities to my home and my country. But all of this should be done in the spirit of selfless service. A man who wants to lead a happy life, should also make others happy. In making others happy, he will taste real and lasting happiness. There is a kind of joy in serving others with virtuous motives, in sacrificing what one has for the good of others. An act of goodness is in itself an act of happiness.\nThe secret of perfect happiness lies in renunciation. Wealth may give us joy for a while and fame may provide us with fleeting excitement. But they cannot give us permanent happiness. Kings have everything to make them happy and yet they feel unhappy. It is because they do not practice renunciation.\nThere is a sense of joy in doing one’s work honestly and efficiently. A research-worker feels joy in conducting research while a journalist in writing. In doing one’s duty sincerely, one feels a peace of mind, which is an important essence of happiness.\nIt is only by cultivating a spirit of renunciation, self-sacrifice, contentment, and sincere work that one can really be happy. The strings of misfortune spare none, but they will not cow such a person.";

const MAY23_P2 = "Match Column A with suitable options in Column B. (Hint: Word collocation)\nColumn A: 1. Land · 2. Moral · 3. Final · 4. Weather · 5. Unanimous\nColumn B: a) Forecast · b) Decision · c) Acquisition · d) Blow · e) Decay";

const MAY23_P3 = "Read the following telephonic conversation and fill in the blank with appropriate responses:\nHarilal: Hello! Is this Nirjeevani Hospital?\nReceptionist: Yes. (i) ______________\nHarilal: I wanted to know if Dr. Arundhati will be available for consultation.\nReceptionist: Yes Ma’am. (ii) ____________ book an appointment?\nHarilal: Yes, I want to book an appointment\nReceptionist: Please tell me your name and age. Hello! (iii) _____________\n(The call gets disconnected)\nHarilal: Hello!\nReceptionist: Hello! Nirjeevani Hospital.\nHarilal: The call got (iv) _____________. My name is Harilal Khan and I am 35 years old.\nReceptionist: Could you please (v) ____________\nHarilal: Harilal Khan, 35 years.\nReceptionist: Alright. Please be here by 10: 00 a.m. Thank you!";

const SEP23_P1 = "Read the following passage and answer the given subquestions.\nWhen I first visited Gandhi in 1942 at his ashram in Sevagram, in central India, he said, “I will tell you how it happened that I decided to urge the departure of the British. It was in 1917.”\nHe had gone to the December 1916 annual convention of the Indian National Congress party in Lucknow. There were 2,301 delegates and many visitors. \"During the proceedings,\" Gandhi recounted, “a peasant came up to me looking like any other peasant in India, poor and emaciated, and said, ‘I am Rajkumar Shukla. I am from Champaran, and I want you to come to my district’!’’ Gandhi had never heard of the place. It was in the foothills of the towering Himalayas, near the kingdom of Nepal.\nUnder an ancient arrangement, the Champaran peasants were sharecroppers. Rajkumar Shukla was one of them. He was illiterate but resolute. He had come to the Congress session to complain about the injustice of the landlord system in Bihar, and somebody had probably said, “Speak to Gandhi.”\nGandhi told Shukla he had an appointment in Cawnpore and was also committed to go to other parts of India. Shukla accompanied him everywhere. Then Gandhi returned to his ashram near Ahmedabad. Shukla followed him to the ashram. For weeks he never left Gandhi’s side.\n“Fix a date,” he begged.\nImpressed by the sharecropper’s tenacity and story Gandhi said, ‘‘I have to be in Calcutta on such-and-such a date. Come and meet me and take me from there.” Months passed. Shukla was sitting on his haunches at the appointed spot in Calcutta when Gandhi arrived; he waited till Gandhi was free. Then the two of them boarded a train for the city of Patna in Bihar. There Shukla led him to the house of a lawyer named Rajendra Prasad who later became President of the Congress party and of India. Rajendra Prasad was out of town, but the servants knew Shukla as a poor yeoman who pestered their master to help the indigo sharecroppers. So they let him stay on the grounds with his companion, Gandhi, whom they took to be another peasant. But Gandhi was not permitted to draw water from the well lest some drops from his bucket pollute the entire source; how did they know that he was not an untouchable?\nGandhi decided to go first to Muzzafarpur, which was en route to Champaran, to obtain more complete information about conditions than Shukla was capable of imparting. He accordingly sent a telegram to Professor J.B. Kripalani, of the Arts College in Muzzafarpur, whom he had seen at Tagore’s Shantiniketan school. The train arrived at midnight, 15 April 1917. Kripalani was waiting at the station with a large body of students. Gandhi stayed there for two days in the home of Professor Malkani, a teacher in a government school.\n- Indigo - Louis Fischer";

const SEP23_P2 = "Read the following telephonic conversation and fill in the blanks with appropriate responses and answer the given subquestions:\nSister: Hi bro, how are you doing?\nBrother: Hey sis, (i)_____________________. How about you?\nSister: (ii)_________________. How is your preparation for exams going on?\nBrother: Good, but I am really scared for my exams.\nSister:(iii)_______________\nBrother: Because I think I am still lacking somewhere.\nSister: Don’t worry dear. You still have a month. You will do a better job!\nBrother: (iv)_______________________. But I think I need more guidance.\nSister: For that, you can take coaching from the best institute which will help and guide you.\nBrother: Yeah, this seems like the perfect idea. (v)______________________\nSister: There is a good coaching institute. It is called Genius Plus. Try to contact them.\nBrother: Thank you, I will contact them immediately.";

const SEP23_P3 = "Match Column A with suitable options in Column B. (Hint: Word collocation)\nColumn A: 1. Sports · 2. Library · 3. Garden · 4. Job · 5. Fishing\nColumn B: a. Card · b. Offer · c. Equipment · d. Rod · e. Hose";

const JAN24_P1 = "Read the following passage and answer the given subquestions.\nThese stories are all from the Andaman and Nicobar archipelago.\nIgnesious was the manager of a cooperative society in Katchall. His wife woke him up at 6 a.m. because she felt an earthquake. Ignesious carefully took his television set off its table and put it down on the ground so that it would not fall and break. Then the family rushed out of the house.\nWhen the tremors stopped, they saw the sea rising. In the chaos and confusion, two of his children caught hold of the hands of their mother’s father and mother’s brother, and rushed in the opposite direction. He never saw them again. His wife was also swept away. Only the three other children who came with him were saved.\nSanjeev was a policeman, serving in the Katchall island of the Nicobar group of islands. He somehow managed to save himself, his wife and his baby daughter from the waves. But then he heard cries for help from the wife of John, the guesthouse cook. Sanjeev jumped into the water to rescue her, but they were both swept away.\nThirteen year-old Meghna was swept away along with her parents and seventy-seven other people. She spent two days floating in the sea, holding on to a wooden door. Eleven times she saw relief helicopters overhead, but they did not see her. She was brought to the shore by a wave, and was found walking on the seashore in a daze.\nAlmas Javed was ten years old. She was a student of Carmel Convent in Port Blair where her father had a petrol pump. Her mother Rahila’s home was in Nancowry island. The family had gone there to celebrate Christmas.\nWhen the tremors came early in the morning, the family was sleeping. Almas’s father saw the sea water recede. He understood that the water would come rushing back with great force. He woke everyone up and tried to rush them to a safer place.\nAs they ran, her grandfather was hit on the head by something and he fell down. Her father rushed to help him. Then came the first giant wave that swept both of them away.\nAlmas’s mother and aunts stood clinging to the leaves of a coconut tree, calling out to her. A wave uprooted the tree, and they too were washed away.\nAlmas saw a log of wood floating. She climbed on to it. Then she fainted. When she woke up, she was in a hospital in Kamorta. From there she was brought to Port Blair. The little girl does not want to talk about the incident with anyone. She is still traumatised.\nThe Tsunami - Sonali Deraniyagala";

const JAN24_P2 = "Match the words in List A with the correct synonyms in List B.\nList A: (i) Prove · (ii) Maladroit · (iii) Tired · (iv) Coach · (v) Coarse\nList B: (a) Wearied · (b) Counsel · (c) Gravelly · (d) Establish · (e) Clumsy";

const JAN24_P3 = "Read the following telephonic conversation and answer the given subquestions with appropriate responses:\nSamrat: Hello, Priya! How are you?\nPriya:(i)_______________, and you?\nSamrat: I am also fine. By the way, (ii)________________________\nPriya: A very good idea indeed. Let us fix up a date and a venue.\nSamrat: (iii)___________________________\nPriya: Oh, fine! Darjeeling is a very beautiful and historical place.\nSamrat: (iv)____________________\nPriya: Only your brothers and sisters and mine. When shall we start?\nSamrat: We shall start at 6 o'clock from our residence.\nPriya:(v)_____________________\nSamrat: Biriyani. Don't you like it?\nPriya: Of course, but we will cook our food ourselves.";

const MAY24_P1 = "Read the following passage and answer the given subquestions.\nUser traffic on Twitter has slowed since the launch of Meta’s text-based platform Threads, which has already surpassed 100 million sign-ups since its debut last week.\nThreads launched in the U.S. on Wednesday and is being touted by Meta executives like Instagram chief Adam Mosseri as a more positive “public square” for communities “that never really embraced Twitter.” So far, users seem to be on board.\n“Threads reached 100 million sign ups over the weekend. That’s mostly organic demand and we haven’t even turned on many promotions yet. Can’t believe it’s only been 5 days!” Meta CEO Mark Zuckerberg said in a post Monday.\nTwitter appears to have taken a hit. Matthew Prince, CEO of Cloudflare, shared a screenshot to Twitter Sunday showing that traffic on the platform was “tanking.”\nAccording to Similarweb, a data company that specializes in web analytics, web traffic to Twitter was down 5% for the first two full days. Threads was generally available compared with the previous week. The company said Twitter’s web traffic is down 11% compared with the same days in 2022.\nTwitter responded to CNBC’s request for comment with an automated response. Meta didn’t offer additional comment beyond Zuckerberg’s post.\nSource: cnbc.com - Twitter traffic is ‘tanking’ as Meta’s Threads hits 100 million users - Ashley Capoot";

const MAY24_P2 = "Match Column A with suitable options in Column B. (Hint: Word collocation)\nColumn A: 1. Bank · 2. Strong · 3. Lazy · 4. Short · 5. Ancient\nColumn B: a. Temper · b. Account · c. Ruins · d. Afternoon · e. Coffee";

const MAY24_P3 = "Read the following telephonic conversation and fill in the blanks with appropriate responses:\nJay – Hello? (i)__________________\nPrateek – Hello. Yes, I am Prateek Agarwal. (ii)__________________\nJay – Prateek, it’s me Jay Roy from college. Remember?\nPrateek – Hey Jay, (iii)_______________It has been such a long time.\nJay – I am doing good. Yes, four long years after college. I got your contact number from Piyush. (iv)________________\nPrateek – Yes, yes, I do remember him. Wasn’t he the one who topped our engineering batch last year?\nJay – Yes, that’s him! He’s in Boston working for a big MNC now.\nPrateek- (v)_____________";

export const englishPyqPapers: QualifierMock[] = [
  {
    slug: "english-1-may-2023",
    title: "English I · May 2023",
    description: "The May 2023 qualifier English I paper with the official answer key.",
    difficulty: "Standard",
    durationMin: 30,
    sections: [
      {
        subjectSlug: "english-1",
        title: "English I",
        short: "English I",
        questions: [
          q("en-may-2023-q18", 2, "What does a contented man do?", ["He encounters the strings of misfortunes.", "He gives up bad habits effortlessly.", "He boldly faces the adversities of life.", "He pursues and assimilates the basic virtues of life."], 3, { passage: MAY23_P1 }),
          q("en-may-2023-q19", 2, "Which of the following is the correct chain of things, as mentioned in the passage, leading to happiness?", ["High thinking, simple living, inner wealth, contentment", "Inner wealth, simple living, contentment, high thinking", "Simple living, high thinking, inner wealth, contentment", "Simple living, high thinking, contentment, inner wealth"], 3, { passage: MAY23_P1 }),
          q("en-may-2023-q20", 2, "According to the passage, the essence of happiness lies in ______", ["Avoiding all unfortunate events.", "Adopting a simple lifestyle.", "Matching one’s abilities with the work undertaken.", "Worldly desires."], 1, { passage: MAY23_P1 }),
          q("en-may-2023-q21", 2, "We are unhappy partly because ______", ["We have countless unfulfilled desires.", "Our lives have become extremely complicated.", "We have lost moral and spiritual values."], 0, { passage: MAY23_P1 }),
          q("en-may-2023-q22", 2, "Which of the following statements is NOT TRUE in the context of the passage?", ["Multiplicity of desires makes us unhappy.", "Making others happy makes one happy.", "Renunciation is the result of perfect happiness.", "One feels peace of mind in doing one’s duty sincerely."], 2, { passage: MAY23_P1 }),
          q("en-may-2023-q28", 1, "Which among the following words has a diphthong?", ["Bottle", "Boycott", "Bail", "Both Boycott and Bail"], 3),
          q("en-may-2023-q29", 1, "Which among the following carry the long vowel /uu/?", ["Through", "Blue", "Too", "Flew", "All of these"], 4),
          q("en-may-2023-q30", 1, "Two consonants next to one another within a syllable make a cluster.", ["TRUE", "FALSE"], 0),
          q("en-may-2023-q31", 1, "Which among the following is a word without a diphthong?", ["Loiter", "Stew", "Maiden"], 1),
          q("en-may-2023-q32", 1, "Which of the following is NOT an Abstract Noun?", ["Goodness", "Youth", "Poverty", "Parliament"], 3),
          q("en-may-2023-q33", 1, "Identify the noun in the following sentence:\nWorking hard can bring you success.", ["Working", "Hard", "Bring", "Success"], 3),
          q("en-may-2023-q34", 1, "Fill in the blank with the most appropriate interrogative pronoun.\n______ wrote ‘The Canterbury Tales’?", ["Whose", "How", "Who", "Which"], 2),
          q("en-may-2023-q35", 1, "Don’t ________me you’ve lost your keys again.", ["Say", "Tell", "Speak", "Inform"], 1),
          q("en-may-2023-q36", 1, "Fill in the blank with an appropriate verb.\nThe teacher, as well as the students, _______responsible for the agitation in the school campus.", ["Are", "Is", "Shall", "Were"], 1),
          q("en-may-2023-q37", 1, "Identify the part of speech the underlined word belongs to.\nShe yelled when she hit her toe.", ["Verb", "Noun", "Conjunction", "Adverb"], 0, { emphasis: "yelled" }),
          q("en-may-2023-q38", 1, "She has not read anything______ Monday.", ["For", "Since", "From", "Over"], 1),
          q("en-may-2023-q39", 1, "What will be the adverb form of ‘suitable’?", ["Suitabely", "Sitablly", "Suitably", "Suited"], 2),
          q("en-may-2023-q40", 1, "Please look_______ the matter carefully to investigate it properly.", ["On", "Into", "Under", "Against"], 1),
          q("en-may-2023-q41", 1, "I want to buy _____ laptop computer next week.", ["A", "An", "The", "No article"], 0),
          q("en-may-2023-q42", 1, "The culprit was _____ fined and punished.", ["Also", "And", "But", "Both"], 3),
          q("en-may-2023-q43", 1, "Identify the underlined part of the sentence.\nI came across some old books while tidying my room.", ["Separable phrasal verb", "In-separable phrasal verb"], 1, { emphasis: "came across" }),
          q("en-may-2023-q44", 1, "Fill in the blank with the appropriate option.\nThe meaning of the phrasal verb ‘wait on’ is _____________.", ["To return a phone call", "To save money", "To serve somebody", "To communicate successfully"], 2),
          q("en-may-2023-q45", 1, "Pick the right meaning of the following idiom:\nA dark horse", ["A person who is slightly eccentric", "A person who seems to be stupid", "An unexpected winner"], 2),
          q("en-may-2023-q46", 1, "Select true or false for the following statement:\nThe idiom ‘cut corners’ means ‘to do something in the fastest and the cheapest way’.", ["TRUE", "FALSE"], 0),
          q("en-may-2023-q47", 1, "Choose the correct option.\nSudha ________ speak Telugu.", ["Would", "Is", "May", "Can"], 3),
          q("en-may-2023-q48", 1, "Land ___", ["Forecast", "Decision", "Acquisition", "Blow", "Decay"], 2, { passage: MAY23_P2 }),
          q("en-may-2023-q49", 1, "Moral ___", ["Forecast", "Decision", "Acquisition", "Blow", "Decay"], 4, { passage: MAY23_P2 }),
          q("en-may-2023-q50", 1, "Final ___", ["Forecast", "Decision", "Acquisition", "Blow", "Decay"], 3, { passage: MAY23_P2 }),
          q("en-may-2023-q51", 1, "Weather ___", ["Forecast", "Decision", "Acquisition", "Blow", "Decay"], 0, { passage: MAY23_P2 }),
          q("en-may-2023-q52", 1, "Unanimous ____", ["Forecast", "Decision", "Acquisition", "Blow", "Decay"], 1, { passage: MAY23_P2 }),
          q("en-may-2023-q53", 1, "Complete blank (i) with an appropriate response.", ["How may I help you today?", "Who’s calling, please?", "Hello! Are you Narsimh?"], 0, { passage: MAY23_P3 }),
          q("en-may-2023-q54", 1, "Complete blank (ii) with an appropriate response.", ["Are we to", "Would you like to", "Will you"], 1, { passage: MAY23_P3 }),
          q("en-may-2023-q55", 1, "Complete blank (iii) with an appropriate response.", ["Please ring me later.", "Are you there?", "I will talk to you later."], 1, { passage: MAY23_P3 }),
          q("en-may-2023-q56", 1, "Which among the following expressions can complete blank (iv)?", ["Put off", "Called off", "Cut off"], 2, { passage: MAY23_P3 }),
          q("en-may-2023-q57", 1, "Which among the following expressions would complete blank (v)?", ["Speak up", "Speak out", "Call back"], 0, { passage: MAY23_P3 }),
        ],
      },
    ],
  },
  {
    slug: "english-1-sep-2023",
    title: "English I · September 2023",
    description: "The September 2023 qualifier English I paper with the official answer key.",
    difficulty: "Standard",
    durationMin: 30,
    sections: [
      {
        subjectSlug: "english-1",
        title: "English I",
        short: "English I",
        questions: [
          q("en-sep-2023-q18", 2, "Among the following words, choose the antonym for the word ‘tenacity’.", ["Persistence", "Determination", "Firmness", "Timidity"], 3, { passage: SEP23_P1 }),
          q("en-sep-2023-q19", 2, "What is the meaning of ‘yeoman’?", ["A farmer who owned and worked on his own land", "A person who is the owner of a house", "A person who lends money as a business", "A person who fits and repairs the pipes"], 0, { passage: SEP23_P1 }),
          q("en-sep-2023-q20", 2, "Select true or false for the following statement.\nGandhi decided to go first to Muzzafarpur, which was en route to Champaran.", ["TRUE", "FALSE"], 0, { passage: SEP23_P1 }),
          q("en-sep-2023-q21", 2, "To whom did Gandhi send a telegram?", ["Rajendra Prasad", "J.B. Kripalani", "Romesh Chunder Dutt", "N. R Malkani"], 1, { passage: SEP23_P1 }),
          q("en-sep-2023-q22", 2, "At whose house did Gandhi stay for two days?", ["Professor Dutt", "Professor Malkani", "Professor Chowdhury", "Professor Sharma"], 1, { passage: SEP23_P1 }),
          q("en-sep-2023-q28", 1, "Fill in the blank (i) with an appropriate response?", ["My friend is playing a video game with children", "My wife is cooking in the kitchen", "I am cool", "My father is working in the corporate sector"], 2, { passage: SEP23_P2 }),
          q("en-sep-2023-q29", 1, "Fill in the blank (ii) with an appropriate response?", ["I am perfectly fine", "The dog is playing in the room", "The cats are alright", "Mom is out for shopping"], 0, { passage: SEP23_P2 }),
          q("en-sep-2023-q30", 1, "Fill in the blank (iii) with an appropriate response?", ["When is your exam?", "Why so?", "When are you coming home?", "Why are you going to Chennai?"], 1, { passage: SEP23_P2 }),
          q("en-sep-2023-q31", 1, "Fill in the blank (iv) with an appropriate response?", ["Good Morning sis", "Bye sis", "Thank you, sis, for your support.", "Good night sis"], 2, { passage: SEP23_P2 }),
          q("en-sep-2023-q32", 1, "Fill in the blank (v) with an appropriate response?", ["How long will you go to the coaching institute?", "Do you have any good coaching institutes in mind?", "How long will you stay there in Chennai?", "When will you come home?"], 1, { passage: SEP23_P2 }),
          q("en-sep-2023-q33", 1, "Sports___________", ["Card", "Offer", "Equipment", "Rod", "Hose"], 2, { passage: SEP23_P3 }),
          q("en-sep-2023-q34", 1, "Library __________", ["Card", "Offer", "Equipment", "Rod", "Hose"], 0, { passage: SEP23_P3 }),
          q("en-sep-2023-q35", 1, "Garden ___________", ["Card", "Offer", "Equipment", "Rod", "Hose"], 4, { passage: SEP23_P3 }),
          q("en-sep-2023-q36", 1, "Job __________", ["Card", "Offer", "Equipment", "Rod", "Hose"], 1, { passage: SEP23_P3 }),
          q("en-sep-2023-q37", 1, "Fishing", ["Card", "Offer", "Equipment", "Rod", "Hose"], 3, { passage: SEP23_P3 }),
          q("en-sep-2023-q38", 1, "Identify the type of noun that is highlighted in the sentence.\nThe swimming pool is drained and cleaned every winter.", ["Collective", "Abstract", "Proper", "Compound"], 3, { emphasis: "swimming pool" }),
          q("en-sep-2023-q39", 1, "Select the correct pronoun.\nThis is my letter and that is ________.", ["Your", "Yours", "Our", "Ours"], 1),
          q("en-sep-2023-q40", 1, "Which one of the following words is a verb?", ["Usually", "Slowly", "Poorly", "Solve"], 3),
          q("en-sep-2023-q41", 1, "Choose the correct option.\nMy new bike is __________ than my old one.", ["Faster", "Fast"], 0),
          q("en-sep-2023-q42", 1, "Identify the part of speech of the underlined word.\nAmy bought ripe tomatoes at the store.", ["Noun", "Adjective", "Pronoun", "Verb"], 1, { emphasis: "ripe" }),
          q("en-sep-2023-q43", 1, "Choose the appropriate option.\n________ my opinion, she is a very clever girl.", ["For", "Of", "In", "With"], 2),
          q("en-sep-2023-q44", 1, "Choose the appropriate option.\nTomorrow will be ________ cold day.", ["The", "An", "A", "No article"], 2),
          q("en-sep-2023-q45", 1, "Choose the appropriate option.\nShe behaves _______she was the captain of the team.", ["As", "As if", "That", "No word needed"], 1),
          q("en-sep-2023-q46", 1, "They usually spend their holidays in _____mountains.", ["A", "The", "No article", "An"], 1),
          q("en-sep-2023-q47", 1, "Select true or false for the following statement.\nThe phrasal verb ‘lay off (something)’ means to ‘to stop doing something.’", ["True", "False"], 0),
          q("en-sep-2023-q48", 1, "Consider the following sentence:\nThe party was a little slow at first but Kate broke the ice by offering everyone wine and beer. The phrase ‘broke the ice’ means ___.", ["To remove the tension at a first meeting", "To tell the truth about something that was kept a secret"], 0),
          q("en-sep-2023-q49", 1, "The phrase ‘to get out of hand’ means ___________.", ["To become difficult to control", "To calm down"], 0),
          q("en-sep-2023-q50", 1, "He told me that he will stay for a ___.", ["Weak", "Week", "Wick", "Wake"], 1),
          q("en-sep-2023-q51", 1, "The ___ was unsold in the auction.", ["Whether", "Wether", "Weather", "Wither"], 1),
          q("en-sep-2023-q52", 1, "Choose the word with an “aa” sound from the following.", ["Hoard", "Board", "Hard", "Teeth"], 2),
          q("en-sep-2023-q53", 1, "Pick the odd one out on the basis of the similarity of sounds: knit, pit, kit, neat", ["Knit", "Pit", "Kit", "Neat"], 3),
          q("en-sep-2023-q54", 1, "Which semi-vowel occurs in the transition between the words “go” and “out” in the sentence “go out”?", ["/w/", "/y/"], 0),
          q("en-sep-2023-q55", 1, "Which among the following is a word without a diphthong?", ["Snout", "Stout", "Sport", "Shout"], 2),
          q("en-sep-2023-q56", 1, "Which among the following is the correct way to read the following phone number: 8637681134?", ["8637/6811/34", "863/768/113/4", "86/37/68/11/34", "All of these"], 3),
          q("en-sep-2023-q57", 1, "‘Rinku reads quite clearly’. In this sentence which of the following is an adverb?", ["Reads", "Quite", "Clearly", "Rinku"], [1, 2]),
        ],
      },
    ],
  },
  {
    slug: "english-1-jan-2024",
    title: "English I · January 2024",
    description: "The January 2024 qualifier English I paper with the official answer key.",
    difficulty: "Standard",
    durationMin: 30,
    sections: [
      {
        subjectSlug: "english-1",
        title: "English I",
        short: "English I",
        questions: [
          q("en-jan-2024-q18", 2, "What is the meaning of ‘archipelago’?", ["A collection of jewellery", "A collection of Islands", "A collection of stamps", "A collection of coins"], 1, { passage: JAN24_P1 }),
          q("en-jan-2024-q19", 2, "Fill in the blank with the appropriate option.\nIgnesious was the manager of a cooperative society in ______________.", ["Lucknow", "Katchall", "Coimbatore", "Kanpur"], 1, { passage: JAN24_P1 }),
          q("en-jan-2024-q20", 2, "Which among the following words is the antonym of ‘order’?", ["Chaos", "Structure", "Arrangement", "System"], 0, { passage: JAN24_P1 }),
          q("en-jan-2024-q21", 2, "Select true or false for the following statement.\nSanjeev made it to safety after the tsunami.", ["True", "False"], 1, { passage: JAN24_P1 }),
          q("en-jan-2024-q22", 2, "Fill in the blanks with the correct option.\n“________________ she saw relief helicopters overhead, but they did not see her.”", ["Eleven times", "Twelve times", "Fourteen times", "Ten times"], 0, { passage: JAN24_P1 }),
          q("en-jan-2024-q23", 2, "Select true or false for the following statement.\nAlmas’s father realised that a tsunami was going to hit the Island.", ["True", "False"], 0, { passage: JAN24_P1 }),
          q("en-jan-2024-q24", 2, "Select true or false for the following statement.\n“Meghna was saved by a relief helicopter.”", ["True", "False"], 1, { passage: JAN24_P1 }),
          q("en-jan-2024-q25", 2, "Fill in the blanks.\nAlmas Javed was a _______ old girl.", ["Ten year", "Eleven year", "Five year", "Seven year"], 0, { passage: JAN24_P1 }),
          q("en-jan-2024-q26", 2, "Select true or false for the following statement.\nIgnesious lost his wife, two children, his father-in-law, and his brother-in-law in the tsunami.", ["True", "False"], 0, { passage: JAN24_P1 }),
          q("en-jan-2024-q27", 2, "Fill in the blanks.\nSanjeev was a __________.", ["Doctor", "Student", "Professor", "Policeman"], 3, { passage: JAN24_P1 }),
          q("en-jan-2024-q28", 1, "Prove", ["Wearied", "Counsel", "Gravelly", "Establish", "Clumsy"], 3, { passage: JAN24_P2 }),
          q("en-jan-2024-q29", 1, "Maladroit", ["Wearied", "Counsel", "Gravelly", "Establish", "Clumsy"], 4, { passage: JAN24_P2 }),
          q("en-jan-2024-q30", 1, "Tired", ["Wearied", "Counsel", "Gravelly", "Establish", "Clumsy"], 0, { passage: JAN24_P2 }),
          q("en-jan-2024-q31", 1, "Coach", ["Wearied", "Counsel", "Gravelly", "Establish", "Clumsy"], 1, { passage: JAN24_P2 }),
          q("en-jan-2024-q32", 1, "Coarse", ["Wearied", "Counsel", "Gravelly", "Establish", "Clumsy"], 2, { passage: JAN24_P2 }),
          q("en-jan-2024-q33", 1, "Fill in the blank (i) with an appropriate response?", ["I am fine", "My sister is fine", "My brother is fine", "My aunt is fine"], 0, { passage: JAN24_P3 }),
          q("en-jan-2024-q34", 1, "Fill in the blank (ii) with an appropriate response?", ["Do you want to go out for a picnic?", "Where are you staying currently?", "When are you going to the party?", "Which place are you from?"], 0, { passage: JAN24_P3 }),
          q("en-jan-2024-q35", 1, "Fill in the blank (iii) with an appropriate response?", ["Can you give me your number?", "What about going to Darjeeling next Friday?", "Could you drop me at the bus stand?", "Can you come home this week?"], 1, { passage: JAN24_P3 }),
          q("en-jan-2024-q36", 1, "Fill in the blank (iv) with an appropriate response?", ["How much time will it take?", "What plans have you made?", "Who will be with us?", "How’re you doing?"], 2, { passage: JAN24_P3 }),
          q("en-jan-2024-q37", 1, "Fill in the blank (v) with an appropriate response?", ["What have you been up to?", "What are you doing?", "What about the party?", "What about the menu?"], 3, { passage: JAN24_P3 }),
          q("en-jan-2024-q38", 1, "Which among the following words have a vowel sound similar to that of ‘pack’?", ["Cat", "Bleat", "Shear", "Boat"], 0),
          q("en-jan-2024-q39", 1, "Choose the word with an “u” sound from the following.", ["Root", "Foot", "Court", "Both Root and Foot"], 1),
          q("en-jan-2024-q40", 1, "Which semi-vowel occurs in the transition between the words ‘she’ and ‘offered’ in the sentence ‘she offered to help me with my assignment’?", ["/w/", "/y/"], 1),
          q("en-jan-2024-q41", 1, "Which among the following is a word without a diphthong?", ["Snout", "Stout", "Sport", "Shout"], 2),
          q("en-jan-2024-q42", 1, "Pick the odd one out based on the initial sound: noun, down, town, gown.", ["Noun", "Down", "Town", "Gown"], 3),
          q("en-jan-2024-q43", 1, "Pick the odd one out based on the similarity of sounds: lit, mitt, knit, feet.", ["Lit", "Mitt", "Knit", "Feet"], 3),
          q("en-jan-2024-q44", 1, "Identify the part of speech of the underlined word:\nTheir fans were very disappointed after the loss in the finals.", ["Noun", "Pronoun", "Verb", "Conjunction"], 1, { emphasis: "Their" }),
          q("en-jan-2024-q45", 1, "Complete sentence by choosing the correct form of the verb given in brackets:\nWe will get it ____ (do).", ["Do", "Doing", "Done", "Did"], 2),
          q("en-jan-2024-q46", 1, "Identify the part of speech of the underlined word:\nI walked slowly to the park.", ["Adjective", "Adverb", "Verb", "Conjunction"], 1, { emphasis: "slowly" }),
          q("en-jan-2024-q47", 1, "Identify the adverb in the following sentence:\nPlease walk carefully; the floor is wet.", ["Please", "Walk", "Carefully", "Floor"], 2),
          q("en-jan-2024-q48", 1, "Choose the appropriate option:\nWhen I finally reached the ticket counter, John was already standing in line _____ of me.", ["Ahead", "Above", "Against", "Across"], 0),
          q("en-jan-2024-q49", 1, "Choose the appropriate option.\nSushma is worried _________ the exam.", ["In", "About", "On", "Of"], 1),
          q("en-jan-2024-q50", 1, "Identify the conjunction in the following sentence:\n‘He may be poor but his character is faultless.’", ["He", "Maybe", "But", "Character"], 2),
          q("en-jan-2024-q51", 1, "Choose the correct option:\nThere is _________ emergency exit to your left.", ["A", "An", "The", "None of these"], 1),
          q("en-jan-2024-q52", 1, "Choose the correct option:\nThis is ______ best chocolate cake I’ve ever had.", ["A", "An", "The", "None of these"], 2),
          q("en-jan-2024-q53", 1, "Choose the correct option:\nThe storm _______ the coast badly.", ["Effected", "Affected", "Both Effected and Affected", "None of these"], 1),
          q("en-jan-2024-q54", 1, "‘The new iPhone seems to cost everyone not just an arm and a leg, but also a kidney.’ What does ‘to cost an arm and a leg’ mean?", ["To be very expensive", "To be very short-lived", "To be very cheap", "To be afraid of surgery"], 0),
          q("en-jan-2024-q55", 1, "Identify the separable phrasal verb out of the following options.", ["Live on", "See about", "Take after", "Sum up"], 3),
          q("en-jan-2024-q56", 1, "Fill in the blank with the appropriate option.\nThe kids were well __________.", ["Got off", "Gave up", "Brought up", "Pick up"], 2),
          q("en-jan-2024-q57", 1, "Select the option which identifies the noun in the sentence:\nShraddha is a brilliant student.", ["Brilliant", "Is", "Student", "Shraddha"], [2, 3]),
        ],
      },
    ],
  },
  {
    slug: "english-1-may-2024",
    title: "English I · May 2024",
    description: "The May 2024 qualifier English I paper with the official answer key.",
    difficulty: "Standard",
    durationMin: 30,
    sections: [
      {
        subjectSlug: "english-1",
        title: "English I",
        short: "English I",
        questions: [
          q("en-may-2024-q16", 2, "What is the synonym of the word surpassed?", ["Exceed", "Pass through", "Go under", "Come second to"], 0, { passage: MAY24_P1 }),
          q("en-may-2024-q17", 2, "Choose an appropriate option to replace the word touted.", ["Changed paths", "Promoted", "Criticized", "Edited"], 1, { passage: MAY24_P1 }),
          q("en-may-2024-q18", 2, "That’s mostly organic demand and we haven’t even turned on many promotions yet. What meaning do the phrases organic demand and [not many] promotions convey here?", ["Meta has been mindful of climate change in meeting demands.", "The company Meta hasn’t tried many marketing tactics to popularize Threads.", "Meta has withheld any promotions to employees in its company."], 1, { passage: MAY24_P1 }),
          q("en-may-2024-q19", 2, "Twitter appears to have taken a hit.\nWhat is the meaning of the phrase taken a hit?", ["Be affected badly", "Be popular among its users", "Has made a huge profit"], 0, { passage: MAY24_P1 }),
          q("en-may-2024-q20", 2, "What is the synonym of the word tanking?", ["Shooting", "Weighing", "Grateful", "Failing"], 3, { passage: MAY24_P1 }),
          q("en-may-2024-q21", 2, "The company said Twitter’s web traffic is down 11% compared with the same days in 2022 What is the meaning of the phrase down 11%?", ["The traffic has reduced to 11%", "The traffic has reduced from 11%", "The traffic has reduced by 11%"], 2, { passage: MAY24_P1 }),
          q("en-may-2024-q22", 2, "What is the meaning of the phrase automated response?", ["Predetermined reply", "Responsible driving of automobiles", "Highly private message"], 0, { passage: MAY24_P1 }),
          q("en-may-2024-q23", 2, "Meta didn’t offer additional comment beyond Zuckerberg’s post.\nWhat part of speech is the word beyond here?", ["Adjective", "Interjection", "Preposition", "Adverb"], 2, { passage: MAY24_P1 }),
          q("en-may-2024-q24", 2, "…users seem to be on board.\nWhat is the meaning of the phrase on board here?", ["Enter a vehicle", "Be available", "Agree with"], 2, { passage: MAY24_P1 }),
          q("en-may-2024-q25", 2, "What is the meaning of the word debut?", ["Reply in opposite", "First appearance", "Alternative", "Momentum"], 1, { passage: MAY24_P1 }),
          q("en-may-2024-q26", 1, "Choose the word without an “ii” sound from the following.", ["Meet", "Lead", "Wet", "Wheat"], 2),
          q("en-may-2024-q27", 1, "Choose the word with an “oo” sound from the following.", ["Court", "Loot", "Cat", "Feat"], 0),
          q("en-may-2024-q28", 1, "Which semi-vowel occurs in the transition between the words ‘me’ and ‘off’ in the sentence ‘he pushed me off the chair’?", ["/w/", "/y/"], 1),
          q("en-may-2024-q29", 1, "Which among the following is a word without a diphthong?", ["Mouth", "South", "Pout", "Moot"], 3),
          q("en-may-2024-q30", 1, "Pick the odd one out based on the initial sound: near, dear, tear, gear.", ["Near", "Dear", "Tear", "Gear"], 3),
          q("en-may-2024-q31", 1, "Pick the odd one out based on the initial sound: peat, beat, clear, pear.", ["Peat", "Beat", "Clear", "Pear"], 2),
          q("en-may-2024-q32", 1, "Select the option which identifies the noun in the sentence:\nRaghav is going for a walk.", ["Raghav", "Going", "For"], 0),
          q("en-may-2024-q33", 1, "Identify the part of speech of the underlined word:\nThey were quick to throw up their hands in surrender.", ["Noun", "Pronoun", "Verb", "Conjunction"], 1, { emphasis: "They" }),
          q("en-may-2024-q34", 1, "Complete sentence by choosing the correct form of the verb given in brackets:\nThey ______ (buy) the house last year.", ["Buy", "Bought", "Will buy", "Buying"], 1),
          q("en-may-2024-q35", 1, "Identify the part of speech of the underlined word:\nThe house at the end of the street was painted yellow.", ["Adjective", "Adverb", "Verb", "Conjunction"], 0, { emphasis: "yellow" }),
          q("en-may-2024-q36", 1, "Identify the adverb in the following sentence:\nJoseph ran faster than everyone else in the relay team.", ["Joseph", "Ran", "Faster", "Relay"], 2),
          q("en-may-2024-q37", 1, "Choose the appropriate option:\nThe fruits are __ the fridge.", ["At", "For", "In", "None of these"], 2),
          q("en-may-2024-q38", 1, "Identify the conjunction in the following sentence:\n‘He was an excellent orator and an even better salesman.’", ["He", "Was", "Excellent", "And"], 3),
          q("en-may-2024-q39", 1, "Choose the correct option:\nHe gave me __ book on my birthday.", ["An", "A", "The", "None of these"], 1),
          q("en-may-2024-q40", 1, "Choose the correct option:\n___ Sun rises in the east.", ["A", "An", "The", "None of these"], 2),
          q("en-may-2024-q41", 1, "Choose the correct option:\nThere were __ many people in the auditorium.", ["To", "Two", "Too", "Large"], 2),
          q("en-may-2024-q42", 1, "A colleague in your office tells you, ‘Please keep me in the loop while I’m on my vacation.’ What does the underlined part mean?", ["The colleague wants you not to disturb them.", "The colleague wants you to call them.", "The colleague wants you to keep them updated on events at work.", "The colleague wants you to call them for your wedding."], 2, { emphasis: "keep me in the loop" }),
          q("en-may-2024-q43", 1, "Identify the separable phrasal verb out of the following options.", ["Hit on", "Keep at", "Stand for", "Call by"], 3),
          q("en-may-2024-q44", 1, "Fill in the blank with the appropriate option.\nThe meeting __________ just before dinner.", ["Brought out", "Broke up", "Broke into", "Broke out"], 1),
          q("en-may-2024-q45", 1, "Choose the correct option.\n___________ I ask a question? (Context: permission and formal)\nYes, of course.", ["Must", "May", "Should", "Will"], 1),
          q("en-may-2024-q46", 1, "Bank___________", ["Temper", "Account", "Ruins", "Afternoon", "Coffee"], 1, { passage: MAY24_P2 }),
          q("en-may-2024-q47", 1, "Strong __________", ["Temper", "Account", "Ruins", "Afternoon", "Coffee"], 4, { passage: MAY24_P2 }),
          q("en-may-2024-q48", 1, "Lazy__________", ["Temper", "Account", "Ruins", "Afternoon", "Coffee"], 3, { passage: MAY24_P2 }),
          q("en-may-2024-q49", 1, "Short________", ["Temper", "Account", "Ruins", "Afternoon", "Coffee"], 0, { passage: MAY24_P2 }),
          q("en-may-2024-q50", 1, "Ancient _____________", ["Temper", "Account", "Ruins", "Afternoon", "Coffee"], 2, { passage: MAY24_P2 }),
          q("en-may-2024-q51", 1, "Complete blank (i) with an appropriate response.", ["Is this Prateek Agarwal’s house?", "Is this Prateek Agarwal’s family?", "Am I talking to Prateek Agarwal?", "Is this Prateek Agarwal’s son?"], 2, { passage: MAY24_P3 }),
          q("en-may-2024-q52", 1, "Complete blank (ii) with an appropriate response.", ["May I come in?", "May I drop you home?", "May I ask who is speaking?", "May I know why you are here?"], 2, { passage: MAY24_P3 }),
          q("en-may-2024-q53", 1, "Complete blank (iii) with an appropriate response.", ["Could you bring me the office file?", "Is it a new project?", "Where are you going?", "How are you?"], 3, { passage: MAY24_P3 }),
          q("en-may-2024-q54", 1, "Complete blank (iv) with an appropriate response.", ["When will you come home?", "Do you remember him?", "Did you have dinner?", "Did you meet him?"], 1, { passage: MAY24_P3 }),
          q("en-may-2024-q55", 1, "Complete blank (v) with an appropriate response.", ["That is amazing news!", "Thank you!", "You are welcome!", "I am sorry!"], 0, { passage: MAY24_P3 }),
        ],
      },
    ],
  },
];
