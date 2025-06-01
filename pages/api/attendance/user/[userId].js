
export default function handler(req, res) {
  const { userId } = req.query;
  res.status(200).json([
    { id: '1', user_id: userId, activity_id: 'a1', fecha: '2024-05-01', asistio: true },
    { id: '2', user_id: userId, activity_id: 'a2', fecha: '2024-05-03', asistio: false }
  ]);
}
