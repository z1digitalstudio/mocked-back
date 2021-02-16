const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Category {
    id: ID!
    title: String!
  }

  type Lesson {
    id: ID!
    title: String!,
    image: String!,
    author: String,
    category: Category!,
  }

  type Query {
    items: [Lesson]
  }
`;

const categories = [
  {
    id: "0a943e4e-e885-418d-990e-a8918bd5d271",
    title: "Mindfulness"
  },
  {
    id: "60ab7487-da91-4b60-a102-e7e35c2d327f",
    title: "Harm Reduction"
  },
  {
    id: "3383b86d-ca14-4f84-91c6-949bbe55d805",
    title: "Tripping"
  },
  {
    id: "aa47a6d9-73d2-45f4-8deb-1f734f2cc187",
    title: "Integration"
  },
]


const lessons = [
  {
    id: "f8e99d78- b79a - 4387 - 93bb - ebc3b6db808c",
    title: "Fundamentals of Wavelets",
    author: "Goswami, Jaideva",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "4cd00c06-efac-48f9-88b9-d000c12c72cd",
    title: "Data Smart",
    author: "Foreman, John",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "b7f2dbf0-610f-4b1a-a5e3-82e48178b050",
    title: "God Created the Integers",
    author: "Hawking, Stephen",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "2fdf9cb4-a452-45d2-8d94-2f3a8e4cb1f9",
    title: "Superfreakonomics",
    author: "Dubner, Stephen",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "19a7b8e4-26c0-4426-a211-086a0394e38e",
    title: "Orientalism",
    author: "Said, Edward",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "83b4cc4d-2f8a-43c1-94ce-3cec07aa9ab4",
    title: "Nature of Statistical Learning Theory, The",
    author: "Vapnik, Vladimir",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "8eba0972-bea6-4e80-944e-a6f58a517699",
    title: "Integration of the Indian States",
    author: "Menon, V P",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "a3684259-f79c-483c-8b3e-4cbdd13961aa",
    title: "Drunkard's Walk, The",
    author: "Mlodinow, Leonard",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "1398cc28-c444-4d3b-9a78-0f2fd76458b5",
    title: "Image Processing & Mathematical Morphology",
    author: "Shih, Frank",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "cec444d9-f24a-4ed8-ae50-a2abe419fe75",
    title: "How to Think Like Sherlock Holmes",
    author: "Konnikova, Maria",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "6b6e34c9-a26a-41a7-9282-bd1498c6149d",
    title: "Data Scientists at Work",
    author: "Sebastian Gutierrez",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "6282dd75-1aa0-4d42-8705-8139e120217d",
    title: "Slaughterhouse Five",
    author: "Vonnegut, Kurt",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "b9c93e80-0a82-4432-b713-96f3cdc3e2d2",
    title: "Birth of a Theorem",
    author: "Villani, Cedric",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "ad82da1e-a6b5-408c-a240-2bbe219796e2",
    title: "Structure & Interpretation of Computer Programs",
    author: "Sussman, Gerald",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "a32984f7-4e73-417c-9773-d8a8e0db7091",
    title: "Age of Wrath, The",
    author: "Eraly, Abraham",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "47a107b6-940f-4e77-86ab-aa9bdae8c8b5",
    title: "Trial, The",
    author: "Kafka, Frank",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "34f484f2-21dc-4eaa-93cb-2b4012aca021",
    title: "Statistical Decision Theory'",
    author: "Pratt, John",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "c3612c12-f090-48ba-bf89-3f3632810d0f",
    title: "Data Mining Handbook",
    author: "Nisbet, Robert",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "07c81e80-1fe1-4e19-b4df-47d5d9cb47fc",
    title: "New Machiavelli, The",
    author: "Wells, H. G.",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "f9720133-0299-4106-b840-a05f8d456073",
    title: "Physics & Philosophy",
    author: "Heisenberg, Werner",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "1a980b1c-7261-42ed-b4df-97da4e459bf0",
    title: "Making Software",
    author: "Oram, Andy",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "4709e122-51b8-47df-bb07-31b2b41ac58a",
    title: "Analysis, Vol I",
    author: "Tao, Terence",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "723a4127-9a9d-48dd-adb2-bfec4afb3863",
    title: "Machine Learning for Hackers",
    author: "Conway, Drew",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "5b25b1a3-adda-4809-9fda-fd952e376752",
    title: "Signal and the Noise, The",
    author: "Silver, Nate",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "8f7a73c6-8046-4de9-a44e-6ca288768317",
    title: "Python for Data Analysis",
    author: "McKinney, Wes",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "69f516b8-d346-42f3-b0f2-510b76ab36c5",
    title: "Introduction to Algorithms",
    author: "Cormen, Thomas",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "98f2724d-f0fe-4ce4-8d8d-f37505b65dee",
    title: "Beautiful and the Damned, The",
    author: "Deb, Siddhartha",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "d51ee1c9-5538-431a-b98c-717dd5ea8121",
    title: "Outsider, The",
    author: "Camus, Albert",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "cee6aa88-89e8-48d7-83cf-89fa103179f5",
    title: "Complete Sherlock Holmes, The - Vol I",
    author: "Doyle, Arthur Conan",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "0e1719c8-a2ee-4d46-bd55-6c5359131f1b",
    title: "Complete Sherlock Holmes, The - Vol II",
    author: "Doyle, Arthur Conan",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "b3be1b82-cbcd-4107-9289-01d5b459c3c9",
    title: "Wealth of Nations, The",
    author: "Smith, Adam",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "08d49136-9725-48bf-8ec2-26516cfa35e3",
    title: "Pillars of the Earth, The",
    author: "Follett, Ken",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "1eef1c9b-36ee-414a-9083-ab07abe41797",
    title: "Mein Kampf",
    author: "Hitler, Adolf",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "f8dd83f1-ab1d-469f-8125-d41ca2b6df40",
    title: "Tao of Physics, The",
    author: "Capra, Fritjof",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "26f88344-71c9-45a5-b560-b3f7c37acf1a",
    title: "Surely You're Joking Mr Feynman",
    author: "Feynman, Richard",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "713e5a5a-6d26-493c-a2f5-0ba29ba0fb07",
    title: "Farewell to Arms, A",
    author: "Hemingway, Ernest",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "87b1e3cf-68b1-43d6-b66e-ce491cbfb378",
    title: "Veteran, The",
    author: "Forsyth, Frederick",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "425cfaa0-88a8-4772-8b97-7e2a30cdd945",
    title: "False Impressions",
    author: "Archer, Jeffery",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "bbaa7890-7e3e-4edd-b20a-65bdaf6772a6",
    title: "Last Lecture, The",
    author: "Pausch, Randy",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "b7cc4965-2f8e-4cf2-ae40-70411143b9cb",
    title: "Return of the Primitive",
    author: "Rand, Ayn",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "6046d24f-fec3-4617-beb8-2335190a01c2",
    title: "Jurassic Park",
    author: "Crichton, Michael",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "b6d55865-d7a7-490d-ac86-dd13dec4049e",
    title: "Russian Journal, A",
    author: "Steinbeck, John",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "70377849-2659-4c4f-a6d6-2119826fc155",
    title: "Tales of Mystery and Imagination",
    author: "Poe, Edgar Allen",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "26ad8905-b5e6-4e9c-b1b8-c27c6af068e0",
    title: "Freakonomics",
    author: "Dubner, Stephen",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "b6205a63-1e00-4c21-b1be-bbbb56454935",
    title: "Hidden Connections, The",
    author: "Capra, Fritjof",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "ce55d828-7efd-4e66-b6ea-c83720a6b28a",
    title: "Story of Philosophy, The",
    author: "Durant, Will",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "c3345c18-3d7a-4b09-8522-e74fe3aaa4b3",
    title: "Asami Asami",
    author: "Deshpande, P L",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "b452e330-1322-40cc-85ea-38a8df1407ec",
    title: "Journal of a Novel",
    author: "Steinbeck, John",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "baf54c4b-a1ca-4fd9-ad32-03b4aa0f8124",
    title: "Once There Was a War",
    author: "Steinbeck, John",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "b3494f2b-2323-40ce-b4d2-5e2d1ac6e613",
    title: "Moon is Down, The",
    author: "Steinbeck, John",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "57e5c14f-0504-43c6-b1e2-112ab44196ef",
    title: "Brethren, The",
    author: "Grisham, John",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "a8bf2456-32e6-4242-98af-0a2855d45c5f",
    title: "In a Free State",
    author: "Naipaul, V. S.",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "ba0c4c64-d112-4a6c-bb5b-8251cf6827d8",
    title: "Catch 22",
    author: "Heller, Joseph",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "b6baa8aa-3c62-4dca-b886-1bc0900a4e6b",
    title: "Complete Mastermind, The",
    author: "BBC",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "5fb431bd-4936-40a9-89c4-d9e1d50b1617",
    title: "Dylan on Dylan",
    author: "Dylan, Bob",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "42926fe1-0e8a-4dcd-bdfd-bbadf0e93825",
    title: "Soft Computing & Intelligent Systems",
    author: "Gupta, Madan",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "d58701e1-a467-4db8-baaa-18e360ceb734",
    title: "Textbook of Economic Theory",
    author: "Stonier, Alfred",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "aa2b7cda-0989-4ba5-8c8e-adb73ca9a1e1",
    title: "Econometric Analysis",
    author: "Greene, W. H.",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "0b4c9433-f3ac-487a-8545-315909fee6e1",
    title: "Learning OpenCV",
    author: "Bradsky, Gary",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "c5649477-d8ec-4779-8c75-211dc315171f",
    title: "Data Structures Using C & C++",
    author: "Tanenbaum, Andrew",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "72de1679-f562-4471-aa44-fd8e52f6fd8d",
    title: "Computer Vision, A Modern Approach",
    author: "Forsyth, David",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "88e78ab7-b643-40f7-a966-2dc3a2f9ca98",
    title: "Principles of Communication Systems",
    author: "Taub, Schilling",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "96b154cf-8fcd-4050-83c0-b3eedc03fad7",
    title: "Let Us C",
    author: "Kanetkar, Yashwant",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "75bfad2f-b30b-444e-b2b1-84e4c36c0af0",
    title: "Amulet of Samarkand, The",
    author: "Stroud, Jonathan",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "75d0675b-c6e8-4419-9efa-552cca2fcd89",
    title: "Crime and Punishment",
    author: "Dostoevsky, Fyodor",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "8acdfe75-48db-4115-9399-a6701be923e3",
    title: "Angels & Demons",
    author: "Brown, Dan",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "2b9cf6c1-e1f6-4cf4-a473-498855f2a83c",
    title: "Argumentative Indian, The",
    author: "Sen, Amartya",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "296d45b7-6b74-4075-a853-b61769cf30a8",
    title: "Sea of Poppies",
    author: "Ghosh, Amitav",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "c362ece2-ab6a-44dd-bd84-e60d4ae55c4b",
    title: "Idea of Justice, The",
    author: "Sen, Amartya",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "1f41e19a-86c8-4797-a2c5-9caf2013e60c",
    title: "Raisin in the Sun, A",
    author: "Hansberry, Lorraine",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "a1a16125-8641-41e6-a17e-0fe93d2a39f8",
    title: "All the President's Men",
    author: "Woodward, Bob",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "8369b2c5-efa6-46c1-a8f5-7da0c6cd6edf",
    title: "Prisoner of Birth, A",
    author: "Archer, Jeffery",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "46da153e-4869-4fed-a17b-a431329ae8ab",
    title: "Scoop!",
    author: "Nayar, Kuldip",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "77c49bbd-f292-4add-bf59-cccface156f0",
    title: "Ahe Manohar Tari",
    author: "Deshpande, Sunita",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "0818a6d8-2d0f-4e3c-b538-e26dfe5a6927",
    title: "Last Mughal, The",
    author: "Dalrymple, William",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "66e1ac41-6e47-4d66-911b-6d720865b5a0",
    title: "Social Choice & Welfare, Vol 39 No. 1",
    author: "Various",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "1f98691e-7130-454a-a116-80e0575e4d06",
    title: "Radiowaril Bhashane & Shrutika",
    author: "Deshpande, P L",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "9d383425-e8b9-4f14-9351-da258c2e410a",
    title: "Gun Gayin Awadi",
    author: "Deshpande, P L",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "d0d05a71-2f3f-46e6-a111-762df8643da8",
    title: "Aghal Paghal",
    author: "Deshpande, P L",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "f9a0c535-0c3e-4021-9e63-cd155ef7c9e6",
    title: "Maqta-e-Ghalib",
    author: "Garg, Sanjay",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "1b6a1524-1a0a-40ce-beb8-e54b4309ad21",
    title: "Beyond Degrees",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "d70d4338-93c9-4690-933d-e65845a5a2e6",
    title: "Manasa",
    author: "Kale, V P",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "aa27df3b-779a-46c2-86c5-2c1999dab76c",
    title: "India from Midnight to Milennium",
    author: "Tharoor, Shashi",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "86637afb-f9c4-444b-8a09-106c33bd9ed5",
    title: "World's Greatest Trials, The",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "a0bcee7c-afe8-4879-8b82-430edeee78f9",
    title: "Great Indian Novel, The",
    author: "Tharoor, Shashi",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "34706ad0-4b13-46e2-b3e6-e9d96ca9fafc",
    title: "O Jerusalem!",
    author: "Lapierre, Dominique",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "e4ef1524-6363-439d-a680-ffa60acb1b80",
    title: "City of Joy, The",
    author: "Lapierre, Dominique",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "378d0521-4e42-4410-84ea-7ae99016de9c",
    title: "Freedom at Midnight",
    author: "Lapierre, Dominique",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "e6b92140-292d-41ab-92a9-f4cb179dfa70",
    title: "Winter of Our Discontent, The",
    author: "Steinbeck, John",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "0902b3f5-c78a-48d0-9e3d-550101d7bd48",
    title: "On Education",
    author: "Russell, Bertrand",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "1b7759f5-f832-4caf-bb9b-41f3b762df3e",
    title: "Free Will",
    author: "Harris, Sam",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "76f6f37d-3972-4d1e-a56f-c45c88d86a4b",
    title: "Bookless in Baghdad",
    author: "Tharoor, Shashi",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "7d11c0b5-70df-4892-ba3f-b7549149cba1",
    title: "Case of the Lame Canary, The",
    author: "Gardner, Earle Stanley",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "3d949f87-bf2f-4368-b8bc-5f5e12252798",
    title: "Theory of Everything, The",
    author: "Hawking, Stephen",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "3f2ec151-4e31-4455-a1b3-f6b7b3d4eac6",
    title: "New Markets & Other Essays",
    author: "Drucker, Peter",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "5c68d1ce-de5a-40c2-9922-f7f6cf7cc4a5",
    title: "Electric Universe",
    author: "Bodanis, David",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
  {
    id: "35ceb7e1-14cd-41b7-b06f-17f68afe0e69",
    title: "Hunchback of Notre Dame, The",
    author: "Hugo, Victor",
    image: "https://placeimg.com/640/360/animals",
    category: categories[0]
  },
  {
    id: "cdcae338-6fd2-45de-8b81-a23c3acbadf2",
    title: "Burning Bright",
    author: "Steinbeck, John",
    image: "https://placeimg.com/640/360/animals",
    category: categories[1]
  },
  {
    id: "60811b57-0652-4f10-b4ed-9c3ab6e420c3",
    title: "Age of Discontuinity, The",
    author: "Drucker, Peter",
    image: "https://placeimg.com/640/360/animals",
    category: categories[2]
  },
  {
    id: "93980825-be81-43f6-88a4-552a9cddedbe",
    title: "Doctor in the Nude",
    author: "Gordon, Richard",
    image: "https://placeimg.com/640/360/animals",
    category: categories[3]
  },
]

const resolvers = {
  Query: {
    items: () => lessons,
  },
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});
