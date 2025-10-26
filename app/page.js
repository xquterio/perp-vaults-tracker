import fs from 'fs';
import path from 'path';

export default function VaultPage() {
  // Чтение данных из JSON (работает при сборке)
  const dataPath = path.join(process.cwd(), 'data', 'vaults.json');
  const jsonData = fs.readFileSync(dataPath, 'utf8');
  const vaults = JSON.parse(jsonData);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Perpetual Vaults Tracker</h1>
      <p>Обновляется вручную каждые 30 дней ($100) + ежедневный PnL</p>
      <table border="1" cellPadding="8" style={{ marginTop: '1rem', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Vault</th>
            <th>Date</th>
            <th>Deposit ($)</th>
            <th>Total Value ($)</th>
            <th>PnL ($)</th>
            <th>APY</th>
          </tr>
        </thead>
        <tbody>
          {vaults.map((v, i) => (
            <tr key={i}>
              <td>{v.vault}</td>
              <td>{v.date}</td>
              <td>{v.deposit}</td>
              <td>{v.totalValue.toFixed(2)}</td>
              <td>{v.pnl.toFixed(2)}</td>
              <td>{v.apy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
