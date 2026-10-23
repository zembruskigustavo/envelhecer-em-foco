export function Arrow({ back = false }: { back?: boolean }) {
  return (
    <svg className={back ? 'arrow arrow--back' : 'arrow'} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
