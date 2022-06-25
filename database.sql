-- CREATE DATABASE "saga_movies_weekend"


CREATE TABLE "movies" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(120) NOT NULL,
  "poster"  VARCHAR(120) NOT NULL,
  "description" TEXT NOT NULL
);

CREATE TABLE "genres" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(80) NOT NULL
);

-- JUNCTION TABLE
-- Movies can have multiple genres and each genre can be applied to multiple movies
-- This is many-to-many!
CREATE TABLE "movies_genres" (
  "id" SERIAL PRIMARY KEY,
  "movie_id" INT REFERENCES "movies" NOT NULL,
  "genre_id" INT REFERENCES "genres" NOT NULL
);

-- starter movies
INSERT INTO "movies" ("title", "poster", "description")
VALUES 
('Akira', 'images/akira.png', 'In 1988 the Japanese government drops an atomic bomb on Tokyo after ESP experiments on children go awry. In 2019, 31 years after the nuking of the city, Kaneda, a bike gang leader, tries to save his friend Tetsuo from a secret government project. He battles anti-government activists, greedy politicians, irresponsible scientists and a powerful military leader until Tetsuo`s supernatural powers suddenly manifest. A final battle is fought in Tokyo Olympiad exposing the experiment`s secrets.'),
('Annie Hall', 'images/anniehall.png', 'Comedian Alvy Singer (Woody Allen) examines the rise and fall of his relationship with struggling nightclub singer Annie Hall (Diane Keaton). Speaking directly to the audience in front of a bare background, Singer reflects briefly on his childhood and his early adult years before settling in to tell the story of how he and Annie met, fell in love, and struggled with the obstacles of modern romance, mixing surreal fantasy sequences with small moments of emotional drama.'),
('Blade Runner', 'images/bladerunner.png', 'Deckard (Harrison Ford) is forced by the police Boss (M. Emmet Walsh) to continue his old job as Replicant Hunter. His assignment: eliminate four escaped Replicants from the colonies who have returned to Earth. Before starting the job, Deckard goes to the Tyrell Corporation and he meets Rachel (Sean Young), a Replicant girl he falls in love with.'),
('Climax', 'images/climax.png', 'When members of a dance troupe are lured to an empty school, drug-laced sangria causes their jubilant rehearsal to descend into a dark and explosive nightmare as they try to survive the night -- and find out who`s responsible -- before it`s too late.'),
('Fargo', 'images/fargo.png', '"Fargo" is a reality-based crime drama set in Minnesota in 1987. Jerry Lundegaard (William H. Macy) is a car salesman in Minneapolis who has gotten himself into debt and is so desperate for money that he hires two thugs (Steve Buscemi), (Peter Stormare) to kidnap his own wife. Jerry will collect the ransom from her wealthy father (Harve Presnell), paying the thugs a small portion and keeping the rest to satisfy his debts. The scheme collapses when the thugs shoot a state trooper.'),
('Forrest Gump', 'images/forrestgump.png', 'Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).'),
('Grave of Fireflies', 'images/graveoffireflies.png', 'A devastating meditation on the human cost of war, this animated tale follows Seita (Tsutomu Tatsumi), a teenager charged with the care of his younger sister, Setsuko (Ayano Shiraishi), after an American firebombing during World War II separates the two children from their parents. Their tale of survival is as heartbreaking as it is true to life. The siblings rely completely on each other and struggle against all odds to stay together and stay alive.'),
('Groundhog Day', 'images/groundhog.png', 'A cynical TV weatherman finds himself reliving the same day over and over again when he goes on location to the small town of Punxsutawney to film a report about their annual Groundhog Day. His predicament drives him to distraction, until he sees a way of turning the situation to his advantage.'),
('Hackers', 'images/hackers.png', 'A teenage hacker finds himself framed for the theft of millions of dollars from a major corporation. Master hacker Dade Murphy, aka Zero Cool, aka Crash Override, has been banned from touching a keyboard for seven years after crashing over 1,500 Wall Street computers at the age of 11. Now keen to get back in front of a monitor, he finds himself in more trouble than ever.'),
('Lost in Translation', 'images/lostintranslation.png', 'A lonely, aging movie star named Bob Harris (Bill Murray) and a conflicted newlywed, Charlotte (Scarlett Johansson), meet in Tokyo. Bob is there to film a Japanese whiskey commercial; Charlotte is accompanying her celebrity-photographer husband. Strangers in a foreign land, the two find escape, distraction and understanding amidst the bright Tokyo lights after a chance meeting in the quiet lull of the hotel bar. They form a bond that is as unlikely as it is heartfelt and meaningful.'),
('Magnolia', 'images/magnolia.png', 'On one random day in the San Fernando Valley, a dying father, a young wife, a male caretaker, a famous lost son, a police officer in love, a boy genius, an ex-boy genius, a game show host and an estranged daughter will each become part of a dazzling multiplicity of plots, but one story.'),
('Melancholia', 'images/melancholia.png', 'A planet hurtles toward a collision course with Earth. Two sisters, one of them trying to recover from a heavy bout of depression and a failed marriage, cope with their destiny in very different ways.'), 
('Romeo + Juliet', 'images/romeo.png', 'An age-old vendetta between two powerful families erupts into bloodshed. A group of masked Montagues risk further conflict by gatecrashing a Capulet party. A young lovesick Romeo Montague falls instantly in love with Juliet Capulet, who is due to marry her father`s choice, the County Paris.'),
('Santa Sangre', 'images/santasangre.png', 'In Mexico, the traumatized son (Axel Jodorowsky) of a knife-thrower (Guy Stockwell) and a trapeze artist bonds grotesquely with his now-armless mother (Blanca Guerra).'),
('Silence of the Lambs', 'images/silenceofthelambs.png', 'odie Foster stars as Clarice Starling, a top student at the FBI`s training academy. Jack Crawford (Scott Glenn) wants Clarice to interview Dr. Hannibal Lecter (Anthony Hopkins), a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism. Crawford believes that Lecter may have insight into a case and that Starling, as an attractive young woman, may be just the bait to draw him out.'),
('Suspiria', 'images/suspiria.png', 'Young American dancer Susie Bannion arrives in 1970s Berlin to audition for the world-renowned Helena Markos Dance Co. When she vaults to the role of lead dancer, the woman she replaces breaks down and accuses the company`s female directors of witchcraft. Meanwhile, an inquisitive psychotherapist and a member of the troupe uncover dark and sinister secrets as they probe the depths of the studio`s hidden underground chambers.'),
('The Truman Show', 'images/truman.png', 'He doesn`t know it, but everything in Truman Burbank`s (Jim Carrey) life is part of a massive TV set. Executive producer Christof (Ed Harris) orchestrates "The Truman Show," a live broadcast of Truman`s every move captured by hidden cameras. Cristof tries to control Truman`s mind, even removing his true love, Sylvia (Natascha McElhone), from the show and replacing her with Meryl (Laura Linney). As Truman gradually discovers the truth, however, he must decide whether to act on it.');

-- starter genres
INSERT INTO "genres" ("name")
VALUES 
('Action'),         --1
('Animated'),         --2
('Biographical'),     --3
('Comedy'),            --4
('Thriller'),         --5
('Drama'),            --6
('Epic'),             --7
('Fantasy'),         --8
('Horror'),         --9
('Romantic'),         --10
('Science Fiction'),  --11
('Cyber-Punk'),      --12
('Foreign');        --13

-- starter movies and genres data
INSERT INTO "movies_genres" ("movie_id", "genre_id")
VALUES 
(1,2), (1,11),       -- akira
(2,10), (2,6),    -- annie
(3,11),  (3, 1),            --  blade
(4,5), (4,13),             -- climax
(5,5),                    -- fargo 
(6,10), (6,6),                  -- gump
(7,2),(7,6),              -- grave
(8,4),                    -- grou dgoh
(9,1),                    -- hackers
(10,10), (10,6),                  -- lost in Wars
(11,6), (11, 7),           -- magnolia
(12,6),           -- melancholia Net
(13,6), (13,10),  -- romeo
(14,13), (14,6),   -- santa 
(15,9),   -- silence 
(16,13), (16,5), (16,6),   -- suspiriea 
(17,4), (17,6);   -- truman 
