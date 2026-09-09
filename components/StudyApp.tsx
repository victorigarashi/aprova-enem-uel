'use client';
import { useEffect, useMemo, useState } from 'react';
import { topics, studyPlan, subjects, type Topic } from '@/data/topics';
import {
  initialProgress,
  storageService,
  type ProgressState,
} from '@/services/storageService';
import {
  BarChart3,
  BookMarked,
  BookOpen,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  ClipboardCheck,
  Clock3,
  FilePenLine,
  Flame,
  GraduationCap,
  Home,
  Library,
  Menu,
  Moon,
  Play,
  RotateCcw,
  Search,
  Sparkles,
  Sun,
  Target,
  Trophy,
  X,
} from 'lucide-react';

declare global {
  interface Document {
    modelContext?: {
      registerTool: (
        tool: {
          name: string;
          title: string;
          description: string;
          inputSchema: object;
          annotations: object;
          execute: (input: unknown) => unknown;
        },
        options: { signal: AbortSignal },
      ) => void | Promise<void>;
    };
  }
}

type View =
  | 'dashboard'
  | 'plan'
  | 'calendar'
  | 'subjects'
  | 'revisions'
  | 'simulations'
  | 'writing'
  | 'performance'
  | 'profile';
const nav: [View, string, typeof Home][] = [
  ['dashboard', 'Início', Home],
  ['plan', 'Plano de estudos', BookMarked],
  ['calendar', 'Calendário', CalendarDays],
  ['subjects', 'Matérias', Library],
  ['revisions', 'Revisões', RotateCcw],
  ['simulations', 'Simulados', ClipboardCheck],
  ['writing', 'Redação', FilePenLine],
  ['performance', 'Desempenho', BarChart3],
  ['profile', 'Perfil', CircleUserRound],
];
const subjectColor: Record<string, string> = {
  Matemática: 'coral',
  Português: 'purple',
  Biologia: 'green',
  História: 'amber',
  Geografia: 'blue',
  Física: 'purple',
  Química: 'coral',
};

export default function StudyApp() {
  const [progress, setProgress] = useState<ProgressState>(initialProgress);
  const [ready, setReady] = useState(false);
  const [view, setView] = useState<View>('dashboard');
  const [selected, setSelected] = useState<Topic | null>(null);
  const [query, setQuery] = useState('');
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    setProgress(storageService.load());
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    storageService.save(progress);
    document.documentElement.classList.toggle(
      'dark',
      progress.theme === 'dark',
    );
  }, [progress, ready]);
  useEffect(() => {
    const context = document.modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    void Promise.resolve(
      context.registerTool(
        {
          name: 'complete_study_topic',
          title: 'Concluir conteúdo',
          description:
            'Marca um conteúdo existente da plataforma Aprova como concluído e atualiza o progresso visível.',
          inputSchema: {
            type: 'object',
            properties: {
              topicId: { type: 'string', enum: topics.map((t) => t.id) },
            },
            required: ['topicId'],
            additionalProperties: false,
          },
          annotations: { readOnlyHint: false, untrustedContentHint: false },
          execute(input) {
            const id = (input as { topicId?: string })?.topicId;
            if (!id || !topics.some((t) => t.id === id))
              throw new Error('Conteúdo inválido');
            const today = new Date().toISOString().slice(0, 10);
            setProgress((p) => ({
              ...p,
              completedTopics: Array.from(new Set([...p.completedTopics, id])),
              studiedDates: Array.from(new Set([...p.studiedDates, today])),
            }));
            return { topicId: id, status: 'completed' };
          },
        },
        { signal: lifecycle.signal },
      ),
    );
    return () => lifecycle.abort();
  }, []);
  const update = (patch: Partial<ProgressState>) =>
    setProgress((p) => ({ ...p, ...patch }));
  const go = (next: View) => {
    setView(next);
    setSelected(null);
    setMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const openTopic = (topic: Topic) => {
    setSelected(topic);
    setQuery('');
    setMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const results = useMemo(
    () =>
      query.trim()
        ? topics.filter((t) =>
            `${t.title} ${t.subject} ${t.concepts.join(' ')}`
              .toLowerCase()
              .includes(query.toLowerCase()),
          )
        : [],
    [query],
  );
  const done = progress.completedTopics.length;
  const quizzes = Object.values(progress.quizResults);
  const hits = quizzes.reduce((a, b) => a + b.score, 0);
  const total = quizzes.reduce((a, b) => a + b.total, 0);
  const average = total ? Math.round((hits / total) * 100) : 0;
  return (
    <main className="app-shell">
      <aside className={`sidebar ${menu ? 'open' : ''}`}>
        <div className="brand">
          <span className="brand-mark">
            <Sparkles size={18} />
          </span>
          <span>Aprova</span>
          <button className="menu-close" onClick={() => setMenu(false)}>
            <X />
          </button>
        </div>
        <nav>
          {nav.map(([id, label, Icon]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`nav-item ${!selected && view === id ? 'active' : ''}`}
            >
              <Icon size={18} />
              <span>{label}</span>
              {id === 'revisions' && done > 0 ? (
                <b>{Math.min(done * 3, 9)}</b>
              ) : null}
            </button>
          ))}
        </nav>
        <div className="focus-card">
          <Target size={21} />
          <strong>Foco UEL</strong>
          <span>
            Questões contextualizadas e uma trilha equilibrada para as duas
            provas.
          </span>
          <button onClick={() => go('subjects')}>Explorar conteúdos</button>
        </div>
        <div className="profile">
          <span className="avatar">
            {progress.profileName.slice(0, 2).toUpperCase()}
          </span>
          <span>
            <strong>{progress.profileName}</strong>
            <small>Rumo à aprovação</small>
          </span>
        </div>
      </aside>
      <section className="content">
        <header className="topbar">
          <button className="menu-toggle" onClick={() => setMenu(true)}>
            <Menu />
          </button>
          <div className="mobile-brand">Aprova</div>
          <div className="search-wrap">
            <label className="search">
              <Search size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Busque por função, citologia, revolução..."
              />
              {query && (
                <button onClick={() => setQuery('')}>
                  <X size={15} />
                </button>
              )}
            </label>
            {query && (
              <div className="search-results">
                {results.length ? (
                  results.map((t) => (
                    <button key={t.id} onClick={() => openTopic(t)}>
                      <span
                        className={`subject-dot ${subjectColor[t.subject]}`}
                      />
                      <span>
                        <strong>{t.title}</strong>
                        <small>
                          {t.subject} · {t.focus}
                        </small>
                      </span>
                      <ChevronRight size={16} />
                    </button>
                  ))
                ) : (
                  <p>Nenhum conteúdo encontrado.</p>
                )}
              </div>
            )}
          </div>
          <button
            className="icon-button"
            aria-label="Alternar tema"
            onClick={() =>
              update({ theme: progress.theme === 'light' ? 'dark' : 'light' })
            }
          >
            {progress.theme === 'light' ? (
              <Moon size={18} />
            ) : (
              <Sun size={18} />
            )}
          </button>
          <button className="streak">
            <Flame size={17} />
            {progress.studiedDates.length || 0} dias
          </button>
        </header>
        <div className="page">
          {selected ? (
            <TopicDetail
              topic={selected}
              progress={progress}
              setProgress={setProgress}
              back={() => setSelected(null)}
            />
          ) : (
            <ViewContent
              view={view}
              go={go}
              openTopic={openTopic}
              progress={progress}
              setProgress={setProgress}
              stats={{ done, quizzes: quizzes.length, average }}
            />
          )}
        </div>
      </section>
      {menu && (
        <button
          aria-label="Fechar menu"
          className="backdrop"
          onClick={() => setMenu(false)}
        />
      )}
    </main>
  );
}

function ViewContent({
  view,
  go,
  openTopic,
  progress,
  setProgress,
  stats,
}: {
  view: View;
  go: (v: View) => void;
  openTopic: (t: Topic) => void;
  progress: ProgressState;
  setProgress: (p: ProgressState) => void;
  stats: { done: number; quizzes: number; average: number };
}) {
  if (view === 'dashboard')
    return (
      <Dashboard
        go={go}
        openTopic={openTopic}
        progress={progress}
        stats={stats}
      />
    );
  if (view === 'subjects')
    return <Subjects openTopic={openTopic} progress={progress} />;
  if (view === 'plan')
    return <Plan openTopic={openTopic} progress={progress} />;
  if (view === 'calendar') return <Calendar progress={progress} />;
  if (view === 'revisions')
    return (
      <Revisions
        openTopic={openTopic}
        progress={progress}
        setProgress={setProgress}
      />
    );
  if (view === 'simulations')
    return <Simulations progress={progress} setProgress={setProgress} />;
  if (view === 'writing') return <Writing />;
  if (view === 'performance')
    return <Performance progress={progress} stats={stats} />;
  return (
    <Profile progress={progress} setProgress={setProgress} stats={stats} />
  );
}

function Dashboard({
  go,
  openTopic,
  progress,
  stats,
}: {
  go: (v: View) => void;
  openTopic: (t: Topic) => void;
  progress: ProgressState;
  stats: { done: number; quizzes: number; average: number };
}) {
  const today = topics.slice(0, 2),
    dayDone = today.filter((t) =>
      progress.completedTopics.includes(t.id),
    ).length,
    pct = Math.round((stats.done / topics.length) * 100);
  return (
    <>
      <div className="greeting">
        <div>
          <span className="eyebrow">SEU PRÓXIMO PASSO</span>
          <h1>
            Boa noite, diva {progress.profileName} <span>✦</span>
          </h1>
          <p>Você está construindo algo grande, um estudo de cada vez.</p>
        </div>
        <button
          className="primary"
          onClick={() =>
            openTopic(
              today.find((t) => !progress.completedTopics.includes(t.id)) ||
                today[0],
            )
          }
        >
          Continuar estudando <ChevronRight size={18} />
        </button>
      </div>
      <section className="hero-grid">
        <article className="today-card">
          <div className="section-heading">
            <div>
              <span className="eyebrow">SEU PLANO</span>
              <h2>Estudo de hoje</h2>
            </div>
            <span className="time-pill">1h15 prevista</span>
          </div>
          <div className="task-list">
            {today.map((t) => (
              <button className="task" key={t.id} onClick={() => openTopic(t)}>
                <span className={`subject-icon ${subjectColor[t.subject]}`}>
                  <BookOpen size={20} />
                </span>
                <span>
                  <small>{t.subject}</small>
                  <strong>{t.title}</strong>
                </span>
                <span className="task-time">
                  {progress.completedTopics.includes(t.id) ? (
                    <Check className="success" />
                  ) : (
                    <>
                      {t.duration} min
                      <ChevronRight size={17} />
                    </>
                  )}
                </span>
              </button>
            ))}
          </div>
          <div className="daily-progress">
            <div>
              <span>Progresso do dia</span>
              <strong>
                {dayDone} de {today.length}
              </strong>
            </div>
            <div className="progress-track">
              <span style={{ width: `${(dayDone / today.length) * 100}%` }} />
            </div>
          </div>
        </article>
        <article className="plan-card">
          <span className="eyebrow">PLANO DE 90 DIAS</span>
          <div
            className="ring"
            style={{
              background: `conic-gradient(var(--green) 0 ${pct}%,var(--ring-empty) ${pct}% 100%)`,
            }}
          >
            <span>
              <strong>{pct}%</strong>
              <small>concluído</small>
            </span>
          </div>
          <h3>{stats.done} conteúdos dominados</h3>
          <p>Seu plano se adapta ao seu ritmo.</p>
          <button onClick={() => go('plan')}>
            Ver plano completo <ChevronRight size={16} />
          </button>
        </article>
      </section>
      <section>
        <div className="section-heading">
          <div>
            <span className="eyebrow">VISÃO GERAL</span>
            <h2>Seu progresso</h2>
          </div>
          <button className="link" onClick={() => go('performance')}>
            Ver desempenho <ChevronRight size={16} />
          </button>
        </div>
        <div className="metrics">
          <Metric
            icon={BookOpen}
            color="coral"
            value={stats.done}
            label="conteúdos concluídos"
          />
          <Metric
            icon={Target}
            color="purple"
            value={stats.quizzes}
            label="quizzes realizados"
          />
          <Metric
            icon={Trophy}
            color="green"
            value={`${stats.average}%`}
            label="média de acertos"
          />
          <Metric
            icon={Flame}
            color="amber"
            value={`${progress.studiedDates.length} dias`}
            label="dias estudados"
          />
        </div>
      </section>
      <section className="dashboard-bottom">
        <article className="week-card">
          <div className="section-heading">
            <div>
              <span className="eyebrow">CONSTÂNCIA</span>
              <h2>Seu habit tracker</h2>
            </div>
            <span className="week-score">
              {Math.min(progress.studiedDates.length, 7)} de 7 dias
            </span>
          </div>
          <div className="week-days">
            {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((d, i) => (
              <div key={i}>
                <span
                  className={`day ${i < Math.min(progress.studiedDates.length, 7) ? 'done' : i === new Date().getDay() - 1 ? 'current' : ''}`}
                >
                  {i < progress.studiedDates.length ? (
                    <Check size={14} />
                  ) : (
                    i + 1
                  )}
                </span>
                <small>{d}</small>
              </div>
            ))}
          </div>
        </article>
        <article className="revision-card">
          <span className="metric-icon amber">
            <RotateCcw size={20} />
          </span>
          <div>
            <span className="eyebrow">REVISÃO INTELIGENTE</span>
            <h3>
              {progress.completedTopics.length
                ? `${Math.min(progress.completedTopics.length * 3, 9)} revisões sugeridas`
                : 'Conclua o primeiro conteúdo'}
            </h3>
            <p>Revisões programadas para 1, 7 e 30 dias.</p>
          </div>
          <button onClick={() => go('revisions')}>
            <ChevronRight />
          </button>
        </article>
      </section>
    </>
  );
}
function Metric({
  icon: Icon,
  color,
  value,
  label,
}: {
  icon: typeof Home;
  color: string;
  value: string | number;
  label: string;
}) {
  return (
    <article>
      <span className={`metric-icon ${color}`}>
        <Icon size={20} />
      </span>
      <span>
        <strong>{value}</strong>
        <small>{label}</small>
      </span>
    </article>
  );
}

function PageTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="page-title">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{text} Vamos nessa, diva.</p>
    </div>
  );
}

function Subjects({
  openTopic,
  progress,
}: {
  openTopic: (t: Topic) => void;
  progress: ProgressState;
}) {
  const [subject, setSubject] = useState('Todas');
  const [difficulty, setDifficulty] = useState('Todas');
  const [focus, setFocus] = useState('Todos');
  const filtered = topics.filter(
    (t) =>
      (subject === 'Todas' || t.subject === subject) &&
      (difficulty === 'Todas' || t.difficulty === difficulty) &&
      (focus === 'Todos' || t.focus.includes(focus)),
  );
  return (
    <>
      <PageTitle
        eyebrow="BIBLIOTECA"
        title="Matérias e conteúdos"
        text={`${topics.length} trilhas com explicações e quizzes para as duas provas.`}
      />
      <aside className="official-basis">
        <span><Sparkles size={18} /></span>
        <div>
          <strong>Seleção baseada nos programas oficiais</strong>
          <p>Matriz de Referência do ENEM e programa de disciplinas do Manual do Candidato da UEL.</p>
        </div>
        <div className="official-links">
          <a href="https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem" target="_blank" rel="noreferrer">Ver matriz ENEM</a>
          <a href="https://sites.uel.br/vestibular/categoria-edital/manual-do-candidato/" target="_blank" rel="noreferrer">Ver manual UEL</a>
        </div>
      </aside>
      <div className="filters">
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option>Todas</option>
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>Todas</option>
          <option>Fácil</option>
          <option>Médio</option>
          <option>Desafio</option>
        </select>
        <select value={focus} onChange={(e) => setFocus(e.target.value)}>
          <option>Todos</option>
          <option>ENEM</option>
          <option>UEL</option>
        </select>
      </div>
      <div className="topic-grid">
        {filtered.map((t) => (
          <TopicCard
            key={t.id}
            topic={t}
            done={progress.completedTopics.includes(t.id)}
            onClick={() => openTopic(t)}
          />
        ))}
      </div>
    </>
  );
}
function TopicCard({
  topic,
  done,
  onClick,
}: {
  topic: Topic;
  done: boolean;
  onClick: () => void;
}) {
  return (
    <button className="topic-card" onClick={onClick}>
      <div className="topic-top">
        <span className={`subject-icon ${subjectColor[topic.subject]}`}>
          <BookOpen />
        </span>
        {done && (
          <span className="done-badge">
            <Check size={13} /> Concluído
          </span>
        )}
      </div>
      <span className="eyebrow">{topic.subject}</span>
      <h3>{topic.title}</h3>
      <p>{topic.description}</p>
      <div className="topic-meta">
        <span>{topic.difficulty}</span>
        <span>{topic.duration} min</span>
        <span>{topic.focus}</span>
      </div>
      <strong className="card-link">
        Estudar agora <ChevronRight size={16} />
      </strong>
    </button>
  );
}

function Plan({
  openTopic,
  progress,
}: {
  openTopic: (t: Topic) => void;
  progress: ProgressState;
}) {
  const [page, setPage] = useState(0);
  const days = studyPlan.slice(page * 14, page * 14 + 14);
  return (
    <>
      <PageTitle
        eyebrow="CRONOGRAMA ADAPTÁVEL"
        title="Plano de 90 dias"
        text="Uma sequência equilibrada entre Linguagens, Matemática, Natureza e Humanas."
      />
      <div className="plan-toolbar">
        <button disabled={page === 0} onClick={() => setPage((p) => p - 1)}>
          <ChevronLeft /> Anteriores
        </button>
        <span>
          Dias {page * 14 + 1}–{Math.min(page * 14 + 14, 90)}
        </span>
        <button
          disabled={(page + 1) * 14 >= 90}
          onClick={() => setPage((p) => p + 1)}
        >
          Próximos <ChevronRight />
        </button>
      </div>
      <div className="plan-list">
        {days.map((d) => (
          <article key={d.day} className="plan-day">
            <div className="day-number">
              <span>{d.day}</span>
              <small>DIA</small>
            </div>
            <div>
              <span className="eyebrow">{d.kind}</span>
              <div className="day-topics">
                {d.topicIds.length ? (
                  d.topicIds.map((id) => {
                    const t = topics.find((x) => x.id === id)!;
                    return (
                      <button
                        key={id}
                        onClick={() => openTopic(t)}
                        className={
                          progress.completedTopics.includes(id)
                            ? 'completed'
                            : ''
                        }
                      >
                        {progress.completedTopics.includes(id) && (
                          <Check size={14} />
                        )}{' '}
                        {t.subject}: <strong>{t.title}</strong>
                      </button>
                    );
                  })
                ) : (
                  <span className="rest">
                    Respire, organize anotações e recarregue.
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function Calendar({ progress }: { progress: ProgressState }) {
  const now = new Date(),
    count = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate(),
    first = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  return (
    <>
      <PageTitle
        eyebrow="CONSTÂNCIA"
        title="Calendário de estudos"
        text="Verde para concluído, amarelo para parcial e contorno coral para hoje."
      />
      <article className="calendar-card">
        <div className="calendar-title">
          <h2>
            {now.toLocaleDateString('pt-BR', {
              month: 'long',
              year: 'numeric',
            })}
          </h2>
          <div className="legend">
            <span>
              <i className="done" />
              Concluído
            </span>
            <span>
              <i className="partial" />
              Parcial
            </span>
            <span>
              <i />
              Planejado
            </span>
          </div>
        </div>
        <div className="calendar-grid">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((d) => (
            <strong key={d}>{d}</strong>
          ))}
          {Array.from({ length: first }).map((_, i) => (
            <span key={`b${i}`} />
          ))}
          {Array.from({ length: count }, (_, i) => i + 1).map((d, i) => {
            const state =
              i < progress.studiedDates.length
                ? 'done'
                : i === progress.studiedDates.length &&
                    progress.completedTopics.length
                  ? 'partial'
                  : '';
            return (
              <span
                key={d}
                className={`calendar-day ${state} ${d === now.getDate() ? 'today' : ''}`}
              >
                {d}
                {state === 'done' && <Check size={12} />}
              </span>
            );
          })}
        </div>
      </article>
    </>
  );
}

function Revisions({
  openTopic,
  progress,
  setProgress,
}: {
  openTopic: (t: Topic) => void;
  progress: ProgressState;
  setProgress: (p: ProgressState) => void;
}) {
  const revisions = progress.completedTopics
    .flatMap((id) =>
      [1, 7, 30].map((days) => ({
        id: `${id}-${days}`,
        topic: topics.find((t) => t.id === id)!,
        days,
      })),
    )
    .filter((x) => x.topic);
  return (
    <>
      <PageTitle
        eyebrow="MEMÓRIA DE LONGO PRAZO"
        title="Revisões inteligentes"
        text="Reencontre cada conteúdo em 1, 7 e 30 dias para combater o esquecimento."
      />
      {revisions.length ? (
        <div className="revision-list">
          {revisions.map((r) => (
            <article
              key={r.id}
              className={
                progress.revisionDone.includes(r.id) ? 'revision-done' : ''
              }
            >
              <span className="review-date">D+{r.days}</span>
              <div>
                <span className="eyebrow">{r.topic.subject}</span>
                <h3>{r.topic.title}</h3>
                <p>
                  Releia o resumo e refaça as questões que exigiram mais
                  atenção.
                </p>
              </div>
              <button className="secondary" onClick={() => openTopic(r.topic)}>
                Revisar
              </button>
              <button
                className="check-button"
                onClick={() =>
                  setProgress({
                    ...progress,
                    revisionDone: progress.revisionDone.includes(r.id)
                      ? progress.revisionDone.filter((x) => x !== r.id)
                      : [...progress.revisionDone, r.id],
                  })
                }
              >
                <Check />
              </button>
            </article>
          ))}
        </div>
      ) : (
        <Empty
          icon={RotateCcw}
          title="Suas revisões aparecerão aqui"
          text="Conclua um conteúdo para criar automaticamente os ciclos D+1, D+7 e D+30."
        />
      )}
    </>
  );
}

function Simulations({
  progress,
  setProgress,
}: {
  progress: ProgressState;
  setProgress: (p: ProgressState) => void;
}) {
  const [mode, setMode] = useState<'select' | 'doing' | 'result'>('select');
  const [set, setSet] = useState(topics.slice(0, 5));
  const [answers, setAnswers] = useState<number[]>([]);
  const start = (kind: string) => {
    const pool =
      kind === 'natureza'
        ? topics.filter((t) => t.area === 'Ciências da Natureza')
        : kind === 'humanas'
          ? topics.filter((t) => t.area === 'Ciências Humanas')
          : topics;
    setSet(pool.slice(0, 5));
    setAnswers([]);
    setMode('doing');
  };
  const questions = set.map((t, i) => ({
    ...t.quiz[6],
    subject: t.subject,
    id: `${t.id}-${i}`,
  }));
  const score = questions.reduce(
    (n, q, i) => n + (answers[i] === q.answer ? 1 : 0),
    0,
  );
  const finish = () => {
    const sim = {
      id: crypto.randomUUID(),
      score,
      total: questions.length,
      date: new Date().toISOString(),
    };
    setProgress({ ...progress, simulations: [...progress.simulations, sim] });
    setMode('result');
  };
  return (
    <>
      <PageTitle
        eyebrow="TREINO DE PROVA"
        title="Simulados"
        text="Misture matérias, treine decisões sob pressão e descubra onde revisar."
      />
      {mode === 'select' && (
        <div className="simulation-options">
          {[
            ['natureza', 'Ciências da Natureza', 'Biologia, Física e Química'],
            ['humanas', 'Ciências Humanas', 'História e Geografia'],
            ['misto', 'Simulado misto', 'Todas as áreas'],
          ].map(([id, title, text]) => (
            <button key={id} onClick={() => start(id)}>
              <span className="metric-icon green">
                <ClipboardCheck />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
              <strong>
                Começar 5 questões <ChevronRight />
              </strong>
            </button>
          ))}
        </div>
      )}
      {mode === 'doing' && (
        <div className="quiz-sheet">
          <div className="quiz-header">
            <strong>
              {answers.filter((a) => a !== undefined).length} de{' '}
              {questions.length} respondidas
            </strong>
            <div className="progress-track">
              <span
                style={{
                  width: `${(answers.filter((a) => a !== undefined).length / questions.length) * 100}%`,
                }}
              />
            </div>
          </div>
          {questions.map((q, i) => (
            <QuestionBlock
              key={q.id}
              question={q}
              index={i}
              selected={answers[i]}
              disabled={false}
              choose={(v) =>
                setAnswers((a) => {
                  const n = [...a];
                  n[i] = v;
                  return n;
                })
              }
            />
          ))}
          <button
            className="primary wide"
            disabled={
              answers.filter((a) => a !== undefined).length < questions.length
            }
            onClick={finish}
          >
            Finalizar simulado
          </button>
        </div>
      )}
      {mode === 'result' && (
        <article className="result-card">
          <Trophy size={42} />
          <span className="eyebrow">RESULTADO</span>
          <h2>
            {score} de {questions.length}
          </h2>
          <strong>
            {Math.round((score / questions.length) * 100)}% de acertos
          </strong>
          <p>Use o resultado para escolher suas próximas revisões.</p>
          <button className="primary" onClick={() => setMode('select')}>
            Fazer outro
          </button>
        </article>
      )}
      {progress.simulations.length > 0 && mode === 'select' && (
        <p className="history-note">
          Você já concluiu {progress.simulations.length} simulado(s).
        </p>
      )}
    </>
  );
}

function Writing() {
  const themes = [
    'Desafios para garantir a inclusão digital de idosos no Brasil',
    'Caminhos para reduzir o desperdício de alimentos',
    'A valorização da ciência na sociedade brasileira',
  ];
  return (
    <>
      <PageTitle
        eyebrow="REDAÇÃO ENEM"
        title="Escreva com intenção"
        text="Do projeto de texto à proposta de intervenção: domine cada etapa."
      />
      <div className="writing-grid">
        <article className="essay-structure">
          <h2>A estrutura em 4 movimentos</h2>
          {[
            [
              '01',
              'Introdução',
              'Contextualize o tema e apresente uma tese clara.',
            ],
            [
              '02',
              'Desenvolvimento 1',
              'Defenda o primeiro argumento com repertório produtivo.',
            ],
            [
              '03',
              'Desenvolvimento 2',
              'Amplie a análise com causa, consequência ou contraponto.',
            ],
            [
              '04',
              'Conclusão',
              'Proponha agente, ação, meio, finalidade e detalhamento.',
            ],
          ].map((x) => (
            <div key={x[0]}>
              <span>{x[0]}</span>
              <div>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </div>
            </div>
          ))}
        </article>
        <article className="competencies">
          <h2>5 competências</h2>
          {[
            'Norma-padrão',
            'Compreensão do tema',
            'Argumentação',
            'Coesão textual',
            'Proposta de intervenção',
          ].map((c, i) => (
            <div key={c}>
              <span>C{i + 1}</span>
              <strong>{c}</strong>
              <small>até 200 pontos</small>
            </div>
          ))}
          <aside>
            <strong>Conectivos úteis</strong>
            <p>
              Além disso · Nesse sentido · Por conseguinte · Sob essa
              perspectiva · Portanto
            </p>
          </aside>
        </article>
      </div>
      <section className="themes">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PRATIQUE AGORA</span>
            <h2>Temas propostos</h2>
          </div>
        </div>
        <div className="topic-grid">
          {themes.map((t, i) => (
            <article className="theme-card" key={t}>
              <span>TEMA {String(i + 1).padStart(2, '0')}</span>
              <h3>{t}</h3>
              <p>
                Construa uma proposta de intervenção que respeite os direitos
                humanos.
              </p>
              <button onClick={() => navigator.clipboard?.writeText(t)}>
                Copiar tema
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Performance({
  progress,
  stats,
}: {
  progress: ProgressState;
  stats: { done: number; quizzes: number; average: number };
}) {
  const rows = topics.reduce<
    Record<string, { done: number; score: number; total: number }>
  >((acc, t) => {
    acc[t.subject] ??= { done: 0, score: 0, total: 0 };
    if (progress.completedTopics.includes(t.id)) acc[t.subject].done++;
    const r = progress.quizResults[t.id];
    if (r) {
      acc[t.subject].score += r.score;
      acc[t.subject].total += r.total;
    }
    return acc;
  }, {});
  return (
    <>
      <PageTitle
        eyebrow="ANÁLISE DE APRENDIZAGEM"
        title="Seu desempenho"
        text="Resultados reais dos seus quizzes e conteúdos concluídos."
      />
      <div className="metrics performance-metrics">
        <Metric
          icon={BookOpen}
          color="coral"
          value={stats.done}
          label="conteúdos"
        />
        <Metric
          icon={Target}
          color="purple"
          value={stats.quizzes}
          label="quizzes"
        />
        <Metric
          icon={Trophy}
          color="green"
          value={`${stats.average}%`}
          label="acertos"
        />
        <Metric
          icon={ClipboardCheck}
          color="amber"
          value={progress.simulations.length}
          label="simulados"
        />
      </div>
      <article className="performance-card">
        <h2>Desempenho por matéria</h2>
        {Object.entries(rows).map(([subject, r]) => {
          const pct = r.total ? Math.round((r.score / r.total) * 100) : 0;
          return (
            <div className="subject-row" key={subject}>
              <span>{subject}</span>
              <div className="progress-track">
                <span style={{ width: `${pct}%` }} />
              </div>
              <strong>{r.total ? `${pct}%` : '—'}</strong>
            </div>
          );
        })}
      </article>
      <div className="achievement-grid">
        {[
          [3, 'Primeiros passos', 'Conclua 3 conteúdos'],
          [7, 'Semana consistente', 'Estude por 7 dias'],
          [15, 'Ritmo de aprovação', 'Conclua 15 conteúdos'],
          [30, 'Constância rara', 'Estude por 30 dias'],
        ].map(([n, title, text]) => (
          <article
            className={stats.done >= Number(n) ? 'unlocked' : ''}
            key={title}
          >
            <Trophy />
            <strong>{title}</strong>
            <small>{text}</small>
          </article>
        ))}
      </div>
    </>
  );
}

function Profile({
  progress,
  setProgress,
  stats,
}: {
  progress: ProgressState;
  setProgress: (p: ProgressState) => void;
  stats: { done: number; quizzes: number; average: number };
}) {
  const [name, setName] = useState(progress.profileName);
  return (
    <>
      <PageTitle
        eyebrow="SEU ESPAÇO"
        title="Perfil e progresso"
        text="Personalize sua experiência e acompanhe as marcas da jornada."
      />
      <div className="profile-grid">
        <article className="profile-main">
          <span className="big-avatar">{name.slice(0, 2).toUpperCase()}</span>
          <label>
            Como a diva quer ser chamada?
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <button
            className="primary"
            onClick={() =>
              setProgress({ ...progress, profileName: name || 'Daniela' })
            }
          >
            Salvar perfil
          </button>
        </article>
        <article className="profile-stats">
          <Metric
            icon={BookOpen}
            color="coral"
            value={stats.done}
            label="conteúdos concluídos"
          />
          <Metric
            icon={Trophy}
            color="green"
            value={`${stats.average}%`}
            label="média geral"
          />
          <Metric
            icon={Flame}
            color="amber"
            value={progress.studiedDates.length}
            label="dias estudados"
          />
        </article>
      </div>
      <button
        className="danger-link"
        onClick={() => {
          if (confirm('Apagar todo o progresso salvo neste dispositivo?')) {
            storageService.clear();
            location.reload();
          }
        }}
      >
        Recomeçar e apagar meu progresso
      </button>
    </>
  );
}

function TopicDetail({
  topic,
  progress,
  setProgress,
  back,
}: {
  topic: Topic;
  progress: ProgressState;
  setProgress: (p: ProgressState) => void;
  back: () => void;
}) {
  const [answers, setAnswers] = useState<number[]>(
    progress.quizResults[topic.id]?.answers || [],
  );
  const [submitted, setSubmitted] = useState(
    Boolean(progress.quizResults[topic.id]),
  );
  const completed = progress.completedTopics.includes(topic.id);
  const submit = () => {
    const score = topic.quiz.reduce(
      (n, q, i) => n + (answers[i] === q.answer ? 1 : 0),
      0,
    );
    setProgress({
      ...progress,
      quizResults: {
        ...progress.quizResults,
        [topic.id]: { score, total: 7, answers },
      },
    });
    setSubmitted(true);
  };
  const toggleDone = () => {
    const list = completed
      ? progress.completedTopics.filter((x) => x !== topic.id)
      : [...progress.completedTopics, topic.id];
    const today = new Date().toISOString().slice(0, 10);
    setProgress({
      ...progress,
      completedTopics: list,
      studiedDates: completed
        ? progress.studiedDates
        : Array.from(new Set([...progress.studiedDates, today])),
    });
  };
  const score = topic.quiz.reduce(
    (n, q, i) => n + (answers[i] === q.answer ? 1 : 0),
    0,
  );
  return (
    <article className="lesson">
      <button className="back-link" onClick={back}>
        <ChevronLeft /> Voltar aos conteúdos
      </button>
      <header className="lesson-header">
        <div>
          <div className="lesson-tags">
            <span>{topic.subject}</span>
            <span>{topic.difficulty}</span>
            <span>{topic.focus}</span>
          </div>
          <h1>{topic.title}</h1>
          <p>{topic.description}</p>
          <small>
            <Clock3 size={15} />
            {topic.duration} minutos · explicação, vídeo e quiz
          </small>
        </div>
        <span className={`lesson-icon ${subjectColor[topic.subject]}`}>
          <GraduationCap />
        </span>
      </header>
      <div className="lesson-layout">
        <div className="lesson-main">
          <section className="prose">
            <h2>Comece pelo essencial</h2>
            {topic.explanation.map((p, i) => (
              <p key={i}>
                {i === 0
                  ? `Diva, ${p.charAt(0).toLowerCase()}${p.slice(1)}`
                  : p}
              </p>
            ))}
            <aside className="summary">
              <strong>Resumo de bolso</strong>
              <p>{topic.summary}</p>
            </aside>
            <h2>Principais conceitos</h2>
            <div className="concepts">
              {topic.concepts.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
            {topic.formulas.length > 0 && (
              <>
                <h2>Fórmulas-chave</h2>
                <div className="formulas">
                  {topic.formulas.map((f) => (
                    <code key={f}>{f}</code>
                  ))}
                </div>
              </>
            )}
            <h2>Exemplo resolvido</h2>
            <div className="example">
              <span>PASSO A PASSO</span>
              <p>{topic.example}</p>
            </div>
            <div className="exam-tips">
              <aside>
                <strong>Dica ENEM</strong>
                <p>{topic.enemTip}</p>
              </aside>
              <aside>
                <strong>Dica UEL</strong>
                <p>{topic.uelTip}</p>
              </aside>
            </div>
            <h2>Erros comuns</h2>
            <ul>
              {topic.commonMistakes.map((m) => (
                <li key={m}>
                  <X size={14} />
                  {m}
                </li>
              ))}
            </ul>
          </section>
          <section className="video-section">
            <div>
              <span className="eyebrow">VIDEOAULA</span>
              <h2>Veja outra explicação</h2>
            </div>
            <div className="video-wrap">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${topic.videoId}`}
                title={`Videoaula: ${topic.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
          <section className="quiz-section">
            <span className="eyebrow">TESTE SEU DOMÍNIO</span>
            <h2>Quiz · 7 questões</h2>
            <p>4 fáceis, 2 médias e um desafio final no estilo ENEM/UEL.</p>
            {topic.quiz.map((q, i) => (
              <QuestionBlock
                key={i}
                question={q}
                index={i}
                selected={answers[i]}
                disabled={submitted}
                choose={(v) =>
                  setAnswers((a) => {
                    const n = [...a];
                    n[i] = v;
                    return n;
                  })
                }
                submitted={submitted}
              />
            ))}
            {!submitted ? (
              <button
                className="primary wide"
                disabled={answers.filter((a) => a !== undefined).length < 7}
                onClick={submit}
              >
                Corrigir respostas
              </button>
            ) : (
              <div className="quiz-result">
                <Trophy />
                <div>
                  <span>Seu resultado</span>
                  <strong>
                    {score}/7 · {Math.round((score / 7) * 100)}%
                  </strong>
                  <p>
                    {score >= 6
                      ? 'Arrasou, diva! Excelente domínio. Continue com a revisão espaçada.'
                      : score >= 4
                        ? 'Bom caminho, diva. Revise as explicações das questões que errou.'
                        : 'Diva, releia o resumo e tente novamente amanhã.'}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setAnswers([]);
                    setSubmitted(false);
                  }}
                >
                  Tentar novamente
                </button>
              </div>
            )}
          </section>
        </div>
        <aside className="lesson-side">
          <div>
            <span className="eyebrow">PROGRESSO</span>
            <strong>{completed ? 'Conteúdo concluído' : 'Em andamento'}</strong>
            <div className="progress-track">
              <span
                style={{
                  width: completed ? '100%' : submitted ? '75%' : '35%',
                }}
              />
            </div>
            <button
              className={completed ? 'secondary' : 'primary'}
              onClick={toggleDone}
            >
              {completed ? (
                <>
                  <Check />
                  Concluído
                </>
              ) : (
                <>Marcar como concluído</>
              )}
            </button>
          </div>
          <nav>
            <strong>Nesta aula</strong>
            {['Explicação', 'Conceitos', 'Exemplo', 'Videoaula', 'Quiz'].map(
              (x) => (
                <span key={x}>{x}</span>
              ),
            )}
          </nav>
        </aside>
      </div>
    </article>
  );
}

function QuestionBlock({
  question,
  index,
  selected,
  choose,
  disabled,
  submitted = false,
}: {
  question: Topic['quiz'][number];
  index: number;
  selected: number | undefined;
  choose: (n: number) => void;
  disabled: boolean;
  submitted?: boolean;
}) {
  return (
    <article
      className={`question ${submitted ? (selected === question.answer ? 'correct' : 'wrong') : ''}`}
    >
      <div className="question-head">
        <span>QUESTÃO {String(index + 1).padStart(2, '0')}</span>
        <b className={index === 6 ? 'challenge' : ''}>{question.level}</b>
      </div>
      <p>{question.prompt}</p>
      <div className="options">
        {question.options.map((o, i) => (
          <button
            disabled={disabled}
            onClick={() => choose(i)}
            className={`${selected === i ? 'selected' : ''} ${submitted && i === question.answer ? 'answer' : ''}`}
            key={o}
          >
            <span>{String.fromCharCode(65 + i)}</span>
            {o}
            {submitted && i === question.answer && <Check size={17} />}
          </button>
        ))}
      </div>
      {submitted && (
        <div className="explanation">
          <strong>
            {selected === question.answer
              ? 'Você acertou!'
              : 'Resposta correta: ' +
                String.fromCharCode(65 + question.answer)}
          </strong>
          <p>{question.explanation}</p>
        </div>
      )}
    </article>
  );
}
function Empty({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Home;
  title: string;
  text: string;
}) {
  return (
    <div className="empty">
      <Icon />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
