select p.amount as amount,
p."customerId" as customerid,
c."firstName" as firstname,
c."lastName" as lastname
from payments as p
join customers as c using ("customerId")
order by amount desc
limit 10;
