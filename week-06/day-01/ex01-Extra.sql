-- Q1
SELECT DISTINCT name FROM 
Reviewer
JOIN Rating ON Reviewer.rID=Rating.rID
JOIN Movie ON Rating.mID=Movie.mID
WHERE title="Gone with the Wind";

-- Q2
SELECT name, title, stars 
FROM 
Reviewer
JOIN Rating ON Reviewer.rID=Rating.rID 
JOIN Movie ON Rating.mID=Movie.mID 
WHERE name=director;