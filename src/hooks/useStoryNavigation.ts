import { useCallback, useEffect, useState } from 'react';
import { interviewees } from '../data/interviewees';

function readLocation() {
  const params = new URL(window.location.href).searchParams;
  const galleryOpen = params.get('galeria') === 'cidade-do-idoso';
  const id = params.get('historia');
  const selectedId = !galleryOpen && interviewees.some((person) => person.id === id) ? id : null;
  return { selectedId, galleryOpen };
}

// Os parâmetros de consulta permitem compartilhar e recarregar histórias e a galeria.
// As âncoras (#narrativa, #retratos) continuam livres para navegação na página.
export function useStoryNavigation() {
  const [location, setLocation] = useState(readLocation);
  const { selectedId, galleryOpen } = location;

  useEffect(() => {
    const sync = () => {
      const next = readLocation();
      if (next.selectedId !== selectedId || next.galleryOpen !== galleryOpen) {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setLocation(next);
      }
    };
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, [selectedId, galleryOpen]);

  const navigateTo = useCallback((id: string | null, openGallery = false) => {
    if (id !== null && !interviewees.some((person) => person.id === id)) return;
    const url = new URL(window.location.href);
    if (id) url.searchParams.set('historia', id);
    else url.searchParams.delete('historia');
    if (openGallery) url.searchParams.set('galeria', 'cidade-do-idoso');
    else url.searchParams.delete('galeria');
    url.hash = '';
    if (window.location.href !== url.href) window.history.pushState(null, '', url);
    window.scrollTo({ top: 0, behavior: 'instant' });
    setLocation({ selectedId: id, galleryOpen: openGallery });
  }, []);

  const navigate = useCallback((id: string | null) => navigateTo(id), [navigateTo]);
  const openCityGallery = useCallback(() => navigateTo(null, true), [navigateTo]);
  const closeCityGallery = useCallback(() => navigateTo(null), [navigateTo]);
  return { selectedId, galleryOpen, navigate, openCityGallery, closeCityGallery };
}
