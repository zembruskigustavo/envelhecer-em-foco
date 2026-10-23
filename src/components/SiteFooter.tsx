import { project } from '../data/project';
import { Arrow } from './Arrow';

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Créditos e contatos do projeto">
      <div className="site-footer__inner">
        <div className="site-footer__project">
          <p className="eyebrow">Histórias que permanecem</p>
          <p className="site-footer__title">Envelhecer <span>em foco</span></p>
          <p className="site-footer__academic">{project.academicCredit}</p>
        </div>
        <div className="site-footer__person">
          <p className="eyebrow">Responsável pelo projeto</p>
          <h2>{project.responsible.name}</h2>
          <address>
            <a href={project.responsible.phoneHref}>{project.responsible.phone}</a>
            <a href={project.responsible.linkedin} target="_blank" rel="noreferrer" aria-label="Perfil de Emily Gilioli no LinkedIn">LinkedIn<Arrow /></a>
          </address>
        </div>
        <div className="site-footer__person">
          <p className="eyebrow">Desenvolvimento do website</p>
          <h2>{project.developer.name}</h2>
          <address>
            <a href={project.developer.phoneHref}>{project.developer.phone}</a>
            <div className="site-footer__profiles">
              <a href={project.developer.linkedin} target="_blank" rel="noreferrer" aria-label="Perfil de Gustavo Zembruski no LinkedIn">LinkedIn<Arrow /></a>
              <a href={project.developer.github} target="_blank" rel="noreferrer" aria-label="Perfil de Gustavo Zembruski no GitHub">GitHub<Arrow /></a>
            </div>
          </address>
        </div>
        {/*        <div className="site-footer__bottom"><span>{project.title} · Chapecó, SC</span><a href="#retratos">Voltar ao topo<span aria-hidden="true">↑</span></a></div>*/} 
      </div>
    </footer>
  );
}
