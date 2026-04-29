export default async function handler(req, res) {
  const { lat, lng, fuelType } = req.query;
  const url = `https://api.e-control.at/sprit/1.0/search/gas-stations/by-address?latitude=${lat}&longitude=${lng}&fuelType=${fuelType}&includeClosed=false`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Gabim ne marrjen e te dhenave" });
  }
}
