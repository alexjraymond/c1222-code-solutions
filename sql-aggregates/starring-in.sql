select a."actorId",
count(fg."genreId"),
g.name as genrename
from actors as a
join "castMembers" as cm using ("actorId")
join "filmGenre" as fg using ("filmId")
join genres as g using ("genreId")
where a."firstName"||' '||a."lastName" = 'Lisa Monroe'
group by a."actorId", genrename;
