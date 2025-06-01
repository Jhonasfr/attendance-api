
export default function handler(req, res) {
  const { fecha } = req.query;
  res.status(200).json([
    { id: '1', user_id: 'u1', activity_id: 'a1', fecha, asistio: true },
    { id: '2', user_id: 'u2', activity_id: 'a2', fecha, asistio: false }
  ]);
}
