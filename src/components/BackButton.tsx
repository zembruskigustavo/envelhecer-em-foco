import { Arrow } from './Arrow';

export function BackButton({ onBack }: { onBack: () => void }) {
  return <button className="back-button" onClick={onBack}><Arrow back />Todos os retratos</button>;
}
