select count(cities.name) citycount,
c.name as countryname
from cities
join countries as c using ("countryId")
group by countryname;
