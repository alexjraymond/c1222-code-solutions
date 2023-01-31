select c.name as cityname,
c."countryId" as countryId,
a.line1,
a.district as district,
countries.name as country
from cities as c
join addresses as a using ("cityId")
join countries using ("countryId");
