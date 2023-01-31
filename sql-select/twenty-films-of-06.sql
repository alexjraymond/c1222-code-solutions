select title, description, "releaseYear" from films
where "releaseYear" = 2006
order by random()
limit 20;
