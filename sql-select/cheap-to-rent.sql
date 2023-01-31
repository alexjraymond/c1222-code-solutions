select "filmId", title from films
where "rentalRate" < 1
order by random()
limit 10
