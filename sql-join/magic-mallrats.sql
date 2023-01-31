select c."firstName" as firstname,
c."lastName" as lastname
from customers as c
join rentals using ("customerId")
join inventory using ("inventoryId")
join films as f using ("filmId")
where f.title = 'Magic Mallrats';
