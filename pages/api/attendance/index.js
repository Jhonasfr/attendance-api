
export default function handler(req, res) {
  if (req.method === 'POST') {
    const asistencia = req.body;
    res.status(201).json({ mensaje: 'Asistencia registrada', data: asistencia });
  } else {
    res.status(405).json({ mensaje: 'Método no permitido' });
  }
}
