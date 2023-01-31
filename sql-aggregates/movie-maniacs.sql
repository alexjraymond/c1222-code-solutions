select c."firstName"||' '||c."lastName" as fullname,
  sum(p.amount) as total
from customers as c
join rentals as r using ("customerId")
join payments as p using ("rentalId")
group by p."customerId", fullname
order by total desc;
