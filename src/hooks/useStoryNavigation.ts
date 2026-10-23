import { useCallback, useEffect, useState } from 'react';
import { interviewees } from '../data/interviewees';

function readStoryId(): string | null {
  const id = new URL(window.location.href).searchParams.get('historia');
  return interviewees.some((person) => person.id === id) ? id : null;
}

// O parâmetro de consulta permite compartilhar e recarregar uma história.
// As âncoras (#narrativa, #retratos) continuam livres para navegação na página.
export function useStoryNavigation() {
  const [selectedId, setSelectedId] = useState<string | null>(readStoryId);

  useEffect(() => {
    const sync = () => {
      const next = readStoryId();
      if (next !== selectedId) {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setSelectedId(next);
      }
    };
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, [selectedId]);

  const navigate = useCallback((id: string | null) => {
    if (id !== null && !interviewees.some((person) => person.id === id)) return;
    const url = new URL(window.location.href);
    if (id) url.searchParams.set('historia', id);
    else url.searchParams.delete('historia');
    url.hash = '';
    if (window.location.href !== url.href) window.history.pushState(null, '', url);
    window.scrollTo({ top: 0, behavior: 'instant' });
    setSelectedId(id);
  }, []);

  return { selectedId, navigate };
}
