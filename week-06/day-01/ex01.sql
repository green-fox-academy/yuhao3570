-- Q1
SELECT title FROM Movie WHERE director="Steven Spielberg";

-- Q2
SELECT DISTINCT year FROM movie JOIN rating on movie.mID=rating.mID WHERE stars>3 ORDER BY year; 

-- Q3
SELECT title FROM Movie WHERE Movie.mID NOT IN (SELECT mID FROM Rating);

-- Q4
SELECT name FROM Reviewer JOIN Rating ON Reviewer.rID=Rating.rID WHERE ratingDate IS NULL;

-- Q5
SELECT name AS "Reviewer Name", title AS "Movie Title", stars, ratingDate 
FROM 
Reviewer JOIN Rating ON Reviewer.rID=Rating.rID
JOIN Movie ON Rating.mID=Movie.mID
ORDER BY "Reviewer Name", "Movie Title", stars;

-- Q6
SELECT name, title 
FROM
Movie 
JOIN Rating Rate1 ON Rate1.mID=Movie.mID
JOIN Rating Rate2 ON Rate1.rID=Rate2.rID
JOIN Reviewer ON Rate2.rID=Reviewer.rID
WHERE Rate1.mID=Rate2.mID 
AND Rate1.ratingDate < Rate2.ratingDate 
AND Rate1.stars<Rate2.stars;

-- Q7
SELECT title, MAX(stars) AS stars 
FROM
Movie 
JOIN Rating ON Rating.mID=Movie.mID
GROUP BY Rating.mID
ORDER BY title;

-- Q8
SELECT title, MAX(stars)-MIN(stars) AS "Rating Spread"
FROM
Movie 
JOIN Rating ON Rating.mID=Movie.mID
GROUP BY Rating.mID
ORDER BY "Rating Spread" DESC, title;

-- Q9
SELECT AVG(avgBefore) - AVG(avgAfter)
FROM
(SELECT AVG(stars) AS avgBefore 
FROM 
Movie 
JOIN Rating ON Rating.mID=Movie.mID 
WHERE year<1980
GROUP BY Rating.mID 
),
(SELECT AVG(stars) AS avgAfter 
FROM 
Movie 
JOIN Rating ON Rating.mID=Movie.mID 
WHERE NOT year<1980
GROUP BY Rating.mID 
);