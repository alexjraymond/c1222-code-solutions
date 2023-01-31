select f."releaseYear" as releaseyear,
f.title,
g.name as genre
from films as f
join "filmGenre" as fg using ("filmId")
join genres as g using ("genreId")
where f.title = 'Boogie Amelie';
