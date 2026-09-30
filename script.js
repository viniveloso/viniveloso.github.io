const competencies = [
  ['C#', 'C#', 'backend'],
  ['.NET 8 / .NET Core', '.N', 'backend'],
  ['ASP.NET Core', 'API', 'backend'],
  ['APIs REST', '↔', 'backend'],
  ['Node.js', 'JS', 'backend'],
  ['Clean Architecture', '◎', 'architecture'],
  ['SOLID / Clean Code', '◇', 'architecture'],
  ['Strangler Fig Pattern', '↗', 'architecture'],
  ['Repository / DI', '↳', 'architecture'],
  ['xUnit / Moq', '✓', 'architecture'],
  ['PostgreSQL / JSONB', 'PG', 'cloud'],
  ['SQL Server', 'SQL', 'cloud'],
  ['Entity Framework / LINQ', 'EF', 'cloud'],
  ['AWS Lambda / S3 / SQS', 'AWS', 'cloud'],
  ['Docker', '□', 'cloud'],
  ['Azure DevOps', 'AZ', 'cloud'],
  ['Vue.js / React / Angular', 'UI', 'frontend'],
  ['TypeScript / JavaScript', 'TS', 'frontend'],
  ['HTML / CSS', '</>', 'frontend'],
  ['Git / GitHub', 'git', 'frontend'],
  ['Swagger / Postman', '{}', 'frontend'],
  ['Scrum / Code Review', '↻', 'frontend'],
];

const skills = document.querySelector('#skills');
const filterButtons = document.querySelectorAll('[data-filter]');
const themeButton = document.querySelector('#theme');
const themeColor = document.querySelector('meta[name="theme-color"]');

function renderSkills(filter) {
  const visibleSkills = competencies.filter(
    ([, , category]) => filter === 'all' || category === filter,
  );

  const cards = visibleSkills.map(([label, icon]) => {
    const card = document.createElement('div');
    card.className = 'skill';

    const symbol = document.createElement('span');
    symbol.className = 'skill-icon';
    symbol.textContent = icon;
    symbol.setAttribute('aria-hidden', 'true');

    const name = document.createElement('span');
    name.textContent = label;

    card.append(symbol, name);
    return card;
  });

  skills.replaceChildren(...cards);
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((other) => {
      const selected = other === button;
      other.classList.toggle('active', selected);
      other.setAttribute('aria-pressed', String(selected));
    });

    renderSkills(button.dataset.filter);
  });
});

function setTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.dataset.theme = theme;
  themeButton.setAttribute(
    'aria-label',
    isDark ? 'Ativar tema claro' : 'Ativar tema escuro',
  );
  themeColor.content = isDark ? '#111513' : '#f4f6ef';
}

try {
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    setTheme(savedTheme);
  }
} catch {
  // O tema continua funcionando quando o navegador bloqueia o armazenamento.
}

themeButton.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark'
    ? 'light'
    : 'dark';

  setTheme(nextTheme);

  try {
    localStorage.setItem('portfolio-theme', nextTheme);
  } catch {
    // Sem armazenamento, a escolha vale apenas para a página atual.
  }
});

renderSkills('all');
document.querySelector('#year').textContent = new Date().getFullYear();
