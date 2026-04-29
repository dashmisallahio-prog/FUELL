export default async function handler(req, res) {
  const { lat, lng, fuelType } = req.query;
  const url = `https://api.e-control.at/sprit/1.0/search/gas-stations/by-address?latitude=${lat}&longitude=${lng}&fuelType=${fuelType}&includeClosed=false`;
  
  const data = await fetch(url).then(r => r.json());
  
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(data);
}
