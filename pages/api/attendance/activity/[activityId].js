
export default function handler(req, res) {
  const { activityId } = req.query;
  res.status(200).json([
    { id: '1', user_id: 'u1', activity_id: activityId, fecha: '2024-05-01', asistio: true },
    { id: '2', user_id: 'u2', activity_id: activityId, fecha: '2024-05-02', asistio: true }
  ]);
}
