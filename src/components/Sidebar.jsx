import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside style={{ width: 220, padding: 20 }}>
      <h3>DompetKu</h3>
      <nav>
        <NavLink to="/">Dashboard</NavLink><br />
        <NavLink to="/transaksi">Transaksi</NavLink><br />
        <NavLink to="/laporan">Laporan</NavLink><br />
        <NavLink to="/pengaturan">Pengaturan</NavLink>
      </nav>
    </aside>
  );
}
